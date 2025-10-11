import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  FaLightbulb, 
  FaUsers, 
  FaTrophy, 
  FaFileAlt, 
  FaArrowRight,
  FaUser,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaCalendarAlt,
  FaBriefcase,
  FaLaptop,
  FaUserFriends,
  FaRegClock
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import HeroArea from '../../components/registration2025/HeroArea';
import OfflineReg from '../../components/registration2025/OfflineReg';
import OnlineReg from '../../components/registration2025/OnlineReg';
import FormFee from '../../components/registration2025/FormFee';
import SquadInfo from '../../components/registration2025/SquadInfo';
// Sample images - replace with actual image imports
const workshopImage = 'https://images.unsplash.com/photo-1505373877841-8d25f96d5338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';
const hackathonImage = 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';
const networkImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';
const testimonial1 = 'https://randomuser.me/api/portraits/women/44.jpg';
const testimonial2 = 'https://randomuser.me/api/portraits/men/32.jpg';
const testimonial3 = 'https://randomuser.me/api/portraits/women/68.jpg';

// Registration details
const registrationDeadlines = [
  { date: 'October 7', event: 'Form Starts' },
  { date: 'September 14', event: 'Form Ends' },
  { date: 'September 16-20', event: 'Viva' },
  { date: 'September 24', event: 'Final List of Selected Candidates' },
  { date: 'September 25', event: 'Orientation of Selected Candidates' }
];




