import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import image1 from "../../images/1.jpg"; // Adjust path as necessary
import image2 from "../../images/2.jpg"; // Adjust path as necessary
import image3 from "../../images/banner.jpg"; // Adjust path as necessary

const AboutExt = () => {
  return (
    <section className="bg-gradient-to-br font-wittgenstein from-mywhite-100 to-mywhite-200 py-12 px-10 md:px-16 lg:px-30 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
          What do we do
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <p className="text-lg font-open-sans text-justify text-gray-800 mb-6 leading-relaxed">
            PUMPKIN PLUS is a new generation agribusiness company originated by
            the innovator of “Sandbar Cropping”, Mr. Nazmul Chowdhury. The
            company aims to transform agriculture through private-public
            partnerships, R&D, community-led markets, and knowledge
            dissemination, benefiting resource-poor communities striving for
            food security and livelihoods.
          </p>
          <p className="text-lg font-open-sans text-justify text-gray-800 mb-6 leading-relaxed">
            Over a decade ago, the journey began with the vision of implementing
            E.F. Schumacher’s principles of "Small is Beautiful" and "Helping
            them help themselves." Pumpkin Plus embodies these ideals through
            practical actions, impacting millions globally.
          </p>
          <p className="text-lg font-open-sans text-justify text-gray-800 mb-6 leading-relaxed">
            Our mission is to foster sustainable agricultural practices that not
            only ensure food security but also preserve the environment for
            future generations. Through continuous innovation and collaboration,
            we are committed to making a positive impact on both the local and
            global scales.
          </p>
        </div>

        <Slide easing="ease" className="mb-12">
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${image1})`,
                paddingTop: "56.25%",
              }} // 16:9 aspect ratio
              className="bg-cover bg-center relative rounded-lg shadow-lg"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${image2})`,
                paddingTop: "56.25%",
              }} // 16:9 aspect ratio
              className="bg-cover bg-center relative rounded-lg shadow-lg"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${image3})`,
                paddingTop: "56.25%",
              }} // 16:9 aspect ratio
              className="bg-cover bg-center relative rounded-lg shadow-lg"
            ></div>
          </div>
        </Slide>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Vision and Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Vision
              </h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed flex-grow">
                At Pumpkin Plus, our vision is to create a world where
                sustainable agriculture is the norm and food security is a
                reality for everyone. We strive to be leaders in agricultural
                innovation, setting benchmarks for others to follow.
              </p>
              <img
                src={image1}
                alt="Vision"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Mission
              </h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed flex-grow">
                Our mission is to empower communities through knowledge and
                technology, enabling them to achieve self-sufficiency and
                resilience. We believe in a collaborative approach, working with
                partners across the public and private sectors to drive
                meaningful change.
              </p>
              <img
                src={image2}
                alt="Mission"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Values
              </h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed flex-grow">
                We are committed to ethical practices, environmental
                stewardship, and social responsibility. Every step we take is
                guided by our core values of integrity, innovation, and
                inclusivity.
              </p>
              <img
                src={image3}
                alt="Values"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutExt;
