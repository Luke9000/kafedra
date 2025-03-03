import { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

const index = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={clsx(styles.icon,open ? styles.openIcon : "")} onClick={() => setOpen(!open)}></div>
      <div className={clsx(styles.menu, open ? styles.open : "")}>
        <a>123</a>
        <a>123</a>
        <a>123</a>
      </div>
    </>
  );
};

export default index;
