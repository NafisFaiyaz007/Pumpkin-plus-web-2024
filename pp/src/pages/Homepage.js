// src/pages/Home.js

import React from "react";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import ServicesSection from "../components/serviceSection";
import InnovatorSection from "../components/innovatorSection";
// import AwardSection from "../components/awardSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Partners from "../components/partnerSection";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <InnovatorSection/>
      <Partners/>
      <Footer/>

      {/* <AwardSection/> */}
      {/* Other sections or components for your homepage */}
    </div>
  );
};

export default Home;
