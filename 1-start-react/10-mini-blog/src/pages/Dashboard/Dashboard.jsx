import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../contexts/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const {
    documents: posts,
    loading,
    error,
  } = useFetchDocuments("posts", null, uid);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Manage your posts!</p>
      {posts && posts.length === 0 ? (
        <div>
          <p>Posts not found.</p>
          <Link to="/posts/create/" className="btn">
            Create first post
          </Link>
        </div>
      ) : (
        <div>
          <p>Posts!</p>
        </div>
      )}

      {posts && posts.map((post) => <h3 key={post.id}>{post.title}</h3>)}
    </div>
  );
};

export default Dashboard;
