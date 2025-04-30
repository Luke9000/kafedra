import Layout from '../../app/layouts/DashboardLayout';
import FloorPlan from '../../widgets/FloorPlanOld';
import Map from '../../widgets/Map';
import styles from './styles.module.css';


const ContactsPage = () => {

  return (
    <Layout>
         
      <div className={styles.sections}>
      

        <section id='Адрес'>
          <div className={styles.mapContainer}>
              <div className={styles.mapWrapper}>
                <Map></Map>
              </div>
            <p>Вознесенский проспект <strong>44 - 46</strong></p>
          </div>
        </section>
        <section id='Кабинеты и лаборатории'>
          {/* <div className={styles.cabsLabs}>
            <div className={styles.innerCabs}>
            <p><strong>Кабинеты</strong>: 451, 453, 454, 455, 464, 465</p>
            <p><strong>Учебные аудитории</strong>: 452, 459, 463, 466, 484, 485</p>
            <p><strong>Центр</strong> информационно-технического обеспечения образовательного процесса</p>
            <p>Учебно-исследовательская <strong>Лаборатория</strong> программных решений</p>
            <p>Учебно-методический <strong>Центр</strong> "Цифровая кафедра"</p>
            </div>
            <div className={clsx(styles.innerCabs, 'mobileHidden')}>
                <p><strong>Лаборатория</strong> информационных систем и технологий</p> 
                
                <p><strong>Лаборатория</strong> компьютерной графики</p> 
                <p><strong>Лаборатория</strong> вычислительной техники</p> 
                <p><strong>Лаборатория</strong> веб-приложений и дизайна</p>
                <p><strong>Лаборатория</strong> мультимедийных технологий</p>
                
              </div>
          </div> */}
          <FloorPlan></FloorPlan>
        </section>
        <section id='Обратная связь'>
        <div className={styles.s_2}>
            <div className={styles.s_2__block}>
              <h3>Директорат ИИТА</h3>
              <small>Организация и управление учебным процессом студентов в институте</small>
              <div className={styles.contacts_list}>
                <article>
                  <a className='textCall' href='tel:+78123151277'>+7 (812) 315-12-77</a>
                </article>
                <article>
                  <a className='textCall' href='mailto:iita.dekanat@mail.ru'>iita.dekanat@mail.ru</a>
                </article>
                <article></article>
              </div>
            </div>

            <div className={styles.s_2__block}>
              <h3>Кафедра</h3>
              <small>Научная, учебная и методическая деятельность</small>
              <div className={styles.contacts_list}>
                <article>
                  <a className='textCall' href='tel:+78125704064'>+7 (812) 570-40-64</a>
                </article>
                <article>
                  <a className='textCall' href='tel:+79219451472'>+7 (921) 945-14-72</a>
                </article>
                <article>
                  <a className='textCall' href='mailto:soshnikov@prouniver.ru'>soshnikov@prouniver.ru</a>
                </article>
                <article>
                  <a className='textCall' href='mailto:iskd@sutd.ru'>iskd@sutd.ru</a>
                </article>
                </div>
              </div>
        </div>
        </section>
      </div>

    </Layout>
  );
};

export default ContactsPage;
