import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About bloguii</h2>
      <p>
        This project was developed with React on the front-end and Firebase on
        the back-end.
      </p>

      <Link to="/posts/create" className="btn">
        Create post
      </Link>
    </div>
  );
};

export default About;
