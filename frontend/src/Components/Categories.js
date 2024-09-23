import { useState, useEffect } from "react";
import { PRODUCTS_CATEGORIES_API } from "../utils/Constant";
import { Link } from "react-router-dom";


const Categories = () => {
const [categories, setCategories] = useState([]);

useEffect(() => {
  getCategories();
}, []);

const getCategories = async () => {
  const data = await fetch(PRODUCTS_CATEGORIES_API);
  const json = await data.json();
  setCategories(json)
}
  return(
    <>
    <div className="products-categories">
      <div className="container">
        <div className="row">
        {
        categories.map((category) => <span key={category.name} className="category-name" ><Link to={"/category/" + category.slug?.toLowerCase()}>{category.name} </Link></span>)
      }
        </div>
      </div>
    </div>
    </>
  );
};

export default Categories;
