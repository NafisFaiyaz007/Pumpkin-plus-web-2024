// src/components/sections/HeroSection.js

import React from "react";
// import Navbar from "../components/navbar";
import Slideshow from "../components/slideshow"; // Adjust path as necessary
import image1 from "../images/1.jpg"; // Adjust the path and extension as necessary
import image2 from "../images/2.jpg"; // Adjust the path and extension as necessary
import image3 from "../images/banner.jpg"; // Adjust the path and extension as necessary

const HeroSection = () => {
  const images = [image1, image2, image3];

  return (
    <div className="relative h-screen flex flex-col md:flex-row items-center">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Slideshow on the left 2/3 of the screen for larger screens, full width for smaller screens */}
      <div className="w-full md:w-2/3 h-2/3 md:h-full relative">
        <Slideshow images={images} />
        {/* Overlay for mobile screens */}
        <div className="absolute inset-0 bg-black opacity-60 md:hidden"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8 md:hidden">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-wittgenstein leading-tight mb-4">
            Transforming Agriculture for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl lg:text-xl mb-8">
            Innovating solutions to feed the world while preserving our planet's
            resources.
          </p>
          {/* <a
            href="#about"
            className="bg-mywhite-100 text-black hover:bg-orange-700 rounded-lg md-4 hover:text-white border-2 border-myorange-600 font-bold py-3 px-6 inline-block transition duration-300"
          >
            Learn More
          </a> */}
          <button className="bg-myorange-500 hover:bg-orange-700 rounded-lg mt-4 border-2 border-orange-200 text-white font-bold py-3 px-6 inline-block transition duration-300">
            Donate
          </button>
        </div>
      </div>

      {/* Typography on the right 1/3 of the screen for larger screens, full width for smaller screens */}
      <div className="hidden md:flex w-full md:w-1/3 h-1/3 md:h-full flex-col justify-center bg-gradient-to-br to-slate-200 from-slate-50 p-8 text-gray-900">
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-wittgenstein leading-tight mb-4">
            Transforming Agriculture for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl lg:text-xl mb-8">
            Innovating solutions to feed the world while preserving our planet's
            resources.
          </p>
          {/* <a
            href="#about"
            className="bg-mywhite-100 text-black hover:bg-orange-700 rounded-lg mr-4 hover:text-white border-2 border-myorange-600 font-bold py-3 px-6 inline-block transition duration-300"
          >
            Learn More
          </a> */}
          <button className="bg-myorange-500 hover:bg-orange-700 rounded-lg ml-4 border-2 border-orange-200 text-white font-bold py-3 px-6 inline-block transition duration-300">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
