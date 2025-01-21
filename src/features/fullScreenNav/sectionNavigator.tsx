import React from 'react';
import styles from './SectionNavigator.module.css';

interface SectionNavigatorProps {
  sections: string[];
  activeSection: number;
  onNavigate: (index: number) => void;
}

export const SectionNavigator: React.FC<SectionNavigatorProps> = ({
  sections,
  activeSection,
  onNavigate,
}) => {
  return (
    <nav className={styles.nav}>
      {sections.map((section, index) => (
        <button
          key={index}
          className={`${styles.navButton} ${
            activeSection === index ? styles.active : ''
          }`}
          onClick={() => {
            onNavigate(index);
          }}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};
