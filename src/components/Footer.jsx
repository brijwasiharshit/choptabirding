import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-[#2a6496] mb-4">
              Avian Explorations
            </h3>
            <p className="text-gray-600 mb-4">
              Creating unforgettable birding experiences since 2010
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-[#2a6496] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#2a6496] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#2a6496] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#2a6496] transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#2a6496] mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Bird Species
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#2a6496] mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#2a6496] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#2a6496] mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>123 Birding Trail,</li>
              <li>Nature Valley, NV 12345</li>
              <li>info@avianexplorations.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Avian Explorations. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-[#2a6496] transition-colors text-sm">
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#2a6496] transition-colors text-sm">
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#2a6496] transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
