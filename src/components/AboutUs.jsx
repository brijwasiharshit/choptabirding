import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-[#0a1a2a] py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37] font-serif mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-[#a8c7d8] max-w-3xl mx-auto">
            Connecting people with nature's wonders through unforgettable birding experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden border-2 border-[#1e3a5f]">
              <img 
                src="https://images.unsplash.com/photo-1480044965905-02098d419e96" 
                alt="Team in nature"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#d4af37] mb-6">Who We Are</h3>
            <p className="text-lg text-[#a8c7d8] mb-6 leading-relaxed">
              Founded in 2010, Avian Explorations began with a simple passion - to share the breathtaking beauty of birdlife with fellow nature enthusiasts. What started as small local tours has grown into internationally recognized birding expeditions.
            </p>
            <p className="text-lg text-[#a8c7d8] mb-8 leading-relaxed">
              Our team of expert ornithologists and naturalists have collectively spent over 10,000 hours in the field, developing an intimate knowledge of avian habitats and behaviors across four continents.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#e8c252" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d4af37] hover:bg-[#e8c252] text-[#0a1a2a] px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 border-2 border-[#d4af37]/50"
            >
              Learn Our Values
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;