// import  Icon  from "../../shared/ui/icon";
import styles from "./styles.module.css";
import { Link} from "react-router-dom";
import LogoClean from "../../shared/assets/icons/svg-raw/Logo-clean.svg?react";
import Info from "../../shared/assets/icons/svg-raw/Info.svg?react";
import Contact from "../../shared/assets/icons/svg-raw/Contact.svg?react";
import About from "../../shared/assets/icons/svg-raw/About.svg?react";

const index = () => {

    const handleClickIcon = () => {
            console.log('click')
        };

  return (  
        <footer className={styles.wrapper}>
            <nav className={styles.nav}>
            
                 <ul className={styles.ul}>
                    
                    <li>
                         <Link to="/">
                            <LogoClean></LogoClean>
                         </Link> 
                    </li>
                    <li>
                         <Link to="/about">
                         <About></About>
                         </Link> 
                    </li>
                    
                    <li>
                         <Link to="/info">
                         <Info></Info>
                         </Link> 
                    </li>

                    <li>
                         <Link to="/contacts">
                         <Contact></Contact>
                         </Link> 
                    </li>

                </ul> 
            </nav>
        {/* <button onClick={toggleTheme}>{theme}</button> */}
      </footer>
  )
}

export default index