import clsx from "clsx";
import { useState } from "react";
import { createPortal } from "react-dom";
import { works } from "../../../entities/works";
import Modal from "../../../widgets/Modal";
import styles from "./styles.module.css";
const index = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setShowModal(true);
  };

    const [query, setQuery] = useState("");
  
    const filteredWorks = works.filter(
      (item) =>
        item.author.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.year.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase()) 
    );
  



  return (
    <>

      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>,
          document.body
        )}
        <div className={styles.cont}>
       <div className={styles.title}>
        <h1 className={styles.local}>РАБОТЫ СТУДЕНТОВ</h1>
        <input
          className={styles.search}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Поиск..."
        ></input>
      </div>
      <div className={styles.container}>
        {filteredWorks.length > 0 ? (
        filteredWorks.map((item, index) => (
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
                      <img className={styles.img} key={index2} src={item2}></img>
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
        ))) :
        (
          <p style={{margin:'auto auto'}}>Ничего не найдено</p>
        )}
      </div>
      </div>
    </>
  );
};

export default index;
