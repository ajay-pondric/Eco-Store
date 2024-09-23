import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleProductCard from "./Components/SingleProductCard";
import Cart from "./Components/Cart";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import SingIn from "./Components/SignIn";
import SingUp from "./Components/SingUp";
import CategoryCard from "./Components/CategoryCard";
import Body from "./Components/Body";
import PrivateRoute from "./Components/PrivateRoute";

const About = lazy(() => import("./Components/About"));

const Main = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    
      <div className="main">
        <Router>
        {isAuthenticated && <Header />}
        <Routes>
          <Route path="/signUp" element={<SingUp />} />
          <Route path="/login" element={<SingIn />} />
          <Route  element={<PrivateRoute isAuthenticated={isAuthenticated} />}> 
          <Route path="/" element={<Body />} />
          <Route path="/singleCard/:id" element={<SingleProductCard />} />
          <Route path="/about" element={<Suspense fallback={"Loading.."}><About /></Suspense>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:productId" element={<CategoryCard />} />
          </Route>
        </Routes>
        </Router>
      </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={appStore}><Main /></Provider>);
