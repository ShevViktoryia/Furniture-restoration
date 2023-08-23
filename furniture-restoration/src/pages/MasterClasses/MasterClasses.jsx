import './MasterClasses.css';
import { useSelector } from "react-redux";
import Work from '../../components/Works/Works';
import Timeline from '../../components/Timeline/Timeline';
import FurnitureRestoration from '../../components/FurnitureRestoration/FurnitureRestoration';
import Manual from '../../components/Manual/Manual';

const MasterClasses = () => {
  const works = useSelector(state => state.works.works);
  const timeline = useSelector(state => state.timeline.timeline);
  const furnitureRestoration = useSelector(state => state.furnitureRestoration.furnitureRestoration);
  return (
    <main>
      <section className="masterClasses_screen">
        <div className="wrapper">
          <div className="masterClasses_wrapper">
            <h1 className="masterClasses_title">Нам доверяют мебель с историей в 120 лет</h1>
            <button className='masterClasses_btn'>Смотреть мастер-классы</button>
          </div>
        </div>
      </section>
      <section className="ourWorks_section">
        <div className="wrapper">
          <h2 className="ourWorks_title">Наши работы</h2>
          <div className="ourWorks_wrapper">
            <Work works={works}/>
          </div>
          <button className="ourWorks_btn">Смотреть больше примеров</button>
        </div>
      </section>
      <section className="technology_section">
        <div className="wrapper">
          <h2 className="technology_title">Какие техники изучите на МК</h2>
          <div className="timeline">
            <Timeline timeline={timeline} />
          </div>
        </div>
      </section>
      <section className="secondLife_section">
        <div className="secondLife_wrapper">
        <div className="wrapper">
          <h2 className="secondLife_title">Подари вторую жизнь старой мебели и сохрани историю вашей семьи</h2>
        </div>
        </div>
      </section>
      <section className="furnitureRestoration_section">
        <div className="wrapper">
          <h2 className="furnitureRestoration_title">Мастер-классы по реставрации мебели</h2>
          <div className="furnitureRestoration_wrapper">
            <FurnitureRestoration furnitureRestoration={furnitureRestoration} />
          </div>
        </div>
      </section>
      <section className="joinery_section">
        <div className="wrapper">
          <h2 className="joinery_title">Мастер-классы по столярному делу</h2>
          <div className="joinery_wrapper">
            <div className="joinery">
              <div className="joinery_img console_table"></div>
              <div className="joinery_name">Консольный столик</div>
            </div>
            <div className="joinery">
              <div className="joinery_img joinery_begginer"></div>
              <div className="joinery_name">Столярное дело для начинающих</div>
            </div>
          </div>
        </div>
      </section>
      <section className="manual_section">
        <div className="wrapper">
          <Manual />
        </div>
      </section>
    </main>
  )
}

export default MasterClasses