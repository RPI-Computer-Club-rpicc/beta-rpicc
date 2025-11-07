import React from "react";
import { Link } from "react-router";
import logo from "../../assets/rpicc-logo.png";
import SocialMediaLinks from "../common/SocialMediaLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-300">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="RPI Computer Club" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-sm">
              Empowering students through technology and innovation at
              Rensselaer Polytechnic Institute.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sky-600 dark:text-sky-300 font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/notices"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Notices
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sky-600 dark:text-sky-300 font-semibold text-lg mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://drive.google.com/file/d/1HBXD8ZSW3TRsOEBa54AedhtJ-X28RZaO/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Our Constitution
                </a>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Projects & Research
                </Link>
              </li>
              <li>
                <Link
                  to="/squads"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Squads
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1KlZxxUnK8JTYh_YIiPNEQar52IF3Yxkj?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Public Google Drive
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1UMjwudPYB99c3OsqgzWDWG1fJ9yQZn2r?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1WEn3toQ4_4kDGPKXQUbIa6CoFrJ-5zYX?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Logo
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1kTLG8JkBJZ2H-tEc-xNCafMwix27T8pP/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Permission Letter
                </a>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sky-600 dark:text-sky-300 font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-2">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Rajshahi Polytechnic Institute
                  <br />
                  Sopura, Rajshahi
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:computerclubrpi@gmail.com"
                  className="hover:text-sky-500 transition-colors"
                >
                  computerclubrpi@gmail.com
                </a>
              </div>
            </address>

            {/* Social Media */}
          </div>
        </div>
        <div className="my-10 text-center py-10 border-t border-sky-100 dark:border-gray-800 text-center flex flex-col justify-center items-center">
          <p className="text-sky-600 dark:text-sky-300 font-semibold text-lg mb-2">
            Follow us on
          </p>
          <SocialMediaLinks />
        </div>
        <div className="my-8 py-6 px-6   border-t border-sky-100 dark:border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-base-content mb-4 text-center">
              Development Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="font-medium text-base-content   mb-2">
                  Lead Developer & Maintainer
                </h4>
                <a
                  href="https://absyd.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <span className="mr-2">👨‍💻</span>
                  <span>Abu Sayed</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
              <div className="text-center">
                <h4 className="font-medium text-base-content mb-2">
                  Contributors
                </h4>
                <div className="space-y-2">
                  <a
                    href="https://github.com/Rokon744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <span className="mr-2">👥</span>
                    <span>Rokon Uzzaman</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
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
            </div>
            <p className="mt-6 text-center text-sm text-sky-700/80 dark:text-sky-300/80">
              Built with <span className="text-red-500">❤️</span> by the RPI
              Computer Club Team
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sky-100 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            © {currentYear} RPI Computer Club &{" "}
            <a
              href="https://absyd.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 text-sky-400 transition-colors"
            >
              Abu Sayed | absyd.xyz
            </a>
            . All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link
              to="/privacy-policy"
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/code-of-conduct"
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
