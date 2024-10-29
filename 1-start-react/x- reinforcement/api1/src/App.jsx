import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const url = "http://localhost:3000/products/";

  const { data, loading } = useFetch(url);
  console.log(data);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading &&
        data.map((item) => (
          <li>
            {item.name} - U${item.price} - {item.purchases} Purchases
          </li>
        ))}
    </>
  );
}

export default App;
