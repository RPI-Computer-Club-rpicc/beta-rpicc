import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaLightbulb, 
  FaHandsHelping, 
  FaCode, 
  FaCalendarAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaUserTie,
  FaUserGraduate,
  FaRegHandshake,
  FaUserFriends,
  FaArrowRight,
} from 'react-icons/fa';
import { Link } from 'react-router';
import CTA_02 from '../../components/common/CTA_02';
import { executives } from '../../utils/data/executives';
import SectionTitle from '../../components/common/SectionTitle';
import MemberCard from '../../components/executives/MemberCard';
// Team data
const keyExecutives = [
    executives.find(exec => exec.role === 'President'),
    executives.find(exec => exec.role === 'Vice President'),
    executives.find(exec => exec.role === 'General Secretary'),
    executives.find(exec => exec.role === 'Associate General Secretary'),
  ].filter(Boolean);

// Timeline data
const history = [
  {
    year: '2020',
    title: 'Club Foundation',
    description: 'Established with a vision to create a tech community at RPI'
  },
  {
    year: '2021',
    title: 'First Hackathon',
    description: 'Successfully organized our first annual hackathon with 100+ participants'
  },
  {
    year: '2022',
    title: 'Industry Partnerships',
    description: 'Established partnerships with leading tech companies'
  },
  {
    year: '2023',
    title: '1000+ Members',
    description: 'Reached a milestone of 1000+ active members in our community'
  }
];

const AboutUs = () => {
  const features = [
    {
      icon: <FaUsers className="w-8 h-8 text-sky-500" />,
      title: 'Our Community',
      description: 'A thriving network of 1000+ students, alumni, and tech professionals collaborating on innovative projects and knowledge sharing.',
      stats: '1000+ Members',
      iconBg: 'bg-sky-50'
    },
    {
      icon: <FaLaptopCode className="w-8 h-8 text-amber-400" />,
      title: 'Technical Excellence',
      description: 'Weekly workshops, coding challenges, and project showcases to sharpen technical skills across various domains.',
      stats: '50+ Workshops/Year',
      iconBg: 'bg-amber-50'
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-emerald-500" />,
      title: 'Learning & Growth',
      description: 'Mentorship programs and learning resources to support members at all skill levels in their tech journey.',
      stats: '20+ Mentors',
      iconBg: 'bg-emerald-50'
    },
    {
      icon: <FaRegHandshake className="w-8 h-8 text-indigo-500" />,
      title: 'Industry Connections',
      description: 'Strong partnerships with leading tech companies for internships, networking, and career opportunities.',
      stats: '15+ Partners',
      iconBg: 'bg-indigo-50'
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden  ">
        <div className="max-w-7xl mx-3 md:mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-br from-blue-500 via-sky-500 to-blue-700 rounded-2xl my-5">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About RPI Computer Club
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Fostering innovation and technical excellence since 2020. Join our community of 1000+ students building the future of technology.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/events" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300 flex items-center"
              >
                <FaCalendarAlt className="mr-2" /> Upcoming Events
              </Link>
              <Link 
                to="/join" 
                className="px-6 py-3 bg-white text-sky-700 rounded-lg font-medium hover:bg-sky-50 transition-colors duration-300 flex items-center"
              >
                Join Our Community
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { number: '1000+', label: 'Active Members' },
            { number: '50+', label: 'Events/Year' },
            { number: '30+', label: 'Projects' },
            { number: '15+', label: 'Industry Partners' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="  backdrop-blur-sm p-6 rounded-xl shadow-sm shadow-md bg-base-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <dt className="text-3xl font-bold text-sky-500">{stat.number}</dt>
              <dd className="mt-2 text-gray-600">{stat.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold  sm:text-4xl">
            What We Offer
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students with resources, mentorship, and opportunities in technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-base-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-14 h-14 mb-4 rounded-xl ${feature.iconBg} flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold   mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-3">{feature.description}</p>
              <span className="inline-block px-3 py-1 text-sm font-medium text-sky-700 bg-sky-50 rounded-full">
                {feature.stats}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* History Timeline */}
      <div className=" bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold  sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Milestones in our growth and impact
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-sky-400 to-indigo-500 -ml-0.5"></div>
            <div className="space-y-12">
              {history.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <h3 className="text-xl font-semibold  ">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-sky-500 flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-2xl font-bold text-sky-700">{item.year}</span>
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                    {/* Empty div for spacing */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-base-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold  sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Meet the passionate individuals leading our community
            </p>
          </div>
           
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">

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

          <div className="mt-16 text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold   mb-4">Join Our Leadership</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Interested in taking a leadership role? We're always looking for passionate individuals to help shape the future of our community.
              </p>
            </div>
            <a href="https://forms.gle/65pJWZK6X6X6X6X6" className="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-medium bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 rounded-lg">
              Get Involved
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <CTA_02/>

    </div>
  );
};

export default AboutUs;