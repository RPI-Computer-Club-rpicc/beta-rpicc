import React from 'react';
import { executives } from '../../utils/executives';
import { FaUserTie, FaGraduationCap, FaUserGraduate, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router';
import SectionTitle from '../common/SectionTitle';
import { FaArrowRight } from 'react-icons/fa';
import MemberCard from '../executives/MemberCard';
import AdvisorCard from '../executives/AdvisorCard';

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

 

const ManagementHighlight = () => {
  // Extract key executives
  const keyExecutives = [
    executives.find(exec => exec.role === 'President'),
    executives.find(exec => exec.role === 'Vice President'),
    executives.find(exec => exec.role === 'General Secretary'),
    executives.find(exec => exec.role === 'Associate General Secretary'),
  ].filter(Boolean);

  // Advisors data
  const advisors = [
    {
      id: 'adv1',
      name: 'Mst Nassrin Akhter',
      role: 'Advisor',
      designation: ' Cheif Instructor (TECH/COMPUTER) And Department Head (2nd Shift)',
      image: 'https://rajshahi.polytech.gov.bd/sites/default/files/files/rajshahi.polytech.gov.bd/teacher_list/94748bbf_3a8d_44d2_9680_0ec9c8d88047/2023-11-16-03-57-be188b80bf23bddaa4d39658751e393c.jpeg'
    },
    {
      id: 'adv2',
      name: 'Md. Faruk Hossain.',
      role: 'Advisor',
      designation: 'Instructor (TECH/COMPUTER) And Department Head (1st Shift)',
      image: 'https://rajshahi.polytech.gov.bd/sites/default/files/files/rajshahi.polytech.gov.bd/teacher_list/6077f899_0815_4f59_af0b_7caf3e4467fd/2023-11-16-10-19-349548f746400052020b45aefc71aca8.jpg'
    }
  ];

 

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Advisors Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <SectionTitle 
            title="Our Advisors" 
            subtitle="Guiding the club with their expertise and vision"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {advisors.map((advisor, index) => (
              <AdvisorCard key={advisor.id} advisor={advisor} />
            ))}
          </div>
        </div>

        {/* Key Executives */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <SectionTitle 
            title="Leadership Team" 
            subtitle="Leading the club to new heights"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {keyExecutives.map((exec, index) => (
              <MemberCard 
                key={exec.id || index} 
                member={exec} 
              />
            ))}
          </div>

          <div className="my-5 py-5">
            <Link to="/executives" className="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-medium bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 rounded-lg">
              View All Executives
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementHighlight;