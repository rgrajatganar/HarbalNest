import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NaturalHealingSection from './Components/NaturalHealingSection';
import TreatmentSection from './Components/TreatmentSection';
import SecureSessionSection from "./Components/SecureSessionSection";
import ModernHomeopathySection from "./Components/ModernHomeopathySection";
import TestimonialSection from './Components/Testimonials';
import ContactSectionWithImages from './Components/ContactSectionWithImages';
import SexualHealthSection from './Components/SexualHealthSection';
import SkinHairCareSection from './Components/SkinHairCareSection';

// Pages
import StomachCarePage from './Pages/StomachCarePage';
import RespiratoryCarePage from './Pages/RespiratoryCarePage';
import PainManagementPage from './Pages/PainManagementPage';
import AboutUsPage from './Pages/AboutUsPage';
import SkinDiseasesPage from './Pages/SkinDiseasesPage';
import StomachGastricPage from './Pages/StomachGastricPage';
import AllergyPage from './Pages/AllergyPage'; 
import InfectionsPage from './Pages/InfectionsPage';

export default function App() {
  return (
    <Router>
      <div className="container-fluid bg-light">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NaturalHealingSection />
              <TreatmentSection />
              <SecureSessionSection />
              <ModernHomeopathySection />
              <TestimonialSection />
              
              <div id="appointment">
                <ContactSectionWithImages />
              </div>
            </>
          } />
          <Route path="/sexual-health" element={<SexualHealthSection />} />
          <Route path="/skin-hair-care" element={<SkinHairCareSection />} />
          <Route path="/stomach-care" element={<StomachCarePage />} />
          <Route path="/respiratory-care" element={<RespiratoryCarePage />} />
          <Route path="/pain-management" element={<PainManagementPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/skin-diseases" element={<SkinDiseasesPage />} />
          <Route path="/stomach-gastric" element={<StomachGastricPage />} />
          <Route path="/allergy" element={<AllergyPage />} />
          <Route path="/infections" element={<InfectionsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
