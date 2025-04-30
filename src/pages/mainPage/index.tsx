import clsx from "clsx";
import Layout from "../../app/layouts/DashboardLayout";
import Hero from "../../app/layouts/Hero";
import StudyRoute from "../../app/layouts/StudyRoute";
import Table from "../../widgets/Table";
import styles from "./styles.module.css";

const MainPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <section className="section_border">
        <h1 className={styles.left5vw}>СФЕРЫ ДЕЯТЕЛЬНОСТИ</h1>
        <Table></Table>
      </section>
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
