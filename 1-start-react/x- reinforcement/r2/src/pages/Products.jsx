import React from "react";

// HOOKS
import { useFetch } from "../hooks/useFetch";

const Products = () => {
  const url = "http://localhost:3000/products";
  const { data: items } = useFetch(url);

  return (
    <div>
      <h1>Products</h1>
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
