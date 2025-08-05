import React from 'react';
import './DoctorCard.css';
import img from '../assets/img23.png';

const DoctorCard = () => {
  return (
    <div className="container doctor-container">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img src={img} alt="Dr. Poonam Kolkhede Verulkar" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-7">
          <h2 className="doctor-heading">Dr. Poonam Kolkhede Verulkar</h2>
          <h5 className="doctor-subheading">B.H.M.S, CCH, CGO</h5>
          <p className="doctor-director">Director, Herbal Nest</p>
          <p className="doctor-description">
            Dr. Poonam is a skilled and compassionate homeopath with over 20 years of experience in treating a wide range of chronic and acute conditions. Her holistic approach and dedication to patient care have earned her the trust and gratitude of thousands of patients.
          </p>
          <p className="doctor-description">
            She believes in addressing the root cause of illness rather than just symptoms, offering personalized treatment plans tailored to each patient's needs. Over the years, she has successfully treated conditions like hormonal imbalance, skin disorders, PCOS, respiratory issues, gastric problems, and chronic pains using classical homeopathy.
          </p>
          <p className="doctor-description">
            Her vision is to bring natural, side-effect-free healing to more people through awareness and compassionate care, making Herbal Nest a center for complete wellness.
          </p>
          <button className="btn doctor-button">CONTACT US</button>
        </div>
      </div>

      {/* Stats Section with Background */}
      <div className="doctor-stats-section mt-5">
        <div className="row text-center doctor-stats">
          <div className="col-4">
            <h3>20+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="col-4">
            <h3>5K+</h3>
            <p>Happy Patients</p>
          </div>
          <div className="col-4">
            <h3>100+</h3>
            <p>Treatments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
