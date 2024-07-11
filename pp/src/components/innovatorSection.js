import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../images/NAZMUL 1.jpg";
// import image2 from "../images/2.jpg";

const InnovatorSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="py-12 px-4 md:px-6 bg-mywhite-100" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <img
            src={image1}
            alt="Innovator"
            className="w-48 h-48 rounded-full object-cover shadow-2xl mb-4"
          />
          <h3 className="text-2xl md:text-3xl font-wittgenstein text-gray-900 mb-4 text-center">
            <strong>"A Small dream is now a Big dream"</strong>
          </h3>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row font-open-sans items-center md:justify-between space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col items-center md:items-start">
            <motion.div
              className="flex flex-col items-center rounded-lg overflow-hidden bg-mywhite-100 p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-700 mb-8 text-justify">
                The company has targeted to engage with over 200,000 highly
                vulnerable river erosion affected displaced communities living
                in unauthorized public places on the flood protection
                embankments in 35 (out of 64) erosion prone riverine districts
                in Bangladesh. Simultaneously, the company will extend its
                technical advisory supports through partnerships with any
                interested donors and organizations to at least one million char
                dwellers living in permanently settled charlands in the mighty
                river system in North-West and South-West part of the country.
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <motion.div
                className="flex flex-col items-center rounded-lg overflow-hidden bg-mywhite-100 p-6"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/6xnLLTunAaM?si=e911ipfWDKyCWcoV"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <p className="text-base text-gray-700 text-center">
                  Description for Card 1. This could be achievements or projects
                  by the innovator.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center rounded-lg overflow-hidden bg-mywhite-100 p-6"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/FZwGQ10mewM?si=myn9bwD6d_nWQFsC"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-full h-56 object-cover mb-4"
                ></iframe>
                <p className="text-base text-gray-700 text-center">
                  Description for Card 2. This could be achievements or projects
                  by the innovator.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovatorSection;
