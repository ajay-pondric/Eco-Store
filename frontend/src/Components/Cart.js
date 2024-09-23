import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems?.reduce((acc, item) => acc + item?.price, 0)
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-section">
        <div className="heading">
          <h5>cart items</h5>
        </div>
          {
            cartItems.length !== 0 ? (
              <>
               <div className="row cart">
                 <div className="clear-item">
                  <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
                  </div>
                 </div>
                {cartItems?.map((item, i) => <CartItems key={i} item={item} />)}
                <div className="sub-total">
                <span>subtotal ({cartItems.length}): ${subtotal}</span>
                </div>
              </>
              ) : (
              <div className="heading">
                <h3>your cart is empty, please add item to cart</h3>
              </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
