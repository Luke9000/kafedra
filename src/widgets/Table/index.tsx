import { useState } from "react";
import "./Table.css";
import { createPortal } from "react-dom";
import Modal from "../Modal";
import tableData from "../../entities/tableData";

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
          {tableData.map((item, index) => (
            <b
              key={`base-${index}`}
              className="grid-item base"
              onClick={() =>
                openModal(
                  <div className="tableModal">
                    <h1 className="bigText">{item.title}</h1>
                    <p className="tableModalText">
                      {item.text.split("\n").map((str, index) => (
                        <span key={index}>
                          {str}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                )
              }
            >
              {item.title}
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
