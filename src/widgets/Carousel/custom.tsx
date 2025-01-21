import { FC, ReactNode, useState, useRef } from "react";

interface ImageSliderProps {
  slides: ReactNode[];
}

const sliderStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const slidesContainerStyles: React.CSSProperties = {
  display: "flex",
  overflow: "hidden",
  width: "100%",
  height: "300px", // Фиксированная высота слайдера
  justifyContent: "center",
};

const slideWrapperStyles: React.CSSProperties = {
  display: "flex",
  transition: "transform 0.5s ease-in-out",
  width: "100%",
};

const dotsContainerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

const dotStyle: React.CSSProperties = {
  margin: "0 5px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider: FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dragStart, setDragStart] = useState<number | null>(null); // Начальная позиция перетаскивания
  const sliderRef = useRef<HTMLDivElement>(null);

  // Переход на определённый слайд
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Начало перетаскивания
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const startPosition = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(startPosition);
  };

  // Перетаскивание
  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragStart || !sliderRef.current) return;

    const currentPosition = "touches" in e ? e.touches[0].clientX : e.clientX;
    const dragDistance = currentPosition - dragStart;

    // Порог для переключения слайда
    const threshold = sliderRef.current.offsetWidth / 3;

    if (dragDistance > threshold && currentIndex > 0) {
      goToSlide(currentIndex - 1); // Переключение на предыдущий слайд
      setDragStart(null); // Сброс состояния
    } else if (dragDistance < -threshold && currentIndex < slides.length - 1) {
      goToSlide(currentIndex + 1); // Переключение на следующий слайд
      setDragStart(null); // Сброс состояния
    }
  };

  // Завершение перетаскивания
  const handleMouseUp = () => {
    setDragStart(null); // Сброс начальной позиции
  };

  return (
    <div style={sliderStyles}>
      <div
        style={slidesContainerStyles}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          style={{
            ...slideWrapperStyles,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((_, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {slideIndex === currentIndex ? "●" : "○"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
