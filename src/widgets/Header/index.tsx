import { NavLink } from "react-router-dom";
import Logo from "../../shared/assets/icons/logo";
import styles from "./styles.module.css";

const index = () => {
  return (
    <header className={styles.header}>
      <NavLink
       draggable={false}
       to="/"
       className={({ isActive }) =>
        isActive ? styles.activeLink : ""
      }
       >
        {({ isActive }) => (
          <Logo fill={isActive ? "#FFFFFF" : "#988DB9"} />
        )}
      </NavLink>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <NavLink 
              draggable={false}
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.activeLink : ""
              }
            >
              О Кафедре
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/info"
              className={({ isActive }) =>
                isActive ? styles.activeLink : ""
              }
            >
              Информация
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/contacts"
              className={({ isActive }) =>
                isActive ? styles.activeLink : ""
              }
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default index;
