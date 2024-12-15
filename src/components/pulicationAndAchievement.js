import React from "react";
import { FiExternalLink } from "react-icons/fi";
import data from "./publicationData"; // Adjust based on your actual path

const PublicationsAndAchievements = () => {
  const { publications, achievements } = data; // Destructure data

  return (
    <div className="max-w-7xl font-redHat mx-auto px-6 py-12 bg-gray-100">
      {/* Section Header */}
      <h2 className="text-3xl md:text-5xl font-bebas text-myorange-600 mb-6 text-center">
        Publications & Achievements
      </h2>

      {/* Achievements Section */}

      <div className="my-10">
        <h3 className="text-2xl font-redHat mb- text-myorange-600">
          Achievements
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="bg-mywhite-500 p-5 rounded-lg shadow-lg hover:shadow-lg transition"
            >
              {/* Card Content */}
              <img
                src={ach.image}
                alt={ach.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800">{ach.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{ach.date}</p>
              <p className="text-gray-600">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Publications Section */}
      <div>
        <h3 className="text-2xl font-redHat mb-4 text-myorange-600">
          Publications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-mywhite-500 p-5 rounded-lg shadow-lg hover:shadow-lg transition"
            >
              <h4 className="text-lg font-bold text-myorange-600 hover:text-blue-600 ">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  {pub.title}{" "}
                  <FiExternalLink className="ml-2 text-myorange-600" />
                </a>
              </h4>
              <p className="text-gray-600">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationsAndAchievements;
