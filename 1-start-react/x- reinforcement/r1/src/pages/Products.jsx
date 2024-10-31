import MainPage from "../components/MainPage";

import { NavLink } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Products = () => {
  const url = "http://localhost:3000/products";
  const { data: products, loading } = useFetch(url);

  return (
    <>
      <MainPage pageTitle={"Products"}>
        {!loading ? (
          <ul>
            {products &&
              products.map((item) => (
                <li key={item.id}>
                  {item.name} - U${item.price} - {item.purchases} purchases
                  <NavLink to={`/product/${item.name}`}>Learn more</NavLink>
                </li>
              ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </MainPage>
    </>
  );
};

export default Products;
