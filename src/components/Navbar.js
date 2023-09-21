import React, { useState } from "react";
import "./navbar.scss";

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
          <p className="link">Home</p>
          <p className="link">About</p>
          <p className="link">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
