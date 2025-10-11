import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaClock, FaEnvelope, FaUserTie, FaWhatsapp } from "react-icons/fa";
import SocialMediaLinks from "./SocialMediaLinks";

const ComingSoon = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-base-100 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <FaRocket className="text-white text-4xl" />
            </div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold"
            >
              !
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-base-content mb-4"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-base-content/80 mb-8 max-w-lg mx-auto"
        >
          We're working hard to bring you something amazing. Stay tuned for
          updates!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <div className="flex items-center gap-2 bg-base-200/50 px-4 py-2 rounded-lg">
            <FaClock className="text-sky-500" />
            <span className="text-sm font-medium">Launching Soon</span>
          </div>

          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-colors"
          >
            <FaEnvelope />
            <span className="text-sm font-medium">Get Notified</span>
          </a>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="bg-base-200 backdrop-blur-sm p-6 rounded-xl shadow-sm   mb-6">
            <h3 className="text-2xl font-semibold   mb-4">
              Need Help?
            </h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/+8801717963289"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-base-300  rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-2 bg-green-100 text-green-500 rounded-lg">
                  <FaWhatsapp/>
                </div>
                <span className="font-medium">+8801717963289</span>
                <svg
                  className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <span className="h-px bg-gray-200 flex-1"></span>
                <span className="px-3">or</span>
                <span className="h-px bg-gray-200 flex-1"></span>
              </div>
              <a
                href="https://absyd.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-base-300   rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
                  <FaUserTie className="w-4 h-4" />
                </div>
                <span className="font-medium">Visit absyd.xyz</span>
                <svg
                  className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          <p className="text-sm text-base-content/60 mb-2">
            Follow us for updates
          </p>
          <SocialMediaLinks/>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
