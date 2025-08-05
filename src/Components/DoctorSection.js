import React from 'react';
import './DoctorSection.css';
import img23 from '../assets/img23.png';

const DoctorSection = () => {
  return (
    <section className="doctor-section">
      <h2 className="doctor-title">Our Doctors</h2>

      <div className="doctor-content">
        <div className="doctor-img-wrapper">
          <img src={img23} alt="Dr. Poonam Kolkhede Verulkar" className="doctor-img" />
        </div>

        <div className="doctor-info">
          <h3>Dr. Poonam Kolkhede Verulkar</h3>
          <p className="doctor-description">
  Dr. Poonam Kolkhede Verulkar is a highly skilled and compassionate homeopath, renowned for her expertise
  in understanding the mind aspect of patient wellness. With a Bachelor’s Degree in Homeopathic Medicine and
  Surgery (B.H.M.S.) and certifications in Gynaecology and Obstetrics (CGO) and Community Health (CCH),
  she is dedicated to providing personalized, effective healthcare solutions to her patients.
  <br /><br />
  Her journey in homeopathy began with a deep passion for holistic healing and a commitment
  to improving lives. She has treated a wide range of chronic and acute health issues using modern
  homeopathic principles. She strongly believes in treating the individual as a whole rather than just the disease.
  Her compassionate approach builds trust and comfort among patients of all ages.
  Dr. Poonam continuously updates her knowledge through medical seminars and wellness research to deliver the best care possible.
  <br /><br />
  She emphasizes patient education, empowering individuals to take control of their health and lifestyle choices.
  
</p>



          <button className="contact-btn">CONTACT US</button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
