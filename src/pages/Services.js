import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServiceExt from "../components/expanded/servicesExt";
const Services = () => {
  return (
    <div>
      <Navbar />
      <ServiceExt/>
      <Footer />
    </div>
  );
};
export default Services;
