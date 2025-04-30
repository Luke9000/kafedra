import Image from "./Image.tsx";
import styles from "./styles.module.css";
import { useRef, useEffect } from "react";

function appendClassAttr(obj: SVGSVGElement) {
  for (let item of obj.children) {
    console.log(item);
    item.setAttribute('onClick','console.log(23)');
    item.classList.add(styles.test);
  }
}

const index = () => {
  const image = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (image.current) {
      appendClassAttr(image.current);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
       <svg ref={image} overflow="scroll" preserveAspectRatio="xMidYMid slice" width="1687" height="434" viewBox="0 0 1687 434" fill="none" xmlns="http://www.w3.org/2000/svg">
       <Image></Image>
       </svg>
    </div>
  );
};

export default index;
