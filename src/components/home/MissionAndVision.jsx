import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaEye, FaLightbulb, FaUsers, FaGlobe } from "react-icons/fa";
import { Link } from "react-router";
const MissionAndVision = () => {
  // RPI Brand Colors

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardHover = {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative py-20 bg-base-300">
      {/* Decorative elements
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72" style={{ backgroundColor: colors.red, borderRadius: '50%', mixBlendMode: 'multiply', filter: 'blur(64px)', opacity: 0.2 }}></div>
        <div className="absolute top-0 right-1/4 w-72 h-72" style={{ backgroundColor: colors.darkBlue, borderRadius: '50%', mixBlendMode: 'multiply', filter: 'blur(64px)', opacity: 0.2 }}></div>
      </div> */}

      <div className="relative container px-3 md:mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-rpi-red font-semibold text-sm uppercase tracking-widest mb-3">
            Our Guiding Principles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-rpi-dark-blue mb-6">
            Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-rpi-red mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
        >
          <motion.div
            variants={item}
            whileHover={cardHover}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rpi-red to-rpi-dark-blue rounded-2xl opacity-70 group-hover:opacity-100 blur transition-all duration-500"></div>
            <div className="relative bg-base-200 backdrop-blur-sm rounded-2xl p-8 h-full  shadow-lg hover:shadow-xl transition-shadow duration-300">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-red-50 text-red-400"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaTrophy className="text-3xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-rpi-dark-blue mb-4">
                Our Mission
              </h3>
              <div className="text-gray-400 leading-relaxed mb-6">
                To create a collaborative ecosystem where students of Rajshahi
                Polytechnic Institute's Computer Science Department can
                enhance their technical expertise, creativity, leadership, and
                ethical values through hands-on learning, research, and
                industry-focused activities.
                <p className="my-1">
                We aim to prepare our members to
                thrive in the digital world by fostering practical experience,
                mentorship, and continuous skill development.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-400">
                  <FaLightbulb className="mr-2" /> Innovation
                </span>
                <span className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-400">
                  <FaUsers className="mr-2" /> Community
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={cardHover}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rpi-dark-blue to-rpi-red rounded-2xl opacity-70 group-hover:opacity-100 blur transition-all duration-500"></div>
            <div className="relative bg-base-100 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6  bg-blue-50 text-blue-400"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaEye className="text-3xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-rpi-dark-blue mb-4">
                Our Vision
              </h3>
              <div className="text-gray-400 leading-relaxed mb-6">
                <p>To become a nationally recognized student community that transforms passionate learners into industry-ready professionals and innovators.</p>
                <p className="my-1">Through training, workshops, competitions, and real-world projects, RPI Computer Club envisions a future where every member contributes to technological advancement, digital transformation, and social progress.</p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-400">
                  <FaGlobe className="mr-2" /> Global Impact
                </span>
                <span className="flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-400">
                  <FaUsers className="mr-2" /> Teamwork
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/about">
            <button className="relative cursor-pointer group overflow-hidden px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span className="relative z-10 flex items-center justify-center">
                Read More
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-rpi-dark-blue to-rpi-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionAndVision;
