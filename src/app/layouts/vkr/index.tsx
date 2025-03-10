import styles from "./styles.module.css";
import DownloadIcon from "../../../shared/assets/icons/svg-raw/Download.svg?react";

const index = () => {
  return (
    <>
      <h1 className={styles.title}>ВКР</h1>
      <div className={styles.flexRow}>
        <div className={styles.flexCol3}>
          <div className={styles.text}>
            <h2>Инструкция, титульные листы, раздаточные материалы</h2>
            <small>
              Подробная инструкция и необходимые материалы для выполнения ВКР
            </small>
          </div>
          <div className={styles.filler}></div>
          <div
            className={styles.IconWrapper}
            onClick={(event) => event.preventDefault()}
          >
            <DownloadIcon />
          </div>
        </div>

        <div className={styles.flexCol3}>
          <div className={styles.text}>
            <h2>Набор документов, необходимых для заказчика</h2>
            <small>
              Если у вас есть заказчик, вы можете заполнить с ним данные
              документы и передать на их кафедру
            </small>
          </div>
          <div className={styles.filler}></div>
          <div
            className={styles.IconWrapper}
            onClick={(event) => event.preventDefault()}
          >
            <DownloadIcon />
          </div>
        </div>

        <div className={styles.flexCol3}>
          <div className={styles.text}>
            <h2>Набор необходимых документов</h2>
            <small>
              Документы необходимо заполнить, распечатать, подписать и отнести
              на кафедру
            </small>
          </div>
          <div className={styles.filler}></div>
          <div
            className={styles.IconWrapper}
            onClick={(event) => event.preventDefault()}
          >
            <DownloadIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
