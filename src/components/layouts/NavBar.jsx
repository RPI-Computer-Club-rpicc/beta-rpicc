import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/rpicc-logo.png';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Set initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/notices', label: 'Notices' },
    { path: '/events', label: 'Events' },
    { path: '/projects', label: 'Projects' },
    { path: '/executives', label: 'Executives' },
    { path: '/squads', label: 'Squads' },
    { path: '/blogs', label: 'Blogs' },
  ];

  return (
    <div className="bg-base-100/50 backdrop-blur-md shadow-sm sticky top-0 z-50">

    <div className="navbar  container mx-auto py-1">
      <div className="navbar-start ">
        {/* Mobile menu button */}
      <div className="lg:hidden">
        <button 
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
      </div>
        
        {/* Logo */}
        <Link to="/" className="flex items-center  lg:ml-0">
          <img 
            src={Logo} 
            alt="RPI Computer Club" 
            className="h-12 w-auto" 
          />
          <span className="hidden md:inline-block ml-2 text-xl font-bold  ">
            RPI Computer Club
          </span>
          <span className="inline-block md:hidden ml-2 text-xl font-bold  ">
            RPICC 
          </span>
          <span className="text-xs text-sky-500 bg-white border border-sky-500 p-1 rounded ml-2 font-bold">BETA <span className="md:inline-block hidden">1.5</span></span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path}
                className="font-medium hover:bg-base-200 rounded-lg px-4 py-2 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side elements */}
      <div className="navbar-end gap-2">
        {/* Theme Toggler */}
        <ThemeToggle />

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-2">
          <Link to="/auth/login" className="text-sm font-semibold border border-sky-500 hover:bg-sky-500/30 text-sky-500  px-6 py-1.5 rounded">
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-16 left-0 right-0 bg-base-100 shadow-lg z-50 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-4'}`}
          onClick={e => e.stopPropagation()}
        >
          <ul className="menu p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block px-4 py-3 rounded-lg hover:bg-base-200 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="divider my-1"></div>
            
            <li>
              <Link 
                to="/auth/login" 
                className="text-sm font-semibold border border-sky-500 hover:bg-sky-500/30 text-sky-500  px-6 py-1.5 rounded"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

  );
};

export default NavBar;