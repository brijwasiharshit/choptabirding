import React from "react";

const Accommodation = () => {
  return (
    <div className="px-8 md:px-20 mt-16 bg-white rounded-xl shadow-lg overflow-hidden font-serif">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#2a6496] mb-8">
        Accommodation In Chopta
      </h2>
      <div className="md:flex">
        <div className="md:w-1/2">
          {/* Top Image */}
          <div className="h-64 mb-10 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="https://res.cloudinary.com/dofvmdnc7/image/upload/v1751088187/WhatsApp_Image_2025-06-28_at_10.47.07_ba530b8b_m3hqio.jpg"
              alt="Chopta accommodation exterior"
            />
          </div>

          {/* Bottom Image */}
          <div className="h-64 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="https://res.cloudinary.com/dofvmdnc7/image/upload/v1751088195/WhatsApp_Image_2025-06-28_at_10.47.07_3f0e4c02_y86qmf.jpg"
              alt="Cozy room interior"
            />
          </div>
        </div>

        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#2a6496] mb-6">
            Your Birding Retreat in Chopta
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Nestled in the lap of nature, our accommodation in Chopta offers a
            simple, neat, and clean stay—perfect for birders looking to immerse
            themselves in the serenity of the Himalayas.
          </p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Just a short distance away from prime bird-watching points, it
            ensures early morning sightings are effortless. With the comforts of
            home-cooked meals and a peaceful setting, this stay complements our
            birding tour beautifully, allowing guests to focus on what matters
            most—spotting and experiencing the rich avian life of Chopta.
          </p>

          <div className="space-y-4 text-lg text-gray-800">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Prime location for bird watching</span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Home-cooked local meals</span>
            </div>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Peaceful Himalayan setting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
