import Logo from "../../shared/assets/icons/logo";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import NavBar from "../../features/NavBar";

const index = () => {
  return (
    <header className={styles.header}>
      <div className={styles.upper_header}>
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
      </div>
      <div className={styles.lower_header}>
        <NavBar></NavBar>
      </div>

    </header>
  );
};

export default index;
