import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="navItem" to="/">Home</NavLink>
        <NavLink className="navItem" to="/products">Products</NavLink>
        <NavLink className="navItem" to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
