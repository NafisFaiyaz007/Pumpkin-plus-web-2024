import React from "react";
import Slideshow from "../components/slideshow";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/banner.jpg";
// import companyLogo from "../images/logo.png"; // Replace with your actual company logo path

const HeroSection = () => {
  const images = [image1, image2, image3];

  return (
    <div className="relative h-screen flex flex-col md:flex-row items-center">
      {/* Slideshow */}
      <div className="w-full md:w-2/3 h-screen relative">
        <Slideshow images={images} />
        {/* Overlay for mobile screens */}
        <div className="absolute inset-0 bg-black opacity-60 md:hidden"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 md:hidden">
          {/* <div className="mb-8">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="w-20 md:hidden"
            />
          </div> */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bebas leading-tight mb-4">
            Transforming Agriculture for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl lg:text-xl mb-8">
            Innovating solutions to feed the world while preserving our planet's
            resources.
          </p>
          <button className="bg-myorange-500 hover:bg-orange-700 rounded-lg mt-4 border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300">
            Donate
          </button>
        </div>
      </div>

      {/* Typography */}
      <div className="hidden md:flex w-full md:w-1/3 h-screen flex-col justify-center bg-gradient-to-br to-slate-200 from-slate-50 p-8 text-gray-900 relative">
        {/* Company Logo (visible on all screens) */}
        {/* <div className="absolute top-4 mt-8 left-1/2 transform -translate-x-1/2 text-center">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-32 mb-4 md:w-48"
          />
        </div> */}
        <div className="relative z-10 text-center md:text-left mt-16 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bebas text-gray-800 leading-tight mb-4">
            Transforming Agriculture for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl lg:text-xl mb-8">
            Innovating solutions to feed the world while preserving our planet's
            resources.
          </p>
          <button className="bg-myorange-600 hover:bg-orange-700 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
