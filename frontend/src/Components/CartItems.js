import { useDispatch } from "react-redux";
import { removeItems } from "../utils/cartSlice";

const CartItems = ({ item }) => {
  if (!item) {
    return null; 
  }

  const dispatch = useDispatch();
  const { title, id, thumbnail, price } = item;
  const handleRemoveItem = () => {
    dispatch(removeItems(id));
  }

  return (
    <>
      <div className="row cart">
        <div className="white-bg">
          <div className="column-3">
            <div className="cart-items">
              <img className="cart-image" src={thumbnail} alt="image" />
            </div>
          </div>
          <div className="column-3">
            <div className="product-title">
              <span>{title}</span>
            </div>
          </div>
          <div className="column-3">
            <div className="price">
              <span>Price: ${price}</span>
            </div>
          </div>
          <div className="column-3">
            <div className="remove-btn">
              <button onClick={() => handleRemoveItem(id)} className="remove-item">Remove item</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
