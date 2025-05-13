import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DonateExt from "../components/expanded/donateExt";
import { Helmet } from "react-helmet";

const Donate = () => {
  return (
    <div>
      <Helmet>
        <title>Support Our Cause | Donate to Pumpkin Plus</title>
        <meta
          name="description"
          content="Support sustainable agriculture in Bangladesh. Your donation helps empower farmers, implement sandbar cropping technology, and develop village-based market systems."
        />
        <link rel="canonical" href="https://www.pumpkinplus.com/Donate" />
      </Helmet>
      <Navbar />
      <DonateExt />
      <Footer />
    </div>
  );
};
export default Donate;
