import styles from "./styles.module.css";
import clsx from "clsx";
const index = () => {
  return (
    <div className={styles.container}>

     <div className={styles.block}>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Петров Иван. Фирменный стиль
        </small>
      </div>

    

      <div className={styles.block}>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Петров Иван. Фирменный стиль
        </small>
      </div>


    <div className={styles.block}>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Петров Иван. Фирменный стиль
        </small>
      </div>
    
      <div className={styles.block}>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Петров Иван. Фирменный стиль
        </small>
      </div>

      <div className={styles.block}>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Петров Иван. Фирменный стиль
        </small>
      </div>

    

      <div className={styles.block}>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Петров Иван. Фирменный стиль
        </small>
      </div>
      {/* <div className={clsx(styles.block, styles.blockSmall)}>
        <p className="alt2">Выступления</p>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Участие в региональных и международных конкурсах
        </small>
      </div>
      
      <div className={clsx(styles.block, styles.blockSmall)}>
        <p className="alt2">Проекты</p>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Показы, хакатоны, интенсивы, митапы и многое другое
        </small>
      </div>


      <div className={clsx(styles.block, styles.blockSmall)}>
        <p className="alt2">Выступления</p>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Участие в региональных и международных конкурсах
        </small>
      </div>

      <div className={clsx(styles.block, styles.blockSmall)}>
        <p className="alt2">Проекты</p>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Показы, хакатоны, интенсивы, митапы и многое другое
        </small>
      </div> */}


    </div>
  );
};

export default index;
