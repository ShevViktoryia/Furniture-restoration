import "./DesktopFooter.css"
import { NavLink } from "react-router-dom"

const DesktopFooter = () => {
  return (
    <footer>
      <div className="footer_wrapper">
          <div className="org_info">
            <p className="org_name">ИП Колодезников-Матчитов Н.И.</p>
            <p className="org_num">ИНН 143515646663</p>
          </div>
          <nav className="footer_nav">
            <div className="footer_service">
              <NavLink className="footer_link">Мастер-классы</NavLink>
              <NavLink className="footer_link">Мебель на заказ</NavLink>
            </div>
            <div className="footer_contacts">
              <NavLink className="footer_link">Контакты</NavLink>
              <NavLink className="footer_link">О нас</NavLink>
            </div>
          </nav>
          <div className="politics">
            <p className="confid_politic">Политика кофиденциальности</p>
            <p className="contract_offer">Договор оферты</p>
          </div>
          <div className="social_links">
            <div className="telegram"><a href="#"></a></div>
            <div className="instagram"><a href="#"></a></div>
            <div className="viber"><a href="#"></a></div>
          </div>
        </div>
    </footer>
  )
}

export default DesktopFooter