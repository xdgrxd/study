import styles from "./CreatePost.module.css";

import { useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.createPost}>
      <h1>Create post</h1>
      <p>Share your ideas with the world.</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input
            type="text"
            name="postTitle"
            required
            placeholder="Choice the amazing title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Image URL</span>
          <input
            type="text"
            name="postImage"
            required
            placeholder="The best image for your post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Description</span>
          <textarea
            name="postBody"
            required
            placeholder="Type the post content here"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Image URL</span>
          <input
            type="text"
            name="postTags"
            required
            placeholder="Tags divider by comma"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>

        <button className="btn">Post now</button>

        {/* {!loading && <button className="btn">Get started</button>}
        {loading && (
          <button className="btn" disabled>
            Wait...
          </button>
        )}

        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  );
};

export default CreatePost;
