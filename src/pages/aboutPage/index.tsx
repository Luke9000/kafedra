
import Layout from '../../app/layouts/DashboardLayout';
import Carousel from '../../widgets/Carousel';
import { useScrollNavigation } from '../../features/fullScreenNav/useScrollNavigation';
import { SectionNavigator } from '../../features/fullScreenNav/sectionNavigator';
import styles from './styles.module.css';
import {teachers} from '../../entities/teachers'
const AboutPage = () => {
  const sections = ['Преподаватели', 'Студенты', 'История кафедры'];
  const { containerRef, activeSection, scrollToSection } = useScrollNavigation({ sections });


  return (
    <Layout>
    <>
      {/* <Header></Header> */}
      <SectionNavigator
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <div className={styles.sections} ref={containerRef}>
      
        {/* {sections.map((_, index) => (
          <section className={styles.section} key={index}>
            <Carousel data = {data} />
          </section>
        ))} */}
        <section className={styles.section}>
          <Carousel data = {teachers} />
        </section>
        <section className={styles.section}>
          <Carousel data = {teachers} />
        </section>
        <section className={styles.section}>
          <Carousel data = {teachers} />
        </section>
      </div>
      
    </>
    </Layout>
  );
};

export default AboutPage;
