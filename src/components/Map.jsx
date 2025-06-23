import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section className="bg-[#122a42] py-20 px-4 md:px-20">
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
          className="rounded-2xl overflow-hidden border-2 border-[#1e3a5f] shadow-xl relative h-96"
        >
          {/* Replace with your actual map component or iframe */}
          <div className="absolute inset-0 bg-[#0a1a2a] flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Interactive Map Coming Soon</h3>
              <p className="text-[#a8c7d8] mb-6">We're working on an interactive map to showcase all our destinations</p>
              <button className="text-[#d4af37] hover:text-[#e8c252] font-medium underline transition-colors">
                View Text List of Locations
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;