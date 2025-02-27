import Modal from "../../../widgets/Modal";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Projects, Events, SPO, CK } from "../../../entities/heroModals";

const index = () => {
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
      <div className={styles.container}>
        <p className={styles.heroText}>
          Кафедра цифровых и аддитивных технологий СПБГУПТД занимается
          разработкой и внедрением передовых решений в области информационных
          технологий и цифровизации. Наши программы направлены на подготовку
          специалистов, способных создавать инновационные цифровые продукты
        </p>

        <div className={styles.block} onClick={() => openModal(SPO)}>
          <p className="alt2">Среднее профессиональное образование</p>
          <small className={clsx("alt", styles.smallLineHeight)}>
            Подготовка специалистов IT направлений после девятого и одинадцатого
            классов
          </small>
        </div>

        <div className={styles.block} onClick={() => openModal(CK)}>
          <p className="alt2">Проект цифровая кафедра</p>
          <small className={clsx("alt", styles.smallLineHeight)}>
            Более 2000 студентов различных направлений со всего университета
            осваивают IT направления
          </small>
        </div>
        <div
          className={clsx(styles.block, styles.blockSmall)}
          onClick={() => openModal(Events)}
        >
          <p className="alt2">Выступления</p>
          <small className={clsx("alt", styles.smallLineHeight)}>
            Участие в региональных и международных конкурсах
          </small>
        </div>
        <div
          className={clsx(styles.block, styles.blockSmall)}
          onClick={() => openModal(Projects)}
        >
          <p className="alt2">Проекты</p>
          <small className={clsx("alt", styles.smallLineHeight)}>
            Показы, хакатоны, интенсивы, митапы и многое другое
          </small>
        </div>
      </div>
    </>
  );
};

export default index;
