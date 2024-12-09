import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import AboutExt from "../components/expanded/aboutExt"
const About = () =>{
    return(
        <div>
            <Navbar/>
            <AboutExt/>
            <Footer/>
        </div>
    )
}
export default About;