import  Table  from '../../widgets/Table'
import Layout from '../../app/layouts/DashboardLayout';
import Spoiler from '../../widgets/Spoiler';
import styles from './styles.module.css';
import t5 from '../shared/assets/images/backgrounds/01.jpeg';
import StudyRoute from '../../app/layouts/StudyRoute';
import EntityShowcase from '../../widgets/EntityShowcase';


const MainPage = () => {


  return (
    <Layout>
      <div className={styles.container}>
        <p className={styles.heroText}>Кафедра цифровых и аддитивных технологий СПБГУПТД занимается разработкой и внедрением передовых решений в области информационных технологий и цифровизации. Наши программы направлены на подготовку специалистов, способных создавать инновационные цифровые продукты и управлять ими.
        </p>
      </div>
      <section>
      <h1 className={styles.left5vw}>СФЕРЫ ДЕЯТЕЛЬНОСТИ</h1>
      <Table></Table>
      </section>
      <h1 className={styles.left5vw}>НАПРАВЛЕНИЯ ПОДГОТОВКИ</h1>
        <StudyRoute></StudyRoute>
      <h1 className={styles.left5vw}>ПРЕПОДАВАТЕЛИ</h1>
      <EntityShowcase></EntityShowcase>
    </Layout>
  );
};

export default MainPage;
