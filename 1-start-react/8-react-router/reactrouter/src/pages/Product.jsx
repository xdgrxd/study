import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { idItem } = useParams();

  // SINGLE DATA LOADING
  // SINGLE DATA LOADING
  // SINGLE DATA LOADING
  const url = "http://localhost:3000/products/" + idItem;

  const { data: product, loading, error } = useFetch(url);
  console.log(product);

  return (
    <>
      <p>Products ID: {idItem}</p>
      {error && <p>An error occurred...</p>}
      {loading && <p>Loading...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>U${product.price}</p>
        </div>
      )}
    </>
  );
};

export default Product;
