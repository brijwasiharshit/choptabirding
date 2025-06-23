import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCaretDown, RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  return (
    <header className="bg-[#0a1a2a] shadow-lg sticky top-0 z-50 border-b border-[#1e3a5f]">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/djrjt69jl/image/upload/v1750674838/Gemini_Generated_Image_oej5neoej5neoej5_ucoqwx.png"
              alt="logo"
              className="h-12 md:h-14 transition-all hover:opacity-90"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-2 py-1 font-medium transition-colors ${
                  isActive
                    ? "text-[#d4af37]"
                    : "text-[#a8c7d8] hover:text-[#d4af37]"
                }`
              }>
              Home
            </NavLink>

            <div className="relative group">
              <button
                onClick={toggleAbout}
                className="flex items-center px-2 py-1 font-medium text-[#a8c7d8] hover:text-[#d4af37] transition-colors">
                About Us
                <RxCaretDown
                  className={`ml-1 transition-transform ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-2 w-48 bg-[#122a42] rounded-md shadow-xl py-1 z-50 border border-[#1e3a5f]">
                  <NavLink
                    to="/about/company"
                    className="block px-4 py-2 text-[#a8c7d8] hover:bg-[#1e3a5f] hover:text-[#d4af37]">
                    Our Company
                  </NavLink>
                  <NavLink
                    to="/about/team"
                    className="block px-4 py-2 text-[#a8c7d8] hover:bg-[#1e3a5f] hover:text-[#d4af37]">
                    Our Team
                  </NavLink>
                </motion.div>
              )}
            </div>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-2 py-1 font-medium transition-colors ${
                  isActive
                    ? "text-[#d4af37]"
                    : "text-[#a8c7d8] hover:text-[#d4af37]"
                }`
              }>
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-2 py-1 font-medium transition-colors ${
                  isActive
                    ? "text-[#d4af37]"
                    : "text-[#a8c7d8] hover:text-[#d4af37]"
                }`
              }>
              Contact Us
            </NavLink>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d4af37] hover:bg-[#e8c252] text-[#0a1a2a] px-6 py-2 rounded-full font-medium transition-colors shadow-md hover:shadow-lg">
              Enquiry
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#a8c7d8] hover:text-[#d4af37] focus:outline-none">
              {isMenuOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#122a42] pb-4 border-t border-[#1e3a5f]">
            <div className="pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-[#1e3a5f] text-[#d4af37]"
                      : "text-[#a8c7d8] hover:bg-[#1e3a5f] hover:text-[#d4af37]"
                  }`
                }>
                Home
              </NavLink>

              <div className="px-3 pt-2 pb-1">
                <button
                  onClick={toggleAbout}
                  className="flex items-center w-full text-left text-base font-medium text-[#a8c7d8] hover:text-[#d4af37]">
                  About Us
                  <RxCaretDown
                    className={`ml-1 transition-transform ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="pl-4 mt-1 space-y-1">
                    <NavLink
                      to="/about/company"
                      onClick={toggleMenu}
                      className="block px-3 py-2 rounded-md text-base font-medium text-[#a8c7d8] hover:bg-[#1e3a5f] hover:text-[#d4af37]">
                      Our Company
                    </NavLink>
                    <NavLink
                      to="/about/team"
                      onClick={toggleMenu}
                      className="block px-3 py-2 rounded-md text-base font-medium text-[#a8c7d8] hover:bg-[#1e3a5f] hover:text-[#d4af37]">
                      Our Team
                    </NavLink>
                  </motion.div>
                )}
              </div>

              <NavLink
                to="/gallery"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-[#1e3a5f] text-[#d4af37]"
                      : "text-[#a8c7d8] hover:bg-[#1e3a5f] hover:text-[#d4af37]"
                  }`
                }>
                Gallery
              </NavLink>

              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-[#1e3a5f] text-[#d4af37]"
                      : "text-[#a8c7d8] hover:bg-[#1e3a5f] hover:text-[#d4af37]"
                  }`
                }>
                Contact Us
              </NavLink>

              <button className="w-full mt-2 bg-[#d4af37] hover:bg-[#e8c252] text-[#0a1a2a] px-4 py-2 rounded-md font-medium transition-colors">
                Enquiry
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;