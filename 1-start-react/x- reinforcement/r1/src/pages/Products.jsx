import "./Products.css";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const url = "http://localhost:3000/products";

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const json = await data.json();

      setProductData(json);
    };

    fetchData();
  }, []);

  return (
    <div>      
      <h1>Products</h1>

      <ul className="productFlex">
        {productData &&
          productData.map((item) => (
            <li key={item.id} className="productBox">
              <p className="nameProduct">{item.name}</p>
              <p className="priceProduct">U$ {item.price}</p>
              <p className="salesQty">{item.purchase_count} Sales</p>

              <NavLink className="learnMoreLink" to={`/products/${item.id}`}>
                +Learn more
              </NavLink>

              <button className="buyBtn">Buy now</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
