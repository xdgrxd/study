import React from "react";

import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const Products = () => {
  const url = "http://localhost:3000/products/";
  const { data: products, loading, httpConfig } = useFetch(url);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      purchases: productPurchases,
    };

    httpConfig("POST", newProduct);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      <form onSubmit={addProduct}>
        <label>
          Name
          <input
            type="text"
            name="productName"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
        </label>
        <label>
          Price
          <input
            type="number"
            name="productPrice"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
        </label>
        <label>
          Purchases
          <input
            type="number"
            name="productPurchases"
            onChange={(e) => setProductPurchases(e.target.value)}
            value={productPurchases}
          />
        </label>
        <input type="submit" value="Add product" />
      </form>
      {products && products.map((item) => <li key={item.id}>{item.name}</li>)}
    </div>
  );
};

export default Products;
