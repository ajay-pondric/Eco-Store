import { useEffect, useState } from "react";
import { ALL_PRODUCT_API, BANNER } from "../utils/Constant";
import ProductsCard from "./ProductsCard";
import Categories from "./Categories";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    const data = await fetch(ALL_PRODUCT_API);
    const json = await data.json();
    setProducts(json.products);
    setFilter(json.products);
    setArray(json.products);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const searchFilter = filter.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    setProducts(searchFilter);
    setSearch("");
  }

  const handleSelectOption = (select) => {
    switch(select) {
      case "price high to low" :
        const priceHighToLow = array.slice().sort(function(a, b) {return b.price - a.price});
        setProducts(priceHighToLow);
        break;
        case "price low to high" :
          const priceLowToHigh = array.slice().sort(function(a, b) {return a.price - b.price});
          setProducts(priceLowToHigh);
          break;
          case "top rated" :
          const topRated = array.filter((item) => item.rating >= 4.5);
          setProducts(topRated);
          break;
          default: setProducts(array);
    }
  }


  return (
    <>
    <Categories />
      <div className="body">
        <div className="container">
          <div className="bg-white">
            <div className="row">
              <div className="column-6">
                <div className="find-near">
                  <h4>Find a store near by you!</h4>
                </div>
              </div>
              <div className="column-6">
                <div className="product-img">
                  <img src={BANNER} alt="Product Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <div className="container">
          <div className="bg-filter">
            <div className="quick-filter">
            <span >Quick Filters</span>
            </div>
          <div className="row">
            <div className="column-6">
              <div className="search-filter" >
                <form className="form-section"  onSubmit={handleSearch}>
                  <input className="search-input" value={search}  type="text" placeholder="search for product" onChange={((e) => {setSearch(e.target.value);})} />
                </form>
              </div>
            </div>
            <div className="column-3">
              <div className="price">
                <select className="button-filter" onChange={((e) => handleSelectOption(e.target.value))}>
                  <option>Select the filter</option>
                  <option value={"price low to high"}>Price Low To High</option>
                  <option value={"price high to low"}>Price High To Low</option>
                  <option value={"top rated"}>Top Rated</option>
                </select>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="card-section">
        <div className="container">
          <div className="row">
            {
              products.map((product) => <ProductsCard key={product.id} item={product} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
