import React from "react";
import "./SecureSessionSection.css";
import img9 from "../assets/img9.png";
import { HashLink } from "react-router-hash-link";

const SecureSessionSection = () => {
  return (
    <div className="secure-session">
      <div className="secure-left">
        <h2>Secure Your First<br />Session with Us</h2>
        <HashLink smooth to="/#appointment">
          <button className="consult-btn1">Consult Now</button>
        </HashLink>
      </div>
      <div className="secure-right">
        <img src={img9} alt="Consultation" />
      </div>
    </div>
  );
};

export default SecureSessionSection;

