import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { aboutSchema } from "./schema/AboutSchema";


const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Trigger animation when 50% of section is visible
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 2.0 },
      });
    }
  }, [controls, inView]);

  return (
    
    
    <motion.section>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
        <meta property="og:title" content="Who is Pumpkin Plus? | Agricultural Innovation" />
        <meta property="og:description" content="PUMPKIN PLUS is a new generation agribusiness company pioneering sandbar cropping and agricultural innovation in Bangladesh. Learn about our mission and impact." />
        <meta property="og:image" content="https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736867/Pumpkin%20Plus%20Website%20Images/about_1_x5dgyk.jpg" />
        <meta property="og:url" content="https://www.pumpkinplus.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pumpkin Plus Bangladesh" />
      </Helmet>
      ref={ref}
      role="region"
      aria-label="About Pumpkin Plus"
      className="bg-blur py-6 md:py-12 mx-4 md:mx-16 my-4 md:my-6 bg-white"
      initial={{ opacity: 0.5, y: 50 }}
      animate={controls}
    
      <div className="container shadow-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">
          {/* Left side: Text content */}
          <motion.div
            className="md:pr-8 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bebas text-myorange-600 md:mb-6 md:mt-6">
              Who is PUMPKIN PLUS?
            </h1>
            <h4 className="text-xl md:text-2xl font-redHat text-gray-900 mb-4 md:mb-6">
              A Field Innovation Lab For Riverbed Farming System
            </h4>
            <p className="text-base md:text-lg font-redHat text-justify text-gray-800 mb-4 md:mb-6 leading-relaxed">
              PUMPKIN PLUS is a new generation agribusiness company has
              originated by the innovator of “Sandbar Cropping”. Over a decade
              ago, the journey began with the vision of implementing E.F.
              Schumacher’s principles of "Small is Beautiful" and "Helping them
              help themselves." Pumpkin Plus embodies these ideals through
              practical actions, impacting millions globally.
            </p>
            <p className="text-base md:text-lg font-redHat text-justify text-gray-800 mb-4 md:mb-6 leading-relaxed">
              The company has evolved by Mr. Nazmul Chowdhury, with his
              visionary ideas to transform agriculture from a Charity-Based
              Approach to a Producer Led Commercial and Water Efficient
              Agribusiness Model by encouraging and engaging private public
              partnership. Simultaneously, conduct R&D for new innovation, crops
              diversification, and updating knowledge on farming system, develop
              Village Based Market System and Knowledge Generation Hub for
              others for wider replications and greater benefits of the extreme
              poor communities, who are struggling for survival and combating
              causes like food insecurity & hunger, malnourishment,
              unemployment, gender inequality and environmental disasters,
              shocks and hazards as a chronic matter.
            </p>
            <div className="flex justify-center">
              <Link to="/About">
                <button className="bg-mywhite-200 border-2 border-myorange-600 hover:bg-myorange-600 text-gray-900 hover:text-gray-100 font-medium mb-3 py-2 px-4 rounded-lg">
                  Know more
                </button>
              </Link>
            </div>
          </motion.div>
          {/* Right side: YouTube video */}
          <motion.div
            className="order-1 md:order-2 w-full relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="w-full aspect-video relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7ZN92tAmdFg?si=fuj0lfmuNgd3vyUd"
                title="Introduction to Pumpkin Plus and Sandbar Cropping Innovation"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
