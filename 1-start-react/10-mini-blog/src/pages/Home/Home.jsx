import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>See the latest posts!</h1>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search anything here"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn dark">Search</button>
      </form>
      <div>
        <h1>Posts</h1>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Not found posts</p>
            <Link to="/posts/create" className="btn">
              Create first post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
