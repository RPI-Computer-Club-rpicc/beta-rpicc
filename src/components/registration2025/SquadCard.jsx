import React from 'react';
import { FaUserTie, FaUserFriends, FaWhatsapp, FaPhone, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const SquadCard = ({ squad }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-sky-100 transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center">
            <div className={`p-3 rounded-xl ${squad.bgColor} bg-opacity-10`}>
              {squad.squad_icon}
            </div>
            <h3 className="ml-4 text-xl font-bold text-gray-900">{squad.name}</h3>
          </div>
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${squad.textColor} ${squad.bgColor} bg-opacity-10`}>
            {squad.members} Members
          </span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2 h-12">
          {squad.description}
        </p>
        
        {/* Activities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {squad.activities.slice(0, 3).map((activity, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
            >
              {activity}
            </span>
          ))}
        </div>
        
        {/* Leader & Co-leader */}
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="p-2 bg-sky-50 rounded-lg">
                <FaUserTie className="h-4 w-4 text-sky-600" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Squad Leader</p>
              <p className="font-medium text-gray-900">{squad.leader}</p>
              {squad.mobile_number.leader && (
                <div className="flex items-center mt-1 space-x-3">
                  <a 
                    href={`tel:${squad.mobile_number.leader}`}
                    className="inline-flex items-center text-xs text-sky-600 hover:text-sky-800"
                  >
                    <FaPhone className="h-3 w-3 mr-1" />
                    {squad.mobile_number.leader}
                  </a>
                  <a 
                    href={`https://wa.me/88${squad.mobile_number.leader}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-green-600 hover:text-green-800"
                  >
                    <FaWhatsapp className="h-3 w-3 mr-1" />
                    {squad.mobile_number.leader}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="p-2 bg-purple-50 rounded-lg">
                <FaUserFriends className="h-4 w-4 text-purple-600" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Co-Leader</p>
              <p className="font-medium text-gray-900">{squad.co_leader}</p>
              {squad.mobile_number.co_leader && (
                <div className="flex items-center mt-1 space-x-3">
                  <a 
                    href={`tel:${squad.mobile_number.co_leader}`}
                    className="inline-flex items-center text-xs text-sky-600 hover:text-sky-800"
                  >
                    <FaPhone className="h-3 w-3 mr-1" />
                    {squad.mobile_number.co_leader}
                  </a>
                  <a 
                    href={`https://wa.me/88${squad.mobile_number.co_leader}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-green-600 hover:text-green-800"
                  >
                    <FaWhatsapp className="h-3 w-3 mr-1" />
                    {squad.mobile_number.co_leader}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link 
            to={`/squads/${squad.slug}`} 
            className="inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-800 group-hover:translate-x-1 transition-transform"
          >
            View full details
            <FaArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SquadCard;