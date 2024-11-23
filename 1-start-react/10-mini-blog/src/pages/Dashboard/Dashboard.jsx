import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../contexts/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const posts = [];

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Manage your posts!</p>
      {posts && posts.length === 0 ? (
        <div>
          <p>Posts not found.</p>
          <Link to="/posts/create/" className="btn">Create first post</Link>
        </div>
      ) : (
        <div>
          <p>Posts!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
