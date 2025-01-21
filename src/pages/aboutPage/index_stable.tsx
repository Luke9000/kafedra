import React from 'react';
import Layout from '../../app/layouts/DashboardLayout';
import Carousel from '../../widgets/Carousel';
import { useScrollNavigation } from '../../features/fullScreenNav/useScrollNavigation';
import { SectionNavigator } from '../../features/fullScreenNav/sectionNavigator';
import styles from './styles.module.css';
import image1 from '../../shared/assets/images/prep.png'
import image2 from '../../shared/assets/images/stud.png'
import Header from '../../widgets/Header';

const AboutPage = () => {
  const sections = ['Преподаватели', 'Студенты', 'История кафедры'];
  const { containerRef, activeSection, scrollToSection } = useScrollNavigation({ sections });

  const items = [
    <img src={image1} alt="1" />,
    <img src={image2} alt="2" />,
  ];

  return (
    // <Layout>
    <>
      
      <div className={styles.sections} ref={containerRef}>
      <Header></Header>
      <SectionNavigator
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
        {sections.map((_, index) => (
          <section className={styles.section} key={index}>
            {/* <Carousel items={items} autoPlay={true} interval={3000} /> */}
            <Carousel />
          </section>
        ))}
      </div>
      
    </>
    // </Layout>
  );
};

export default AboutPage;
