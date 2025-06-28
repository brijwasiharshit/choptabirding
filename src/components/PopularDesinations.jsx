import React from "react";
import { motion } from "framer-motion";
const images = [
  " https://res.cloudinary.com/dofvmdnc7/image/upload/v1751095173/IMG-20250628-WA0069_sm5hbm.jpg",
  "https://res.cloudinary.com/dofvmdnc7/image/upload/v1751095197/IMG-20250628-WA0064_t9hdy6.jpg",
  "https://res.cloudinary.com/dofvmdnc7/image/upload/v1751095182/IMG-20250628-WA0058_qyysag.jpg",
  "https://res.cloudinary.com/dofvmdnc7/image/upload/v1751095156/IMG-20250628-WA0054_t92hyy.jpg",
  "https://res.cloudinary.com/dofvmdnc7/image/upload/v1751095149/IMG-20250628-WA0056_syftz8.jpg",
];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Himalayan Landscapes
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Breathtaking vistas of Chopta's natural wonders
          </p>
          <div className="mt-4 w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </div>

        {/* Gallery Grid - Simplified and elegant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src={image}
                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-105"
                alt={`Himalayan landscape ${index + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">
                  {
                    ["Mountain View", "Forest Trail", "Alpine Meadow"][
                      index % 3
                    ]
                  }
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
