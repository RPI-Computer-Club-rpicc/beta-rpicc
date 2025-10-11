import React from 'react';
import { Link } from 'react-router';
import SectionTitle from '../common/SectionTitle';

const quickLinks = [
  {
    id: 1,
    title: 'Our Constitution',
    icon: '📜',
    url: 'https://drive.google.com/file/d/1HBXD8ZSW3TRsOEBa54AedhtJ-X28RZaO/view',
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    text: 'text-blue-600'
  },
  {
    id: 2,
    title: 'Projects & Research',
    icon: '🔬',
    url: '/projects',
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'bg-teal-50',
    text: 'text-teal-600'
  },
  {
    id: 3,
    title: 'Squads',
    icon: '👥',
    url: '/squads',
    gradient: 'from-purple-500 to-indigo-600',
    bg: 'bg-indigo-50',
    text: 'text-indigo-600'
  },
  {
    id: 4,
    title: 'Events',
    icon: '📅',
    url: '/events',
    gradient: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    text: 'text-amber-600'
  },
  {
    id: 5,
    title: 'Publications',
    icon: '📚',
    url: '/publications',
    gradient: 'from-rose-500 to-pink-600',
    bg: 'bg-pink-50',
    text: 'text-pink-600'
  }
  ,
  {
    id: 6,
    title: 'Public Google Drive',
    icon: '📁',
    url: 'https://drive.google.com/drive/folders/1KlZxxUnK8JTYh_YIiPNEQar52IF3Yxkj?usp=sharing',
    gradient: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    text: 'text-sky-600'
  }
  // https://drive.google.com/drive/folders/1UMjwudPYB99c3OsqgzWDWG1fJ9yQZn2r?usp=sharing
   ,
  {
    id: 7,
    title: 'Photo Gallery',
    icon: '📸',
    url: 'https://drive.google.com/drive/folders/1UMjwudPYB99c3OsqgzWDWG1fJ9yQZn2r?usp=sharing',
    gradient: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    text: 'text-sky-600'
  }
     ,
  {
    id: 8,
    title: 'Logo',
    icon: '📸',
    url: 'https://drive.google.com/drive/folders/1WEn3toQ4_4kDGPKXQUbIa6CoFrJ-5zYX?usp=sharing',
    gradient: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    text: 'text-sky-600'
  }
     ,
  {
    id: 9,
    title: 'Permission Letter',
    icon: '📸',
    url: 'https://drive.google.com/file/d/1kTLG8JkBJZ2H-tEc-xNCafMwix27T8pP/view',
    gradient: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    text: 'text-sky-600'
  }
 
  // https://drive.google.com/drive/folders/1WEn3toQ4_4kDGPKXQUbIa6CoFrJ-5zYX?usp=sharing
  
];

const QuickLinksResources = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
 
          <SectionTitle 
            title="Quick Links & Resources" 
            subtitle="Access our key resources and information in just one click" 
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <div key={link.id} className="group h-full">
              <Link
                to={link.url}
                className={`h-full flex flex-col p-6 rounded-2xl bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 ${link.bg} ${link.text} text-2xl transition-all duration-300 group-hover:scale-110`}>
                  <span role="img" aria-hidden="true">
                    {link.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold  mb-3 group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {link.title}
                </h3>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    Explore now
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
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
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${link.gradient}`}></div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/resources" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            View all resources
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksResources;