import React from 'react';
import AboutHeroBanner from '../Components/AboutHeroBanner';
import AboutClinicSection from '../Components/AboutClinicSection';
import ConsultationSection from '../Components/ConsultationSection';
import DoctorSection from '../Components/DoctorSection';
import StatsSection from '../Components/StatsSection';
import SpecialtySection from '../Components/SpecialtySection'; 
import TestimonialsSection from '../Components/TestimonialsSection';
import ContactSection from '../Components/ContactSection';

const AboutUsPage = () => {
  return (
    <>
      <AboutHeroBanner />
      <AboutClinicSection />
      <ConsultationSection />
      <DoctorSection />
      <StatsSection />
      <SpecialtySection /> 
      <TestimonialsSection />
      <ContactSection id="contact" />
      
    </>
  );
};

export default AboutUsPage;
