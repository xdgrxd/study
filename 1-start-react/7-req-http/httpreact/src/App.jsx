import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { data: items, httpConfig } = useFetch(url);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);

  //     return data;
  //   }
  //   fetchData();
  // }, []);

  // PRODUCT ADD
  // PRODUCT ADD
  // PRODUCT ADD
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: JSON.stringify(product),
    // });

    // // DYNAMIC LOADING
    // // DYNAMIC LOADING
    // // DYNAMIC LOADING
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // POST REFACTORING
    // POST REFACTORING
    // POST REFACTORING
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {items &&
          items.map((item, i) => (
            <li key={i}>
              {item.name} - U${item.price}
            </li>
          ))}
      </ul>

      <div className="addProduct">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <input type="submit" value="Add now" />
        </form>
      </div>
    </>
  );
}

export default App;
