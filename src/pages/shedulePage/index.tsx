import DashboardLayout from "../../app/layouts/DashboardLayout";
import styles from "./styles.module.css";

const index = () => {
  return (
    <DashboardLayout>
      <div className={styles.wrapper}>
        <h1>Страница в разработке</h1>
      </div>
    </DashboardLayout>
  );
};

export default index;
