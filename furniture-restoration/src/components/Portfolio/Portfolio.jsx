import './Portfolio.css'

const Portfolio = (props) => {
  const {portfolio} = props;
  if (!portfolio || portfolio.length === 0) return <p>Not found</p>
  
  return (
    portfolio.map(portfolio => {
      return (
        <div className="portfolio" key={portfolio.id}>
          <div className="portfolio_img" style={{background: `url(${portfolio.img})`}}></div>
        </div>
      )
    })
  )
}

export default Portfolio