import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../images/NAZMUL 1.jpg";
import innovator1 from "../images/innovator 1.jpg";
import innovator2 from "../images/Innovator 2.jpg";
import innovator3 from "../images/innovator 3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const InnovatorSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="py-16 px-4 bg-mywhite-500" ref={ref}>
      <div className="container font-redHat mx-auto">
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
              Transforming lands, transforming lives: The innovation comprises
              the demonstration and widespread adoption in NW Bangladesh of
              ‘sandbar cropping’, an innovative, simple, cost-effective
              technology which transforms silted barren lands created by
              flooding and, as a result, helps thousands of displaced,
              extreme-poor families surviving on the edge of mighty rivers to
              escape from extreme poverty & hunger; climate change and recently
              Covid19 pandemic generated shocks.
            </p>
            <h3 className="text-base md:text-xl pb-2">History of evolution of the innovation:</h3>
            <p className="text-base md:text-lg text-gray-700 mb-8 text-justify">
              Over a decade ago, the noble journey has been initiated with the
              objective “Something is better than nothing”, fuelled by the idea
              of E.F. Schumacher, in developing and promoting appropriate
              technology to reach a greater segment of the underprivileged
              population of the world, with the vision he published an article
              in The Observer, on August 29, 1965 titled “How to help them help
              themselves.” The thought leader contemplated: “The western world
              spends hundreds of millions of pounds on aid to developing
              countries. But what if this aid, so far from reducing misery, is
              actually increasing it?” In 2005, the flagship project
              Disappearing Lands Project led by the innovator, has connected the
              dots between the land slipping from underneath impoverished flood
              and erosion affected communities, and the bleak living conditions
              of their people. The idea has been tested in October 2005,
              (immediate after its conceptual birth in December 24, 2004 at
              Nilhkuti Embankment, in Gaibandha District). The initial trial had
              run only with 177 landless farmers in 2005 and has ended with
              22131 in 2016
            </p>

            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/a-z-m-nazmul-islam-chowdhury-3346073a/?originalSubdomain=bd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="hover:text-myorange-600 transition duration-300"
                />
              </a>

              <a
                href="https://www.facebook.com/nazmul.chowdhury.509"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className="hover:text-myorange-600 transition duration-300"
                />
              </a>
              <a
                href="https://independent.academia.edu/NazmulIslamChowdhury"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bebas text-lg hover:text-myorange-600 transition duration-300"
              >
                ACADEMIA
              </a>
            </div>
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
              src="https://www.youtube.com/embed/lLXHMwuJuM8?si=e9PXhA6L2dSz-rjU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="text-sm md:text-base font-bold text-gray-700 text-center">
              Interview for St.Andrews Awards
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
            className="flex flex-col items-center  overflow-hidden shadow-xl transform transition-transform hover:scale-105"
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
            className="flex flex-col items-center  overflow-hidden shadow-xl transform transition-transform hover:scale-105"
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
            className="flex flex-col items-center  overflow-hidden shadow-xl transform transition-transform hover:scale-105"
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
