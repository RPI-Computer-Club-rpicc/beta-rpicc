import React, { useEffect } from 'react';
import { FaArrowRight, FaUsers, FaLaptopCode, FaNetworkWired, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router';
import SocialMediaLinks from '../../components/common/SocialMediaLinks';

const Join = () => {
  const isRegistrationOpen = true;
  const navigate = useNavigate();
  const benefits = [
    {
      icon: <FaUsers className="w-6 h-6 text-sky-400" />,
      title: "Community",
      description: "Join a vibrant community of tech enthusiasts and developers"
    },
    {
      icon: <FaLaptopCode className="w-6 h-6 text-indigo-400" />,
      title: "Workshops",
      description: "Access to exclusive workshops and hands-on coding sessions"
    },
    {
      icon: <FaNetworkWired className="w-6 h-6 text-purple-400" />,
      title: "Networking",
      description: "Connect with industry professionals and like-minded peers"
    },
    {
      icon: <FaTrophy className="w-6 h-6 text-amber-400" />,
      title: "Competitions",
      description: "Participate in hackathons and coding competitions"
    }
  ];

  useEffect(() => {
    if(isRegistrationOpen) {
        // replace with the current registsration link
      navigate("/registration-2025");
    }
  }, []);

  if(!isRegistrationOpen) {
    return (
      <div className="min-h-screen   flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-base-200 rounded-xl shadow-lg p-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 mb-6">
              <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-sky-500 mb-4">Registration Closed</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
              Thank you for your interest! Registration for 2025 will open soon. Please check back later or follow us on social media for updates.
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-slate-900 text-gray-400">Stay Connected</span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 pt-2">
                <SocialMediaLinks/>
              </div>
              
              <div className="pt-4">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen   flex items-center justify-center p-4 py-16">
      <div className="max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-sky-400 bg-sky-900/30 rounded-full mb-4">
            Membership 2025
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-6">
            Join RPI Computer Club
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of the most innovative tech community at Rajshahi Polytechnic Institute
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Link
            to="/registration-2025"
            className="group relative flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center">
              <span className="mr-2 font-semibold tracking-wide">🚀 Registration Now Open for 2025</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-2 text-xs font-medium rounded-full bg-white/20">
                Limited Seats
              </span>
            </span>
            <span className="absolute right-6 transition-transform duration-300 transform group-hover:translate-x-1">
              <FaArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Why Join Us?</h2>
                <p className="text-gray-300">
                  At RPI Computer Club, we're building the next generation of tech leaders. 
                  Our members get exclusive access to resources, mentorship, and opportunities 
                  that will accelerate your tech career.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Benefits Include:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((item, index) => (
                    <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-sky-500/30 transition-colors">
                      <div className="flex items-center space-x-3 mb-2">
                        {item.icon}
                        <h4 className="font-medium text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/registration-2025"
                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl hover:opacity-90 transition-opacity"
              >
                Start Your Journey
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-70"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 h-full border border-slate-700/50 overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-sky-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6">Membership Perks</h2>
                <ul className="space-y-4">
                  {[
                    "Access to exclusive workshops & events",
                    "Hands-on project experience",
                    "Mentorship from industry experts",
                    "Networking opportunities",
                    "Free learning resources",
                    "Hackathon participation",
                    "Resume & career guidance",
                    "24/7 community support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">Limited spots available for 2025</p>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">75% of spots filled</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Questions? Reach out to us at{' '}
            <a href="mailto:computerclubrpi@gmail.com" className="text-sky-400 hover:underline">
              computerclubrpi@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;