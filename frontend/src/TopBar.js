import React from "react";
import "./TopBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TopBar = ({ onToggleForm }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <div onClick={onToggleForm} className="demo-btn-wrapper">
          <button className="book-demo-btn">Book A Demo ▸</button>
        </div>
      </div>
      <div className="top-bar-right">
        <span>
          <FontAwesomeIcon icon={faPhone} /> +91 80816 38914
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />
          contactus@a2developers.org
        </span>
      </div>
    </div>
  );
};

export default TopBar;
