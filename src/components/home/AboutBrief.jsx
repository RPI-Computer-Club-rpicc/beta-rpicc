import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../../assets/rpicc-logo.png";
import SectionTitle from "../common/SectionTitle";
import { 
  FaChalkboardTeacher, 
  FaFlask, 
  FaTrophy, 
  FaUserGraduate, 
  FaGlobe,
  FaLightbulb,
  FaUsersCog
} from "react-icons/fa";

const AboutBrief = () => {
  const features = [
    {
      icon: <FaLaptopCode className="h-6 w-6" />,
      title: "Hands-on Learning",
      description: "Practical experience with real-world projects"
    },
    {
      icon: <FaUsersCog className="h-6 w-6" />,
      title: "Collaborative Environment",
      description: "Work with like-minded peers and mentors"
    },
    {
      icon: <FaLightbulb className="h-6 w-6" />,
      title: "Innovation Focus",
      description: "Encouraging creative problem-solving"
    }
  ];

  const activities = [
    {
      icon: <FaChalkboardTeacher className="h-5 w-5" />,
      text: "Technical workshops and hands-on training",
    },
    {
      icon: <FaLaptopCode className="h-5 w-5" />,
      text: "Real-world software and hardware projects",
    },
    {
      icon: <FaFlask className="h-5 w-5" />,
      text: "Research and innovation challenges",
    },
    {
      icon: <FaTrophy className="h-5 w-5" />,
      text: "Inter-departmental competitions",
    },
    {
      icon: <FaUserGraduate className="h-5 w-5" />,
      text: "Mentorship and career guidance",
    },
    {
      icon: <FaGlobe className="h-5 w-5" />,
      text: "Community and outreach initiatives",
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-base-100 to-base-200">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative container mx-auto px-4  max-w-7xl">
        <SectionTitle
          title="About Our Club"
          subtitle="Empowering Future Tech Leaders"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <div className="flex items-center space-x-3 bg-sky-500/10 px-4 py-2 rounded-full">
                <div className="p-2 bg-sky-500/20 rounded-full">
                  <FaUsers className="h-5 w-5 text-sky-500" />
                </div>
                <span className="text-sm font-medium text-sky-600">Since 2023</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold  leading-tight">
              Bridging <span className="text-sky-500">Academic Learning</span> with <span className="text-sky-500">Real-World Technology</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              RPI Computer Club is a student-driven, teacher-advised organization under the Computer Science Department, Rajshahi Polytechnic Institute. We provide a structured environment for students to collaborate, learn, and build their professional identities.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-base-100 backdrop-blur-sm rounded-xl  ">
                  <div className="p-2 bg-sky-50 rounded-lg text-sky-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold ">{feature.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/about"
                className="px-8 py-3.5 rounded-lg font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Learn More
              </Link>
              <Link
                to="/join"
                className="px-8 py-3.5 rounded-lg font-medium text-sky-600 bg-white hover:bg-gray-50 border border-gray-200 transition-all"
              >
                Join Our Community
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <img src={Logo} alt="RPI Computer Club" className="h-16 w-16" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Our Core Activities</h3>
              
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <span className="flex-shrink-0 mt-1 p-1.5 bg-sky-50 rounded-lg text-sky-500 group-hover:bg-sky-100 transition-colors">
                      {activity.icon}
                    </span>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {activity.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div 
                      key={item}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600"
                    >
                      {item}+
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">100+ Active Members</p>
                  <p className="text-xs text-gray-500">Join our growing community</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrief;