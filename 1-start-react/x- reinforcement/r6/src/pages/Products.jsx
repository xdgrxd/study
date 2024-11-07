import FormAddProduct from "../components/FormAddProduct";

import { useFetch } from "../hooks/useFetch";

import { CounterContext } from "../contexts/CounterContext";
import { useContext } from "react";

const Products = () => {
  const url = "http://localhost:3000/products";
  const { data: products, httpConfig } = useFetch(url);

  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <p>Counter Context: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add now</button>

      {products && products.map((item) => <li key={item.id}>{item.name}</li>)}

      <FormAddProduct httpConfig={httpConfig} />
    </div>
  );
};

export default Products;
