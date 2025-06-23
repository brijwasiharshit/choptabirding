import React from "react";
import { motion } from "framer-motion";

const DiscoverSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-20 py-10 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-auto md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3GSGrS9oTAajLVO82WnSIF5o8kvQ8BT9eg&s"
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
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Discover the <span className="text-orange-500">Wonder</span> of
              Nature
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Incredible Birding strives to expand the horizons for nature
              lovers and photographers so they can explore more, experience
              more, and express more.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We take you to some of the most beautiful, biodiverse destinations
              in India where you'll encounter majestic mammals, graceful birds,
              and breathtaking landscapes. Capture these moments to share with
              the world!
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Amateur photographers can opt for our immersive training program.
              We're always eager to share knowledge and collaborate with
              creative minds.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-colors duration-300">
              Join Our Next Adventure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverSection;
