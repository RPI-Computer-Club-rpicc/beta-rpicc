import React from 'react';
import { executives } from '../../utils/executives';
import { FaUserTie, FaGraduationCap, FaUserGraduate, FaUserFriends ,FaPhone,FaWhatsapp,FaFacebook} from 'react-icons/fa';
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

const MemberCard = ({ member }) => {
  const gradient = getRoleGradient(member.role);
  const Icon = getRoleIcon(member.role);
  const bgGradient = `bg-gradient-to-r ${gradient}`;

  return (
    <div 
      className="group w-full flex flex-col items-center p-6 bg-base-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300 hover:border-primary/20"
      data-aos="fade-up"
      data-aos-delay={Math.random() * 100}
    >
      <div className={`relative w-36 h-36 mb-5 rounded-full p-1 ${bgGradient} shadow-lg`}>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-base-100">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4f46e5&color=fff&size=256`;
            }}
          />
        </div>
        <div className={`absolute -bottom-2 -right-2 w-11 h-11 rounded-full flex items-center justify-center text-white ${bgGradient} shadow-lg text-lg`}>
          {Icon}
        </div>
      </div>
      
      <div className="text-center w-full">
        <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors mb-1">
          {member.name}
        </h3>
        <div className="flex flex-col items-center gap-2">
          <span className={`px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full ${bgGradient} text-white shadow`}>
            {member.role}
          </span>
 
          
          { member.id && (
            <Link 
              to={`/executives/${member.id}`}
              className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
            >
              View Profile
              <svg 
                className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
 
export default MemberCard;