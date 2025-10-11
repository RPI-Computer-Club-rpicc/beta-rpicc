import React from 'react';
import { FaUsers, FaUserGraduate, FaLaptopCode, FaNetworkWired, FaMicrochip, FaPalette, FaBullhorn, FaShieldAlt, FaFlask, FaFileAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';
import AboutUs from "./AboutUs"
import { Link } from 'react-router';
import CTA_02 from '../../components/common/CTA_02';
import MembershipInvitation from "../../components/common/MembershipInvitation"


const Membership = () => {
  const membershipTypes = [
    {
      title: 'Regular Member',
      description: 'Open to all students of Rajshahi Polytechnic Institute',
      requirements: ['Current student at RPI'],
      icon: <FaUsers className="w-8 h-8 text-white" />,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Executive Member',
      description: 'Exclusive for Computer Science students of RPI',
      requirements: ['CS student at RPI', 'Can join squads', 'Eligible for leadership roles'],
      icon: <FaLaptopCode className="w-8 h-8 text-white" />,
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Alumni Member',
      description: 'For all RPI graduates',
      requirements: ['Graduated from RPI', 'No fixed fee', 'Donations accepted'],
      icon: <FaUserGraduate className="w-8 h-8 text-white" />,
      color: 'from-green-500 to-green-700'
    }
  ];

  const squads = [
    { name: 'Programming Squad', icon: <FaLaptopCode className="w-6 h-6" /> },
    { name: 'Web & Software Development Squad', icon: <FaLaptopCode className="w-6 h-6" /> },
    { name: 'Networking Squad', icon: <FaNetworkWired className="w-6 h-6" /> },
    { name: 'IOT & Hardware Squad', icon: <FaMicrochip className="w-6 h-6" /> },
    { name: 'Graphics, Video & UI/UX Squad', icon: <FaPalette className="w-6 h-6" /> },
    { name: 'Digital Marketing and SEO Squad', icon: <FaBullhorn className="w-6 h-6" /> },
    { name: 'Cyber Security Squad', icon: <FaShieldAlt className="w-6 h-6" /> },
    { name: 'Research & Emerging Technologies Squad', icon: <FaFlask className="w-6 h-6" /> }
  ];

  const fees = [
    { name: 'Form Fee', amount: '30 BDT', description: 'Non-refundable' },
    { name: 'Registration Fee', amount: '300 BDT', description: 'Refundable after 6 months' },
    { name: 'Monthly Fee (1 Squad)', amount: '100 BDT', description: 'Base membership' },
    { name: 'Additional Squad', amount: '25 BDT/Squad', description: 'Up to 2 additional squads' }
  ];

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold sm:text-5xl mb-4">
          Join Our Community
        </h1>
        <p className="text-x text-gray-400 max-w-3xl mx-auto">
          Become part of CC-RPI and grow your skills with like-minded individuals
        </p>
      </div>

      {/* Membership Types */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Membership Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTypes.map((type, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${type.color} rounded-xl p-6 text-white shadow-lg transform transition-transform hover:scale-105`}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto">
                {type.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">{type.title}</h3>
              <p className="text-center mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.requirements.map((req, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Squads Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Squads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {squads.map((squad, index) => (
            <div 
              key={index}
              className="bg-base-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
            >
              <div className="text-primary">
                {squad.icon}
              </div>
              <h3 className="text-lg font-semibold">{squad.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Fees and Rules */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Membership Fees & Rules</h2>
        
        <div className="bg-base-200 rounded-xl p-8 mb-10">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <FaMoneyBillWave className="mr-2" /> Fee Structure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fees.map((fee, index) => (
              <div key={index} className="bg-base-100 p-4 rounded-lg shadow">
                <h4 className="font-semibold text-lg">{fee.name}</h4>
                <p className="text-2xl font-bold my-2 text-primary">{fee.amount}</p>
                <p className="text-sm text-gray-600">{fee.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-base-200 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <FaFileAlt className="mr-2" /> Important Rules
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary">•</div>
              <p>Form fee is non-refundable</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary">•</div>
              <p>Registration fee is not refundable if withdrawn before 6 months</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary">•</div>
              <p>Registration fee is refundable after 6 months (if membership is not withdrawn)</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary">•</div>
              <p>If a member does not pay for 2 consecutive months, the due fees will be deducted from the registration fee</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-primary">•</div>
              <p>Members can join up to 3 squads (1 base + 2 additional)</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Payment Information */}
      <section className="bg-primary/10 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">How to Join</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center mr-4 mt-1">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Fill Out the Form</h3>
              <p className="text-gray-700">Complete the membership application form with your details</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center mr-4 mt-1">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Pay the Fees</h3>
              <p className="text-gray-700">Submit the form fee and registration fee through our payment system</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center mr-4 mt-1">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
              <p className="text-gray-700">Our team will review your application and approve it within 3-5 business days</p>
            </div>
          </div>
          <div className="pt-6 text-center">
            <button className="btn btn-primary px-8 py-3 text-lg">
              Apply for Membership
            </button>
          </div>
        </div>
      </section>

        <section className="bg-base-200 rounded-xl p-8 my-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About RPICC</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              RPICC is a dynamic, student-run organization at Rajshahi Polytechnic Institute dedicated to fostering innovation and excellence in computer science and technology. 
              We provide a collaborative platform where students can learn, build, and innovate together through hands-on projects, workshops, and community events.
            </p>
            <Link 
              to={"/about"} 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Learn more about our mission and values
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        <MembershipInvitation/>

    </div>
  );
};

export default Membership;