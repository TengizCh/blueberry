import React from "react";
import "./landing.scss";
import LandingInfo from "./LandingInfo";

const Landing = () => {
  return (
    <div className="landing_container">
      <img
        alt=""
        src="https://images.everydayhealth.com/images/blueberries-101-1440x810.jpg"
      />
      <h1 className="landing_text">Blueberry Factory</h1>
      <LandingInfo />
    </div>
  );
};

export default Landing;
