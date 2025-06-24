import React from "react";
import { motion } from "framer-motion";

const DiscoverSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-20 py-10 md:py-20 bg-gradient-to-b from-[#f8f4e8] to-[#f0ede0]">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/20 bg-white/10 backdrop-blur-sm">
            <img
              className="w-full h-[400px] md:h-[500px] object-cover object-center hover:scale-105 transition-transform duration-500"
              src="https://res.cloudinary.com/djrjt69jl/image/upload/v1750676254/DSC_7052-DeNoiseAI-low-light_ygpqbg.jpg"
              alt="Bird watching in nature"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          <div className="bg-white/90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a5e82] mb-6 font-serif">
              Discover the <span className="text-[#e67e22]">Beauty</span> of
              Chopta
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At <strong className="text-[#2a5e82]">Chopta Birding</strong>, we
              organize immersive birdwatching tours from{" "}
              <strong className="text-[#2a5e82]">Dehradun to Chopta</strong>,
              curated for bird lovers, nature explorers, and wildlife
              photographers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Travel through breathtaking Himalayan landscapes and spot stunning
              species like the Himalayan Monal, Woodpeckers, and
              Laughingthrushes. Whether you're a beginner or seasoned birder,
              our guided tours are designed to help you explore more, learn
              more, and connect with nature deeply.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We also offer photography guidance for amateurs and love
              collaborating with passionate creatives who want to express their
              love for the wild.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#e67e22",
                boxShadow: "0 10px 25px -5px rgba(230, 126, 34, 0.4)",
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
