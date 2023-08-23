import './Main.css';
import { useSelector } from "react-redux";
import Product from '../../components/Product/Product'
import Service from '../../components/Service/Service'
import { useState, useEffect } from 'react';
import DesktopWarranty from '../../components/Warranty/DesktopWarranty/DesktopWarranty' 
import MobileWarranty from '../../components/Warranty/MobileWarranty/MobileWarranty';

const Main = () => {
  const products = useSelector(state => state.products.products);
  const services = useSelector(state => state.services.services);
  const [state, setMobileWV] = useState({mobileWV: false});
  const { mobileWV } = state;
  useEffect(() => {
    const setResponsiveWarranty = () => window.innerWidth < 1200 ? setMobileWV((prevState) => ({ ...prevState, mobileWV: true })) : setMobileWV((prevState) => ({ ...prevState, mobileWV: false }));

    setResponsiveWarranty();
    window.addEventListener("resize", () => setResponsiveWarranty());

    return () => {
      window.removeEventListener("resize", () => setResponsiveWarranty());
    }
  }, []);

  return (
    <main>
      <section className="screen_section">
        <div className="wrapper">
          <div className="screen_content">
            <div className="img_screen"></div>
            <div className="screen_text">
              <p className="subheading">Столярная мастерская NIKASON BRAND</p>
              <h2 className="heading">Изготовление и реставрация мебели</h2>
              <p className="text">Авторская мебель ручной работы, сделанная с душой и трепетом.</p>
              <button>Смотреть услуги</button>
              <div className="screen_contacts">
                <div className="telegram_cnt">
                  <div className="telegram_icon"><a href=""></a></div>
                </div>
                <div className="instagram_cnt">
                  <div className="instagram_icon"><a href=""></a></div>
                </div>
                <div className="viber_cnt">
                  <div className="viber_icon"><a href=""></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="wrapper">
          <div className="about_wrapper">
            <h2 className="title">NIKASON BRAND это</h2>
            <div className="about_list">
              <div className="about_item">
                <div className="about_text">Производство авторской <br/> мебели из массива</div>
              </div>
              <div className="about_item">
                <div className="about_text">Реставрация, редизайн, ремонт деревянной мебели</div>
              </div>
              <div className="about_item">
                <div className="about_text">Производство мебели по индивидуальным размерам</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="wrapper">
          <h2>Более 10 лет мы производим</h2>
          <div className="product_list">
            <Product products={products} />
          </div>
        </div>
      </section>
      <section id='aboutUs' className="family_section">
        <div className="wrapper">
          <h2 className="family_title">NIKASON BRAND это семейная мастеркая</h2>
          <div className="family_content">
            <div className="img_family"></div>
            <div className="wrapper">
              <div className="family_text">
                <h3 className="heading">Саргылана и Никита Колодезниковы-Матчитовы</h3>
                <p>Саргылана - рестовратор-декоратор, преображает и дарит вторую жизнь старой мебели.</p>
                <p className="family_cnt">Никита - мастер по дереву, вся мебель делается его умелыми руками.</p>
                <button className='family_btn'>Подробнее о нас</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video_section">
        <div className="wrapper">
          <h2 className="heading">Посмотрите видео о нас</h2>
          <div className="video_wrapper"></div>
        </div>
      </section>
      <section className="service_section">
        <div className="wrapper">
          <h2 className='service_heading'>Наши услуги</h2>
          <div className="service_wrapper">
            <Service services={services}></Service>
          </div>
        </div>
      </section>
      <section className="warranty_section">
        <div className="wrapper">
          {mobileWV ? <MobileWarranty /> : <DesktopWarranty />}
        </div>
      </section>
    </main>
  )
}

export default Main