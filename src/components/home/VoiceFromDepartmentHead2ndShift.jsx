import React from 'react';
import SectionTitle from '../common/SectionTitle';

const VoiceFromDepartmentHead2ndShift = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTitle
            title="Message from the Department Head"
            subtitle="Leadership and vision for the future"
          />
        </div>
        
        <div className="bg-base-200 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex flex-row-reverse">
            <div className="md:flex-shrink-0 md:w-1/3 lg:w-1/4">
              <div className="h-full w-full bg-gradient-to-br from-sky-500 to-blue-500 p-1">
                <div className="h-full bg-base-100 rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://rajshahi.polytech.gov.bd/sites/default/files/files/rajshahi.polytech.gov.bd/teacher_list/94748bbf_3a8d_44d2_9680_0ec9c8d88047/2023-11-16-03-57-be188b80bf23bddaa4d39658751e393c.jpeg"
                    alt="Department Head"
                  />
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 lg:p-16">
              <div className="relative">
                <svg
                  className="absolute -top-12 -left-8 w-24 h-24 text-base-300 opacity-20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.016 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.016 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <blockquote className="relative z-10">
                  <p className="text-lg md:text-xl lg:text-2xl font-medium text-base-content mb-6 leading-relaxed">
                   <span className="text-red-500">This is dummy data</span> "The Computer Technology Department takes great pride in the RPI Computer Club's achievements and their commitment to excellence. Our students' innovative projects and dedication to learning reflect the high standards of our department. We encourage all members to continue pushing boundaries and exploring new frontiers in technology."
                  </p>
                  
                  <footer className="mt-8">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-lg font-semibold text-sky-500">
                          Nasrin Akhter .
                        </div>
                        <div className="text-base-content/70">
                          Department Head (2nd shift), Computer Science Department <br />
                          Rajshahi Polytechnic Institute
                        </div>
                      </div>
                    </div>
                  </footer>
                  
                  <div className="mt-6">
                    <div className="text-2xl font-signature ">
                      Nasrin Akhter
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-500 mt-2"></div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceFromDepartmentHead2ndShift;
