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

const services = [
  {
    id: 1,
    title: "Develop and Promote Agri-Business Systems",
    description:
      "Through technology promotion (Transitional land i.e. charlands and Riverbeds) for the erosion affected displaced extreme poor communities in Bangladesh and beyond",
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
    title: "International Collaboration and Networking",
    description:
      "Facilitating global partnerships to share knowledge and innovate for a better agricultural future.",
    icon: faGlobe,
  },
  {
    id: 4,
    title: "R&D for Climate-Smart Agricultural Innovations",
    description:
      "Conducting research to develop cutting-edge technologies and practices for climate-resilient agriculture.",
    icon: faFlask,
  },
  {
    id: 5,
    title: "Policy Advocacy and Influencing",
    description:
      "Developing policy and collaborating with National and International organizations for sustainable Development ",
    icon: faBalanceScale,
  },
  {
    id: 6,
    title: "Knowledge Management",
    description:
      "For the use of barren and unproductive common pool resources management",
    icon: faBook,
  },
];

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.8, // Trigger when 50% of the section is in view
  });

  return (
    <section className="py-12 px-4 md:px-16 bg-mywhite-100" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-wittgenstein text-center mb-12 text-gray-900">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden bg-white p-6"
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
              <p className="text-sm text-gray-700 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
