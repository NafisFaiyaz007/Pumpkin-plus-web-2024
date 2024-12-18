import React from "react";
import { motion } from "framer-motion";
import Slideshow from "../slideshow";


import about1 from "../../images/about1.jpg"; // Add more images if necessary
import about2 from "../../images/about2.jpg"; // Add more images if necessary
import about3 from "../../images/about3.jpg"; // Add more images if necessary
import about4 from "../../images/about4.jpg"; // Add more images if necessary
import about5 from "../../images/about5.jpg"; // Add more images if necessary
import about6 from "../../images/about6.jpg"; // Add more images if necessary

import values from "../../images/values.jpg"; // Adjust path as necessary
import vision from "../../images/vision.jpg"
import mission from "../../images/mission.jpg"; // Adjust path as necessary
import infographic from "../../images/info graphic 3 step model.svg"


const AboutExt = () => {
  const images = [about1, about2,about3,about4,about5,about6];
  
  return (
    <section className=" bg-mywhite-500  pt-36 px-8 md:px-16 lg:px-32 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-mywhite-500 rounded-xl mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bebas text-myorange-600 my-8 sm:py-10 text-center">
            Our Vision and Mission
          </h2>
          <div className="grid grid-cols-1 text-justify md:grid-cols-3 gap-8">
            <div className=" bg-white border-3 border-gray-800 p-6 rounded-xl shadow-xl flex flex-col">
              <h3 className="text-2xl font-medium text-center text-gray-900 mb-4">
                Vision
              </h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed flex-grow">
                Transforming traditional agriculture into a women- and youth-led
                agribusiness model through climate-smart innovations for
                managing transitional lands (sandbars and riverbeds) to support
                erosion-affected communities in Bangladesh, fostering
                self-resilience.
              </p>
              <img
                src={vision}
                alt="Vision"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div className=" bg-white border-3 border-gray-800 p-6 rounded-xl shadow-xl flex flex-col">
              <h3 className="text-2xl font-medium text-center text-gray-900 mb-4">
                Mission
              </h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed flex-grow">
                Our mission is to empower communities through knowledge and
                technology, enabling them to achieve self-sufficiency and
                resilience. We believe in a collaborative approach, working with
                partners across the public and private sectors to drive
                meaningful change.
              </p>
              <img
                src={mission}
                alt="Mission"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div className=" bg-white border-3 border-gray-800 p-6 rounded-xl shadow-xl flex flex-col">
              <h3 className="text-2xl font-medium text-center text-gray-900 mb-4">
                Values
              </h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed flex-grow">
                We are committed to ethical practices, environmental
                stewardship, and social responsibility. Every step we take is
                guided by our core values of integrity, innovation, and
                inclusivity.
              </p>
              <img
                src={values}
                alt="Values"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>

        {/* <div className="flex justify-center mt-8">
          <Link to="/services">
            <button className="bg-myorange-600 hover:bg-orange-400 text-white font-bebas text-2xl py-3 px-8 rounded-lg shadow-lg hover:bg-myorange-700 transition-all duration-300">
              Learn more about our services
            </button>
          </Link>
        </div> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border-3 border-gray-800 py-3 sm:p-8 rounded-xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bebas text-myorange-600 text-center sm:mb-12">
            Problem Statement
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg md:text-xl font-redHat  text-justify text-gray-800 mb-6 leading-relaxed">
                Bangladesh, a deltaic country within the floodplains of the
                Ganges, Brahmaputra, and Meghna rivers, has 1.72 million sq. km
                of catchment area, only 7% of which lies within its borders. The
                country features 2,709 sq. km of newly accreted lands (IWM & PA,
                2018) along riverbanks in the north, including transitional
                charlands formed by sand deposits after each rainy season. These
                government-owned lands are inhabited by communities displaced by
                river erosion, floods, and other natural disasters. Charland
                residents face significant vulnerabilities, including lack of
                basic services, malnutrition, hunger, and chronic poverty. Women
                and children are particularly at risk due to limited livelihoods
                and male migration to urban areas for work.
              </p>
              <p className="text-lg md:text-xl font-redHat text-justify text-gray-800 mb-6 leading-relaxed">
                The northwest region, located at the confluence of the Teesta
                and Brahmaputra rivers, is highly disaster-prone, experiencing
                floods, river erosion, cold waves, and food insecurity. Frequent
                disasters exacerbate poverty and deprivation, with many
                residents living below subsistence levels. Chars, isolated
                silted islands within rivers, are among the most vulnerable
                areas in the country.
              </p>
            </div>
            <div>
              <Slideshow images={images} />
            </div>
          </div>

          <p className="text-lg md:text-xl font-redHat text-justify text-gray-800 my-6 leading-relaxed">
            The COVID-19 pandemic has further worsened these challenges,
            disrupting global trade, business, and education, and significantly
            impacting Bangladesh. The pandemic has caused over 20,000 deaths,
            strained the healthcare system, and disrupted livelihoods, with
            millions losing jobs. Poverty rates could rise to 40.9% if family
            incomes fall by 25%, per SANEM estimates. These crises threaten to
            undo decades of poverty alleviation progress, posing significant
            socioeconomic challenges for the country.
          </p>
        </motion.div>

        {/* Why is it game changing section */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-mywhite-500 py-6 sm:p-12 rounded-xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bebas text-myorange-600 text-center sm:mb-12">
            Why is it Game-Changing?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 mb-12">
            {/* Card 1 */}
            <div className="relative group p-6 bg-white border-3 border-gray-800 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-myorange-50">
              <div className="flex justify-center mb-4">
                <span className="text-myorange-600 text-5xl group-hover:text-myorange-700">
                  🌱
                </span>
              </div>
              <h2 className="text-lg font-bold text-myorange-600 text-center mb-3 group-hover:text-myorange-700">
                Productivity & Profitability
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900">
                Empowering women and youth with solar irrigation systems,
                reducing labor costs by half, and doubling productivity.
                Irrigation expenses? Cut down dramatically, boosting profits
                like never before.
              </p>
            </div>
            {/* Card 2 */}
            <div className="relative group p-6 bg-white border-3 border-gray-800 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-myorange-50">
              <div className="flex justify-center mb-4">
                <span className="text-myorange-600 text-5xl group-hover:text-myorange-700">
                  🌍
                </span>
              </div>
              <h2 className="text-lg font-bold text-myorange-600 text-center mb-3 group-hover:text-myorange-700">
                Sustainable & Scalable
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900">
                Transforming sandy riverbeds into green fields using
                climate-smart sandbar cropping. Simple techniques like
                compost-lined pits ensure scalability and resilience.
              </p>
            </div>
            {/* Card 3 */}
            <div className="relative group p-6 bg-white border-3 border-gray-800 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-myorange-50">
              <div className="flex justify-center mb-4">
                <span className="text-myorange-600 text-5xl group-hover:text-myorange-700">
                  🥕
                </span>
              </div>
              <h2 className="text-lg font-bold text-myorange-600 text-center mb-3 group-hover:text-myorange-700">
                Food Security & Nutrition
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900">
                Pumpkins rich in Vitamin A last 6-9 months. Farmers profit
                during lean seasons, preventing child malnutrition and ensuring
                resilience against flooding.
              </p>
            </div>
            {/* Card 4 */}
            <div className="relative group p-6 bg-white border-3 border-gray-800 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-myorange-50">
              <div className="flex justify-center mb-4">
                <span className="text-myorange-600 text-5xl group-hover:text-myorange-700">
                  📈
                </span>
              </div>
              <h2 className="text-lg font-bold text-myorange-600 text-center mb-3 group-hover:text-myorange-700">
                Economic Impact
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900">
                Benefiting 24,651 farmers (70% women). With $51M worth of crops
                produced since 2005, the innovation showcases cost-benefit
                ratios of up to 1:7.
              </p>
            </div>
            {/* Card 5 */}
            <div className="relative group p-6 bg-white border-3 border-gray-800 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-myorange-50">
              <div className="flex justify-center mb-4">
                <span className="text-myorange-600 text-5xl group-hover:text-myorange-700">
                  🤝
                </span>
              </div>
              <h2 className="text-lg font-bold text-myorange-600 text-center mb-3 group-hover:text-myorange-700">
                Partnering for a Better Future
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900">
                Partnering with farmers to transition from charity models to
                commercial viability, securing food for over 230 million people
                by 2050 while reducing poverty and addressing global challenges.
              </p>
            </div>
            {/* card 6 */}
            <div className="relative group p-6 bg-white border-3 border-gray-800 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl hover:bg-myorange-50">
              <div className="flex justify-center mb-4">
                <span className="text-myorange-600 text-5xl group-hover:text-myorange-700">
                  🌾
                </span>
              </div>
              <h2 className="text-lg font-bold text-myorange-600 text-center mb-3 group-hover:text-myorange-700">
                Climate Adaptation
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900">
                The model reclaims degraded lands for agriculture, offering a
                scalable solution to mitigate land loss due to erosion and
                urbanization, while providing a coping mechanism for
                climate-affected regions globally.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-mywhite-500 py-12 px-6 sm:px-12 rounded-xl mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bebas text-myorange-600 text-center sm:mb-12">
            business model
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Infographic Section */}
            <div className="flex bg-white border-3 border-gray-800 rounded-xl justify-center">
              <img
                src={infographic}
                alt="Climate Adaptation Infographic"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              {/* Card 1 - Step One */}
              <div className="p-6 bg-white border-3 border-gray-800 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl flex justify-center">
                <div className="text-center">
                  <h2 className="text-lg font-bold text-myorange-600 mb-2">
                    Step One: Securing Land & Inputs
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    We help landless farmers gain access to barren riverbeds and
                    essential inputs like seeds and irrigation. This is achieved
                    through community consultations and negotiations with local
                    authorities and elites.
                  </p>
                </div>
              </div>

              {/* Card 2 - Step Two */}
              <div className="p-6 bg-white border-3 border-gray-800 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl flex justify-center">
                <div className="text-center">
                  <h2 className="text-lg font-bold text-myorange-600 mb-2">
                    Step Two: Economic Empowerment
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Our approach promotes income generation through activities
                    like cow fattening and small businesses, with pumpkins
                    serving as collateral for financial support, overcoming
                    barriers like high-interest loans.
                  </p>
                </div>
              </div>

              {/* Card 3 - Step Three */}
              <div className="p-6 bg-white border-3 border-gray-800 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl flex justify-center lg:col-span-2">
                <div className="text-center">
                  <h2 className="text-lg font-bold text-myorange-600 mb-2">
                    Step Three: Sustainable Market Access
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    We help farmers build a sustainable market system by
                    connecting local, regional, and international markets
                    directly, reducing reliance on middlemen and improving
                    bargaining power through village-based market hubs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutExt;
