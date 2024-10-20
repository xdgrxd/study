import "./App.css";

import { useFetch } from "./hooks/useFetch";
import { useState } from "react";
// import { useContext } from "react";

import ChangeCounter from "./components/ChangeCounter";

import { useCounterContext } from "./hooks/useCounterContext";

import { useTitleColorContext } from "./hooks/useTitleColorContext";

function App() {
  const url = "http://localhost:3000/products";
  const { data: products, httpConfig, loading, error } = useFetch(url);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const addProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      purchases: productPurchases,
    };

    httpConfig(newProduct, "POST");

    setProductName("");
    setProductPrice("");
    setProductPurchases("");
  };

  const { color } = useTitleColorContext();

  return (
    <>
      <h1 style={{ color: color }}>Comple Context</h1>

      <p>Counter Value: {counter}</p>
      <ChangeCounter />

      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

      <form onSubmit={addProduct}>
        <input
          type="text"
          name="productName"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          type="number"
          name="productPrice"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <input
          type="number"
          name="productPurchases"
          onChange={(e) => setProductPurchases(e.target.value)}
          value={productPurchases}
        />
        <input type="submit" value="Add product" />
      </form>

      <h1>Products</h1>

      {products &&
        products.map((item) => (
          <li key={item.id}>
            {item.name} - U${item.price} - {item.purchases} Purchases
          </li>
        ))}
    </>
  );
}

export default App;
