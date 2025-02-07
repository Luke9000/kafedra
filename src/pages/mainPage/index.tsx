import  Table  from '../../widgets/Table'
import Layout from '../../app/layouts/DashboardLayout';
import styles from './styles.module.css';
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
      <div className={styles.parallax}>
        <div className={styles.blockLeft}>
          <h3 className={styles.special}>Всего студентов кафедры</h3>
        </div>
        <div className={styles.blockRight}>
          <h2 className={styles.special}>1031 Человек</h2> 

        </div>
      </div>
      <section>
        <div className={styles.fullScreen}>
      <h1 className={styles.left5vw}>НАПРАВЛЕНИЯ ПОДГОТОВКИ</h1>
        <StudyRoute></StudyRoute>
        </div>
      </section>
      <section>
        <h1 className={styles.left5vw}>ПРЕПОДАВАТЕЛИ</h1>
        <EntityShowcase></EntityShowcase>
      </section>
    </Layout>
  );
};

export default MainPage;
