// import { useRef, useState, useCallback } from "react";
// import "./Slider.css";

// const Slider = ({  }) => {
//   const trackRef = useRef(null);
//   const [startX, setStartX] = useState(null);
//   const [offset, setOffset] = useState(-25);

//   const handleMove = useCallback((delta) => {
//     setOffset((prev) => Math.max(Math.min(prev + delta, -5), -95));
//   }, []);

//   const handlePointerDown = (x) => setStartX(x);
//   const handlePointerMove = (x) => startX && handleMove((x - startX) / 10);
//   const handlePointerUp = () => setStartX(null);

//   return (
//     <div
//       className="slider"
//       onMouseDown={(e) => handlePointerDown(e.clientX)}
//       onMouseMove={(e) => handlePointerMove(e.clientX)}
//       onMouseUp={handlePointerUp}
//       onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
//       onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
//       onTouchEnd={handlePointerUp}
//     >
//       <div ref={trackRef} className="image-track" style={{ transform: `translate(${offset}%, -50%)` }}>
//         {images.map((img, i) => (
//           <img key={i} className="image" src={img.src} alt={img.description} draggable="false"
//                style={{ objectPosition: `${100 + offset}% center` }} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
