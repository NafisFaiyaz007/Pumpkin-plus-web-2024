import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <motion.section
      ref={ref}
      className="bg-blur py-6 md:py-12 mx-4 md:mx-16 my-4 md:my-6 bg-white"
      initial={{ opacity: 0.5, y: 50 }}
      animate={controls}
    >
      <div className="container shadow-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">
          {/* Left side: Text content */}
          <motion.div
            className="md:pr-8 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-wittgenstein text-gray-900 md:mb-6 md:mt-6">
              About Us
            </h1>
            <h4 className="text-xl md:text-2xl font-wittgenstein text-gray-900 mb-4 md:mb-6">
              Transforming lands, Transforming Lives
            </h4>
            <p className="text-base md:text-lg font-open-sans text-justify text-gray-800 mb-4 md:mb-6 leading-relaxed">
              PUMPKIN PLUS is a new generation agribusiness company originated
              by the innovator of “Sandbar Cropping”, Mr. Nazmul Chowdhury. The
              company aims to transform agriculture through private-public
              partnerships, R&D, community-led markets, and knowledge
              dissemination, benefiting resource-poor communities striving for
              food security and livelihoods.
            </p>
            <p className="text-base md:text-lg font-open-sans text-justify text-gray-800 mb-4 md:mb-6 leading-relaxed">
              Over a decade ago, the journey began with the vision of
              implementing E.F. Schumacher’s principles of "Small is Beautiful"
              and "Helping them help themselves." Pumpkin Plus embodies these
              ideals through practical actions, impacting millions globally.
            </p>
          </motion.div>
          {/* Right side: YouTube video */}
          <motion.div
            className="order-1 md:order-2 w-full relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="w-full pb-9/16 relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7ZN92tAmdFg?si=fuj0lfmuNgd3vyUd"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7ZN92tAmdFg?si=fuj0lfmuNgd3vyUd"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
