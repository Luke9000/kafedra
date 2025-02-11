import { useState, useEffect, useRef } from 'react';

interface UseScrollNavigationProps {
  sections: string[];
}

export const useScrollNavigation = ({ sections }: UseScrollNavigationProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll('section');
    const targetSection = sections[index];

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Скроллим к верхней части секции
      });
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (!containerRef.current) return;

    // Если прокручиваем по вертикали
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault(); // предотвращаем стандартное поведение прокрутки
      const delta = Math.sign(event.deltaY);
      const nextSection = Math.min(
        Math.max(activeSection + delta, 0),
        sections.length - 1
      );

      if (nextSection !== activeSection) {
        setActiveSection(nextSection);
        scrollToSection(nextSection);
      }
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollPosition = containerRef.current.scrollTop;
    const sectionHeight = window.innerHeight;
    const index = Math.round(scrollPosition / sectionHeight);

    if (index !== activeSection) {
      setActiveSection(index);
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    if (!containerRef.current) return;

    // Получаем начальную позицию прокрутки
    const touchStart = event.touches[0].clientY;
    const touchStartX = event.touches[0].clientX;

    // Добавляем обработчик для touchmove
    const handleTouchMove = (e: TouchEvent) => {
      const touchEnd = e.touches[0].clientY;
      const touchEndX = e.touches[0].clientX;

      // Рассчитываем изменения по осям Y и X
      const deltaY = touchStart - touchEnd;
      const deltaX = touchStartX - touchEndX;

      // Если движение по оси X больше, игнорируем это событие
      if (Math.abs(deltaX) > Math.abs(deltaY)) return;

      // Проверяем, прокручиваем ли мы вертикально
      if (Math.abs(deltaY) > 30) {
        if (deltaY > 0) {
          // Прокручиваем вниз
          const nextSection = Math.min(activeSection + 1, sections.length - 1);
          if (nextSection !== activeSection) {
            setActiveSection(nextSection);
            scrollToSection(nextSection);
          }
        } else {
          // Прокручиваем вверх
          const prevSection = Math.max(activeSection - 1, 0);
          if (prevSection !== activeSection) {
            setActiveSection(prevSection);
            scrollToSection(prevSection);
          }
        }
      }
    };

    // Слушаем событие "touchmove"
    containerRef.current.addEventListener('touchmove', handleTouchMove);

    // Убираем обработчик после завершения касания
    const handleTouchEnd = () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('touchmove', handleTouchMove);
      }
    };

    containerRef.current.addEventListener('touchend', handleTouchEnd);
  };

  const handleNavigate = (index: number) => {
    setActiveSection(index);
    scrollToSection(index);
  };

  useEffect(() => {
    const container = containerRef.current;

    container?.addEventListener('scroll', handleScroll);
    container?.addEventListener('wheel', handleWheel, { passive: false });
    container?.addEventListener('touchstart', handleTouchStart);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
      container?.removeEventListener('wheel', handleWheel);
      container?.removeEventListener('touchstart', handleTouchStart);
    };
  }, [activeSection]);

  return { containerRef, activeSection, scrollToSection, handleNavigate };
};
