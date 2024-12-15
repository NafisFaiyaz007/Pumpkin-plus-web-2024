import React from "react";
import { motion } from "framer-motion";
import Slideshow from "../slideshow";


import about1 from "../../images/about1.jpg"; // Add more images if necessary
import about2 from "../../images/about2.jpg"; // Add more images if necessary
import about3 from "../../images/about3.jpg"; // Add more images if necessary
import about4 from "../../images/about4.jpg"; // Add more images if necessary
import about5 from "../../images/about5.jpg"; // Add more images if necessary
import about6 from "../../images/about6.jpg"; // Add more images if necessary

import values from "../../images/values.jpg"; // Adjust path as necessary
import vision from "../../images/vision.jpg"
import mission from "../../images/mission.jpg"; // Adjust path as necessary

import { Link } from "react-router-dom";

const AboutExt = () => {
  const images = [about1, about2,about3,about4,about5,about6];
  return (
    <section className=" bg-mywhite-100  pt-36 px-8 md:px-16 lg:px-32 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-myorange-600 text-center sm:mb-12">
          Pumpkin Plus
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-mywhite-100 py-3 sm:p-8 rounded-xl mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg md:text-xl font-redHat  text-justify text-gray-800 mb-6 leading-relaxed">
                PUMPKIN PLUS is a new generation agribusiness company originated
                by the innovator of “Sandbar Cropping”, Mr. Nazmul Chowdhury.
                The company aims to transform agriculture through private-public
                partnerships, R&D, community-led markets, and knowledge
                dissemination, benefiting resource-poor communities striving for
                food security and livelihoods.
              </p>
              <p className="text-lg md:text-xl font-redHat text-justify text-gray-800 mb-6 leading-relaxed">
                Over a decade ago, the journey began with the vision of
                implementing E.F. Schumacher’s principles of "Small is
                Beautiful" and "Helping them help themselves." Pumpkin Plus
                embodies these ideals through practical actions, impacting
                millions globally.
              </p>
              <p className="text-lg md:text-xl font-redHat text-justify text-gray-800 mb-6 leading-relaxed">
                Our mission is to foster sustainable agricultural practices that
                not only ensure food security but also preserve the environment
                for future generations. Through continuous innovation and
                collaboration, we are committed to making a positive impact on
                both the local and global scales.
              </p>
            </div>
            <div>
              {/* <img
                src={about1}
                alt="About Us"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
              <img
                src={image5}
                alt="About Us"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
              <img
                src={image6}
                alt="About Us"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
              <img
                src={image6}
                alt="About Us"
                className="w-full h-48 object-cover rounded-xl shadow-md"
              /> */}
              <Slideshow images={images} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-mywhite-100 rounded-xl mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bebas text-myorange-600 my-8 sm:py-10 text-center">
              Our Vision and Mission
            </h2>
            <div className="grid grid-cols-1 text-justify md:grid-cols-3 gap-8">
              <div className="bg-gray-100 border-2 border-mywhite-500 p-6 rounded-xl shadow-xl flex flex-col">
                <h3 className="text-2xl font-medium text-center text-gray-900 mb-4">
                  Vision
                </h3>
                <p className="text-lg text-gray-800 mb-4 leading-relaxed flex-grow">
                  Transforming traditional agriculture into a women- and
                  youth-led agribusiness model through climate-smart innovations
                  for managing transitional lands (sandbars and riverbeds) to
                  support erosion-affected communities in Bangladesh, fostering
                  self-resilience.
                </p>
                <img
                  src={vision}
                  alt="Vision"
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="bg-gray-100 p-6 border-2 border-mywhite-500 rounded-xl shadow-xl flex flex-col">
                <h3 className="text-2xl font-medium text-center text-gray-900 mb-4">
                  Mission
                </h3>
                <p className="text-lg text-gray-800 mb-4 leading-relaxed flex-grow">
                  Our mission is to empower communities through knowledge and
                  technology, enabling them to achieve self-sufficiency and
                  resilience. We believe in a collaborative approach, working
                  with partners across the public and private sectors to drive
                  meaningful change.
                </p>
                <img
                  src={mission}
                  alt="Mission"
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="bg-gray-100 p-6 border-2 border-mywhite-500 rounded-xl shadow-xl flex flex-col">
                <h3 className="text-2xl font-medium text-center text-gray-900 mb-4">
                  Values
                </h3>
                <p className="text-lg text-gray-800 mb-4 leading-relaxed flex-grow">
                  We are committed to ethical practices, environmental
                  stewardship, and social responsibility. Every step we take is
                  guided by our core values of integrity, innovation, and
                  inclusivity.
                </p>
                <img
                  src={values}
                  alt="Values"
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8">
            <Link to="/services">
              <button className="bg-myorange-600 hover:bg-orange-400 text-white font-bebas text-2xl py-3 px-8 rounded-lg shadow-lg hover:bg-myorange-700 transition-all duration-300">
                Learn more about our services
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutExt;
