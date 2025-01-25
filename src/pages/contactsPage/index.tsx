import Layout from '../../app/layouts/DashboardLayout';
import { SectionNavigator } from '../../features/fullScreenNav/sectionNavigator';
import { useScrollNavigation } from '../../features/fullScreenNav/useScrollNavigation';
import styles from './styles.module.css';
import Map from '../../widgets/Map'


const ContactsPage = () => {
  const sections = ['Адрес', 'Обратная связь'];
  const { containerRef, activeSection, scrollToSection } = useScrollNavigation({ sections });


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
          <div className={styles.firstSection}>
            <div className='text_s1'>
              <h3>Вознесенский проспект 46</h3>
              <p>Кабинеты 452 - 463</p>
            </div>
          {/* <Carousel data = {teachers} slideSize={95} /> */}
          <Map></Map>
           {/* frameborder=0  */}
          </div>
        </section>
        <section  className={styles.section}>
        <div className={styles.s_2}>
            <div className={styles.s_2__block}>
              <h3>Директорат ИИТА</h3>
              <p>Отвечает за организацию и управляет учебным процессом студентов в институте</p>
              <div className={styles.contacts_list}>
                <article>ул. Большая Морская, д. 18, каб. 425</article>
                <article>+7 (812) 315-12-77</article>
                <article>iita.dekanat@mail.ru</article>
              </div>
            </div>

            <div className={styles.s_2__block}>
              <h3>Кафедра</h3>
              <p>Отвечает за научную, учебную и методическую деятельность</p>
              <div className={styles.contacts_list}>
                <article>+7 (812) 570-40-64</article>
                <article>+7 (921) 945-14-72</article>
                <article>soshnikov@prouniver.ru</article>
                <article>iskd@sutd.ru</article>
              </div>
            </div>
        </div>
        </section>
      </div>

    </Layout>
  );
};

export default ContactsPage;
