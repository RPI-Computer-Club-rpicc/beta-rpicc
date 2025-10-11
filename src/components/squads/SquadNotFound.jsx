import React from 'react';
import { FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const SquadNotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-base-100 py-12 px-4">
      <motion.div 
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-6xl text-warning mb-4 flex justify-center">
          <FaExclamationTriangle />
        </div>
        <h2 className="text-3xl font-bold text-base-content mb-3">Squad Not Found</h2>
        <p className="text-base-content/70 mb-8">
          Oops! The squad you're looking for doesn't exist or may have been moved.
        </p>
        <Link 
          to="/squads" 
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 text-base-content gap-2 inline-flex items-center hover:from-sky-700 hover:to-blue-700 transition-all duration-300 hover:-translate-y-0.5"
        >
          Browse All Squads
          <FaArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
};

export default SquadNotFound;