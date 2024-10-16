import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  const [userQuery, setUserQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?=" + userQuery);
  };

  return (
    <div>
      <h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setUserQuery(e.target.value)}
            value={userQuery}
          />
          <input type="submit" value="Search" />
        </form>
      </h1>

      <Products />
    </div>
  );
};

export default Home;
