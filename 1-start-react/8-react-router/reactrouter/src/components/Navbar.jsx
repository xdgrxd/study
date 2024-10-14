// REACT ROUTER LINKS
// REACT ROUTER LINKS
// REACT ROUTER LINKS

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link> */}

      <NavLink
        to="/"
        // CONDITIONAL CLASS IS ACTIVE (NEED REPLICATE TO ALL LINKS)
        // CONDITIONAL CLASS IS ACTIVE (NEED REPLICATE TO ALL LINKS)
        // CONDITIONAL CLASS IS ACTIVE (NEED REPLICATE TO ALL LINKS)
        // className={(isActive) => (isActive ? "linkActive" : "linkNotActive")}
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
