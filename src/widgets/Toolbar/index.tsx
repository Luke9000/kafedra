import { Link, useLocation } from "react-router-dom";
import About from "../../shared/assets/icons/svg-raw/About.svg?react";
import Contact from "../../shared/assets/icons/svg-raw/Contact.svg?react";
import Info from "../../shared/assets/icons/svg-raw/Info.svg?react";
import LogoClean from "../../shared/assets/icons/svg-raw/Logo-clean.svg?react";
import styles from "./styles.module.css";

const index = () => {
     const location = useLocation();
  return (  
     <footer className={styles.wrapper}>
     <nav className={styles.nav}>
       <ul className={styles.ul}>
         {[
           { to: "/kafedra", Icon: LogoClean, key: "home" },
           { to: "/kafedra/about", Icon: About , key: "about" },
           { to: "/kafedra/info", Icon: Info, key: "info" },
           { to: "/kafedra/contacts", Icon: Contact, key: "contacts" },
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
   </footer>
  )
}

export default index