import clsx from "clsx";
import Layout from "../../app/layouts/DashboardLayout";
import StudyRoute from "../../app/layouts/StudyRoute";
import Table from "../../widgets/Table";
import styles from "./styles.module.css";
import Hero from "../../app/layouts/Hero";

const MainPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <section className="section_border">
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
          <h1 className={clsx(styles.left5vw, "alt")}>
            НАПРАВЛЕНИЯ ПОДГОТОВКИ
          </h1>
          <StudyRoute></StudyRoute>
        </div>
      </section>
    </Layout>
  );
};

export default MainPage;
