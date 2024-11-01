import { Link, useParams } from "react-router-dom";
import MainPage from "../components/MainPage";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();

  const url = `http://localhost:3000/products/${id}`;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <MainPage pageTitle={product && product.name}>
        {error && <p>Error was ocurred.</p>}
        {!loading ? (
          <>
            {product && (
              <div>
                <p>U${product.price}</p>
                <Link to={`/products/${product.id}/info`}>More info</Link>
              </div>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </MainPage>
    </>
  );
};

export default Product;
