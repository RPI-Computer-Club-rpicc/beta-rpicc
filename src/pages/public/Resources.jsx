import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

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
  },
  {
    id: 6,
    title: 'Public Google Drive',
    icon: '📁',
    url: 'https://drive.google.com/drive/folders/1KlZxxUnK8JTYh_YIiPNEQar52IF3Yxkj?usp=sharing',
    gradient: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-50',
    text: 'text-sky-600'
  },
  {
    id: 7,
    title: 'Photo Gallery',
    icon: '📸',
    url: 'https://drive.google.com/drive/folders/1UMjwudPYB99c3OsqgzWDWG1fJ9yQZn2r?usp=sharing',
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-purple-50',
    text: 'text-purple-600'
  },
  {
    id: 8,
    title: 'Logo',
    icon: '🖼️',
    url: 'https://drive.google.com/drive/folders/1WEn3toQ4_4kDGPKXQUbIa6CoFrJ-5zYX?usp=sharing',
    gradient: 'from-cyan-500 to-sky-600',
    bg: 'bg-cyan-50',
    text: 'text-cyan-600'
  },
  {
    id: 9,
    title: 'Permission Letter',
    icon: '📝',
    url: 'https://drive.google.com/file/d/1kTLG8JkBJZ2H-tEc-xNCafMwix27T8pP/view',
    gradient: 'from-lime-500 to-green-600',
    bg: 'bg-green-50',
    text: 'text-green-600'
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Resources Hub</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Access all club resources, documents, and important links in one place
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${item.bg}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.gradient}" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 ${item.text}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                  View Resource
                  <FiExternalLink className="ml-2 w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-base-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you need access to additional resources or have any questions, please contact our support team.
          </p>
          <button className="btn btn-primary">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;