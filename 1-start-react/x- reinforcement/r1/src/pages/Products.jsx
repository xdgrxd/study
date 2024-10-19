import "./Products.css";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const url = "http://localhost:3000/products";

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const json = await data.json();

      setProductData(json);
    };

    fetchData();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    const product = {
      name: productName,
      price: productPrice,
      purchase_count: productPurchases,
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const addedProduct = await res.json();
      setProductData((antigo) => [...antigo, addedProduct]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>Add product</h2>

      <form onSubmit={addProduct} className="addProductForm">
        <input
          type="text"
          name="productName"
          placeholder="Product name"
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          type="number"
          name="productPrice"
          placeholder="Price"
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <input
          type="text"
          name="productPurchases"
          placeholder="Purchases"
          required
          onChange={(e) => setProductPurchases(e.target.value)}
          value={productPurchases}
        />

        <input type="submit" value="Add product" />
      </form>

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
