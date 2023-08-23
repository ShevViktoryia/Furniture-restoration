import './FurnitureRestoration.css'

const FurnitureRestoration = (props) => {
  const {furnitureRestoration} = props;
  if (!furnitureRestoration || furnitureRestoration.length === 0) return <p>Not found</p>
  
  return (
    furnitureRestoration.map(furniture => {
      return (
        <div className="furnitureRestoration" key={furniture.id}>
          <div className="furnitureRestoration_img" style={{background: `center / contain no-repeat url(${furniture.img})`}}></div>
          <div className="furnitureRestoration_name">{furniture.condition}</div>
        </div>
      )
    })
  )
}

export default FurnitureRestoration