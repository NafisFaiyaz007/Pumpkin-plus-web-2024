// src/components/sections/HeroSection.js

import React from "react";
import backgroundImage from "../images/1.jpg"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-wittgenstein text-white leading-tight mb-4">
          Transforming Agriculture for a Sustainable Future
        </h1>
        <p className="text-2xl md:text-l text-gray-200 mb-8">
          Innovating solutions to feed the world while preserving our planet's
          resources.
        </p>
        <div>
          <a
            href="#about"
            className="bg-myorange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
