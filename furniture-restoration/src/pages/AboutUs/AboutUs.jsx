import './AboutUs.css';
import Newspaper_1 from '../../assets/img/news_1.png';
import Newspaper_2 from '../../assets/img/news_2.png';
import Newspaper_3 from '../../assets/img/news_3.png';
import Newspaper_4 from '../../assets/img/news_4.png';

const AboutUs = () => {
  return (
    <main>
      <section className="aboutUs_section">
        <div className="wrapper">
          <div className="aboutUs_wrapper">
            <p className="aboutUs_title">История создания мастерской</p>
            <p className="aboutUs_subtitle">NIKASON BRAND</p>
            <div className="aboutUs_screen"></div>
          </div>
        </div>
      </section>
      <section className="aboutUs_experience">
        <div className="wrapper">
          <div className="aboutUs_experience_wrapper">
            <div className="experience_item">
              <h3 className="expr_title">+10 лет</h3>
              <p className="expr_description">На рынке по производству мебели</p>
            </div>
            <div className="experience_item">
              <h3 className="expr_title">+1500</h3>
              <p className="expr_description">Изготовлено мебели</p>
            </div>
            <div className="experience_item">
              <h3 className="expr_title">120 лет</h3>
              <p className="expr_description">Самой старинной мебели для реставрации</p>
            </div>
          </div>
        </div>
      </section>
      <section className="master_hand">
        <div className="wrapper">
          <div className="master_hand_wrapper">
            <div className="master_hand_img"></div>
            <div className="about_master_hand">
              <p className="master_hand_name">Никита Колодезников-Матчитов</p>
              <p className="hand_made_prof">Основатель мастерской</p>
              <div className="master_hand_history">
                <p>С детства я был окружен творческими людьми, мой дедушка был строителем и мастером по дереву. Спустя много лет и мне передалась его любовь к дереву - в свободное время мастерил для себя небольшие  изделия из древесины.</p>
                <p>Более десяти лет назад построил двухэтажный гараж, на втором этаже расположилась наша мастерская. Начинал производство практически “с нуля”, с каждой зарплаты понемногу откладывал на покупку инстурментов и станков.</p>
                <p>Постепенно начали появляться первые заказы. Несколько лет назад мы с супругой решили еще заняться ремонтом и реставрацией мебели. Эту идею предложили сами клиенты, поскольку периодически приходили с таким запросом. В основном, реставрацией занимается супруга Саргылана. Мы с ней одна сплоченная, дружная и отличная команда.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='philosophy'>
        <div className="wrapper">
          <div className="philosophy_wrapper">
            <h2 className="philosophy_title">Философия мастерской NIKASON</h2>
            <p className="philosophy_subtitle">Создавать что-то по-настоящему ценное и уникальное. <br />Дарить радость и уют в каждый дом</p>
          </div>
        </div>
      </section>
      <section className="mass_media">
        <div className="wrapper">
          <div className="mass_media_wrapper">
            <h2 className="mass_media_title">СМИ о нас</h2>
            <p className="mass_media_subtitle">О нашей мастерской пишут многие издания Якутии</p>
            <div className="news_wrapper">
              <img src={Newspaper_1} alt="newspaper" className="newspaper" />
              <img src={Newspaper_2} alt="newspaper" className="newspaper" />
              <img src={Newspaper_3} alt="newspaper" className="newspaper" />
              <img src={Newspaper_4} alt="newspaper" className="newspaper" />
            </div>
          </div>
        </div>
      </section>
      <section className="leave_request">
        <div className="wrapper">
          <div className="leave_request_wrapper">
            <h2 className="leave_request_title">Оставьте заявку и мы с вами свяжемся</h2>
            <button className="leave_request_btn">Оставить заявку</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs;