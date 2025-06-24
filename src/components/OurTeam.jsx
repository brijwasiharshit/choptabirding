import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Prabhu Hazara",
    role: "Lead Bird Guide",
    bio: "A seasoned wildlife expert with deep knowledge of birds and their habitats. Prabhu's unmatched spotting skills and warm, people friendly approach make every tour engaging and memorable",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  },
  {
    id: 2,
    name: "Nitesh Sati",
    role: "Marketing and OutReach",
    bio: "An avid nature enthusiast and trekker, Nitesh handles advertising and marketing, ensuring that these unique birding experiences reach the right audience. His storytelling and visual content capture the magic of the wild",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a6496] font-serif mb-4">
            Meet Our Experts
          </h2>
          <div className="w-24 h-1 bg-[#f4a261] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to creating unforgettable
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#f4a261]/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2a6496]">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <button className="text-[#f4a261] hover:text-[#e67e22] font-medium transition-colors">
                  View Profile →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
