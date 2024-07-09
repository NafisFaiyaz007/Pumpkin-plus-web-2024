// src/pages/Home.js

import React from "react";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import ServicesSection from "../components/serviceSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />

      <AboutSection />
      {/* Other sections or components for your homepage */}
    </div>
  );
};

export default Home;
