import React from "react";
import "./TreatmentSection.css";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

const TreatmentSection = () => {
  return (
    <div className="treatment-container">
      <div className="treatment-top">
        <div className="treatment-left">
          <h1>
            Personalized <br />
            Homeopathy Treatments <br />
            for Lasting Wellness
          </h1>
        </div>
        <div className="treatment-right">
          <p>
            We’re here to support your body’s natural healing—our remedies are
            gentle, holistic, and tailored to your unique health journey.
          </p>
          <button className="all-services-btn">
            All Services <span>→</span>
          </button>
        </div>
      </div>

      <div className="treatment-cards">
        <div className="treatment-card">
          <img src={img6} alt="Bronchitis" />
          <p>Bronchitis</p>
        </div>
        <div className="treatment-card">
          <img src={img7} alt="Back Pain" />
          <p className="green-text">Back Pain</p>
        </div>
        <div className="treatment-card">
          <img src={img8} alt="Constipation" />
          <p>Constipation</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentSection;
