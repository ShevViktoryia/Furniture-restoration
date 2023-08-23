import './Service.css'

const Service = (props) => {
  const {services} = props;
  if (!services || services.length === 0) return <p>Not found</p>
  
  return (
    services.map(service => {
      return (
        <div className="service" key={service.id} style={{background: `${service.bg_color}`}}>
          <div className="service_img" style={{background: `left / cover no-repeat url(${service.img})`}}></div>
          <div className="service_cnt">
            <h3 className="service_title">{service.title}</h3>
            <div className="service_context">
              <p className="service_text">{service.paragraph_1}</p>
              <p className="service_text">{service.paragraph_2}</p>
              <button className='service_btn'>{service.btn_text}</button>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default Service