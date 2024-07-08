// src/pages/Home.js

import React from "react";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      {/* Other sections or components for your homepage */}
    </div>
  );
};

export default Home;
