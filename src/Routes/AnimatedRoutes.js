import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../components/About";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const AnimatedRoutes = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [homeActive, setHomeActive] = useState(false);

  const location = useLocation();

  //   useEffect(() => {
  //     setTimeout(() => setLoading(true), 2000);
  //     setLoading(false);
  //   }, []);

  //   const handleChange = () => {
  //     if (location.pathname === "/") {
  //       setHomeActive(false);
  //     } else {
  //       setHomeActive(true);
  //     }
  //   };

  return (
    // <>
    //   {!loading ? (
    //     <div className="loader_container">
    //       <div className="loader_inner">
    //         <BiLogoReact className="spin_icon" />
    //         <p data-content="Loading..." className="spin_text">
    //           Loading...
    //         </p>
    //       </div>
    //     </div>
    //   ) : (
    //     <>
    <AnimatePresence>
      {/* <Navbar /> */}
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
    //     </>
    //   )}
    // </>
  );
};

export default AnimatedRoutes;
