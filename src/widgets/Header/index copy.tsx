import Logo from "../../shared/assets/icons/logo";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import NavBar from "../../features/NavBar";

const index = () => {
  return (
    <header className={styles.header}>
 
        <NavLink
        draggable={false}
        to="/kafedra"
        className={({ isActive }) =>
          isActive ? styles.activeLink : ""
        }
        >
          {({ isActive }) => (
            <Logo fill={isActive ? "#FFFFFF" : "#988DB9"} />
          )}
        </NavLink>

        <NavBar></NavBar>
        
        <nav className={styles.nav}>
        
        <ul className={styles.ul}>
          <li>
            <NavLink 
              draggable={false}
              to="/kafedra/about"
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
              to="/kafedra/info"
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
              to="/kafedra/contacts"
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
