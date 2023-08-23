import './Product.css'

const Product = (props) => {
  const {products} = props;
  if (!products || products.length === 0) return <p>Not found</p>
  
  return (
    products.map(product => {
      return (
        <div className="product" key={product.id}>
          <div className="product_img" style={{background: `url(${product.img})`}}></div>
          <div className="product_title">{product.title}</div>
        </div>
      )
    })
  )
}

export default Product