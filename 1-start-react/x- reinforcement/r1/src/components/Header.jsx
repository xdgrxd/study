import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
