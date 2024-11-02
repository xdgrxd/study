import React from "react";

import { useState } from "react";

const AddProductForm = () => {
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
    <form onSubmit={addProduct}>
      <input
        type="text"
        value={productName}
        name="product-name"
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        value={productPrice}
        name="product-price"
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <input
        type="number"
        value={productPurchases}
        name="product-purchases"
        onChange={(e) => setProductPurchases(e.target.value)}
      />
      <input type="submit" value="Add product" />
    </form>
  );
};

export default AddProductForm;
