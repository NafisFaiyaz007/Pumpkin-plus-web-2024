import React from "react";
import partner1 from "../images/usaid-logo.png"; // Adjust the paths as necessary
import partner2 from "../images/logo.png";
import partner3 from "../images/logo_swisscontact.svg"
import partner4 from "../images/bari-logo.png";

// Add more imports as needed

const Partners = () => {
  return (
    <section className="bg-mywhite-500 py-16 px-8 md:px-16 lg:px-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-myorange-600 mb-8">
          Our partners
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <img src={partner1} alt="Partner 1" className="h-20 mx-4 my-4" />
          <img src={partner2} alt="Partner 2" className="h-20 mx-4 my-4" />
          <img src={partner3} alt="Partner 3" className="h-20 mx-4 my-4" />
          <img src={partner4} alt="Partner 4" className="h-20 mx-4 my-4" />

          {/* Add more logos here */}
        </div>
      </div>
    </section>
  );
};

export default Partners;
