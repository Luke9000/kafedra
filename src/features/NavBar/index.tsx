import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "../../shared/ui/button";
import "./navbar.css";

interface Props {
  className?: string;
}

const NavBar = ({ className }: Props) => {
  const [sections, setSections] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = Array.from(document.querySelectorAll("section[id]")).map(
      (section) => section.id
    );
    setSections(sectionIds);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // срабатывает, когда 50% секции в зоне видимости
    );

    // Наблюдаем за всеми секциями
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      // Очистка наблюдателей при размонтировании
      observer.disconnect();
    };
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
        <Button
          key={id}
          text={id}
          status={id === activeSection ? "active" : "default"}
          onClick={() => scrollToSection(id)}
        />
      ))}
    </div>
  );
};

export default NavBar;
