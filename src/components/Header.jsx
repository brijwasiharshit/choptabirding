import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675241/DSC_3443_qijfmt.jpg",
    title: "Birding from Dehradun to Chopta",
    subtitle: "Experience scenic trails and rare Himalayan birdlife",
  },
  {
    url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675287/DSC_0202_uvmhcr.jpg",
    title: "Guided Birdwatching Tours",
    subtitle: "Join our expert-led journeys through Uttarakhand’s birding hotspots",
  },
  {
    url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675439/1636534261421-01_w4jopb.jpg",
    title: "Chopta Birding Escapes",
    subtitle: "Spot Monals, Woodpeckers, and more in lush alpine meadows",
  },
  {
    url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675505/DSC_2402-DeNoiseAI-standard_c2ipe2.jpg",
    title: "Himalayan Birding Trail",
    subtitle: "A memorable birdwatching adventure through the Garhwal Himalayas",
  },
];

const Header = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    // Preload all images
    let loadedCount = 0;
    images.forEach(({ url }) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setIsLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [isLoaded]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0a1a2a] text-white text-lg">
        Loading slideshow...
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden bg-[#0a1a2a]">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", ease: "easeInOut", duration: 0.8 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <img
            src={images[index].url}
            alt="Slider image"
            className="w-full h-full object-cover opacity-85"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2a] via-[#0a1a2a]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-[#0a1a2a]/40"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-[#d4af37] mb-4 font-serif drop-shadow-lg"
              >
                {images[index].title}
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-[#a8c7d8] mb-8 max-w-2xl mx-auto font-light drop-shadow-md"
              >
                {images[index].subtitle}
              </motion.p>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, backgroundColor: "#e8c252" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d4af37] hover:bg-[#e8c252] text-[#0a1a2a] px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all border-2 border-[#d4af37]/50"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-3 w-3 rounded-full transition-all ${
              i === index ? "bg-[#d4af37] w-6" : "bg-[#a8c7d8] bg-opacity-50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
