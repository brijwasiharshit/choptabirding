import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-20 px-4 md:px-15">
      <div className=" ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a6496] font-serif mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-[#f4a261] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connecting people with nature's wonders through unforgettable
            birding experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg">
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
            viewport={{ once: true }}>
            <h3 className="text-3xl font-bold text-[#2a6496] mb-6">
              Who We Are
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2007, Chopta Birding began with a simple passion - to
              share the breathtaking beauty of birdlife with fellow nature
              enthusiasts. What started as small local tours has grown into
              internationally recognized birding expeditions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of expert ornithologists and naturalists have
              collectively spent over 10,000 hours in the field, developing an
              intimate knowledge of avian habitats and behaviors across four
              continents.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
