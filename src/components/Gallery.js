import React from "react";
import "./gallery.scss";

import { motion } from "framer-motion";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: require("../assets/background.jpg"),
    // thumbnail: "https://picsum.photos/id/1018/250/150/",
  },

  {
    original: require("../assets/background.jpg"),
    // thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: require("../assets/background.jpg"),
    // thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
];

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="gallery_container"
    >
      <div className="gallery_bg"></div>
      <h1 className="gallery_title">Gallery</h1>
      <div className="div_margin"></div>
      <div className="gallery_wrap">
        <ImageGallery
          className="gallery"
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    </motion.div>
  );
};

export default Gallery;
