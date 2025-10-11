import React from 'react';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiUsers, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const ProjectCard = ({ project }) => {
  const getStatusBadge = (status) => {
    const statusColors = {
      active: 'bg-green-500/20 text-green-400',
      completed: 'bg-blue-500/20 text-blue-400',
      'on-hold': 'bg-yellow-500/20 text-yellow-400',
      archived: 'bg-gray-500/20 text-gray-400'
    };

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColors[status] || 'bg-gray-500/20 text-gray-400'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-cyber-gray/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyber-gray/20 hover:border-cyber-blue/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-cyber-blue/10"
    >
      {/* Project Image with Gradient Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.coverImage} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute top-4 right-4 z-10">
          {getStatusBadge(project.status)}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-cyber-light group-hover:text-cyber-blue transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-cyber-light/60 text-sm mt-1">
              Updated {formatDate(project.lastUpdated)}
            </p>
          </div>
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-cyber-light/60 hover:text-cyber-blue hover:bg-cyber-gray/20 rounded-lg transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub className="h-5 w-5" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-cyber-light/60 hover:text-cyber-blue hover:bg-cyber-gray/20 rounded-lg transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-cyber-light/70 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyber-gray/20 text-cyber-light/80 hover:bg-cyber-blue/20 hover:text-cyber-blue transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyber-gray/20 text-cyber-light/40">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>

          {/* Project Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-cyber-gray/20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-xs text-cyber-light/60">
                <FiStar className="h-4 w-4 text-yellow-400" />
                <span>{project.stars || 0}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-cyber-light/60">
                <FiGitBranch className="h-4 w-4 text-green-400" />
                <span>{project.forks || 0}</span>
              </div>
            </div>
            
            <Link 
              to={`/projects/${project.id}`}
              className="inline-flex items-center text-sm font-medium text-cyber-blue hover:text-cyber-blue/80 transition-colors group"
            >
              View Details
              <FiArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;