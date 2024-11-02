import React, { useContext } from "react";
import { useFetch } from "../hooks/useFetch";

import AddProductForm from "../components/AddProductForm";

import { CounterContext } from "../contexts/CounterContext";

const Products = () => {
  const url = "http://localhost:3000/products/";
  const { data: products, loading, error, httpConfig } = useFetch(url);

  const { counter, setCounter } = useContext(CounterContext);

  const addNumber = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      {loading && <p>Loading...</p>}

      {counter}

      <button onClick={addNumber}>Add now</button>

      {products &&
        products.map((item) => (
          <li key={item.id}>
            {item.name} - U${item.price} - {item.purchases} purchases
          </li>
        ))}

      <AddProductForm httpConfig={httpConfig} />
    </>
  );
};

export default Products;
