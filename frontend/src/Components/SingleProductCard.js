import { useEffect, useState } from "react";
import { SINGLE_PRODUCT_API } from "../utils/Constant";
import {   useNavigate, useParams } from "react-router-dom";

const SingleProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [hoverImage, setHoverImage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const data = await fetch(SINGLE_PRODUCT_API + id);
    const json = await data.json();
    setProduct(json);
  }
  const { title, brand, thumbnail, price, rating, stock, images, description } = product;
  return (
    <div className="single-card">
      <div className="container">
        <span className="back-btn" onClick={() => navigate(-1)}>Back </span>
        <h5 className="title">{title}</h5>
          <div className="row">
            <div className="column-3">
              <div className="product-images">
                {images?.map((image) =>
                  <img
                    key={image}
                    src={image}
                    alt="product-image"
                    className="image-hover"
                    onMouseOver={() => setHoverImage(image)}
                    onMouseOut={() => setHoverImage(thumbnail)} />)}
              </div>
            </div>
            <div className="column-6">
              <div className="product-detail">
                <div className="thumbnail">
                  <img src={hoverImage || thumbnail} alt="Product Thumbnail" />
                </div>
                <div className="about-brand">
                  <span className="detail">{brand}</span>
                  <span className="detail">{description}</span>
                  <span className="detail">{rating}</span>
                  <span className="detail">{price}</span>
                  <span className="detail">{stock}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
