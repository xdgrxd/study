import { useContext, useState } from "react";
import "./App.css";

import { useFetch } from "./hooks/useFetch";
import { CounterContext } from "./contexts/CounterContext";

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

    httpConfig(newProduct, "POST");
  };

  const { counter } = useContext(CounterContext);

  return (
    <>
      <form onSubmit={addProduct}>
        <input
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          type="number"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <input
          type="number"
          onChange={(e) => setProductPurchases(e.target.value)}
          value={productPurchases}
        />

        <input type="submit" value="Add product" />
      </form>
      <ul>
        {products && products.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>

      <p>MY FIRST CONTEXT: {counter}</p>
    </>
  );
}

export default App;
