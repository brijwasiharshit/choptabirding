import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  {
    url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675241/DSC_3443_qijfmt.jpg",
    title: "Birding from Dehradun to Chopta",
    subtitle: "Experience scenic trails and rare Himalayan birdlife",
  },
  {
    url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675287/DSC_0202_uvmhcr.jpg",
    title: "Guided Birdwatching Tours",
    subtitle: "Join our expert-led journeys through Uttarakhand's birding hotspots",
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
  const [loadedImages, setLoadedImages] = useState([]);
  const [showBird, setShowBird] = useState(true);
  const timerRef = useRef(null);
  const lastTransitionTime = useRef(0);

  // Flying bird animation variants
  const birdVariants = {
    initial: { x: '-100vw', y: '-50%' },
    animate: { 
      x: '100vw',
      y: ['-50%', '10%', '-50%', '10%', '-50%'],
      transition: {
        x: { duration: 3, ease: "linear" },
        y: { duration: 0.5, repeat: 5, ease: "easeInOut" },
      }
    },
    exit: { opacity: 0 }
  };

  // Preload images and track loading status
  useEffect(() => {
    const loadImages = async () => {
      const loadingPromises = images.map((img) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = img.url;
          image.onload = () => resolve({ ...img, loaded: true });
          image.onerror = () => resolve({ ...img, loaded: false });
        });
      });

      const loaded = await Promise.all(loadingPromises);
      setLoadedImages(loaded);
      
      // Show bird animation for at least 3 seconds
      setTimeout(() => {
        setShowBird(false);
        setIsLoaded(true);
      }, 3000);
    };

    loadImages();
  }, []);

  // Handle slide transitions
  const goToSlide = (newIndex) => {
    const now = Date.now();
    if (now - lastTransitionTime.current < 3000) return;
    
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
    lastTransitionTime.current = now;
  };

  const nextSlide = () => {
    const now = Date.now();
    if (now - lastTransitionTime.current < 3000) return;
    
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
    lastTransitionTime.current = now;
  };

  const prevSlide = () => {
    const now = Date.now();
    if (now - lastTransitionTime.current < 3000) return;
    
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    lastTransitionTime.current = now;
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isLoaded) return;
    
    timerRef.current = setInterval(() => {
      const now = Date.now();
      if (now - lastTransitionTime.current >= 3000) {
        nextSlide();
      }
    }, 100); // Check every 100ms if 3 seconds have passed

    return () => clearInterval(timerRef.current);
  }, [isLoaded]);

  // Slide animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0a1a2a] overflow-hidden relative">
        {/* Flying bird animation */}
        <AnimatePresence>
          {showBird && (
            <motion.div
              className="absolute top-1/2 left-0 z-50"
              variants={birdVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <svg
                width="80"
                height="60"
                viewBox="0 0 512 512"
                fill="#d4af37"
                className="drop-shadow-lg"
              >
                <path d="M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4 8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4 57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7 69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1 82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6 33.4-12.5 57.1-44.7 57.1-82.4z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center z-10"
        >
          <h2 className="text-2xl text-[#d4af37] mb-2">Loading Birding Adventures</h2>
          <div className="w-32 h-1 bg-[#d4af37] mx-auto mb-4"></div>
          <p className="text-[#a8c7d8]">Preparing your journey through the Himalayas...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden bg-[#0a1a2a]">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {loadedImages[index]?.loaded ? (
            <>
              <img
                src={images[index].url}
                alt="Slider image"
                className="w-full h-full object-cover opacity-85"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2a] via-[#0a1a2a]/70 to-transparent"></div>
              <div className="absolute inset-0 bg-[#0a1a2a]/40"></div>
            </>
          ) : (
            <div className="w-full h-full bg-[#0a1a2a] flex items-center justify-center">
              <div className="animate-pulse text-[#a8c7d8]">Loading image...</div>
            </div>
          )}

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

      {/* Navigation Arrows */}
     

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
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