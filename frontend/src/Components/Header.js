import { Link, NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return(
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="column-3">
          <Link to ="/">
            <div className="app-logo">
                ECO Store
            </div>
            </Link>
          </div>
          <div className="column-9">
            <div className="nav-bar">
              <ul>
                <li > <NavLink  to="/"> Home </NavLink></li>
                <li ><NavLink to="/about"> About </NavLink></li>
                <li><NavLink to="/cart">({cartItems.length}) Cart </NavLink></li>
                <li ><NavLink to="/login" className="sign-up">Sign In</NavLink></li>
                <li><NavLink to="/SignUp">Sign Up</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
