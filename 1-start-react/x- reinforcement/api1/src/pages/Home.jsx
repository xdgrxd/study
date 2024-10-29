import "./Home.css";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const url = "http://localhost:3000/products/";
  const { data: products, loading } = useFetch(url);

  return (
    <div>
      <h1>Home</h1>

      {loading && <p>Loading...</p>}
      {products &&
        products.map((item) => (
          <li key={item.id}>
            {item.name} - U${item.price} - {item.purchases} Purchases
          </li>
        ))}
    </div>
  );
};

export default Home;
