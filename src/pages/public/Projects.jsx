import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiX, FiStar, FiGitBranch, FiUsers, FiTag } from 'react-icons/fi';
import ProjectCard from '../../components/Projects/ProjectCard';
import SectionTitle from '../../components/common/SectionTitle';
import PROJECTS from "../../utils/data/PROJECTS";

// Utility function to extract unique categories and tags
const getUniqueItems = (items, key) => {
  const allItems = items.flatMap(item => item[key] || []);
  return ['All', ...new Set(allItems)];
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    status: 'All',
    tag: 'All'
  });
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories, statuses, and tags
  const categories = useMemo(() => getUniqueItems(PROJECTS, 'category'), []);
  const statuses = useMemo(() => getUniqueItems(PROJECTS, 'status'), []);
  const allTags = useMemo(() => {
    const tags = new Set();
    PROJECTS.forEach(project => {
      project.tags?.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags)];
  }, []);

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filters.category === 'All' || 
                           project.category === filters.category;
      
      const matchesStatus = filters.status === 'All' || 
                          project.status === filters.status.toLowerCase();
      
      const matchesTag = filters.tag === 'All' || 
                       project.tags?.includes(filters.tag);
      
      return matchesSearch && matchesCategory && matchesStatus && matchesTag;
    });
  }, [searchTerm, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'All',
      status: 'All',
      tag: 'All'
    });
    setSearchTerm('');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-cyber-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Projects"
          subtitle="Explore our open source projects and contributions"
          center
        />

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-cyber-light/50" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="block w-full pl-10 pr-3 py-3 border border-cyber-gray/30 bg-cyber-gray/10 rounded-lg text-cyber-light placeholder-cyber-light/30 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-3 border border-cyber-gray/30 bg-cyber-gray/10 hover:bg-cyber-gray/20 rounded-lg transition-colors"
            >
              <FiFilter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-cyber-gray/10 border border-cyber-gray/20 rounded-xl p-6 mb-6 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-cyber-light/70 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full bg-cyber-gray/20 border border-cyber-gray/30 rounded-lg px-3 py-2 text-cyber-light focus:outline-none focus:ring-2 focus:ring-cyber-blue/50"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cyber-light/70 mb-2">
                    Status
                  </label>
                  <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="w-full bg-cyber-gray/20 border border-cyber-gray/30 rounded-lg px-3 py-2 text-cyber-light focus:outline-none focus:ring-2 focus:ring-cyber-blue/50"
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cyber-light/70 mb-2">
                    Tag
                  </label>
                  <select
                    value={filters.tag}
                    onChange={(e) => handleFilterChange('tag', e.target.value)}
                    className="w-full bg-cyber-gray/20 border border-cyber-gray/30 rounded-lg px-3 py-2 text-cyber-light focus:outline-none focus:ring-2 focus:ring-cyber-blue/50"
                  >
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="text-sm text-cyber-blue hover:text-cyber-blue/80 flex items-center"
                >
                  <FiX className="mr-1" /> Clear filters
                </button>
              </div>
            </motion.div>
          )}
          
          {/* Active Filters */}
          {(filters.category !== 'All' || filters.status !== 'All' || filters.tag !== 'All') && (
            <div className="flex flex-wrap gap-2 mb-6">
              {filters.category !== 'All' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyber-blue/20 text-cyber-blue">
                  {filters.category}
                  <button 
                    onClick={() => handleFilterChange('category', 'All')}
                    className="ml-2 hover:text-cyber-blue/70"
                  >
                    <FiX className="h-3 w-3" />
                  </button>
                </span>
              )}
              {filters.status !== 'All' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                  {filters.status}
                  <button 
                    onClick={() => handleFilterChange('status', 'All')}
                    className="ml-2 hover:text-green-400/70"
                  >
                    <FiX className="h-3 w-3" />
                  </button>
                </span>
              )}
              {filters.tag !== 'All' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                  {filters.tag}
                  <button 
                    onClick={() => handleFilterChange('tag', 'All')}
                    className="ml-2 hover:text-purple-400/70"
                  >
                    <FiX className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-cyber-light/50 text-lg mb-4">
              No projects found matching your criteria
            </div>
            <button
              onClick={clearFilters}
              className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-cyber-light mb-4">
            Have a project idea?
          </h3>
          <p className="text-cyber-light/70 mb-6 max-w-2xl mx-auto">
            Join our community and collaborate on exciting projects with fellow tech enthusiasts.
          </p>
          <button className="bg-cyber-blue hover:bg-cyber-blue/90 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Start a New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
