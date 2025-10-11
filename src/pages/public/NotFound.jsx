import React from 'react';
import { FaExclamationTriangle, FaHome, FaSearch, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaExclamationTriangle className="text-error text-6xl" />
          </div>
          <h1 className="text-6xl font-bold text-error mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-base-content/80 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            to="/" 
            className="btn bg-sky-500 btn-lg gap-2"
          >
            <FaHome /> Return Home
          </Link>
          <Link 
            to="/contact" 
            className="btn bg-sky-500/20 border boder-sky-500 btn-lg gap-2"
          >
            <FaEnvelope /> Contact Support
          </Link>
        </div>
        
        <div className="bg-base-200 rounded-xl p-6 max-w-md mx-auto">
          <h3 className="font-semibold text-lg mb-3 flex items-center justify-center gap-2">
            <FaSearch /> Can't find what you need?
          </h3>
          <p className="text-sm text-base-content/70 mb-4">
            Try searching our site or browse our main sections to find what you're looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['About', 'Events', 'Projects', 'Blog', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`}
                className="badge badge-outline hover:badge-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;