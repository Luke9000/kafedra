import DashboardLayout from "../../app/layouts/DashboardLayout";
import Prepodavateli from "../../app/layouts/Prepodavateli";
import styles from "./styles.module.css";

const index = () => {
  return (
    <DashboardLayout>
      <div className={styles.wrapper}>
        <Prepodavateli></Prepodavateli>
      </div>
    </DashboardLayout>
  );
};

export default index;
