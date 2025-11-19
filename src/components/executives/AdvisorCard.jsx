import React from 'react';
import { executives } from '../../utils/data/executives';
import { FaUserTie, FaGraduationCap, FaUserGraduate, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router';
import SectionTitle from '../common/SectionTitle';

const getRoleGradient = (role) => {
  const roleLower = role.toLowerCase();
  if (roleLower.includes('advisor')) return 'from-indigo-600 to-purple-700';
  if (roleLower.includes('president')) return 'from-blue-600 to-sky-600';
  if (roleLower.includes('secretary')) return 'from-emerald-500 to-teal-600';
  return 'from-slate-600 to-slate-700';
};

const getRoleIcon = (role) => {
  const roleLower = role.toLowerCase();
  if (roleLower.includes('advisor')) return <FaUserTie />;
  if (roleLower.includes('president') || roleLower.includes('vice')) return <FaGraduationCap />;
  if (roleLower.includes('secretary')) return <FaUserFriends />;
  return <FaUserGraduate />;
};
 

const AdvisorCard = ({ advisor }) => {
    const gradient = getRoleGradient(advisor.role);
    const Icon = getRoleIcon(advisor.role);
    const bgGradient = `bg-gradient-to-r ${gradient}`;
  
    return (
      <div 
        className="group flex flex-col items-center p-6 bg-base-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300 hover:border-indigo-500/20"
        data-aos="fade-up"
        data-aos-delay={Math.random() * 100}
      >
        <div className={`relative w-40 h-40 mb-5 rounded-full p-1 ${bgGradient} shadow-lg`}>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-base-100">
            <img 
              src={advisor.image} 
              alt={advisor.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(advisor.name)}&background=6366f1&color=fff&size=256`;
              }}
            />
          </div>
          <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-white ${bgGradient} shadow-lg text-xl`}>
            {Icon}
          </div>
        </div>
        
        <div className="text-center w-full">
          <h3 className="text-xl font-bold text-base-content group-hover:text-indigo-600 transition-colors mb-1">
            {advisor.name}
          </h3>
          <div className="flex flex-col items-center gap-1">
            <span className={`px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full ${bgGradient} text-white shadow`}>
              {advisor.role}
            </span>
            {advisor.designation && (
              <p className="text-sm text-base-content/80 mt-2 max-w-xs leading-tight">
                {advisor.designation}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

export default AdvisorCard;
 
