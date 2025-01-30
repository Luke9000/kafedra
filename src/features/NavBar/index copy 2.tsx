import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "../../shared/ui/button";
import  "./navbar.css";

interface Props {
  className?: string;
}

const NavBar = ({ className }: Props) => {
  const [sections, setSections] = useState<string[]>([]);

  useEffect(() => {
    const sectionIds = Array.from(document.querySelectorAll("section[id]")).map(
      (section) => section.id
    );
    setSections(sectionIds);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={clsx('navBar', className)}>
      {sections.map((id) => (
        <Button key={id} text={id} status="default" onClick={() => scrollToSection(id)} />
      ))}
    </div>
  );
};

export default NavBar;
