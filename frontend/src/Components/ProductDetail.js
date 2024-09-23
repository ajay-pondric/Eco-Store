const ProductDetail = () => {
 return(
    <div className="column-3">
      <div className="product-card">
      <div className="product-images">
        <img className="card-img" src={thumbnail} alt="Product image"/>
      </div>
      <div className="card-detail">
        <span>{title}</span>
        <span>{description}</span>
        <div className="price-detail">
        <span className="price">${price}</span>
        <button className="add-button"> + ADD</button>
        </div>
      </div>
      </div>
  </div>
 )
}

export default ProductDetail;