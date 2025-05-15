import Image from "./Image.tsx";
import Legend from "./Legend.tsx";
import LegendData from "./LegendData.ts";
import LegendsList from "./LegendsList.tsx";
import styles from "./styles.module.css";
import { useRef, useEffect } from "react";

// function appendClassAttr(obj: SVGSVGElement) {
//   for (let item of obj.children) {
//     console.log(item);
//     item.setAttribute('onClick', 'console.log(23)');
//     item.classList.add(styles.test);
//   }
// }

const index = () => {
  const image = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (image.current) {
      // appendClassAttr(image.current);
    }
  }, []);

  return (
    <>
      <h2>
        <span className={styles.bright}>4</span> Этаж
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.svgWrapper}>
          <svg
            ref={image}
            preserveAspectRatio="xMidYMid slice"
            width="1561"
            height="434"
            viewBox="0 0 1561 434"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Image></Image>
          </svg>
        </div>
      </div>
      <LegendsList></LegendsList>
    </>
  );
};

export default index;
