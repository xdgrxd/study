import styles from "./EditPost.module.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tagsArray.join(", ");

      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();
  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // URL IMAGE VALIDATION
    try {
      new URL(image);
    } catch (error) {
      setFormError("The image must be a URL.");
    }

    // TAGS ARRAY CREATE
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // CHECK ALL VALUES
    if (!title || !image || !tags || !body) {
      setFormError("Please fill all the inputs.");
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // REDIRECT TO HOMEPAGE
    navigate("/");
  };

  return (
    <div className={styles.editPost}>
      {post && (
        <>
          <h1>Editing post: {post.title}</h1>
          <p>Change the post data.</p>

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

            <p className={styles.previewTitle}>Image preview:</p>
            <img
              className={styles.imagePreview}
              alt={post.title}
              src={post.image}
            />

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
              <span>Tags</span>
              <input
                type="text"
                name="postTags"
                required
                placeholder="Tags divider by comma"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>

            {!response.loading && <button className="btn">Confirm edit</button>}
            {response.loading && (
              <button className="btn" disabled>
                Posting...
              </button>
            )}

            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
