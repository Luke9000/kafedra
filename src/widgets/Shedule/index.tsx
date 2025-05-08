import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal";
import WeekParity from "../weekParity";
import data from "./data.json";
import styles from "./styles.module.css";
import groups from "./groups";
import useWindowSize from "../../shared/hooks/useWindowSize";

const index = () => {
  const [group, setGroup] = useState("1-МГ-2");
  const [parity, setParity] = useState("числ");

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setShowModal(true);
  };

  const filteredData = data.filter(
    (item) =>
      item.Группа.toLowerCase() == group.toLowerCase() &&
      item["Счет недель"].toLowerCase().includes(parity.toLowerCase())
  );

  const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  // Группировка данных по дню недели
  const groupedByDay = useMemo(() => {
    const grouped = filteredData.reduce((acc, item) => {
      const day = item["День недели"];
      if (!acc[day]) acc[day] = [];
      acc[day].push(item);
      return acc;
    }, {} as Record<string, typeof filteredData>);

    // Сортировка внутри каждого дня по времени
    Object.keys(grouped).forEach((day) => {
      grouped[day].sort((a, b) => {
        // Если время в формате "HH:MM"
        return a.Время.localeCompare(b.Время);
      });
    });

    return grouped;
  }, [filteredData]);

  return (
    <>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>,
          document.body
        )}
      <div className={styles.pageWrapper}>
        <div className={styles.title}>
          <h1 className={styles.local}>РАСПИСАНИЕ</h1>

          <div className={styles.btnsGroup}>
            <input
              className={styles.btn}
              type="button"
              value={group}
              onClick={() =>
                openModal(
                  <div className={styles.modal}>
                    {groups.map((item, index) => (
                      <input
                        className={styles.btn}
                        key={index}
                        type="button"
                        value={item}
                        onClick={() => {
                          setGroup(item);
                          setShowModal(false);
                        }}
                      ></input>
                    ))}
                  </div>
                )
              }
            ></input>
            <input
              className={styles.btn}
              type="button"
              value={parity == "числ" ? "Числитель" : "Знаменатель"}
              onClick={() =>
                openModal(
                  <div className={styles.modal}>
                    <input
                      className={styles.btn}
                      type="button"
                      value="Числитель"
                      onClick={() => {
                        setParity("числ");
                        setShowModal(false);
                      }}
                    ></input>
                    <input
                      className={styles.btn}
                      type="button"
                      value="Знаменатель"
                      onClick={() => {
                        setParity("зн");
                        setShowModal(false);
                      }}
                    ></input>
                  </div>
                )
              }
            ></input>
          </div>
        </div>
        <WeekParity></WeekParity>
        <div className={styles.sheduleWrapper}>
          {days
            .filter((item0) => groupedByDay[item0]?.length > 0)
            .map((item0, index0) => (
              <div className={styles.weekDay} key={index0}>
                <h2>{item0}</h2>

                <div className={styles.weekDayRow}>
                  <h5 className={styles.cell}>Время</h5>
                  <h5 className={styles.cell}>Дисциплина</h5>
                  <h5 className={styles.cell}>Аудитория</h5>
                  {useWindowSize().width > 768 ? <h5>Формат</h5> : null}
                </div>

                {groupedByDay[item0].map((item, index) => (
                  <div className={styles.weekDayRow} key={index}>
                    <p className={styles.time}>{item.Время}</p>
                    <p>{item.Диспциплина}</p>
                    <p>{item.Аудитория}</p>
                    {useWindowSize().width > 768 ? (
                      <p>
                        {item["Вид занятий"] == "Лек" ? "Лекция" : "Практика"}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default index;

// const SwitchableTable: React.FC = () => {
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
//       <div className="wrapper">
//         <div className="grid">
//           {tableData.map((item, index) => (
//             <b
//               key={`base-${index}`}
//               className="grid-item base"
//               onClick={() =>
//                 openModal(
//                   <div className="tableModal">
//                     <h1 className="bigText">{item.title}</h1>
//                     <p className="tableModalText">
//                       {item.text.split("\n").map((str, index) => (
//                         <span key={index}>
//                           {str}
//                           <br />
//                         </span>
//                       ))}
//                     </p>
//                   </div>
//                 )
//               }
//             >
//               {item.title}
//             </b>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SwitchableTable;
