import React from "react";
import "./landing.scss";
import LandingInfo from "./LandingInfo";
import Footer from "./Footer";

import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div data-aos="fade-down" className="landing_container">
        <img alt="" src={require("../assets/background.jpg")} />
        <h1 className="landing_text">Biomo</h1>
        <LandingInfo />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Landing;
