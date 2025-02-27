import styles from "./styles.module.css";
import clsx from "clsx";
import { works } from "../../../entities/works";
import { createPortal } from "react-dom";
import Modal from "../../../widgets/Modal";
import { useState } from "react";
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
        {works.map((item, index) => (
          <div
            style={{ backgroundImage: `url(${item.titleImage})` }}
            key={index}
            className={styles.block}
            onClick={() =>
              openModal(
                <div className={styles.modal}>
                  <div className={styles.modalAuthor}>
                    <small>{item.author}</small>
                    <small>{item.year}</small>
                  </div>
                  <div className={styles.modalTitle}>
                    <h1>{item.title}</h1>
                    <p>{item.type}</p>
                  </div>
                  <div className={styles.modalImages}>
                    {item.images.map((item2, index2) => (
                      <img key={index2} src={item2}></img>
                    ))}
                  </div>
                </div>
              )
            }
          >
            <small className={clsx("alt", styles.smallLineHeight, styles.author)}>
              <span>{item.author}. </span>
              <span>{item.title}</span>
            </small>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
