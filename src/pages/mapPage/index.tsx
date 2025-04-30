import DashboardLayout from "../../app/layouts/DashboardLayout";
import FloorPlan from "../../widgets/FloorPlan";
import styles from "./styles.module.css";

const index = () => {
  return (
    <div>
      <DashboardLayout>
        <div className={styles.wrapper}>
          <FloorPlan></FloorPlan>
          {/* <h1>СТРАНИЦА В РАЗРАБОТКЕ</h1> */}
        </div>
      </DashboardLayout>
    </div>
  );
};

export default index;
