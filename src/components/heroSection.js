import React from "react";
import Slideshow from "../components/slideshow";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

// Initialize Google Analytics
ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your actual GA Measurement ID

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

  const images = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
  ];

  // Event tracking function
  const trackDownload = (label) => {
    ReactGA.event({
      category: "PDF",
      action: "Download",
      label,
    });
  };

  return (
    <div className="relative h-screen flex flex-col md:flex-row items-center">
      <div className="w-full md:w-2/3 h-screen relative">
        <Slideshow images={images} />
        <div className="absolute inset-0 bg-black opacity-60 md:hidden"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-100 p-6 md:hidden">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bebas leading-tight mb-4">
            Transforming Agriculture for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl lg:text-xl mb-8">
            Innovating solutions to feed the world while preserving our planet's
            resources.
          </p>
          <a
            href="https://drive.google.com/file/d/1Td6v93rewqqp9QAYhY4u7Uibk-cA98Yy/view?usp=sharing"
            onClick={() => trackDownload("BIDA Poster")}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-myorange-600 items-center mb-2 hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Pumpkin Plus BIDA Conference Poster
          </a>
          <a
            href="https://drive.google.com/file/d/1-IuBIa2ynFypXG0y-oegK4-GBjLGxwWN/view?usp=sharing"
            onClick={() => trackDownload("Brief Synopsis")}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-myorange-600 items-center mb-2 hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Pumpkin Plus Brief Synopsis
          </a>
          <a
            href="https://drive.google.com/file/d/19JkseArEAinzrIUGzQg60d_GFQcwUYdW/view?usp=sharing"
            onClick={() => trackDownload("Presentation")}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-myorange-600 items-center mb-2 hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Pumpkin Plus Presentation
          </a>
          <a
            href="https://drive.google.com/file/d/1ClwOkebAZ7VBQwuYET3cRqHdX7-w1uW5/view?usp=sharing"
            onClick={() => trackDownload("Circle of Success")}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-myorange-600 items-center mb-2 hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Circle of Success
          </a>
        </div>
      </div>

      <div className="hidden md:flex w-full md:w-1/3 h-screen flex-col justify-center bg-gradient-to-b to-mywhite-200 from-mywhite-500 p-8 text-gray-900 relative">
        <div className="relative z-10 text-center md:text-left mt-16 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bebas text-myorange-600 leading-tight mb-4">
            Transforming Agriculture for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl lg:text-xl mb-8">
            Innovating solutions to feed the world while preserving our planet's
            resources.
          </p>
          <a
            href="https://drive.google.com/file/d/1Td6v93rewqqp9QAYhY4u7Uibk-cA98Yy/view?usp=sharing"
            onClick={() => trackDownload("BIDA Poster")}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-myorange-600 items-center hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Pumpkin Plus BIDA Conference Poster
          </a>
          <a
            href="https://drive.google.com/file/d/1-IuBIa2ynFypXG0y-oegK4-GBjLGxwWN/view?usp=sharing"
            onClick={() => trackDownload("Brief Synopsis")}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-myorange-600 items-center hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Pumpkin Plus Brief Synopsis
          </a>
          <a
            href="https://drive.google.com/file/d/19JkseArEAinzrIUGzQg60d_GFQcwUYdW/view?usp=sharing"
            onClick={() => trackDownload("Presentation")}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-myorange-600 items-center hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Pumpkin Plus Presentation
          </a>
          <a
            href="https://drive.google.com/file/d/1ClwOkebAZ7VBQwuYET3cRqHdX7-w1uW5/view?usp=sharing"
            onClick={() => trackDownload("Circle of Success")}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-myorange-600 items-center hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 rounded-lg border-2 border-slate-100 text-white font-bold py-3 px-6 inline-block transition duration-300"
          >
            Circle of Success
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
