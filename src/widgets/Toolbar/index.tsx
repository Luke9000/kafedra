import { Link, useLocation } from "react-router-dom";
import Contact from "../../shared/assets/icons/svg-raw/Contact.svg?react";
import Info from "../../shared/assets/icons/svg-raw/Info.svg?react";
import Works from "../../shared/assets/icons/svg-raw/Works.svg?react";
import People from "../../shared/assets/icons/svg-raw/People.svg?react";
import Scheme from "../../shared/assets/icons/svg-raw/Scheme.svg?react";
import Calendar from "../../shared/assets/icons/svg-raw/Calendar.svg?react";
import Graduate from "../../shared/assets/icons/svg-raw/Graduate.svg?react";
import styles from "./styles.module.css";
import clsx from "clsx";

const index = () => {
     const location = useLocation();
  return (  
     <div className={clsx(styles.wrapper, styles.toolbar)}>
     <nav className={styles.nav}>
       <ul className={styles.ul}>
         {[
          { to: "/kafedra/raboti_studentov", Icon: Works, key: "Works" },
           { to: "/kafedra/prepodavateli", Icon: People, key: "People" },
           { to: "/kafedra/karta", Icon: Scheme , key: "Scheme" },
           { to: "/kafedra/raspisanie", Icon: Calendar, key: "Calendar" },
           { to: "/kafedra/vkr", Icon: Graduate, key: "Graduate" },
         ].map(({ to, Icon, key }) => (
           <li key={key}>
             <Link
               className={`${styles.link} ${location.pathname === to ? styles.active : ""}`}
               to={to}
             >
               <Icon fill={location.pathname === to ? "white" : "#201541"} />
             </Link>
           </li>
         ))}
       </ul>
     </nav>
   </div>
  )
}

export default index