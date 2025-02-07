import Logo from "../../shared/assets/icons/logo";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <header className={styles.header}>
        
        <NavLink
        draggable={false}
        to="/kafedra"
        end
        className={({ isActive }) =>
          
          isActive ? styles.activeLink : ""
        }
        >
          {({ isActive }) => {
    const rootStyles = getComputedStyle(document.documentElement);
    const activeColor = rootStyles.getPropertyValue("--text-color-bright").trim();
    const defaultColor = rootStyles.getPropertyValue("--logo-color-dark").trim();

    return <Logo fill={isActive ? activeColor : defaultColor} />;
  }}
        </NavLink>

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
              НОВОСТИ
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
              РАБОТЫ СТУДЕНТОВ
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
              ИНТЕРАКТИВНАЯ КАРТА
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/test2"
              className={({ isActive }) =>
                isActive ? styles.activeLink : ""
              }
            >
              РАСПИСАНИЕ
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/test1"
              className={({ isActive }) =>
                isActive ? styles.activeLink : ""
              }
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
