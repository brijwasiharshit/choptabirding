import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section className="bg-gray-50 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a6496] font-serif mb-4">
            Our Global Reach
          </h2>
          <div className="w-24 h-1 bg-[#f4a261] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our birding destinations across the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative h-64 sm:h-80 md:h-96 bg-white">
          {/* Optimized map image container */}
          <div className="absolute inset-0 p-4">
            <img
              src="https://res.cloudinary.com/djrjt69jl/image/upload/v1750691821/Screenshot_2025-06-23_204312_dnukqw.png"
              alt="World map showing our birding destinations"
              className="w-full h-full object-contain object-center"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
