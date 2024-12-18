import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import companyLogo from "../images/logo.png"; // Adjust the path to your logo image
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="relative py-16 px-8 md:px-20 bg-gradient-to-b from-myorange-500 via-myorange-600 to-orange-700 text-white font-open-sans">
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black opacity-30 blur-md"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: Company details and social links */}
          <div className="mx-auto text-center md:text-left">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="w-24 h-auto mx-auto md:mx-0 mb-6"
            />
            <h2 className="text-2xl font-bold mb-6">Address</h2>
            <p className="mb-3">House- 201, Road- 1, Block-K, Basundhara R/A</p>
            <p className="mb-3">Dhaka-1229, Bangladesh</p>
            <p className="mb-3">Phone: +8801716756348</p>
            <p className="mb-3">
              Email: nichowdhury1966@gmail.com (Innovator and founder)
            </p>
            <p className="mb-6">Email: pumpkinplus17@gmail.com</p>

            <Link to="/Donate">
              <button
                className="bg-white text-myorange-500 hover:bg-myorange-400 hover:text-white rounded-lg border-2 border-white font-bold py-2 px-6 inline-block mb-6 transition duration-300"
              >
                Donate Now
              </button>
            </Link>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/company/pumpkin-plus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="hover:text-blue-900 transition duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2x"
                  className="hover:text-blue-900 transition duration-300"
                />
              </a>
              <a
                href="https://www.facebook.com/p/Pumpkin-Plus-An-Agribusiness-Company-100034819944694/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className="hover:text-blue-900 transition duration-300"
                />
              </a>
            </div>
          </div>

          {/* Right side: Contact form */}
          {/* <div>
            <h2 className="text-2xl font-redHat mb-6">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-myorange-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-myorange-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-myorange-500"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-myorange-500 hover:bg-gray-200 rounded-lg border-2 border-white font-redHat py-2 px-6 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-300 mt-12">
        <p>
          Site developed, and maintained by{" "}
          <a
            href="https://nafisfaiyaz007.github.io/Nafis-Faiyaz-portfolio/"
            className="text-white hover:text-blue-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chowdhury Nafis Faiyaz
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
