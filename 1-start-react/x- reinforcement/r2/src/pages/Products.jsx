import React, { useState } from "react";

// HOOKS
import { useFetch } from "../hooks/useFetch";

const Products = () => {
  const url = "http://localhost:3000/products";
  const { data: items } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };

  return (
    <div>
      <h1>Products</h1>

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
          <input type="submit" value="Add product" />
        </label>
      </form>

      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - U${product.price}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
