import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import { isMobile } from "react-device-detect";

interface ImageData {
  src: string; // Путь к изображению
  description?: string; // Описание изображения (необязательно)
}

interface SliderProps {
  images: ImageData[]; // Массив объектов с данными об изображениях
}

const MAX_DELTA_PERCENTAGE = isMobile ? 180 : 120;

const Slider: React.FC<SliderProps> = ({ images }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [mouseDownAt, setMouseDownAt] = useState<number>(0);
  const [prevPercentage, setPrevPercentage] = useState<number>(0);
  const [currentPercentage, setCurrentPercentage] = useState<number>(0);

  useEffect(() => {
    if (trackRef.current) {
      const initialPercentage = -25;
      setCurrentPercentage(initialPercentage);
      setPrevPercentage(initialPercentage);
      trackRef.current.style.transform = `translate(${initialPercentage}%, -50%)`;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setMouseDownAt(clientX);
  };

  const handleMouseUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(currentPercentage);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!mouseDownAt) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const mouseDelta = mouseDownAt - clientX;
    const maxDelta = (window.innerWidth * MAX_DELTA_PERCENTAGE) / 100;
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(
      Math.min(prevPercentage + percentage, isMobile ? -5 : -25),
      isMobile ? -95 : -75
    );

    updateSlider(nextPercentage);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY || e.deltaX; // Используем вертикальную или горизонтальную прокрутку
    const maxDelta = MAX_DELTA_PERCENTAGE / 10;
    const percentage = (delta / maxDelta) * -5;
    const nextPercentage = Math.max(
      Math.min(currentPercentage + percentage, isMobile ? -5 : -25),
      isMobile ? -95 : -75
    );

    updateSlider(nextPercentage);
  };

  const updateSlider = (nextPercentage: number) => {
    setCurrentPercentage(nextPercentage);
    setPrevPercentage(nextPercentage);

    if (trackRef.current) {
      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
      Array.from(trackRef.current.getElementsByClassName("image")).forEach((image) => {
        (image as HTMLElement).style.objectPosition = `${100 + nextPercentage}% center`;
      });
    }
  };

  return (
    <div
      className="slider"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onWheel={handleWheel} // Добавили обработчик события прокрутки
    >
      <div ref={trackRef} className="image-track">
        {images.map((image, index) => (
          <div className="imageContainer" key={index}>
            <img
              className="image"
              src={image.src}
              alt={image.description}
              draggable="false"
            />
            <p className="imageText">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
