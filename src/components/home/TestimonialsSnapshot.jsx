import React from 'react';
import { Link } from 'react-router';
import SectionTitle from '../common/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Md. Rahim Uddin',
    role: 'Alumni, Batch 2020',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'The RPI Computer Club provided me with the skills and network that were instrumental in landing my dream job at a top tech company. The hands-on projects and mentorship were invaluable.'
  },
  {
    id: 2,
    name: 'Fatima Akter',
    role: 'Current Member',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Being part of the Computer Club has been transformative. The workshops and hackathons helped me develop practical skills that I use every day in my studies and personal projects.'
  },
  {
    id: 3,
    name: 'Karim Ahmed',
    role: 'Project Lead, 2023',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    content: 'The collaborative environment in the club pushed me to grow both technically and as a leader. The support from seniors and faculty is something I\'m truly grateful for.'
  }
];

const TestimonialsSnapshot = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle
            title="What Our Members Say"
            subtitle="Hear from our community"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-base-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-sky-600/20">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-base-content/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-base-content/90 italic">"{testimonial.content}"</p>
              <div className="mt-4 text-sky-600">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/testimonials"
            className="inline-flex items-center px-6 py-3   text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-700 hover:shadow-lg transition-colors duration-200 transform hover:-translate-y-0.5"
          >
            Read More Testimonials
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSnapshot;