import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import AddProductForm from "../components/AddProductForm";

const Home = () => {
  const url = "http://localhost:3000/products/";
  const { data: products, httpConfig } = useFetch(url);

  return (
    <div>
      

      

      {products &&
        products.map((item) => (
          <li key={item.id}>
            {item.name} - U${item.price} {item.purchases} purchases
          </li>
        ))}


        <h2>Add product</h2>

      
    </div>
  );
};

export default Home;
