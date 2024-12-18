import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faLightbulb,
  faGlobe,
  faFlask,
  faBalanceScale,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Develop and Promote Agribusiness model",
    description:
      "Implemented integrated agribusiness development through capacity building and demonstration, creating employment opportunities for displaced, erosion-affected, and extreme poor communities.",
    icon: faSeedling,
  },
  {
    id: 2,
    title: "Consultancy & Advisory Services",
    description:
      "To Govt. INGOs/NGOs/Private Sectors and Individuals for Agricultural Farming Systems",
    icon: faLightbulb,
  },
  {
    id: 3,
    title: "International Partnership & Networking",
    description:
      "Facilitating global and local partnerships to share knowledge and innovate for a better agricultural future",
    icon: faGlobe,
  },
  {
    id: 4,
    title: "R&D for Climate-Smart Agricultural Innovations",
    description:
      "Conducting research to develop cutting-edge technologies and practices for climate-resilient agriculture",
    icon: faFlask,
  },
  {
    id: 5,
    title: "Policy Advocacy, Influence",
    description:
      "Developing policy and collaborating with National and International organizations for sustainable Development",
    icon: faBalanceScale,
  },
  {
    id: 6,
    title: "Humanitarian response",
    description:
      "Emergency response/s for Humanitarian causes like catastrophic flooding, cold waves and any other events are the part of our cross-cutting activities as and when necessary basis.",
    icon: faBook,
  },
];

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="py-12 px-4 md:px-16 bg-mywhite-500" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bebas text-center mb-12 text-myorange-600">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="shadow-lg rounded-lg overflow-hidden bg-white p-6 flex flex-col items-center justify-between h-full"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                delay: index * 0.1,
                duration: 0.9,
                type: "spring",
                stiffness: 80,
              }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-orange-200 rounded-full">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-orange-600 text-2xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-md text-gray-700 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/Services">
            <button className="bg-mywhite-200 border-2 border-myorange-600 hover:bg-myorange-600 text-gray-900 hover:text-gray-100 font-medium py-2 px-4 rounded-lg">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
