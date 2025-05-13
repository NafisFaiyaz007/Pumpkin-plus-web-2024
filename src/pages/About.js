import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import AboutExt from "../components/expanded/aboutExt"
import { Helmet } from "react-helmet";

const About = () =>{
    return (
      <div>
        <Helmet>
          <title>About Us | Pumpkin Plus Bangladesh</title>
          <meta
            name="description"
            content="Learn about Pumpkin Plus's mission in revolutionizing sandbar cropping and agricultural innovation in Bangladesh. Our journey, team, and impact."
          />
          <link rel="canonical" href="https://www.pumpkinplus.com/About" />
          <meta property="og:title" content="About Us | Pumpkin Plus Bangladesh" />
          <meta property="og:description" content="Learn about Pumpkin Plus's mission in revolutionizing sandbar cropping and agricultural innovation in Bangladesh. Our journey, team, and impact." />
          <meta property="og:image" content="https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736867/Pumpkin%20Plus%20Website%20Images/about_1_x5dgyk.jpg" />
          <meta property="og:url" content="https://www.pumpkinplus.com/About" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Pumpkin Plus Bangladesh" />
        </Helmet>
        <Navbar />
        <AboutExt />
        <Footer />
      </div>
    );
}
export default About;