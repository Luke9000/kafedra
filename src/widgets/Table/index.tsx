import React, { useState, useRef } from 'react';
import styles from './Table.module.css';

const baseElements = [
  'AR/VR',
  'Геймдев',
  'Фото и видео',
  'UX/UI дизайн',
  'Анимация',
  'Брендинг',
  'Цифровая мода',
  'Бизнес процессы',
  'Нейросети',
  'Backend',
  '3D',
  'Frontend',
  'Контент',
  'Верстка книги',
  'Анализ данных',
];

const newElements = [
  'Трехмерное моделирование',
  'Мультимедиа',
  'Геймдев Брендинг и фирменный стиль',
  'UX/UI дизайн Разработка сайтов',
  'Контент цифровых ресурсов',
  'Искусственный интеллект',
  'Виртуальная и дополненная реальности',
  'Цифровизация бизнес процессов',
  'Цифровая мода',
  'Выставочные пространства',
];

const COLUMN_COUNT = 5; // Количество колонок
const ROW_COUNT = 3; // Количество строк

const splitIntoChunks = (array: string[], chunkSize: number) => {
  const chunks: string[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const SwitchableTable: React.FC = () => {
  const [activeTable, setActiveTable] = useState<'base' | 'new'>('base');
  const containerRef = useRef<HTMLDivElement>(null); // Референс на контейнер с таблицей
  const data = activeTable === 'base' ? baseElements : newElements;

  const visibleData = splitIntoChunks(data, COLUMN_COUNT).slice(0, ROW_COUNT);
  // setActiveTable('base') //trash
  // Логика перетаскивания для горизонтальной прокрутки
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    container.style.scrollBehavior = 'auto'; // Отключаем плавную прокрутку
    const startX = e.pageX - container.offsetLeft; // Точка нажатия мыши
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - container.offsetLeft; // Текущее положение мыши
      const walk = x - startX; // Смещение от начальной точки
      container.scrollLeft = scrollLeft - walk; // Прокручиваем контейнер
    };

    const handleMouseUp = () => {
      container.style.scrollBehavior = 'smooth'; // Включаем плавную прокрутку
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseDown={handleMouseDown}
    >
      <div className={styles.table}>
        {visibleData.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className={styles.row}>
            {row.map((item, columnIndex) => (
              <div key={`cell-${rowIndex}-${columnIndex}`} className={styles.cell}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwitchableTable;
