import React from "react";
import "./footer.scss";

import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import { FaLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { BsTelephoneForward } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_links">
        <p>You can find us here</p>
        <div className="links_inner">
          <button>
            <AiFillFacebook className="footer_icon" />
          </button>
          <button>
            <AiFillInstagram className="footer_icon" />
          </button>
          <button>
            <AiFillLinkedin className="footer_icon" />
          </button>
        </div>
      </div>
      <div className="footer_details">
        <div className="footer_contact">
          <div className="contact_icon_div">
            <FiMail className="footer_icon" />
            <p>Blueberry@gmail.com</p>
          </div>
          <div className="contact_icon_div">
            <FaLocationDot className="footer_icon" />
            <p>Georgia, Tbilisi</p>
          </div>
          <div className="contact_icon_div">
            <BsTelephoneForward className="footer_icon" />
            <p>+995 599 999 999</p>
          </div>
        </div>
        <div className="footer_navigation">
          <Link className="footer_nav_links">Home</Link>
          <Link className="footer_nav_links">About</Link>
          <Link className="footer_nav_links">Contact</Link>
        </div>
      </div>
      <div className="footer_copy">Copyright LLC Blueberry Factory</div>
    </div>
  );
};

export default Footer;
