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
import PublicationsAndAchievements from "../components/pulicationAndAchievement";
import { Helmet } from "react-helmet";
import { homeSchema } from "../components/schema/HomeSchema";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pumpkin Plus | Agricultural Innovation & Sandbar Cropping in Bangladesh</title>
        <meta name="description" content="Pioneering sandbar cropping technology and sustainable agriculture in Bangladesh. Empowering farmers and youth entrepreneurs through innovative farming solutions." />
        <meta name="keywords" content="sandbar cropping, agricultural innovation, sustainable farming, Bangladesh agriculture, youth entrepreneurship, farming technology" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pumpkin Plus" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pumpkinplus.com/" />
        <meta property="og:title" content="Pumpkin Plus | Agricultural Innovation & Sandbar Cropping in Bangladesh" />
        <meta property="og:description" content="Pioneering sandbar cropping technology and sustainable agriculture in Bangladesh. Empowering farmers and youth entrepreneurs through innovative farming solutions." />
        <meta property="og:image" content="https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736867/Pumpkin%20Plus%20Website%20Images/about_1_x5dgyk.jpg" />
        <meta property="og:site_name" content="Pumpkin Plus" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.pumpkinplus.com/" />
        <meta name="twitter:title" content="Pumpkin Plus | Agricultural Innovation & Sandbar Cropping in Bangladesh" />
        <meta name="twitter:description" content="Pioneering sandbar cropping technology and sustainable agriculture in Bangladesh. Empowering farmers and youth entrepreneurs through innovative farming solutions." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736867/Pumpkin%20Plus%20Website%20Images/about_1_x5dgyk.jpg" />
        
        <link rel="canonical" href="https://www.pumpkinplus.com/" />
        </Helmet>
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <InnovatorSection />
      <PublicationsAndAchievements />
      <Partners />
      <Footer />

      {/* <AwardSection/> */}
      {/* Other sections or components for your homepage */}
    </div>
  );
};

export default Home;
