import { teachers } from "../../../entities/teachers";
import styles from "./Table.module.css";

const SwitchableTable: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {teachers.map(function (item, index) {
          return (
            <div className={styles.gridItem}>
              <img key={index} src={item.image}></img>
              <div className={styles.teacherText}>
              <p className={styles.teachers} key={index}>{item.text}</p>
              <small className={styles.teachers} key={index}>{item.subtext}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SwitchableTable;
