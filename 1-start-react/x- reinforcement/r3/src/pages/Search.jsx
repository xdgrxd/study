import React from "react";

import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const url = "http://localhost:3000/products?";
  const [searchParam] = useSearchParams();
  const { data: products } = useFetch(url + searchParam);

  return (
    <div>
      {products && products.map((item) => <li key={item.id}>{item.name}</li>)}
    </div>
  );
};

export default Search;