const Registration2025 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const membershipBenefits = [
    {
      icon: <FaLightbulb className="h-8 w-8 text-white" />,
      title: 'Exclusive Workshops',
      description: 'Hands-on sessions with industry experts on cutting-edge technologies',
      bgColor: 'bg-indigo-600',
      image: workshopImage
    },
    {
      icon: <FaUsers className="h-8 w-8 text-white" />,
      title: 'Networking',
      description: 'Connect with alumni, recruiters, and tech leaders',
      bgColor: 'bg-emerald-600',
      image: networkImage
    },
    {
      icon: <FaTrophy className="h-8 w-8 text-white" />,
      title: 'Hackathons',
      description: 'Compete in high-energy coding competitions with amazing prizes',
      bgColor: 'bg-amber-600',
      image: hackathonImage
    },
    {
      icon: <FaFileAlt className="h-8 w-8 text-white" />,
      title: 'Learning Resources',
      description: 'Access to premium courses, e-books, and development tools',
      bgColor: 'bg-rose-600'
    },
    {
      icon: <SiLeetcode className="h-8 w-8 text-white" />,
      title: 'Coding Practice',
      description: 'Regular coding challenges and interview preparation',
      bgColor: 'bg-orange-600'
    },
    {
      icon: <FaUsers className="h-8 w-8 text-white" />,
      title: 'Mentorship',
      description: 'Guidance from senior members and industry mentors',
      bgColor: 'bg-purple-600'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Orientation Session',
      date: 'Oct 5, 2024',
      time: '4:00 PM - 6:00 PM',
      location: 'CS Building, Room 101',
      type: 'workshop',
      featured: true
    },
    {
      id: 2,
      title: 'Web Dev Workshop',
      date: 'Oct 12, 2024',
      time: '3:00 PM - 5:00 PM',
      location: 'IT Building, Lab 3',
      type: 'workshop'
    },
    {
      id: 3,
      title: 'Fall Hackathon',
      date: 'Nov 1-3, 2024',
      time: '6:00 PM - 6:00 PM',
      location: 'Innovation Hub',
      type: 'hackathon',
      featured: true
    },
    {
      id: 4,
      title: 'Alumni Talk',
      date: 'Nov 15, 2024',
      time: '5:00 PM - 7:00 PM',
      location: 'Auditorium',
      type: 'talk'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Engineer, Google',
      content: 'The skills I learned in RPI Computer Club directly contributed to landing my dream job at Google.',
      image: testimonial1
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, TechStart',
      content: 'The network and mentorship I found here were invaluable for launching my startup.',
      image: testimonial2
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Research Scientist, MIT',
      content: 'The hands-on projects and collaborative environment prepared me perfectly for graduate research.',
      image: testimonial3
    }
  ];

  const faqs = [
    {
      question: 'Who can join RPI Computer Club?',
      answer: 'Any RPI student with an interest in technology and programming is welcome to join, regardless of their major or experience level.'
    },
    {
      question: 'Do I need to know how to code?',
      answer: 'No prior coding experience is required! We welcome beginners and offer resources to help you get started on your coding journey.'
    },
    {
      question: 'How much time commitment is expected?',
      answer: 'You can participate as much or as little as you like. We have weekly meetings, but attendance is not mandatory.'
    },
    {
      question: 'Are there any membership fees?',
      answer: 'Yes, there is a small annual fee that helps us organize events and provide resources to all members.'
    },
    {
      question: 'How can I get involved in leadership?',
      answer: 'We hold elections for leadership positions at the end of each academic year. Active members are encouraged to run!' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Countdown */}
      <HeroArea />

      {/* Registration Process Section */}
      <div id="registration" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              How To Register
            </h2>
          </div>

          <div className="">
            {/* Offline Registration */}
            <OfflineReg />
            <hr className="my-2" />
            {/* Online Registration */}
            <OnlineReg />
          </div>
        </div>
      </div>

      {/* Squads Section */}
      <div id="fees" className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <FormFee/>
        </div>
      </div>
      <div className="my-5 py-5">
        <SquadInfo/>
      </div>
      {/* Timeline Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Important Dates
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Mark your calendar for these important deadlines
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-indigo-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {registrationDeadlines.map((item, index) => (
                <div key={index} className="relative md:flex md:items-center">
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center ${index === 0 ? 'bg-indigo-600' : 'bg-indigo-300'}`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    {index % 2 === 0 && (
                      <div className="md:pr-8">
                        <h3 className="text-xl font-bold text-gray-900">{item.event}</h3>
                        <p className="mt-1 text-indigo-600 font-medium">{item.date}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="hidden md:block md:w-1/2">
                    {index % 2 !== 0 && (
                      <div className="md:pl-8">
                        <h3 className="text-xl font-bold text-gray-900">{item.event}</h3>
                        <p className="mt-1 text-indigo-600 font-medium">{item.date}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile view */}
                  <div className="md:hidden mt-4">
                    <div className="flex items-center">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center ${index === 0 ? 'bg-indigo-600' : 'bg-indigo-300'}`}>
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-900">{item.event}</h3>
                        <p className="text-indigo-600">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600">
              Have questions? Contact our team for more information
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="https://www.facebook.com/people/Computer-Club-Rpi/61581226467108/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Contact Us
              </a>
              <a href="#register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">
              Why Join Us
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Grow Your Tech Career With Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Whether you're a beginner or an experienced coder, we have something for everyone
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {membershipBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {benefit.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                      src={benefit.image} 
                      alt={benefit.title}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center p-3 rounded-lg ${benefit.bgColor} mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {benefit.description}
                  </p>
                  <div className="mt-4">
                    <a 
                      href="#" 
                      className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-200"
                    >
                      Learn more
                      <FaArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-16 lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to join us?
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-6 text-indigo-100">
                  Become part of a community that's shaping the future of technology.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#register"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Register Now
                  </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <a
                    href="#events"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70"
                  >
                    View Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events & Timeline Section */}
      <div id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">
              Events & Timeline
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Upcoming Events
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Mark your calendars for these exciting events
            </p>
          </div>

          {/* Events Grid */}
          <div className="mt-12">
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events
                .filter(event => activeTab === 'all' || event.type === activeTab)
                .map((event) => (
                  <div 
                    key={event.id} 
                    className={`bg-white rounded-xl shadow-md overflow-hidden ${event.featured ? 'ring-2 ring-indigo-500' : ''} hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div className="p-6">
                      {event.featured && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-3">
                          Featured
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-start">
                          <FaRegCalendarAlt className="h-5 w-5 text-gray-400 mt-0.5" />
                          <span className="ml-3 text-gray-700">{event.date}</span>
                        </div>
                        <div className="flex items-start">
                          <FaRegClock className="h-5 w-5 text-gray-400 mt-0.5" />
                          <span className="ml-3 text-gray-700">{event.time}</span>
                        </div>
                        <div className="flex items-start">
                          <FaMapMarkerAlt className="h-5 w-5 text-gray-400 mt-0.5" />
                          <span className="ml-3 text-gray-700">{event.location}</span>
                        </div>
                      </div>
                      <div className="mt-6">
                        <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

         
        </div>
      </div>

      {/* Registration Form */}
      <div id="register" className="py-20 bg-gray-50 container mx-auto px-2">
        <div className="flex justify-center">
          <button 
            onClick={() => window.open('YOUR_GOOGLE_FORM_LINK', '_blank')}
            className="group relative w-full max-w-md flex justify-center items-center py-6 px-8 border border-transparent text-2xl font-bold rounded-xl shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-all duration-200 transform hover:scale-105 hover:shadow-xl active:scale-95"
            aria-label="Apply Now - Opens Google Form in a new tab"
          >
            <span className="relative z-10 flex items-center">
              Apply Now
              <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              What Our Members Say
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center">
                  <img 
                    className="h-12 w-12 rounded-full object-cover" 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-indigo-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">
              FAQs
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Find answers to common questions about RPI Computer Club
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <span className="ml-6 flex items-center">
                      {openFaq === index ? (
                        <FaChevronUp className="h-5 w-5 text-indigo-600" />
                      ) : (
                        <FaChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="prose prose-indigo text-gray-500">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-16 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Still have questions?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                We're here to help! Contact us directly and we'll get back to you shortly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:contact@rpiclub.edu"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-8 transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="#register"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-8 transition-colors duration-200"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration2025;