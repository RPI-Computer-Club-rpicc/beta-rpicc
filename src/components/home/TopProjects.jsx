import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router';
import ProjectCard from '../Projects/ProjectCard';
import SectionTitle from '../common/SectionTitle';
import { FaArrowRight } from 'react-icons/fa';
import PROJECTS from "../../utils/data/PROJECTS"

const TopProjects = () => {
  // Get featured projects
  const featuredProjects = useMemo(() => 
    PROJECTS.slice(0, 3)
  , []);

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-center items-center mb-8">
           <SectionTitle
             title="Top Projects"
             subtitle="Explore our open source projects and contributions"
             center
           />
        </div>

        <div className="relative
        ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=" w-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          {/* Gradient fade effect for the right side */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cyber-dark to-transparent pointer-events-none"></div>
        </div>
        <div className="mt-12 text-center">
          <Link 
            to="/projects" 
            className="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-medium bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 rounded-lg"
          >
            <span className="relative z-10">View All Projects</span>
            <FaArrowRight className='ml-2'/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopProjects;