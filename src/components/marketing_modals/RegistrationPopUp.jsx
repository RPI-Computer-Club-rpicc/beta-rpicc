import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

// Sample image - replace with your actual image
const heroImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

const RegistrationPopUp = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Only show popup if it hasn't been dismissed before
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenRegistrationPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenRegistrationPopup', 'true');
  };

  if (!isVisible || !isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={handleClose} // Close when clicking outside
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ 
            type: 'spring',
            damping: 25,
            stiffness: 300
          }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img 
              src={heroImage} 
              alt="RPI Computer Club Members"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand text-xs font-medium text-white mb-2">
                  <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                  Recruiting Now
                </div>
                <h3 className="text-2xl font-bold">Be Part of Something Big</h3>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-1/2 p-8 md:p-10 relative">
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="absolute h-2 w-2 top-4 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full z-10 shadow-md"
              aria-label="Close popup"
            >
              ✕
            </motion.button>

            <div className="h-full flex flex-col">
              <div className="flex-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium mb-4">
                  🚀 Exclusive Opportunity
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                  Join RPI Computer Club <span className="text-brand">2025</span>
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Be part of the most innovative tech community on campus. Network with industry leaders, work on real-world projects, and boost your career!
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {[
                    '🎯 Work on cutting-edge projects',
                    '🤝 Network with industry experts',
                    '💡 Learn from workshops & hackathons',
                    '🚀 Boost your career opportunities'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-brand mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/registration-2025"
                    onClick={handleClose}
                    className="flex-1 flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 group overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Secure My Spot</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <button
                    onClick={handleClose}
                    className="px-6 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    Not Now
                  </button>
                </div>
                
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <div className="flex -space-x-2 mr-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-brand/10 border-2 border-white"></div>
                      ))}
                    </div>
                    <span>100+ members already joined</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 mt-4 text-center">
                  Limited spots available. Registration closes soon!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RegistrationPopUp;