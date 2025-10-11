import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router';
import ProjectCard from '../Projects/ProjectCard';
import SectionTitle from '../common/SectionTitle';
import { FaArrowRight } from 'react-icons/fa';

// Import or define projects data (you might want to move this to a separate data file)
const projectsData = [
  {
    id: 1,
    title: "RPI Computer Club Website",
    description: "Official website for RPI Computer Club with events, projects, and resources.",
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Web Development",
    status: "active",
    tags: ["React", "Tailwind CSS", "Node.js"],
    lastUpdated: "2023-10-01",
    githubUrl: "https://github.com/RPI-Computer-Club/rpicc-website",
    stars: 42,
    forks: 12,
    featured: true
  },
  {
    id: 2,
    title: "HackRPI 2023",
    description: "Annual hackathon organized by RPI Computer Club.",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Event",
    status: "completed",
    tags: ["Hackathon", "Event Planning", "Web Development"],
    lastUpdated: "2023-09-15",
    githubUrl: "https://github.com/RPI-Computer-Club/hackrpi-2023",
    stars: 89,
    forks: 24,
    featured: true
  },
  {
    id: 3,
    title: "RPI Course Scheduler",
    description: "Tool for RPI students to plan their course schedules.",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Tool",
    status: "active",
    tags: ["React", "TypeScript", "Node.js"],
    lastUpdated: "2023-10-05",
    githubUrl: "https://github.com/RPI-Computer-Club/course-scheduler",
    stars: 156,
    forks: 45,
    featured: true
  }
];

const TopProjects = () => {
  // Get featured projects
  const featuredProjects = useMemo(() => 
    projectsData.filter(project => project.featured)
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