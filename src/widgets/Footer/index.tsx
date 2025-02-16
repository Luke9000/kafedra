import clsx from "clsx";
import styles from "./styles.module.css";
import FooterLink from "../../shared/assets/icons/svg-raw/FooterLink.svg?react";
const index = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUpper}>
        <div className={styles.datablock}>
          <h4>КАФЕДРА</h4>

          <div className={styles.borderBlock}>
          <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">Вознесенский пр., д. 46, каб. 452-463</p>
              <small className="alt">Адрес</small>
            </a>

            <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">570-40-64</p>
              <small className="alt">Телефон</small>
            </a>

            <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">iskd@sutd.ru</p>
              <small className="alt">Адрес электронной почты</small>
            </a>
          </div>
        </div>

        <div className={styles.datablock}>
          <h4>ДИРЕКТОРАТ ИИТА</h4>

          <div className={styles.borderBlock}>
          <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">ул. Большая Морская, д. 18, каб. 425</p>
              <small className="alt">Адрес</small>
            </a>

            <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">315-12-77</p>
              <small className="alt">Телефон</small>
            </a>

            <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">iita.dekanat@mail.ru</p>
              <small className="alt">Адрес электронной почты2</small>
            </a>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className={styles.urlWrapper}>
        <a href="https://suitd.ru" className={clsx(styles.phoneBlock, "left")}>
          <div className={styles.phoneBlock}>
            <div className={styles.inline}>
              <p className="alt2">suitd.ru</p>
              <FooterLink></FooterLink>
            </div>
            <small className="alt">Главный сайт университета</small>
          </div>
        </a>
        <a className={clsx(styles.phoneBlock, "left")}>
          <div className={styles.phoneBlock}>
            <div className={styles.inline}>
                <p className="alt2">prouniver.ru</p>
                <FooterLink></FooterLink>
            </div>
            <small className="alt">Сайт приемной комиссии</small>
          </div>
        </a>
        <a className={clsx(styles.phoneBlock, "left")}>
          <div className={styles.phoneBlock}>
            <div className={styles.inline}>
                <p className="alt2">lk.suitd.ru</p>
                <FooterLink></FooterLink>
            </div>
            <small className="alt">Сайт личного кабинета</small>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default index;
