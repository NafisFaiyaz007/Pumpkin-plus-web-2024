// src/pages/About.js
import React from "react";
import image1 from "../../images/1.jpg"; // Adjust path as necessary

const Services = () => {
  return (
    <div className=" md:px-20 mywhite-100 min-h-screen bg-gray-200">
      <div className="container mx-auto py-24 px-6">
        <h1 className="text-4xl md:text-5xl sm:mt-16 mt-20 font-wittgenstein text-gray-900 mb-12 text-center">
          Our Services
        </h1>

        <section className="mb-16 flex flex-col md:flex-row shadow-2xl items-center">
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
              Develop and Promote Agri Business System
            </h2>
            <p className="text-lg text-gray-700 font-redHat leading-relaxed mb-6 text-justify">
              Our major work is to develop communities through capacity building
              on this new innovation and equipped them with technological
              know-how for self-resilience to deal with environmental shocks and
              hazards. Simultaneously, develop women and youths both in our
              command areas and beyond as agri- enterpreuners for shifting
              traditional agriculture to an agribusiness system, supported
              nationwide distributions and export in Asian and African countries
              through different channels.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src={image1}
              alt="Community Development"
              className="w-full h-auto rounded-lg shadow-lg max-w-sm md:max-w-full"
            />
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row-reverse shadow-2xl items-center">
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
              Consultancy & Advisory Services
            </h2>
            <p className="text-lg text-gray-700 font-redHat leading-relaxed mb-6 text-justify">
              We are very keen to collaborate with others for its wider
              replication both at home and abroad to reach communities are
              affected by climate change and struggling for food security and
              regular income to support their livelihoods. Currently, we are
              closely working with Govt. Ministries like MoA, Department of
              Agriculture, BADC, BARI, Disaster Management, RDA under LGRD&amp;C
              (Local Govt Rural Development &amp; Cooperatives) private sector
              companies, consulting farms for its replications to benefit
              others. Our prominent works are with WFP for developing productive
              safety-net model to shift only relief-based attitudes towards
              community and self-resilience. Also working with Bangladesh Navy
              to support productive safety-net and livelihoods model for
              Rohingya migrants resettled at Bhashanchar Islands. Building
              network with international NGOs like Islamic Relief. The Muslim
              Hands, international charity i.e. The Gemini Trust UK to support
              our moves for millions in country.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src={image1}
              alt="Collaboration"
              className="w-full h-auto rounded-lg shadow-lg max-w-sm md:max-w-full"
            />
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row shadow-2xl items-center">
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
              International Collaboration and Networking
            </h2>
            <p className="text-lg text-gray-700 font-redHat leading-relaxed mb-6 text-justify">
              We are collaborating with diversity through different angles for
              building partnership for joint project for cross-boundary
              replications in Cameroon through partnership with local NGO and in
              in South-Asian countries through networking with South Asian
              Association for Regional Cooperation (SAARC), ICIMOD. Jointly
              working with number of forums like Islands Innovation, AARDO,
              APO-Japan, SUCCESSWORLD1 for knowledge management. Connected with
              international conferences and Universities for sharing lessons and
              learnings. Simultaneously, influencing policies as climate change
              activists with reputable organizations i.e.; Devex Forum, UN
              bodies and leading climate change forums.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src={image1}
              alt="International Collaboration"
              className="w-full h-auto rounded-lg shadow-lg max-w-sm md:max-w-full"
            />
          </div>
        </section>

        <section className="mb-16 flex flex-col md:flex-row-reverse shadow-2xl items-center">
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
              R&D for Climate Smart Agricultural Innovations
            </h2>
            <p className="text-lg text-gray-700 font-redHat leading-relaxed mb-6 text-justify">
              R&amp;D is our highly focused climate adaptive solutions as our
              regular activities for testing new ideas for innovation/s, model
              development, and targeted solutions. Under this work, we are
              continuously diversifying new crops, high value products in
              sandbar cropping system and crops in the crisis as humanitarian
              responses in refugee shelters. updating and documenting knowledge.
              Simultaneously, diversifying approaches through integrated
              agricultural model development (agriculture and horticulture,
              fisheries, livestock and dairy farming) and promoting
              agri-enterprise for youth employment. We are focusing food
              processing for value addition of agricultural commodities by
              engaging rural women.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src={image1}
              alt="Climate Smart Innovations"
              className="w-full h-auto rounded-lg shadow-lg max-w-sm md:max-w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;