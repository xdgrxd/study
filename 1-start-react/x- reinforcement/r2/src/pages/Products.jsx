import React from "react";

import useFetch from "../hooks/useFetch";

// HOOKS
import useFetch from "../hooks/useFetch";

const Products = () => {
  const url = "http://localhost:3000/products";
  const data = useFetch(url);

  console.log(data)

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
