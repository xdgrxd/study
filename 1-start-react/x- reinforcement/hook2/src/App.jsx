import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./App.css";
import { CounterContext } from "./context/CounterContext";

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
      {products && products.map((item) => <li key={item.id}>{item.name}</li>)}
      <form onSubmit={addProduct}>
        <input
          type="text"
          name=""
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input
          type="number"
          name=""
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <input
          type="number"
          name=""
          onChange={(e) => setProductPurchases(e.target.value)}
          value={productPurchases}
        />

        <input type="submit" value="Add product" />
      </form>

      <p>Test here: {counter}</p>
    </>
  );
}

export default App;
