import "./MobileFooter.css"
import { NavLink } from "react-router-dom"

const MobileFooter = () => {
  return (
    <footer className="footer_mobile">
      <div className="footer_wrapper_mobile">
        <div className="wrapper">
          <div className="social_links_mobile">
            <div className="telegram"><a href="#"></a></div>
            <div className="instagram"><a href="#"></a></div>
            <div className="viber"><a href="#"></a></div>
          </div>
          <nav className="footer_nav_mobile">
            <div className="footer_service">
              <NavLink className="footer_link">Мастер-классы</NavLink>
              <NavLink className="footer_link">Мебель на заказ</NavLink>
            </div>
            <div className="footer_contacts">
              <NavLink className="footer_link">Контакты</NavLink>
              <NavLink className="footer_link">О нас</NavLink>
            </div>
          </nav>
          <div className="politics_mobile">
            <p className="confid_politic">Политика кофиденциальности</p>
            <p className="contract_offer">Договор оферты</p>
          </div>
          <div className="org_info_mobile">
            <p className="org_name">ИП Колодезников-Матчитов Н.И.</p>
            <p className="org_num">ИНН 143515646663</p>
          </div>
          <p className="developer">Сайт разработан @vera.borisova_</p>
        </div>
      </div>
    </footer>
  )
}

export default MobileFooter