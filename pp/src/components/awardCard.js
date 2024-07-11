// src/components/AwardCard.js

import React from "react";

const AwardCard = ({ image, title, description }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
