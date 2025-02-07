import { useState } from "react";

const Spoiler: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="spoiler">
      <button className="spoiler-btn" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      <div className={`spoiler-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Spoiler;
