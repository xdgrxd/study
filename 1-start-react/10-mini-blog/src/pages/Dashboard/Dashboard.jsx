import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../contexts/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const {
    documents: posts,
    loading,
    error,
  } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <p>Manage your posts!</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Posts not found.</p>
          <Link to="/posts/create/" className="btn">
            Create first post
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Title</span>
            <span>Actions</span>
          </div>

          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn outline">
                    View post
                  </Link>

                  <Link to={`/posts/edit/${post.id}`} className="btn outline">
                    Edit post
                  </Link>

                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn danger"
                  >
                    Delete post
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
