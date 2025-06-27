import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCaretDown, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 font-lora
    text-sm sm:text-base lg:text-[19px] py-2 lg:py-3 max-w-screen
    ${scrolled ? "bg-[#f8f5f0] shadow-lg" : "bg-[#f8f5f0]"}
  `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-15">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center z-50"
            onClick={() => setIsMenuOpen(false)}>
            <img
              src="https://res-console.cloudinary.com/dofvmdnc7/thumbnails/v1/image/upload/v1751007329/Y2hvcHRhX2JpcmRpbmdfbm9fYmdfYjRhbnR6/drilldown"
              alt="logo"
              className="h-10 md:h-20 transition-all hover:opacity-90"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center items-center space-x-6 xl:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-2 py-1.5 font-medium transition-colors ${
                  isActive
                    ? "text-[#e67e22] font-semibold"
                    : "text-[#2c3e50] hover:text-[#e67e22]"
                }`
              }>
              Home
            </NavLink>

            <div className="relative">
              <a
                href="#about"
                className="flex items-center px-2 py-1.5 font-medium text-[#2c3e50] hover:text-[#e67e22] transition-colors">
                About Us
              </a>
            </div>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-2 py-1.5 font-medium transition-colors ${
                  isActive
                    ? "text-[#e67e22] font-semibold"
                    : "text-[#2c3e50] hover:text-[#e67e22]"
                }`
              }>
              Gallery
            </NavLink>

            <a
              href="#contact"
              className="flex items-center px-2 py-1.5 font-medium text-[#2c3e50] hover:text-[#e67e22] transition-colors">
              Contact Us
            </a>
          </nav>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center bg-[#e67e22] hover:bg-[#d35400] text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md hover:shadow-lg">
            <a
              href="https://wa.me/9536275550"
              target="_blank"
              rel="noopener noreferrer">
              Enquiry{" "}
            </a>{" "}
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#2c3e50] hover:text-[#e67e22] focus:outline-none transition-colors"
              aria-label="Toggle menu">
              {isMenuOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#f8f5f0] border-t border-[#d5d0c5] mobile-menu-container shadow-lg">
              <div className="pt-2 pb-4 space-y-1 px-4">
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-[#e9e5dd] text-[#e67e22] font-semibold"
                        : "text-[#2c3e50] hover:bg-[#e9e5dd] hover:text-[#e67e22]"
                    }`
                  }>
                  Home
                </NavLink>

                <div className="px-3 pt-1 pb-1">
                  <a
                    href="#about"
                    className="flex items-center w-full text-left text-base font-medium text-[#2c3e50] hover:text-[#e67e22] py-3">
                    About Us
                  </a>
                </div>

                <NavLink
                  to="/gallery"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-[#e9e5dd] text-[#e67e22] font-semibold"
                        : "text-[#2c3e50] hover:bg-[#e9e5dd] hover:text-[#e67e22]"
                    }`
                  }>
                  Gallery
                </NavLink>

                <a
                  href="#about"
                  className="flex items-center px-2 py-1.5 font-medium text-[#2c3e50] hover:text-[#e67e22] transition-colors">
                  Contact Us
                </a>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-2 bg-[#e67e22] hover:bg-[#d35400] text-white px-4 py-3 rounded-md font-medium transition-colors">
                  <a
                    href="https://wa.me/9536275550"
                    target="_blank"
                    rel="noopener noreferrer">
                    Enquiry{" "}
                  </a>{" "}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
