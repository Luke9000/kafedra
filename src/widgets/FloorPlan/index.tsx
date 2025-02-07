import React, { useState } from 'react';

const FloorPlan: React.FC = () => {
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);

  return (
    <svg width="600" height="400" viewBox="0 0 600 400">
      {/* Пример кабинета 1 */}
      <rect
        x="50"
        y="50"
        width="200"
        height="100"
        fill={hoveredOffice === 'office1' ? '#555' : '#ccc'}
        stroke="black"
        onMouseEnter={() => setHoveredOffice('office1')}
        onMouseLeave={() => setHoveredOffice(null)}
      />
      {/* Пример кабинета 2 */}
      <rect
        x="300"
        y="50"
        width="200"
        height="100"
        fill={hoveredOffice === 'office2' ? '#555' : '#ccc'}
        stroke="black"
        onMouseEnter={() => setHoveredOffice('office2')}
        onMouseLeave={() => setHoveredOffice(null)}
      />
      {/* Добавь другие элементы (коридор, кабинеты) по аналогии */}
    </svg>
  );
};

export default FloorPlan;
