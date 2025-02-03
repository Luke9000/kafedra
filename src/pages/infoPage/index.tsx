
import Layout from '../../app/layouts/DashboardLayout';
import DownloadIcon from "../../shared/assets/icons/svg-raw/Download.svg?react";
import LinkIcon from "../../shared/assets/icons/svg-raw/Link.svg?react";
import styles from './styles.module.css';
import WeekParity from '../../widgets/weekParity';

const InfoPage = () => {

  return (
    <Layout>

       
      <div className={styles.sections} >
        <section id='Расписание' className={styles.section}>
        <div className={styles.flexRow}>
            
            <div className={styles.flexCol}>
              <div className={styles.text}>
                <h2>Общее расписание</h2>
                <small>Расписание предметов групп</small>
              </div>
              <div className={styles.filler}></div>
              <div className={styles.IconWrapper} >
                <a target="_blank" rel="noopener noreferrer" href='https://sutd.ru/upload/raspisanie/raspisanie_o_iita_24_25.xlsx'>
                <DownloadIcon/>
                </a>
              </div>
            </div>
  
            <div className={styles.flexCol}>
              <div className={styles.text}>
                <h2>Кафедральное расписание</h2>
                <small>Расписание предметов кафедры</small>
              </div>  
              <div className={styles.filler}></div>
              <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
              <DownloadIcon/>
              </div>
            </div>
  
           </div>
           <WeekParity></WeekParity>
        </section>
        <section id='Дипломная работа' className={styles.section}>

          <div className={styles.flexRow}>
            
          <div className={styles.flexCol3}>
            <div className={styles.text}>
              <h2>Инструкция, титульные листы, раздаточные материалы</h2>
              <small>Подробная инструкция и необходимые материалы для выполнения ВКР</small>
            </div>
            <div className={styles.filler}></div>
            <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
            <DownloadIcon/>
            </div>
          </div>

          <div className={styles.flexCol3}>
            <div className={styles.text}>
              <h2>Набор документов, необходимых для заказчика</h2>
              <small>Если у вас есть заказчик, вы можете заполнить с ним данные документы и передать на их кафедру</small>
            </div>
            <div className={styles.filler}></div>
            <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
            <DownloadIcon/>
            </div>
          </div>

          <div className={styles.flexCol3}>
            <div className={styles.text}>
              <h2>Набор необходимых документов</h2>
              <small>Документы необходимо заполнить, распечатать, подписать и отнести на кафедру</small>
            </div>  
            <div className={styles.filler}></div>
            <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
            <DownloadIcon/>
            </div>
          </div>

         </div>
        </section>


        <section id='Полезные ссылки' className={styles.section}>
        <div className={styles.flexRow2}>

        <a target="_blank" rel="noopener noreferrer" href='https://prouniver.ru/'>
          <div className={styles.flexCol2}>
              <div className={styles.text2}>
                <h2>Информация для абитуриентов</h2>
                <small>Программы обучения, проходные баллы,
                стоимость обучения, вступительные испытания</small>
              </div>
              <div className={styles.filler}></div>
              <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
              <LinkIcon/>
            </div>
          </div>
        </a>

            <a target="_blank" rel="noopener noreferrer" href='https://sutd.ru/'>
            <div className={styles.flexCol2}>
              <div className={styles.text2}>
                <h2>Главный сайт ВУЗа</h2>
                <small>Материалы образовательного учреждения, трудоустройство, сотрудничество, информация для иностранцев</small>
              </div>
              <div className={styles.filler}></div>
              <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
              <LinkIcon/>
              </div>
            </div>
            </a>

            <a target="_blank" rel="noopener noreferrer" href='https://portal.sutd.ru/stream/'>
              <div className={styles.flexCol2}>
                <div className={styles.text2}>
                  <h2>Личный кабинет</h2>
                  <small>Образовательные материалы, общение с преподавателями, учебные новости, образовательная информация</small>
                </div>  
                <div className={styles.filler}></div>
                <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
                <LinkIcon/>
                </div>
              </div>
            </a>
  
           </div>

        </section>
      </div>

    </Layout>
  );
};

export default InfoPage;
