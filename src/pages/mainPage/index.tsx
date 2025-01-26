
import Layout from '../../app/layouts/DashboardLayout';
import { SectionNavigator } from '../../features/fullScreenNav/sectionNavigator';
import { useScrollNavigation } from '../../features/fullScreenNav/useScrollNavigation';
import event7 from '../../shared/assets/images/events/7.png';
import event8 from '../../shared/assets/images/events/8.jpg';
import event1 from '../../shared/assets/images/events/event1.png';
import event2 from '../../shared/assets/images/events/event2.png';
import event3 from '../../shared/assets/images/events/event3.png';
import Slider from '../../widgets/ParallaxCarousel';
import styles from './styles.module.css';
const MainPage = () => {
  const sections = ['События', 'Работы студентов'];
  const { containerRef, activeSection, scrollToSection } = useScrollNavigation({ sections });

  const images = [
    { src: event1, description: "Митап IT Специалистов" },
    { src: event2, description: "День донора" },
    { src: event3, description: "Наукатон" },
    { src: event8, description: "Фестиваль настольных игр" },
    { src: event7, description: "Лекция про творческий кризис" },
  ];
  

  return (
    <Layout>
      
    
      {/* <Header></Header> */}
      <SectionNavigator
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
       
      <div className={styles.sections} ref={containerRef}>
        <section className={styles.section}>
          <div className={styles.sliderWrapper}>
            <Slider images={images} />
          </div>
        </section>

        <section  className={styles.section}>
        <div className={styles.sliderWrapper}>
            <Slider images={images} />
          </div>
        </section>
      </div>

    </Layout>
  );
};

export default MainPage;
