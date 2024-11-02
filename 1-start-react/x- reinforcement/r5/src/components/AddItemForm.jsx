import React, { useState } from "react";

const AddItemForm = ({ httpConfig }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

  const addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: productName,
      price: productPrice,
      purchases: productPurchases,
    };

    if (newItem) {
      httpConfig("POST", newItem);
    }
  };

  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        name="productName"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product name"
      />
      <input
        type="text"
        name="productPrice"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        placeholder="Product price"
      />
      <input
        type="text"
        name="productPurchases"
        value={productPurchases}
        onChange={(e) => setProductPurchases(e.target.value)}
        placeholder="Product purchases"
      />
      <input type="submit" value="Add item" />
    </form>
  );
};

export default AddItemForm;
