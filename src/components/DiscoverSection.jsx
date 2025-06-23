import React from "react";
import { motion } from "framer-motion";

const DiscoverSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-20 py-10 md:py-20 bg-[#0a1a2a]">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#1e3a5f]/50">
            <img
              className="w-full h-[400px] md:h-[500px] object-contain object-center hover:scale-105 transition-transform duration-500"
              src="https://res.cloudinary.com/djrjt69jl/image/upload/v1750676254/DSC_7052-DeNoiseAI-low-light_ygpqbg.jpg"
              alt="Bird watching in nature"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="bg-[#122a42] p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[#1e3a5f]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-6 font-serif">
              Discover the <span className="text-[#e8c252]">Beauty</span> of Chopta
            </h2>
            <p className="text-lg text-[#a8c7d8] leading-relaxed mb-6">
              At <strong>Chopta Birding</strong>, we organize immersive birdwatching tours from <strong>Dehradun to Chopta</strong>, curated for bird lovers, nature explorers, and wildlife photographers.
            </p>
            <p className="text-lg text-[#a8c7d8] leading-relaxed mb-6">
              Travel through breathtaking Himalayan landscapes and spot stunning species like the Himalayan Monal, Woodpeckers, and Laughingthrushes. Whether you're a beginner or seasoned birder, our guided tours are designed to help you explore more, learn more, and connect with nature deeply.
            </p>
            <p className="text-lg text-[#a8c7d8] leading-relaxed">
              We also offer photography guidance for amateurs and love collaborating with passionate creatives who want to express their love for the wild.
            </p>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#e8c252",
                boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#d4af37] hover:bg-[#e8c252] text-[#0a1a2a] px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 border-2 border-[#d4af37]/50"
            >
              Join Our Next Adventure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverSection;
