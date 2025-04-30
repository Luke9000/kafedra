import DashboardLayout from "../../app/layouts/DashboardLayout";
import Shedule from "../../widgets/Shedule";
import styles from "./styles.module.css";

const index = () => {
  return (
    <DashboardLayout>
      <div className={styles.wrapper}>
        <Shedule></Shedule>
      </div>
    </DashboardLayout>
  );
};

export default index;


