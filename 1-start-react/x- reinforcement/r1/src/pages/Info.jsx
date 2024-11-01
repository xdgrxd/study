import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Info = () => {
  const { id } = useParams();
  const {data} = useFetch(`http://localhost:3000/products/${id}`);

  console.log(data);

  return <div>Info</div>;
};

export default Info;
