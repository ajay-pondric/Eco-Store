import { useEffect, useState } from "react";
import { SINGLE_PRODUCT_CATEGORY_API } from "../utils/Constant";
import { Link, useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addItems } from "../utils/cartSlice";

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);
  const {productId}= useParams();
  const dispatch = useDispatch();

useEffect(() => {
  getCategory();
}, [productId]);

const getCategory = async () => {
  const data = await fetch(SINGLE_PRODUCT_CATEGORY_API + productId);
  const json = await data.json();
  setCategories(json.products);
}
const handleAddItem = (item) => {
   dispatch(addItems(item));
}

  return(
    <div className="category-card">
      <div className="container">
        <div className="row">
          {
            categories.map((category) => <div key={category.id} className="column-3">
            <div className="product-card">
             <div className="product-images">
             <Link to={"/singleCard/" + category.id} >
              <img className="card-img" src={category.thumbnail} alt="Product image"/>
              </Link>
            </div>
            <div className="card-detail">
              <span>{category.title}</span>
              <span>{category.description}</span>
              <div className="price-detail">
              <span className="price">${category.price}</span>
              <button className="add-button" onClick={() => {handleAddItem(category)}}> + ADD</button>
              </div>
            </div>
            </div>
        </div>)
          };
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
