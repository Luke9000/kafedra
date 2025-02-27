import { useState } from "react";
import "./Table.css";
import { createPortal } from "react-dom";
import Modal from "../Modal";
import tableData from '../../entities/tableData'

const baseElements = [
  "AR/VR",
  "Геймдев",
  "Фото и видео",
  "UX/UI дизайн",
  "Анимация",
  "Брендинг",
  "Цифровая мода",
  "Бизнес процессы",
  "Нейросети",
  "Backend",
  "3D",
  "Frontend",
  "Контент",
  "Верстка книги",
  "Анализ данных",
];

const newElements = [
  "Трехмерное моделирование",
  "Мультимедиа",
  "Геймдев",
  "Контент цифровых ресурсов",
  "ИИ",
  "Цифровизация бизнес процессов",
  "Цифровая мода",
  "Выставочные пространства",
  "Фирменный стиль",
];

const SwitchableTable: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>,
          document.body
        )}
      <div className="wrapper">
        <div className="grid">
          {baseElements.map((item, index) => (
            <b key={`base-${index}`} className="grid-item base" onClick={() => openModal(<h1>123</h1>)}>
              {item}
            </b>
          ))}
          {newElements.map((item, index) => (
            <b key={`new-${index}`} className="grid-item new">
              {item}
            </b>
          ))}
        </div>
      </div>
    </>
  );
};

export default SwitchableTable;

// import { Projects, Events } from "../../../entities/heroModals";

// const index = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState<React.ReactNode | null>(
//     null
//   );
//   const openModal = (content: React.ReactNode) => {
//     setModalContent(content);
//     setShowModal(true);
//   };

//   return (
//     <>
//       {showModal &&
//         createPortal(
//           <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>,
//           document.body
//         )}
//       <div className={styles.container}>
//         <p className={styles.heroText}>
//           Кафедра цифровых и аддитивных технологий СПБГУПТД занимается
//           разработкой и внедрением передовых решений в области информационных
//           технологий и цифровизации. Наши программы направлены на подготовку
//           специалистов, способных создавать инновационные цифровые продукты
//         </p>

//         <div className={styles.block} onClick={() => setShowModal(true)}>
//           <p className="alt2">Среднее профессиональное образование</p>
//           <small className={clsx("alt", styles.smallLineHeight)}>
//             Подготовка специалистов IT направлений после девятого и одинадцатого
//             классов
//           </small>
//         </div>
