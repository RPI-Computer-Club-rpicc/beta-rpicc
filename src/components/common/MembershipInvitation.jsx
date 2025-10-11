import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaCode, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';

const MembershipInvitation = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-sky-500/90 to-indigo-500 rounded-2xl p-8 md:p-12 max-w-7xl mx-5 md:mx-auto">

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
        {/* Icons */}
        <div className="inline-flex items-center justify-center mb-8 space-x-4">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <FaCode className="text-xl text-white" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <FaUsers className="text-xl text-white" />
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <FaUserPlus className="text-xl text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Tech Community
        </h2>
        
        {/* Description */}
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Want to explore technology, innovation, and teamwork? Join RPI Computer Club today!
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/join"
            className="px-8 py-3 bg-white text-sky-600 font-medium rounded-full 
                     hover:bg-white/90 transition-colors duration-300 flex items-center justify-center"
          >
            Apply for Membership
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          
          <Link 
            to="/membership"
            className="px-8 py-3 border border-white/30 text-white font-medium rounded-full 
                     hover:bg-white/10 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipInvitation;