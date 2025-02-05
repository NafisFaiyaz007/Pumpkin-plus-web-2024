import React from "react";
import Slideshow from "../components/slideshow";

// import banner1 from "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736873/Pumpkin%20Plus%20Website%20Images/banner1_myck7g.jpg";
// import banner2 from "../images/banner2.jpg";
// import banner3 from "../images/banner3.jpg";
// import banner4 from "../images/banner4.jpg";
// import banner5 from "../images/banner5.jpg";
// import banner6 from "../images/banner6.jpg";
// import banner7 from "../images/banner7.jpg";
// import banner8 from "../images/banner8.jpg";

import { Link } from "react-router-dom";

// import companyLogo from "../images/logo.png"; // Replace with your actual company logo path

const HeroSection = () => {
  const banner1 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736873/Pumpkin%20Plus%20Website%20Images/banner1_myck7g.jpg";
  const banner2 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736869/Pumpkin%20Plus%20Website%20Images/banner2_f7rvun.jpg";
  const banner3 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736870/Pumpkin%20Plus%20Website%20Images/banner3_xhdf7w.jpg";
  const banner4 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736871/Pumpkin%20Plus%20Website%20Images/banner4_cimze9.jpg";
  const banner5 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736872/Pumpkin%20Plus%20Website%20Images/banner5_jcfqlo.jpg";
  const banner6 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736875/Pumpkin%20Plus%20Website%20Images/banner6_shyjpj.jpg";
  const banner7 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736873/Pumpkin%20Plus%20Website%20Images/banner7_quezwd.jpg";
  const banner8 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736872/Pumpkin%20Plus%20Website%20Images/banner8_lypfmx.jpg";


  const images = [banner1,banner2,banner3,banner4,banner5,banner6,banner7,banner8];

  return (
    <div className="relative h-screen flex flex-col md:flex-row items-center">
      {/* Slideshow */}
      <div className="w-full md:w-2/3 h-screen relative">
        <Slideshow images={images} />
        {/* Overlay for mobile screens */}
        <div className="absolute inset-0 bg-black opacity-60 md:hidden"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-100 p-6 md:hidden">
          {/* <div className="mb-8">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="w-20 md:hidden"
            />
          </div> */}
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bebas leading-tight mb-4">
            Transforming Agriculture for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl lg:text-xl mb-8">
            Innovating solutions to feed the world while preserving our planet's
            resources.
          </p>
          <a
            href="/Donate"
            className="bg-myorange-600 items-center hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Donate for Emergency Response
          </a>
        </div>
      </div>

      {/* Typography */}
      <div className="hidden md:flex w-full md:w-1/3 h-screen flex-col justify-center bg-gradient-to-b to-mywhite-200 from-mywhite-500 p-8 text-gray-900 relative">
        {/* Company Logo (visible on all screens) */}
        {/* <div className="absolute top-4 mt-8 left-1/2 transform -translate-x-1/2 text-center">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-32 mb-4 md:w-48"
          />
        </div> */}
        <div className="relative z-10 text-center md:text-left mt-16 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bebas text-myorange-600 leading-tight mb-4">
            Transforming Agriculture for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl lg:text-xl mb-8">
            Innovating solutions to feed the world while preserving our planet's
            resources.
          </p>
          <Link to="/Donate">
            <button
             
              className="bg-myorange-600 items-center hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
            >
              Donate for Emergency Response
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
