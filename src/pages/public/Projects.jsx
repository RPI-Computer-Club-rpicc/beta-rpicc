import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiX, FiStar, FiGitBranch, FiUsers, FiTag } from 'react-icons/fi';
import ProjectCard from '../../components/Projects/ProjectCard';
import SectionTitle from '../../components/common/SectionTitle';

// Utility function to extract unique categories and tags
const getUniqueItems = (items, key) => {
  const allItems = items.flatMap(item => item[key] || []);
  return ['All', ...new Set(allItems)];
};

// Sample project data with detailed fields
const projectsData = [
  {
    id: 1,
    title: "RPI Computer Club Website",
    shortDescription: "A modern website for RPI Computer Club",
    description:
      "A comprehensive platform for RPI Computer Club to showcase events, projects, and resources. The website serves as a hub for students interested in technology and programming, featuring event management, project showcases, and resource sharing.",
    longDescription: `## Project Overview
The RPI Computer Club website is a modern, responsive platform designed to connect students with technology resources, events, and project opportunities. Built with a focus on performance and user experience, the site serves as the central hub for all club activities.

## Key Features
- Event management and registration system
- Project showcase with filtering and search
- Resource library with tutorials and documentation
- User authentication and profiles
- Admin dashboard for content management

## Technologies Used
- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT, OAuth 2.0
- **Deployment**: Vercel, AWS

## Getting Started
To run this project locally:
1. Clone the repository
2. Install dependencies: \`npm install\`
3. Set up environment variables
4. Run the development server: \`npm run dev\``,
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
    contributors: [
      {
        name: "John Doe",
        role: "Frontend Lead",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        name: "Jane Smith",
        role: "Backend Developer",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        name: "Alex Johnson",
        role: "UI/UX Designer",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
    ],
    startDate: "2023-09-01",
    endDate: "2023-12-15",
    lastUpdated: "2023-10-05",
    githubUrl: "https://github.com/rpiclub/website",
    liveUrl: "https://rpiclub.org",
    documentationUrl: "https://docs.rpiclub.org",
    status: "active",
    techStack: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Node.js", icon: "node" },
      { name: "MongoDB", icon: "mongodb" },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    category: "Web Development",
    difficulty: "Intermediate",
    stars: 24,
    forks: 8,
    openIssues: 3,
    license: "MIT",
    readmeUrl: "https://github.com/rpiclub/website/blob/main/README.md",
    roadmap: [
      { id: 1, title: "Initial Setup", completed: true, date: "2023-09-01" },
      { id: 2, title: "Core Features", completed: true, date: "2023-10-01" },
      { id: 3, title: "Testing", completed: false, date: "2023-11-01" },
      { id: 4, title: "Launch", completed: false, date: "2023-12-15" },
    ],
    requirements: [
      "Node.js 16+",
      "npm 8+ or yarn",
      "MongoDB Atlas account",
      "Git",
    ],
    faqs: [
      {
        question: "How can I contribute to this project?",
        answer: "Check our CONTRIBUTING.md file for guidelines.",
      },
      {
        question: "How do I report a bug?",
        answer: "Please open an issue on our GitHub repository.",
      },
    ],
  },
  // Add more projects as needed
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    status: 'All',
    tag: 'All'
  });
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories, statuses, and tags
  const categories = useMemo(() => getUniqueItems(projectsData, 'category'), []);
  const statuses = useMemo(() => getUniqueItems(projectsData, 'status'), []);
  const allTags = useMemo(() => {
    const tags = new Set();
    projectsData.forEach(project => {
      project.tags?.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags)];
  }, []);

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
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
