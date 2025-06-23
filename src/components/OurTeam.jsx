import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Lead Ornithologist",
    bio: "PhD in Avian Biology with 15 years field experience across Asia",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Expedition Guide",
    bio: "Specializes in Amazonian species with unparalleled tracking skills",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    id: 3,
    name: "Priya Kapoor",
    role: "Photography Expert",
    bio: "Wildlife photographer featured in National Geographic",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
  }
];

const OurTeam = () => {
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
            Meet Our Experts
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-[#a8c7d8] max-w-3xl mx-auto">
            Passionate professionals dedicated to creating unforgettable experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0a1a2a] rounded-2xl overflow-hidden border border-[#1e3a5f] hover:border-[#d4af37]/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#d4af37]">{member.name}</h3>
                <p className="text-[#a8c7d8] font-medium mb-3">{member.role}</p>
                <p className="text-[#a8c7d8]/90 mb-4">{member.bio}</p>
                <button className="text-[#d4af37] hover:text-[#e8c252] font-medium transition-colors">
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