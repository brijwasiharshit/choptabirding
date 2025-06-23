import React from "react";
import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Western Ghats, India",
    description: "Biodiversity hotspot with 500+ bird species",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5"
  },
  {
    id: 2,
    name: "Amazon Rainforest",
    description: "Home to colorful macaws and rare species",
    image: "https://images.unsplash.com/photo-1614557255895-9a2c0be23646"
  },
  {
    id: 3,
    name: "Serengeti Plains",
    description: "Witness migratory birds in vast savannas",
    image: "https://images.unsplash.com/photo-1614532188535-2fa164c9ea24"
  }
];

const PopularDestinations = () => {
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
            Explore Our Top Destinations
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-[#a8c7d8] max-w-3xl mx-auto">
            Carefully curated locations for the most remarkable birding experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl border-2 border-[#1e3a5f] hover:border-[#d4af37]/30 transition-all duration-300 h-96"
            >
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2a] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                <p className="text-[#a8c7d8]">{destination.description}</p>
                <button className="mt-3 text-[#d4af37] hover:text-[#e8c252] font-medium flex items-center transition-colors">
                  Explore Tour <span className="ml-2">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#e8c252",
              boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#d4af37] text-[#0a1a2a] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#d4af37]/50"
          >
            View All Destinations
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;