import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItems } from "../utils/cartSlice";



const ProductsCard = ({ item }) => {
  const { title, thumbnail, description, price, id } = item;
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItems(item));
  }

  return (
    <>
      <div className="column-3">
        <div className="product-card">
          <div className="product-images">
            <Link to={"/singleCard/" + id}>
              <img className="card-img" src={thumbnail} alt="Product image" />
            </Link>
          </div>
          <div className="card-detail">
            <span>{title}</span>
            <span>{description}</span>
            <div className="price-detail">
              <span className="price"> ${price}</span>
              <button className="add-button" onClick={() => handleAddItem(item)}> + ADD</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
