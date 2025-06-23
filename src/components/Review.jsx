import React from "react";
import data from "../data/review.json";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


const Review = () => {
  return (
    <div className="px-4 md:px-20 bg-[#0a1a2a]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#d4af37] font-serif">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((review) => (
          <div
            className="border border-[#1e3a5f] rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:border-[#d4af37]/30 bg-[#122a42]"
            key={review.id}>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-6 w-6 ${
                    i < review.rating ? "text-[#d4af37]" : "text-[#1e3a5f]"
                  }`}
                />
              ))}
            </div>

            <p className="text-[#a8c7d8] italic mb-6 text-lg leading-relaxed">
              "{review.comment}"
            </p>

            <div className="flex items-center">
              <div>
                <h3 className="font-bold text-[#d4af37]">{review.title}</h3>
                {review.position && (
                  <p className="text-sm text-[#a8c7d8]/80">{review.position}</p>
                )}
              </div>
            </div>
          </div>
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
          className="px-8 py-3 bg-[#d4af37] text-[#0a1a2a] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#d4af37]/50">
          Read More Reviews
        </motion.button>
      </div>
    </div>
  );
};

export default Review;