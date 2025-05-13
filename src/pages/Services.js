import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServiceExt from "../components/expanded/servicesExt";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services | Agricultural Support & Training | Pumpkin Plus</title>
        <meta
          name="description"
          content="Comprehensive agricultural services including sandbar cropping technology, youth entrepreneurship programs, and village-based market systems in Bangladesh."
        />
        <link rel="canonical" href="https://www.pumpkinplus.com/Services" />
      </Helmet>
      <Navbar />
      <ServiceExt />
      <Footer />
    </div>
  );
};
export default Services;
