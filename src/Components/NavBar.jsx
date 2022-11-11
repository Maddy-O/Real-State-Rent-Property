import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>Real Estate</div>
      <Link to="/" className="navbarLink">
        Home
      </Link>
      <Link to="/favourites" className="navbarLink">
        Favourites
      </Link>
    </div>
  );
};

export default NavBar;
