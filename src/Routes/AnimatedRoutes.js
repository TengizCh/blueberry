import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../components/About";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import "../index.css";
import Navbar from "../components/Navbar";

import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";

const AnimatedRoutes = () => {
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
    setLoading(false);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2200 });
    setTimeout(function () {
      Aos.refresh();
    }, 400);
  }, [location]);

  return (
    <>
      {!loading ? (
        <div className="loader_container">
          <img alt="" src={require("../assets/background.jpg")} />
          <div className="loader_inner">
            <p className="loader_title">Biomo</p>
            <p data-content="Loading..." className="spin_text">
              Loading...
            </p>
          </div>
        </div>
      ) : (
        <>
          <AnimatePresence>
            <Navbar />
            <Routes location={location} key={location.pathname}>
              <Route exact path="/blueberry" element={<Landing />} />
              <Route path="/blueberry/about" element={<About />} />
              <Route path="/blueberry/contact" element={<Contact />} />
              <Route path="/blueberry/projects" element={<Projects />} />
              <Route path="/blueberry/gallery" element={<Gallery />} />
              <Route path="*" element={<Landing />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default AnimatedRoutes;
