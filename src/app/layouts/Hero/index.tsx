import styles from "./styles.module.css";
import clsx from "clsx";
const index = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heroText}>
        Кафедра цифровых и аддитивных технологий СПБГУПТД занимается разработкой
        и внедрением передовых решений в области информационных технологий и
        цифровизации. Наши программы направлены на подготовку специалистов,
        способных создавать инновационные цифровые продукты
      </p>

      <div className={styles.block}>
        <p className="alt2">Среднее профессиональное образование</p>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Подготовка специалистов IT направлений после девятого и одинадцатого
          классов
        </small>
      </div>

      <div className={styles.block}>
        <p className="alt2">Проект цифровая кафедра</p>
        <small className={clsx("alt", styles.smallLineHeight)}>
          Более 2000 студентов различных направлений со всего университета
          осваивают IT направления
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
      </div>
    </div>
  );
};

export default index;
