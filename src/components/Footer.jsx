import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-200 pt-20 pb-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#2a6496] mb-4">
              Chopta Birding Explorations
            </h3>
            <p className="text-gray-600 mb-4">
              Creating unforgettable birding experiences
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-[#2a6496] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/choptabirding?igsh=MTdubDlpcTByMG11MQ=="
                className="text-gray-500 hover:text-[#2a6496] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#2a6496] transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#2a6496] mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#destinations"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#tour"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Bird Species
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#2a6496] mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-600 font-bold">
              <li>Chopta Valley,</li>
              <li>Rudraprayag, Uttarakhand</li>
              <li>prabhuhazara@gmail.com</li>
              <li>+91 9536275550</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Aliado. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
