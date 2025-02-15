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
            <p className="alt2">Вознесенский проспект 46 этаж 4</p>

            <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">812421421214</p>
              <small className="alt">Телефон Петрова</small>
            </a>

            <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">812421421214</p>
              <small className="alt">Телефон Петрова</small>
            </a>
          </div>
        </div>

        <div className={styles.datablock}>
          <h4>ДИРЕКТОРАТ ИИТА</h4>

          <div className={styles.borderBlock}>
            <p className="alt2">Вознесенский проспект 46 этаж 4</p>

            <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">812421421214</p>
              <small className="alt">Телефон Петрова</small>
            </a>

            <a className={clsx(styles.phoneBlock, "left", styles.extraMargin)}>
              <p className="alt2">812421421214</p>
              <small className="alt">Телефон Петрова</small>
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
