import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";
const MemberRecruitment = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const navigate = useNavigate();


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setRipples(ripples => [
          ...ripples,
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 100 + 100
          }
        ]);

        // Clean up old ripples
        if (ripples.length > 3) {
          setRipples(ripples => ripples.slice(1));
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isHovered, ripples.length]);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto px-3 sm:px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative bg-gradient-to-br from-blue-900/90 to-indigo-900/90 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 sm:p-6 shadow-xl overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          backgroundPosition: isHovered 
            ? [
                `${100 - (cursorPos.x / 40)}% ${100 - (cursorPos.y / 20)}%`,
                `${100 - (cursorPos.x / 30)}% ${100 - (cursorPos.y / 15)}%`
              ]
            : "0% 0%"
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent"
          style={{
            backgroundPosition: isHovered 
              ? `${cursorPos.x / 20}% ${cursorPos.y / 20}%` 
              : 'center',
            transition: 'background-position 0.5s ease-out'
          }}
        />

        {/* Animated ripples */}
        <AnimatePresence>
          {ripples.map(ripple => (
            <motion.div
              key={ripple.id}
              className="absolute rounded-full bg-white/5"
              initial={{ 
                x: `${ripple.x}%`,
                y: `${ripple.y}%`,
                width: 0,
                height: 0,
                opacity: 0.4
              }}
              animate={{
                width: ripple.size,
                height: ripple.size,
                opacity: 0,
                x: `${ripple.x}%`,
                y: `${ripple.y}%`,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 3,
                ease: "easeOut"
              }}
            />
          ))}
        </AnimatePresence>

        {/* Decorative blurred circles with hover effect */}
        <motion.div 
          className="absolute -top-3 -right-3 w-16 h-16 sm:w-24 sm:h-24 bg-indigo-500/20 rounded-full filter blur-xl"
          animate={{
            y: isHovered ? [0, -5, 0] : 0,
            x: isHovered ? [0, 5, 0] : 0,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-3 -left-3 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full filter blur-xl"
          animate={{
            y: isHovered ? [0, 5, 0] : 0,
            x: isHovered ? [0, -5, 0] : 0,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center md:items-center justify-center md:justify-between gap-4 sm:gap-6">
            {/* Left Section */}
            <motion.div 
              className="flex gap-3 sm:gap-4 md:gap-6"
              whileHover={{ 
                x: 5,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
            >
              <motion.div 
                className="md:block hidden"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FaUser className="text-indigo-200" />
                  </motion.div>
                </motion.div>
              </motion.div>
              <div>
                <motion.h3 
                  className="text-lg sm:text-2xl font-bold text-white"
                  whileHover={{ 
                    scale: 1.02,
                    x: 3,
                    textShadow: "0 0 8px rgba(255,255,255,0.3)"
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Member Recruitment 2025
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-indigo-100/90 text-center md:text-left"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Applications are now open!
                </motion.p>
              </div>
            </motion.div>

            {/* Button Section */}
            <div className="flex justify-start sm:justify-center md:justify-end"> 
                <button
                  className="relative cursor-pointer inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white text-sm sm:text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                  onMouseEnter={() => import("../../pages/public/Registration2025")}
                  onClick={() => {
                    navigate('/registration-2025')
                  }}
                >
                  Apply Now 
                </button> 
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MemberRecruitment;

