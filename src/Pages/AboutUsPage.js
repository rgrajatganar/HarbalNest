import React from 'react';
import AboutHeroSection from '../Components/AboutHeroSection';
import AboutClinicSection from '../Components/AboutClinicSection';
import ConsultationSection from '../Components/ConsultationSection';
import DoctorCard from '../Components/DoctorCard'; // ✅ Add this

const AboutUsPage = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutClinicSection />
      <ConsultationSection />
      <DoctorCard /> {/* ✅ Render here */}
    </>
  );
};

export default AboutUsPage;


