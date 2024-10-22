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

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <>
      <h1 style={{ color: color }}>Comple Context</h1>
      <button onClick={() => setTitleColor("RED")}>RED</button>
      <button onClick={() => setTitleColor("BLUE")}>BLUE</button>
      <button onClick={() => setTitleColor("GREEN")}>GREEN</button>
      <button onClick={() => setTitleColor("k")}>DEFAULT</button>

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
