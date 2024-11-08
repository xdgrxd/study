import styles from "./Navbar.module.css";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../contexts/AuthContext";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuthValue();

  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.brand : styles.brand)}
      >
        bloguii
      </NavLink>
      <ul className={styles.linkList}>
        <li>
          <NavLink to="/">Feed</NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink to="/posts/create">New post</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </>
        )}
        {!user && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
