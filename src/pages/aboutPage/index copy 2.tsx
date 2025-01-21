import React from 'react';
import Layout from '../../app/layouts/DashboardLayout';
import ImageCarousel from '../../widgets/Carousel';
import { useScrollNavigation } from '../../features/fullScreenNav/useScrollNavigation';
import { SectionNavigator } from '../../features/fullScreenNav/sectionNavigator';
import styles from './styles.module.css';

const AboutPage = () => {
  const sections = ['Преподаватели', 'Студенты', 'История кафедры'];
  const { containerRef, activeSection, scrollToSection } = useScrollNavigation({ sections });

  return (
    <Layout>
      <SectionNavigator
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <div className={styles.sections} ref={containerRef}>
        {sections.map((_, index) => (
          <section key={index}>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;
