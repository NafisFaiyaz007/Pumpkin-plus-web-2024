// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20  bg-gradient-to-b from-gray-500 to-gray-100  bg-opacity-70 backdrop-blur-2xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-4" />
          <Link to="/" className="text-white font-bold text-2xl">
            Pumpkin Plus
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-myorange-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-myorange-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-myorange-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-myorange-500 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
