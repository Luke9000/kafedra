import DashboardLayout from "../../app/layouts/DashboardLayout";
import Works from "../../app/layouts/Works";
import styles from "./styles.module.css";

const index = () => {
  return (
    <DashboardLayout>
      <div className={styles.wrapper}>
        <Works></Works>
      </div>
    </DashboardLayout>
  );
};

export default index;
