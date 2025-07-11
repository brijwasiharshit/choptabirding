import React, { useState } from "react";
import data from "../data/review.json";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Review = () => {
  const [showAll, setShowAll] = useState(false); // toggle state

  const visibleReviews = showAll ? data : data.slice(0, 3);

  const toggleShow = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="px-4 w-screen md:px-20 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-[black] font-[lora]">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleReviews.map((review) => (
          <motion.div
            whileHover={{ y: -5 }}
            className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#f4a261]/50 bg-white"
            key={review.id}>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-6 w-6 ${
                    i < review.rating ? "text-[#f4a261]" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
              "{review.comment}"
            </p>

            <div className="flex items-center">
              <div>
                <h3 className="font-bold text-[#2a6496]">{review.title}</h3>
                {review.position && (
                  <p className="text-sm text-gray-500">{review.position}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-12">
        <button
          onClick={toggleShow}
          className="px-8 py-3 bg-[orange] text-white rounded-full font-medium hover:bg-orange-400 transition-colors shadow-md hover:shadow-lg">
          {showAll ? "Show Less" : "Read More Reviews"}
        </button>
      </div>
    </div>
  );
};

export default Review;
