import MainPage from "../components/MainPage";

import { Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const Products = () => {
  const url = "http://localhost:3000/products";
  const { data: products, loading, httpConfig } = useFetch(url);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPurchases, setProductPurchases] = useState("");

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
    <>
      <MainPage pageTitle={"Products"}>
        {!loading ? (
          <>
            <ul>
              {products &&
                products.map((item) => (
                  <li key={item.id}>
                    {item.name} - U${item.price} - {item.purchases} purchases
                    <Link to={`/products/${item.id}`}>Learn more</Link>
                  </li>
                ))}
            </ul>
            <form onSubmit={addProduct}>
              <label>
                Product name:
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </label>
              <label>
                Product price:
                <input
                  type="number"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </label>
              <label>
                Product purchases:
                <input
                  type="number"
                  value={productPurchases}
                  onChange={(e) => setProductPurchases(e.target.value)}
                />
              </label>
              <input type="submit" value="Add product" />
            </form>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </MainPage>
    </>
  );
};

export default Products;
