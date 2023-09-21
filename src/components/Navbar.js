import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bg, setBg] = useState("nav_container");

  const addBgColor = () => {
    if (window.scrollY >= 1) {
      setBg("nav_container navbar_With_Bg");
    } else {
      setBg("nav_container");
    }
  };

  window.addEventListener("scroll", addBgColor);

  return (
    <div className={bg}>
      <div className="inner_container">
        <div className="nav_logo_container">Logo</div>
        <div className="nav_links_container">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
