import './ProductionStages.css'

const ProductionStages = (props) => {
  const {productionStages} = props;
  if (!productionStages || productionStages.length === 0) return <p>Not found</p>
  
  return (
    productionStages.map(product => {
      return (
        <div className="productionStage" key={product.id}>
          <div className="productionStage_title">{product.id}</div>
          <div className="productionStage_text">{product.text}</div>
        </div>
      )
    })
  )
}

export default ProductionStages