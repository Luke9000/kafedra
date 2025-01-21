import React, { useRef, useState, useEffect } from 'react';
import Layout from '../../app/layouts/DashboardLayout';
import ImageCarousel from '../../widgets/Carousel';
import styles from './styles.module.css';

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['Преподаватели', 'Студенты', 'История кафедры'];


  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;

    const sectionHeight = window.innerHeight;
    const targetPosition = index * sectionHeight;

    containerRef.current.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });

    setActiveSection(index);
  };


  const handleWheel = (event: WheelEvent) => {
    if (!containerRef.current) return;

    event.preventDefault(); 
    const delta = Math.sign(event.deltaY); 
    const nextSection = Math.min(
      Math.max(activeSection + delta, 0),
      sections.length - 1
    );

    if (nextSection !== activeSection) {
      scrollToSection(nextSection);
    }
  };


  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollPosition = containerRef.current.scrollTop;
    const sectionHeight = window.innerHeight;
    const index = Math.round(scrollPosition / sectionHeight);

    setActiveSection(index);
  };

  useEffect(() => {
    const container = containerRef.current;

 
    container?.addEventListener('scroll', handleScroll);
    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {

      container?.removeEventListener('scroll', handleScroll);
      container?.removeEventListener('wheel', handleWheel);
    };
  }, [activeSection]);

  return (
    <Layout>
      <nav className={styles.nav}>
        {sections.map((section, index) => (
          <button
            key={index}
            className={`${styles.navButton} ${
              activeSection === index ? styles.active : ''
            }`}
            onClick={() => scrollToSection(index)}
          >
            {section}
          </button>
        ))}
      </nav>

      <div className={styles.sections} ref={containerRef}>
        <section>
          <ImageCarousel />
        </section>
        <section>
          <ImageCarousel />
        </section>
        <section>
          <ImageCarousel />
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
