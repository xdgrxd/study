// REACT ROUTER LINKS
// REACT ROUTER LINKS
// REACT ROUTER LINKS

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>;
};

export default Navbar;
