import { useState } from "react";
import { teachers } from "../../../entities/teachers";
import styles from "./Table.module.css";

const SwitchableTable: React.FC = () => {
  const [query, setQuery] = useState("");

  const filteredTeachers = teachers.filter(
    (item) =>
      item.text.toLowerCase().includes(query.toLowerCase()) ||
      item.subtext.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.cont}>
      <div className={styles.title}>
        <h1 className={styles.local}>ПРЕПОДАВАТЕЛИ</h1>
        <input
          className={styles.search}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Поиск"
        ></input>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((item, index) => (
              <div className={styles.gridItem} key={index}>
                <img key={index} src={item.image}></img>
                <div className={styles.teacherText}>
                  <p className={styles.teachers} key={index}>
                    {item.text}
                  </p>
                  <small className={styles.teachers} key={index}>
                    {item.subtext}
                  </small>
                </div>
              </div>
            ))
          ) : (
            <p style={{margin:'0 auto'}}>Ничего не найдено</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwitchableTable;
