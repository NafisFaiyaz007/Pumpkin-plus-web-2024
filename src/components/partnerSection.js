import React from "react";



// Add more imports as needed

const Partners = () => {

  const partner1 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736881/Pumpkin%20Plus%20Website%20Images/usaid-logo_i5m3e1.png";
  const partner3 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736880/Pumpkin%20Plus%20Website%20Images/swisscontact_logo_fupeev.png";
  const partner4 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736869/Pumpkin%20Plus%20Website%20Images/bari-logo_t0ykzm.png";

  const partner5 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736883/Pumpkin%20Plus%20Website%20Images/we4f_logo_zdlslg.png";
  const partner6 = "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736872/Pumpkin%20Plus%20Website%20Images/biglottery_logo_fctvwf.png";
  const partner7 =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736881/Pumpkin%20Plus%20Website%20Images/ukaid_logo_akc6tj.jpg";

  return (
    <section className="bg-mywhite-200 py-16 px-8 md:px-16 lg:px-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-myorange-600 mb-8">
          Our partners
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <img src={partner1} alt="Partner 1" className="h-20 mx-4 my-4" />
          <img src={partner3} alt="Partner 3" className="h-20 mx-4 my-4" />
          <img src={partner4} alt="Partner 4" className="h-20 mx-4 my-4" />
          <img src={partner5} alt="Partner 4" className="h-20 mx-4 my-4" />
          <img src={partner6} alt="Partner 4" className="h-20 mx-4 my-4" />
          <img src={partner7} alt="Partner 4" className="h-20 mx-4 my-4" />

          {/* Add more logos here */}
        </div>
      </div>
    </section>
  );
};

export default Partners;
