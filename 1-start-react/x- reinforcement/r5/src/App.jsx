import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "http://localhost:3000/products/";

  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setProducts(json);
    };

    fetchData();
  }, []);

  const newProduct = {
    name: productName,
    price: productPrice,
    purchases: productPurchases,
  };

  const addProduct = async (e) => {
    e.preventDefault();

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

        <input type="submit" value="Add new product" />
      </form>
      <h1>Products</h1>
      <ul>
        {products &&
          products.map((item) => (
            <li key={item.id}>
              {item.name} - U${item.price} - {item.purchases} Purchases
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
