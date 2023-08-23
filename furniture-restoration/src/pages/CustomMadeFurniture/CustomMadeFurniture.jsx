import './CustomMadeFurniture.css';
import Advantages from '../../components/Advantages/Advantages';
import { useSelector } from "react-redux";
import Portfolio from '../../components/Portfolio/Portfolio';
import ProductionStages from '../../components/ProductionStages/ProductionStages';
import Clients from '../../components/Clients/Clients';

const CustomMadeFurniture = () => {
  const advantages = useSelector(state => state.advantages.advantages);
  const portfolio = useSelector(state => state.portfolio.portfolio);
  const productionStages = useSelector(state => state.productionStages.productionStages);
  const clients = useSelector(state => state.clients.clients);
  return (
    <main>
      <section className="customMadeFurniture_screen">
        <div className="wrapper">
          <div className="customMadeFurniture_wrapper">
            <p className="customMadeFurniture_preheading">Воплотим вашу любую задумку в реальность</p>
            <h2 className="customMadeFurniture_title">Столярная мастерская</h2>
            <p className="customMadeFurniture_brand">NIKASON BRAND</p>
            <button className="customMadeFurniture_btn">Заказать мебель</button>
          </div>
        </div>
      </section>
      <section className="advantages_section">
        <h2 className="advantages_title">Почему выбирают нас</h2>
        <div className="advantages_wrapper">
          <Advantages advantages={advantages} />
        </div>
      </section>
      <section className="portfolio_section">
        <div className="wrapper">
          <h2 className="portfolio_title">Портфолио</h2>
          <div className="portfolio_wrapper">
            <div className="mainPortfolio_img"></div>
            <div className="portfolio_slider">
              <div className="right_arrow"></div>
              <div className="portfolio_slider_wrapper">
                <Portfolio portfolio={portfolio} />
              </div>
              <div className="left_arrow"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="productionStages_section">
        <div className="wrapper">
          <h2 className="productionStages_title">Этапы производства</h2>
          <div className="productionStages_wrapper">
            <ProductionStages productionStages={productionStages} />
          </div>
        </div>
      </section>
      <section className="clients_section">
        <div className="wrapper">
          <h2 className="clients_title">Клиенты о нас</h2>
          <div className="clients_wrapper">
            <Clients clients={clients} />
          </div>
        </div>
      </section>
      <section className="contactReq_section">
        <div className="wrapper">
          <h2 className="contactReq_title">Оставьте заявку и мы с вами свяжемся</h2>
          <button className="contactReq_btn">Оставить заявку</button>
        </div>
      </section>
    </main>
  )
}

export default CustomMadeFurniture