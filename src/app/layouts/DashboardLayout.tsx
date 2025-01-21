import Header from '../../widgets/Header/index'
import Footer from '../../widgets/Footer'
import styles from './styles.module.css'


interface Props {
    children?: React.ReactNode
}

export default function DashboardLayout({ children}:Props ) {
  // const [theme, toggleTheme] = useThemeSwitcher();

  return (
    <div>
      <Header ></Header>
      <main className={styles.wrapper}>
        {children}
      </main>
      <Footer></Footer>
    </div>

  );
}