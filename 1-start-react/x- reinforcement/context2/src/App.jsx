import { useState } from "react";
import "./App.css";

import { useFetch } from "./hooks/useFetch";

function App() {
  const url = "http://localhost:3000/products/";
  const { data: products, httpConfig } = useFetch(url);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      purchases: productPurchases,
    };

    console.log(newProduct);

    httpConfig(newProduct, "POST");
  };

  return (
    <>
      <form onSubmit={addProduct}>
        <input
          type="text"
          name="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          name="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <input
          type="number"
          name="productPurchases"
          value={productPurchases}
          onChange={(e) => setProductPurchases(e.target.value)}
        />

        <input type="submit" value="Add product" />
      </form>
      {products && products.map((item) => <li key={item.id}>{item.name}</li>)}
    </>
  );
}

export default App;
