import React from "react";
import "./contact.scss";

import { FaLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { BsTelephoneForward } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_grid">
        {/* <div className="grid_left"></div> */}
        <div className="grid_right">
          <h2>Contact us</h2>
          <p className="contact_summary">
            we are ready to communicate any time
          </p>
          <div className="details_container">
            <FaLocationDot className="contact_icon" />
            <h3 className="details_title">Address</h3>
            <p className="details_text">Georgia, Tbilisi</p>
          </div>
          <div className="details_container">
            <FiMail className="contact_icon" />
            <h3 className="details_title">Email</h3>
            <p className="details_text">Blueberry@gmail.com</p>
          </div>
          <div className="details_container">
            <BsTelephoneForward className="contact_icon" />
            <h3 className="details_title">Phone</h3>
            <p className="details_text">+995 599 999 999</p>
          </div>
          <div className="icons_container">
            <button>
              <AiFillFacebook className="link_icon" />
            </button>
            <button>
              <AiFillInstagram className="link_icon" />
            </button>
            <button>
              <AiFillLinkedin className="link_icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
