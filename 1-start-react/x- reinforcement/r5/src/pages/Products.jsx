import React from "react";
import { useFetch } from "../hooks/useFetch";

import { Link } from "react-router-dom";

import AddItemForm from "../components/AddItemForm";

const Products = () => {
  const url = "http://localhost:3000/products/";
  const { data: products, loading, httpConfig } = useFetch(url);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {products &&
        products.map((item) => (
          <li key={item.id}>
            {item.name} - U${item.price} - {item.purchases} purchases{" "}
            <Link to={`/products/${item.id}`}>Learn more</Link>
          </li>
        ))}

      <AddItemForm httpConfig={httpConfig} />
    </div>
  );
};

export default Products;
