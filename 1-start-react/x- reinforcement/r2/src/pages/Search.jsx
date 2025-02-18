import React from "react";
import { useSearchParams, Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = `http://localhost:3000/products?${searchParams}`;
  const { data: products, loading, error } = useFetch(url);

  return (
    <div>
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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Search;
