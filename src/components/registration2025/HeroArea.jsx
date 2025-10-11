import React, { useState } from "react";
import {
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import FlipClockTimer from "./FlipclokTimer";

// Countdown Timer
const HeroArea = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80";

  return (
    <div className="relative bg-gradient-to-b from-base-100 to-base-200 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-5"
          src={heroImage}
          alt="Students working on computers"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight  sm:text-5xl lg:text-6xl">
            <span className="block">RPI Computer Club </span>
            <span className="block text-sky-400">Member Recruitment 2025</span>
          </h1>
          <div className="my-5">
            <div className="relative inline-block">
              <h2 className="text-xl sm:text-2xl font-light tracking-wide ">
                <span className="relative">
                  <span className="inline-block transition-all duration-300 hover:text-sky-300">
                    Learn
                  </span>
                  <span className="mx-3 text-gray-400">•</span>
                  <span className="inline-block transition-all duration-300 hover:text-sky-300">
                    Build
                  </span>
                  <span className="mx-3 text-gray-400">•</span>
                  <span className="inline-block transition-all duration-300 hover:text-sky-300">
                    Innovate
                  </span>
                </span>
              </h2>
              <div className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          <div className="my-5 text-center flex justify-center">
            <FlipClockTimer
              targetDate="2025-10-15T23:59:59"
              eventName="Registration Deadline"
            />
          </div>

          {/* <p className="max-w-2xl mx-auto text-xl text-indigo-100">
            Join the most innovative community of student developers, designers,
            and tech enthusiasts at RPI. Build real projects, attend exclusive
            events, and launch your tech career.
          </p> */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#register"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Apply Now
              <FaArrowRight className="ml-3 -mr-1 h-5 w-5" />
            </a>
            <a
              href="#benefits"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Learn More
            </a>
          </div>
          <div className="mt-15 text-center "> 
            <p className="text-gray-400 font-light text-xl text-center">
              Connect With Us
            </p>
            <div className="my-2 flex flex-wrap justify-center gap-3 px-4">
              {[
                {
                  icon: <FaFacebook size={20} />,
                  href: "https://www.facebook.com/people/Computer-Club-Rpi/61581226467108/",
                  color: "#1877F2",
                },
                {
                  icon: <FaInstagram size={20} />,
                  href: "https://instagram.com/rpi.cc",
                  color: "#E4405F",
                },
                {
                  icon: <FaGithub size={20} />,
                  href: "https://github.com/RPI-Computer-Club-rpicc",
                  color: "#333",
                },
                {
                  icon: <FaLinkedin size={20} />,
                  href: "https://www.linkedin.com/company/rpi-computer-club/",
                  color: "#0A66C2",
                },
                {
                  icon: <FaYoutube size={20} />,
                  href: "https://youtube.com/@rpicomputerclub",
                  color: "#FF0000",
                },
                {
                  icon: <FaDiscord size={20} />,
                  href: "https://discord.gg/rpicc",
                  color: "#5865F2",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-sky-500 bg-opacity-50">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                500+
              </p>
              <p className="mt-2 text-sm font-medium text-indigo-200">
                Active Members
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                50+
              </p>
              <p className="mt-2 text-sm font-medium text-indigo-200">
                Events/Year
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                20+
              </p>
              <p className="mt-2 text-sm font-medium text-indigo-200">
                Projects
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                15+
              </p>
              <p className="mt-2 text-sm font-medium text-indigo-200">
                Industry Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
