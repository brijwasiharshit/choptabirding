import React from "react";
import data from "../data/review.json";
import { StarIcon } from "@heroicons/react/24/solid";

const Review = () => {
  return (
    <div className="mx-3.5 my-10 md:mx-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((review) => (
          <div
            className="border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:border-indigo-100 bg-white"
            key={review.id}>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
              "{review.comment}"
            </p>

            <div className="flex items-center">
              {/* {review.avatar && (
                <img
                  src={review.avatar}
                  alt={review.title}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
              )} */}
              <div>
                <h3 className="font-bold text-gray-900">{review.title}</h3>
                {review.position && (
                  <p className="text-sm text-gray-500">{review.position}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
          Read More Reviews
        </button>
      </div>
    </div>
  );
};

export default Review;
