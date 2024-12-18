import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import companyLogo from "../images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  const getLinkClass = (path) => {
    const baseClass = "hover:text-orange-500 transition duration-300";
    const activeClass = "text-orange-500";
    return location.pathname === path
      ? `${baseClass} ${activeClass}`
      : baseClass;
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition duration-300 ${
        isScrolled
          ? "bg-mywhite-100 shadow-md text-gray-800"
          : "bg-gradient-to-b from-gray-800 from-bg-opacity-100 bg-opacity-50 to-transparent text-white "
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="hidden md:flex space-x-4 font-bold items-center">
          <Link
            to="/Donate"
            className="bg-myorange-600  hover:bg-mywhite-200 hover:text-gray-800 hover:border-myorange-600 text-gray-100 font-bold py-2 px-4 rounded transition duration-300"
          >
            Donate
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <span className="h-6 border-r border-gray-300"></span>
            <Link to="/About" className={getLinkClass("/About")}>
              About
            </Link>
            <span className="h-6 border-r border-gray-300"></span>
            <Link to="/Services" className={getLinkClass("/Services")}>
              Services
            </Link>
            {/* <span className="h-6 border-r border-gray-300"></span>
            <Link to="#contact" className={getLinkClass("#contact")}>
              Donate
            </Link> */}
            {/* <span className="h-6 border-r border-gray-300"></span> */}
            {/* <Link to="#charity" className={getLinkClass("#charity")}>
              Charity
            </Link>
            <span className="h-6 border-r border-gray-300"></span>
            <Link to="#collaborate" className={getLinkClass("#collaborate")}>
              Work with us
            </Link> */}
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
          <Link to="/" className={getLinkClass("/")} onClick={toggleMenu}>
            Home
          </Link>
          <span className="w-6 border-b border-gray-300"></span>
          <Link
            to="/About"
            className={getLinkClass("/About")}
            onClick={toggleMenu}
          >
            About
          </Link>
          <span className="w-6 border-b border-gray-300"></span>
          <Link
            to="/Services"
            className={getLinkClass("/Services")}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <span className="h-6 border-r border-gray-300"></span>
          <Link to="/Donate" className={getLinkClass("/Donate")}>
            Donate
          </Link>
          {/* <Link
            to="#contact"
            className={getLinkClass("#contact")}
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <span className="w-6 border-b border-gray-300"></span>
          <a
            href="#donate"
            className="bg-myorange-600 hover:bg-orange-700 text-gray-100 font-bold py-2 px-4 rounded transition duration-300"
            onClick={toggleMenu}
          >
            Donate Now
          </a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
