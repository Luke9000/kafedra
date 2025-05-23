import clsx from "clsx";
import { NavLink } from "react-router-dom";
import Logo from "../../shared/assets/icons/logo";
import styles from "./styles.module.css";
import Hamburger from "../Hamburger";
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
              КАРТА КАФЕДРЫ
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
      <Hamburger></Hamburger>
    </header>
  );
};

export default index;
