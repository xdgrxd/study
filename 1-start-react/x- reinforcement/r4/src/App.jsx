import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState(null);

  const [productName, setProductName] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productPurchases, setProductPurchases] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setProducts(json);
    };

    fetchData();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      purchases: productPurchases,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const addedProduct = await res.json();
    setProducts((prev) => [...prev, addedProduct]);
  };

  return (
    <>
      <form onSubmit={addProduct}>
        <label>
          Product name:
          <input
            type="text"
            name=""
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Product name:
          <input
            type="number"
            name=""
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <label>
          Product name:
          <input
            type="number"
            name=""
            onChange={(e) => setProductPurchases(e.target.value)}
          />
        </label>

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
