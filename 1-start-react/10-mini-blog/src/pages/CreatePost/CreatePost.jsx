import styles from "./CreatePost.module.css";

import { useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();
  
  const { insertDocument, response } = useInsertDocument("posts");


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // URL IMAGE VALIDATION

    // TAGS ARRAY CREATE

    // CHECK ALL VALUES
    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // REDIRECT TO HOMEPAGE
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

        {!response.loading && <button className="btn">Post now</button>}
        {response.loading && (
          <button className="btn" disabled>
            Posting...
          </button>
        )}

        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
