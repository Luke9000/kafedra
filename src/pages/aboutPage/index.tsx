
import Layout from '../../app/layouts/DashboardLayout';
import { teachers } from '../../entities/teachers';
import { SectionNavigator } from '../../features/fullScreenNav/sectionNavigator';
import { useScrollNavigation } from '../../features/fullScreenNav/useScrollNavigation';
import Carousel from '../../widgets/Carousel';
import Table from '../../widgets/Table';
import styles from './styles.module.css';

const AboutPage = () => {
  const sections = ['Образовательные траектории', 'Сферы деятельности', 'Преподаватели'];
  const { containerRef, activeSection, scrollToSection } = useScrollNavigation({ sections });

  // const timelineData = [
  //   { year: '1993', text: 'Описание события в 1993 году.' },
  //   { year: '1994', text: 'Описание события в 1994 году.' },
  //   { year: '1995', text: 'Описание события в 1995 году.' },
  // ];
  


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
          <div className={styles.ColumnBig}>

            <div className={styles.RowInfo}>

              <div className={styles.ColumnInfo}>
                <h3><strong>4</strong> Профиля бакалавриата</h3>
                <p>Прикладная информатика в дизайне</p>
                <p>Прикладной искуственный интеллект</p>
                <p>IT технологии создания цифрового контента</p>
                <p>Цифровые технологии в финансах</p>
              </div>

              <div className={styles.ColumnInfo}>
                <h3><strong>3</strong> Профиля магистратуры</h3>
                <p>Прикладная информатика в дизайне</p>
                <p>Цифровой дизайн промышленных объектов</p>
                <p>Цифровые технологии в высокотехнологичной 
                индустрии моды (FashionTech)</p>
              </div>
            </div>

            <div className={styles.ColumnInfo2}>
                <h3><strong>1</strong> Профиль среднего профессионального образования</h3>
                <p>Информационные системы и программирование</p>
              </div>

          </div>
        </section>
        <section className={styles.section}>
        <Table></Table>
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
