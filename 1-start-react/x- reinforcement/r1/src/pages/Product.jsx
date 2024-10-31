import { useParams } from "react-router-dom";
import MainPage from "../components/MainPage";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const url = "http://localhost:3000/products";
  const { data: products, loading } = useFetch(url);
  const { id } = useParams();

  return (
    <>
      <MainPage pageTitle={id}>
        {!loading ? (
          <ul>
            <li>teste</li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </MainPage>
    </>
  );
};

export default Product;
