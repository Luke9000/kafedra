import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { LogoPreloader } from "./LogoPreloader";

export const AssetPreloader = () => {
  const [progress, setProgress] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const imageFiles = import.meta.glob(
      "../../shared/assets/**/*.{webp,jpg,png,svg}",
      {
        eager: true,
        import: "default",
      }
    );

    const fontFiles = import.meta.glob(
      "../../shared/assets/**/*.{woff,woff2,ttf}",
      {
        eager: true,
        import: "default",
      }
    );

    const imagePromises = Object.values(imageFiles).map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src as string;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    const fontPromises = Object.values(fontFiles).map((src) => {
      return new Promise<void>((resolve, reject) => {
        const fontFace = new FontFace("PreloadFont", `url(${src})`);
        fontFace
          .load()
          .then(() => {
            document.fonts.add(fontFace);
            resolve();
          })
          .catch(() => reject());
      });
    });

    const allPromises = [...imagePromises, ...fontPromises];
    const total = allPromises.length;
    let loaded = 0;

    if (total === 0) {
      setIsPreloaded(true);
      return;
    }

    allPromises.forEach((promise) => {
      promise.finally(() => {
        loaded += 1;
        setProgress(Math.round((loaded / total) * 100));
        if (loaded === total) {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsPreloaded(true);
          }, 500); 
        }
      });
    });
  }, []);

  if (isPreloaded) return null;

  return (
    <div className={`${styles.overlay} ${isFadingOut ? styles.fadeOut : ""}`}>
      <LogoPreloader progress={progress}></LogoPreloader>
      {/* <div className={styles.progress}>{progress}%</div> */}
    </div>
  );
};
