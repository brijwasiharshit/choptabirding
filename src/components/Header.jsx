import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PopUp from "../layouts/Pop-Up";
// import { Helmet } from "react-helmet";

const images = [
  {
    url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1750999302/DSC_5183_rxz9ue.jpg",
    title: "Birding from Dehradun to Chopta",
    subtitle: "Experience scenic trails and rare Himalayan birdlife",
  },
  {
    url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1750999271/DSC_9207_pnihwi.jpg",
    title: "Guided Birdwatching Tours",
    subtitle:
      "Join our expert-led journeys through Uttarakhand's birding hotspots",
  },
  {
    url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1750999265/DSC_4382-SharpenAI-Focus_sxda2v.jpg",
    title: "Chopta Birding Escapes",
    subtitle: "Spot Monals, Woodpeckers, and more in lush alpine meadows",
  },
  {
    url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1750999299/DSC_9773-DeNoiseAI-severe-noise_iygkme.jpg",
    title: "Himalayan Birding Trail",
    subtitle:
      "A memorable birdwatching adventure through the Garhwal Himalayas",
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

  const [popUp, setPopUp] = useState(false);
  // block scrolling
  useEffect(() => {
    if (popUp) {
      // document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      // document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [popUp]);

  // Flying bird animation variants
  const birdVariants = {
    initial: { x: "-100vw", y: "-50%" },
    animate: {
      x: "100vw",
      y: ["-50%", "10%", "-50%", "10%", "-50%"],
      transition: {
        x: { duration: 3, ease: "linear" },
        y: { duration: 0.5, repeat: 5, ease: "easeInOut" },
      },
    },
    exit: { opacity: 0 },
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

      setTimeout(() => {
        setShowBird(false);
        setIsLoaded(true);
      }, 100);
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
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* <Helmet>
        <title>Chopta Birding</title>
        <meta name="" content="Detailed product description" />
      </Helmet> */}
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
          className="absolute inset-0">
          {loadedImages[index]?.loaded ? (
            <>
              <img
                src={images[index].url}
                alt="Slider image"
                className="w-screen md:h-350 md:w-full h-full object-cover  opacity-90"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 "></div>
              <div className="absolute "></div>
            </>
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="animate-pulse text-gray-600">
                Loading image...
              </div>
            </div>
          )}

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold  text-white mb-4 font-serif drop-shadow-lg">
                {images[index].title}
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl  text-white mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
                {images[index].subtitle}
              </motion.p>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[orange] hover:bg-orange-400 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all border-2 mt-20"
                onClick={() => {
                  setPopUp(true);
                }}>
                Book Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {popUp && <PopUp setPopUp={setPopUp} />}

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === index ? "bg-[orange] w-6" : "bg-gray-400 bg-opacity-50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
