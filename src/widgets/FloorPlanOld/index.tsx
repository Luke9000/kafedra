import React, { useState } from "react";

const offices = [
  { id: "452", x: 0.5, y: 0.5, width: 141, height: 62, number: "452" },
  { id: "453", x: 209.5, y: 0.5, width: 85, height: 62, number: "453" },
  { id: "459", x: 209.5, y: 235.5, width: 85, height: 62, number: "459" },
  { id: "462", x: 409.5, y: 135.5, width: 85, height: 62, number: "462" },
];

const FloorPlan: React.FC = () => {
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);

  return (
    <>
      <svg width="1295" height="631" viewBox="0 0 1305 731" fill="none">
        {offices.map(({ id, x, y, width, height, number }) => (
          <g
            key={id}
            onMouseEnter={() => setHoveredOffice(id)}
            onMouseLeave={() => setHoveredOffice(null)}
            onClick={() => setSelectedOffice(id)}
            style={{ cursor: "pointer" }}
          >
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              rx="1.5"
              stroke="#201541"
              fill={hoveredOffice === id ? "#A694FF" : "#ffffff"}
            />
            <text
              x={x + 10}
              y={y + height / 1.5}
              fill="#201541"
              fontFamily="Onest"
              fontSize="36"
              fontWeight="200"
              letterSpacing="0em"
              pointerEvents="none"
            >
              {number}
            </text>
          </g>
        ))}
      </svg>

      {selectedOffice && (
        <Modal officeNumber={selectedOffice} onClose={() => setSelectedOffice(null)} />
      )}
    </>
  );
};

const Modal: React.FC<{ officeNumber: string; onClose: () => void }> = ({
  officeNumber,
  onClose,
}) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    onClick={onClose}
  >
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        position: "relative",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <h2>Аудитория {officeNumber}</h2>
      <p>Описание аудитории</p>
    </div>
  </div>
);

export default FloorPlan;
