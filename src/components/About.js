import React from "react";

import "./about.scss";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_backgrounds">
        <img
          className="about_bg"
          alt=""
          src="https://images.everydayhealth.com/images/blueberries-101-1440x810.jpg"
        />
        <div class="rounded_bg">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
          </svg>
        </div>
      </div>
      <div className="box_container">
        <div className="timelaps_left">
          <h1>2010</h1>
          <p className="timelaps_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="timelaps_right">
          <h1>Present</h1>
          <p className="timelaps_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
