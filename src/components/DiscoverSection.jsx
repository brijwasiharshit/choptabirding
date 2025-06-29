import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PopUp from "../layouts/Pop-Up";

const DiscoverSection = () => {
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    if (popUp) {
      // document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      // document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [popUp]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-gradient-to-b from-[#f8f4e8] to-[#f0ede0]">
      <div className=" mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
        {/* Image Section */}
        <motion.div
          className=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className=" md:ml-40 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 bg-white/10 backdrop-blur-sm">
            <img
              className="  md:rounded-3xl rounded-2xl  h-[500px] sm:h-[400px] md:h-[500px]  hover:scale-105 transition-transform duration-500"
              src="https://res.cloudinary.com/djrjt69jl/image/upload/v1750676254/DSC_7052-DeNoiseAI-low-light_ygpqbg.jpg"
              alt="Birdwatcher observing the Himalayan Monal in Chopta"
              loading="lazy"
            />
          </div>
        </motion.div>
        {popUp && <PopUp setPopUp={setPopUp} />}

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          <div className="bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a5e82] mb-6 font-serif">
              Discover the
              <span className="text-[#e67e22] ml-3">Beauty of Chopta</span> with
              of Expert-Guided Birdwatching Tours{" "}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              At <strong className="text-[#2a5e82]">Chopta Birding</strong>, we
              offer immersive birdwatching tours from{" "}
              <strong className="text-[#2a5e82]">Dehradun to Chopta</strong> —
              perfect for birdwatchers, nature enthusiasts, and wildlife
              photographers seeking an unforgettable Himalayan experience.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Journey through breathtaking Himalayan landscapes and discover
              rare bird species like the <strong>Himalayan Monal</strong>,{" "}
              <strong>Woodpeckers</strong>, and{" "}
              <strong>Laughingthrushes</strong>. Whether you're a beginner or an
              experienced birder, our guided tours help you explore, learn, and
              connect with nature.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              We also provide expert photography guidance and invite
              collaborations with content creators and wildlife storytellers
              passionate about capturing the wonders of the wild.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#e67e22",
                boxShadow: "0 10px 25px -5px rgba(230, 126, 34, 0.4)",
              }}
              onClick={() => {
                setPopUp(true);
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 border-2 border-orange-300/50">
              Join Our Next Adventure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverSection;
