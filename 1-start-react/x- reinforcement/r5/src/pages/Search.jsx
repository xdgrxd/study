import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = `http://localhost:3000/products?${searchParams}`;

  const { data: products } = useFetch(url);

  return (
    <div>
      {products && products.map((item) => <li key={item.id}>{item.name}</li>)}
    </div>
  );
};

export default Search;
