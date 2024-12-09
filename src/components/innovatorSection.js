import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../images/NAZMUL 1.jpg";
import innovator1 from "../images/innovator 1.jpg";
import innovator2 from "../images/Innovator 2.jpg";
import innovator3 from "../images/innovator 3.jpg";

const InnovatorSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="py-16 px-4 bg-mywhite-500" ref={ref}>
      <div className="container mx-auto">
        <h3 className="text-3xl md:text-5xl font-bebas text-myorange-600 mb-6 text-center">
          <strong>Innovator's Note</strong>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="col-span-2 flex flex-col items-center rounded-lg overflow-hidden p-4 transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col items-center mb-12">
              <img
                src={image1}
                alt="Innovator"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-myorange-600 object-cover shadow-2xl mb-6"
              />

              <p className="text-lg md:text-xl text-gray-700 font-redHat text-center">
                "A Small dream is now a Big dream"
              </p>
            </div>
            <p className="text-base md:text-lg text-gray-700 mb-8 text-justify">
              The company has targeted to engage with over 200,000 highly
              vulnerable river erosion affected displaced communities living in
              unauthorized public places on the flood protection embankments in
              35 (out of 64) erosion prone riverine districts in Bangladesh.
              Simultaneously, the company will extend its technical advisory
              supports through partnerships with any interested donors and
              organizations to at least one million char dwellers living in
              permanently settled charlands in the mighty river system in
              North-West and South-West part of the country.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-lg overflow-hidden p-4 transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/6xnLLTunAaM?si=e911ipfWDKyCWcoV"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-48 md:h-64 object-cover mb-4"
            ></iframe>
            <p className="text-sm md:text-base font-bold text-gray-700 text-center">
              Documentary by Bangladesh National Television
            </p>

            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/FZwGQ10mewM?si=myn9bwD6d_nWQFsC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-48 md:h-64 object-cover mb-4"
            ></iframe>
            <p className="text-sm md:text-base font-bold text-gray-700 text-center">
              TED-Talk Innovators Summit USAID, Washington DC
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <motion.div
            className="flex flex-col items-center rounded-lg overflow-hidden p-4 shadow-xl transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              src={innovator1}
              alt="Innovator"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-lg overflow-hidden p-4 shadow-xl transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              src={innovator2}
              alt="Innovator"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center rounded-lg overflow-hidden p-4 shadow-xl transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              src={innovator3}
              alt="Innovator"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InnovatorSection;
