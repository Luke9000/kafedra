import Layout from '../../app/layouts/DashboardLayout';
import styles from './styles.module.css';
import { works } from "../../entities/works";
import { events } from "../../entities/events";
import SimpleVerticalSlider from '../../widgets/SimpleVerticalSlider'
const MainPage = () => {


  return (
    <Layout>
      
    
      {/* <Header></Header> */}

       
      <div className={styles.sections} >
        <section id='События'>
          <SimpleVerticalSlider elements={events}></SimpleVerticalSlider>  
        </section>

        <section id='Работы студентов' >
          <SimpleVerticalSlider elements={works}></SimpleVerticalSlider>  
        </section>
      </div>

    </Layout>
  );
};

export default MainPage;
