import React from "react";

const Donate = () => {

  const blanketDist =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736871/Pumpkin%20Plus%20Website%20Images/blanket_distribution_pg3wp5.jpg";
  const seedDist =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736879/Pumpkin%20Plus%20Website%20Images/Seed_distributtionjpg_hqjzhx.jpg";
  const iftarDist =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736874/Pumpkin%20Plus%20Website%20Images/iftaar_ggruvq.jpg";
  const infographic =
    "https://res.cloudinary.com/dq8h4hhir/image/upload/v1738736872/Pumpkin%20Plus%20Website%20Images/humanitarian_info_graphic_pff5oj.svg";

    const donationActivities = [
    {
      title: "Distributing Seeds to Flood Victims",
      description:
        "Provided 5,000+ seed packets to flood-affected farmers, ensuring food security and livelihood restoration.",
      img: seedDist, // Replace with actual path or URL
    },
    {
      title: "Emergency Relief During Northern Cold Waves",
      description:
        "Supplied blankets amongst extreme poor communities around the North-West of Bangladesh to combat against the Himalayan coldwaves.",
      img:blanketDist, // Replace with actual path or URL
    },
    {
      title: "30 days Ramadan meal distribution",
      description:
        "Distributed 30 days Ramadan iftar amongst malnourished, poverty striken communities from zakat and charity funds raised from personal connections",
      img: iftarDist, // Replace with actual path or URL
    },
  ];

  return (
    <div className="bg-mywhite-500 py-10 ">
      {/* Banking Information Section */}
      <section className="max-w-6xl mt-32 mx-auto px-6 mb-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-myorange-600">
          Donate to Support Our Mission
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Banking Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Banking Information
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Bank Name:</strong> Islami Bank Bangladesh Limited
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Account Name:</strong> Pumpkin Plus Agro Innovation
              Limited
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Account Number:</strong> 20502050100293412
            </p>
            <p className="text-gray-700 mb-2">
              <strong>SWIFT Code:</strong>IBBLBDDH205
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Routing number:</strong> IBBLBDDH205
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Branch:</strong> Dhanmondi Branch, Dhaka, Bangladesh
            </p>

            <p className="text-gray-700 mb-2">
              <strong>Contact:</strong> nichowdhury1966@gmail.com{" "}
            </p>
            <p className="text-myorange-600">
              <strong>Bkash</strong> +8801716756348 - Founder-Pumpkin Plus{" "}
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={infographic} // Replace with your image path
              alt="Donate"
              className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Donation Activities Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-myorange-600">
          Our Donation Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationActivities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl">
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {activity.title}
              </h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Donate;
