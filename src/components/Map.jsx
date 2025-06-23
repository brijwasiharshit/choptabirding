import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section className="bg-[#122a42]  px-4 ">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37] font-serif mb-4">
            Our Global Reach
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-[#a8c7d8] max-w-3xl mx-auto">
            Explore our birding destinations across the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border-2 border-[#1e3a5f] shadow-xl relative h-64 sm:h-80 md:h-96"
        >
          {/* Optimized map image container */}
          <div className="absolute inset-0">
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