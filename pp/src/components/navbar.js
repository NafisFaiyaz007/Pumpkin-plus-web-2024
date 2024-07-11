import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import companyLogo from "../images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition duration-300 ${
        isScrolled
          ? "bg-mywhite-100 shadow-md text-gray-800"
          : "bg-gradient-to-b from-gray-800 from-bg-opacity-100 bg-opacity-50 to-transparent text-gray-100"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="hidden md:flex space-x-4 font-semibold items-center">
          <a
            href="#donate"
            className="bg-orange-500 hover:bg-orange-700 text-gray-100 font-bold py-2 px-4 rounded transition duration-300"
          >
            Donate
          </a>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`hover:text-orange-500 ${
                isScrolled ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Home
            </Link>
            <span className="h-6 border-r border-gray-300"></span>
            <Link
              to="../pages/About.js"
              className={`hover:text-orange-500 ${
                isScrolled ? "text-gray-800" : "text-gray-100"
              }`}
            >
              About
            </Link>
            <span className="h-6 border-r border-gray-300"></span>
            <Link
              to="#awards"
              className={`hover:text-orange-500 ${
                isScrolled ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Achievement & Awards
            </Link>
            <span className="h-6 border-r border-gray-300"></span>
            <Link
              to="#contact"
              className={`hover:text-orange-500 ${
                isScrolled ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Contact
            </Link>
            <span className="h-6 border-r border-gray-300"></span>
            <Link
              to="#collaborate"
              className={`hover:text-orange-500 ${
                isScrolled ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Work with us
            </Link>
          </div>
        </div>
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-32 h-auto md:order-last"
        />
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none transition duration-300 ${
              isScrolled
                ? "text-gray-800"
                : "text-gray-100 backdrop-blur-md bg-opacity-20"
            }`}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-mywhite-100 text-gray-900 py-4 transition duration-300">
          <Link to="/" className="hover:text-orange-500" onClick={toggleMenu}>
            Home
          </Link>
          <span className="w-6 border-b border-gray-300"></span>
          <Link
            to="#about"
            className="hover:text-orange-500"
            onClick={toggleMenu}
          >
            About
          </Link>
          <span className="w-6 border-b border-gray-300"></span>
          <Link
            to="#awards"
            className="hover:text-orange-500"
            onClick={toggleMenu}
          >
            Awards
          </Link>
          <span className="w-6 border-b border-gray-300"></span>
          <Link
            to="#contact"
            className="hover:text-orange-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <span className="w-6 border-b border-gray-300"></span>
          <a
            href="#donate"
            className="bg-orange-500 hover:bg-orange-700 text-gray-100 font-bold py-2 px-4 rounded transition duration-300"
            onClick={toggleMenu}
          >
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
