
import Layout from '../../app/layouts/DashboardLayout';
import { useScrollNavigation } from '../../features/fullScreenNav/useScrollNavigation';
import { SectionNavigator } from '../../features/fullScreenNav/sectionNavigator';
import styles from './styles.module.css';
import { ActionIcon, Button, Flex, Notification } from '@mantine/core';
import Table from '../../widgets/Table'
import {Title,Text} from '@mantine/core'
import DownloadIcon from "../../shared/assets/icons/svg-raw/Download.svg?react";
import LinkIcon from "../../shared/assets/icons/svg-raw/Link.svg?react";


const InfoPage = () => {
  const sections = ['Расписание', 'ВКР', 'Полезные ссылки'];
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
      
      {/* <Notification className='notif' withBorder color="grape" radius="lg" title="">
            Оставаясь на сайте вы соглашаетесь с условиями пользовательского соглашения
          </Notification> */}
        {/* {sections.map((_, index) => (
          <section className={styles.section} key={index}>
            <Carousel data = {data} />
          </section>
        ))} */}
        <section className={styles.section}>
        <div className={styles.flexRow}>
            
            <div className={styles.flexCol}>
              <div className={styles.text}>
                <h3>Инструкция, титульные листы, раздаточные материалы</h3>
                <p>Подробная инструкция и необходимые материалы для выполнения ВКР</p>
              </div>
              <div className={styles.filler}></div>
              <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
              <DownloadIcon/>
              </div>
            </div>
  
            <div className={styles.flexCol}>
              <div className={styles.text}>
                <h3>Набор документов, необходимых для заказчика</h3>
                <p>Если у вас есть заказчик, вы можете заполнить с ним данные документы и передать на их кафедру</p>
              </div>
              <div className={styles.filler}></div>
              <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
              <DownloadIcon/>
              </div>
            </div>
  
            <div className={styles.flexCol}>
              <div className={styles.text}>
                <h3>Набор необходимых документов</h3>
                <p>Документы необходимо заполнить, распечатать, подписать и отнести на кафедру</p>
              </div>  
              <div className={styles.filler}></div>
              <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
              <DownloadIcon/>
              </div>
            </div>
  
           </div>
        </section>
        <section className={styles.section}>

          <div className={styles.flexRow}>
            
          <div className={styles.flexCol}>
            <div className={styles.text}>
              <h3>Инструкция, титульные листы, раздаточные материалы</h3>
              <p>Подробная инструкция и необходимые материалы для выполнения ВКР</p>
            </div>
            <div className={styles.filler}></div>
            <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
            <DownloadIcon/>
            </div>
          </div>

          <div className={styles.flexCol}>
            <div className={styles.text}>
              <h3>Набор документов, необходимых для заказчика</h3>
              <p>Если у вас есть заказчик, вы можете заполнить с ним данные документы и передать на их кафедру</p>
            </div>
            <div className={styles.filler}></div>
            <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
            <DownloadIcon/>
            </div>
          </div>

          <div className={styles.flexCol}>
            <div className={styles.text}>
              <h3>Набор необходимых документов</h3>
              <p>Документы необходимо заполнить, распечатать, подписать и отнести на кафедру</p>
            </div>  
            <div className={styles.filler}></div>
            <div className={styles.IconWrapper} onClick={(event) => event.preventDefault()}>
            <DownloadIcon/>
            </div>
          </div>

         </div>
        </section>
        <section  className={styles.section}>


        <div className={styles.flexRow2}>

        <a target="_blank" rel="noopener noreferrer" href='https://prouniver.ru/'>
          <div className={styles.flexCol2}>
              <div className={styles.text2}>
                <h3>Информация для абитуриентов</h3>
                <p>Программы обучения, проходные баллы,
                стоимость обучения, вступительные испытания</p>
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
                <h3>Главный сайт ВУЗа</h3>
                <p>Материалы образовательного учреждения, трудоустройство, сотрудничество, информация для иностранцев</p>
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
                  <h3>Личный кабинет</h3>
                  <p>Образовательные материалы, общение с преподавателями, учебные новости, образовательная информация</p>
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
