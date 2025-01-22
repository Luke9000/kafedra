
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

  
  // const images = [
  //   {event1},
  //   "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
  //   "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  //   "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
    
  // ];

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
      
      {/* <Notification className='notif' withBorder color="grape" radius="lg" title="">
            Оставаясь на сайте вы соглашаетесь с условиями пользовательского соглашения
          </Notification> */}
        {/* {sections.map((_, index) => (
          <section className={styles.section} key={index}>
            <Carousel data = {data} />
          </section>
        ))} */}
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
