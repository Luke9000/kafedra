import clsx from "clsx";
import Logo from "../../shared/assets/icons/logo";
import LogoSmall from "../../shared/assets/icons/logoSmall";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <header className={styles.header}>
      <NavLink
        draggable={false}
        to="/kafedra"
        end
        className={({ isActive }) => clsx(isActive && styles.activeLink,styles.logo)}
      >
        {({ isActive }) => {
          const rootStyles = getComputedStyle(document.documentElement);
          const activeColor = rootStyles
            .getPropertyValue("--text-color-bright")
            .trim();
          const defaultColor = rootStyles
            .getPropertyValue("--logo-color-dark")
            .trim();

          return <Logo className={clsx(styles.logo, isActive && styles.activeLink)} fill={isActive ? activeColor : defaultColor} />;
        }}
      </NavLink>


      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/prepodavateli"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              ПРЕПОДАВАТЕЛИ
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/raboti_studentov"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              РАБОТЫ СТУДЕНТОВ
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/karta"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              ИНТЕРАКТИВНАЯ КАРТА
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/raspisanie"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              РАСПИСАНИЕ
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/vkr"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              ВКР
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default index;
