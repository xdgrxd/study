import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id: productId } = useParams();

  const url = `http://localhost:3000/products/${productId}`;
  const { data: product } = useFetch(url);

  return (
    <div>
      {product && (
        <>
          <h1>{product.name}</h1>
          <h2>Price: U${product.price}</h2>
          <h2>{product.purchases} purchases</h2>
        </>
      )}
    </div>
  );
};

export default Product;
