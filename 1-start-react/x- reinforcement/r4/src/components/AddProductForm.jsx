import { useState } from "react";

import { useFetch } from "../hooks/useFetch";

const AddProductForm = ({ httpConfig }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

  const url = "http://localhost:3000/products/";

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
      <label>
        Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={productPurchases}
          onChange={(e) => setProductPurchases(e.target.value)}
        />
      </label>
      <input type="submit" value="Add product" />
    </form>
  );
};

export default AddProductForm;
