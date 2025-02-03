
import Layout from '../../app/layouts/DashboardLayout';
// import { teachers } from '../../entities/teachers';
import Table from '../../widgets/Table';
import styles from './styles.module.css';
import ES from '../../widgets/EntityShowcase'

const AboutPage = () => {

  return (
    <Layout>
    <>
      <div className={styles.sections}>
      
        <section id='Образовательные траектории' className={styles.section}>
          <div className={styles.ColumnBig}>

            <div className={styles.RowInfo}>

              <div className={styles.ColumnInfo}>
                <h2><strong>4</strong> Профиля бакалавриата</h2>
                <p>Прикладная информатика в дизайне</p>
                <p>Прикладной искуственный интеллект</p>
                <p>IT технологии создания цифрового контента</p>
                <p>Цифровые технологии в финансах</p>
              </div>

              <div className={styles.ColumnInfo}>
                <h2><strong>3</strong> Профиля магистратуры</h2>
                <p>Прикладная информатика в дизайне</p>
                <p>Цифровой дизайн промышленных объектов</p>
                <p>Цифровые технологии в высокотехнологичной 
                индустрии моды (FashionTech)</p>
              </div>
            </div>

            <div className={styles.ColumnInfo2}>
                <h2><strong>1</strong> Профиль среднего профессионального образования</h2>
                <p>Информационные системы и программирование</p>
              </div>

          </div>
        </section>
        <section id='Сферы деятельности' className={styles.section}>
        <Table></Table>
        </section>
        <section id='Преподаватели' className={styles.section}>
          <ES></ES>
        </section>
        <div className='ending'></div>
      </div>
      
    </>
    </Layout>
  );
};

export default AboutPage;
