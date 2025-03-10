import styles from "./heroModals.module.css";
import FooterLink from "../shared/assets/icons/svg-raw/FooterLink.svg?react";

import events from "./events";
import clsx from "clsx";

export const Events = (
  <div className={styles.imageCont}>
    <h1 className={styles.bigText}>Мероприятия</h1>
    <small className={styles.title}>
      Ежегодно кафедра организует более 100 различных мероприятий: митапы,
      хакатоны, интенсивы, стендапы и многое другое
    </small>

    {events.map((item, index) => (
      <img
        key={index}
        className={styles.img}
        src={item.image}
        alt={item.text}
      ></img>
    ))}
  </div>
);

export const Kursi = (
  <>
    <h1 className={styles.bigText}>ПОДГОТОВИТЕЛЬНЫЕ КУРСЫ</h1>
    <small className={styles.title}>
      Ежегодно кафедра организует более 100 различных мероприятий: митапы,
      хакатоны, интенсивы, стендапы и многое другое
    </small>
    <p>
      С другой стороны реализация намеченных плановых заданий влечет за собой
      процесс внедрения и модернизации модели развития. Товарищи! начало
      повседневной работы по формированию позиции требуют определения и
      уточнения новых предложений.
    </p>
    <div className={styles.urlWrapper}>
      <a
        href="https://prouniver.ru/school/it"
        className={clsx(styles.phoneBlock, "left")}
      >
        <div className={styles.phoneBlock}>
          <div className={styles.inline}>
            <p>prouniver.ru - it</p>
            <FooterLink className={styles.icon}></FooterLink>
          </div>
          <small>Регистрация для поступающих на бакалавриат</small>
        </div>
      </a>
      <a
        href="https://prouniver.ru/school/Masters_Center"
        className={clsx(styles.phoneBlock, "left")}
      >
        <div className={styles.phoneBlock}>
          <div className={styles.inline}>
            <p>prouniver.ru - masters</p>
            <FooterLink className={styles.icon}></FooterLink>
          </div>
          <small>
            Регистрация для поступающих на магистратуру
          </small>
        </div>
      </a>
    </div>
  </>
);

export const CK = (
  <>
  <h1 className={styles.bigText}>Проект цифровая кафедра</h1>
    <small className={styles.title}>
      Ежегодно кафедра организует более 100 различных мероприятий: митапы,
      хакатоны, интенсивы, стендапы и многое другое
    </small>
    <p>
      С другой стороны реализация намеченных плановых заданий влечет за собой
      процесс внедрения и модернизации модели развития. Товарищи! начало
      повседневной работы по формированию позиции требуют определения и
      уточнения новых предложений.
    </p>
    <p>
      С другой стороны реализация намеченных плановых заданий влечет за собой
      процесс внедрения и модернизации модели развития. Товарищи! начало
      повседневной работы по формированию позиции требуют определения и
      уточнения новых предложений.
    </p>

    <p>
      С другой стороны реализация намеченных плановых заданий влечет за собой
      процесс внедрения и модернизации модели развития. Товарищи! начало
      повседневной работы по формированию позиции требуют определения и
      уточнения новых предложений.
    </p>


  </>
);
