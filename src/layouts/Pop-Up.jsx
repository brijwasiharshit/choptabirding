import { motion } from "framer-motion";

const PopUp = ({ setPopUp }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-green-100 rounded-xl shadow-2xl p-6 max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={() => setPopUp(false)}
          className="absolute top-4 right-4 text-black hover:text-gray-700 transition-colors"
          aria-label="Close popup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center pt-8 pb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-gray-600 mb-6">
            Get in touch with our team for more information
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919536275550"
              aria-label="Call Chopta Birding for tour booking"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#e67e22] hover:bg-[#d35400] text-white rounded-lg transition-colors shadow-md">
              {/* Phone icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>

            <a
              href="https://wa.me/9536275550"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md">
              {/* WhatsApp icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967... (keep rest unchanged)" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PopUp;
