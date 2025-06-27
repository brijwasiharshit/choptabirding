import React from "react";
import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Chopta",
    description:
      "Serene Himalayan destination known for its lush meadows, alpine forests, and rich birdlife—including the vibrant Himalayan Monal",
    image:
      "https://res.cloudinary.com/djrjt69jl/image/upload/v1750692593/Screenshot_2025-06-23_205902_fcq0ez.png",
  },
  {
    id: 2,
    name: "Mandal",
    description: "Village situated near Chamoli, Famous for Bird Watching",
    image:
      "https://res.cloudinary.com/djrjt69jl/image/upload/v1750692256/mandal_wxlqjn.png",
  },
];

const PopularDestinations = () => {
  return (
    <section id="destinations" className="bg-white py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a6496] font-serif mb-4">
            Explore Our Top Destinations
          </h2>
          <div className="w-24 h-1 bg-[#f4a261] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated locations for the most remarkable birding
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group -hidden rounded-2xl border-2 border-gray-200 hover:border-[#f4a261]/50 transition-all duration-300 h-96 shadow-lg hover:shadow-xl">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {destination.name}
                </h3>
                <p className="text-gray-200">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
