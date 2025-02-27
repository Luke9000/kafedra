import { useEffect } from "react";
import "./styles.css";

interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}

const index = ({ children, onClose }: Props) => {
  const InsideClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }


  useEffect(() => {
    
    document.documentElement.style.overflow = "hidden";
   

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose(); 
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modalWrapper" onClick={onClose}>
      <div className="modal" onClick={InsideClick}>{children}</div>
    </div>
  );
};

export default index;
