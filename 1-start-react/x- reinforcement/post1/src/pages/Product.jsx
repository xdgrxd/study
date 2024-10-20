import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
  const { idItem } = useParams();
  const [product, setProduct] = useState([]);
  const url = "http://localhost:3000/products/" + idItem;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const json = await data.json();

      setProduct(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque repellat aliquid perspiciatis perferendis cupiditate blanditiis praesentium et vero minus accusantium autem, error nostrum. Laboriosam neque tempore eius facere reprehenderit.</p>
    </div>
  );
};

export default Product;
