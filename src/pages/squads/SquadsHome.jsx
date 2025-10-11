import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import { FiUsers, FiFolder, FiSearch, FiPlus, FiArrowRight } from 'react-icons/fi';
import SQUAD_DATA from '../../components/common/SQUAD_DATA';

const SquadsHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Get unique categories from SQUAD_DATA
  const categories = ['all', ...new Set(SQUAD_DATA.map(squad => squad.category))];

  // Filter squads based on search and active filter
  const filteredSquads = SQUAD_DATA.filter(squad => {
    const matchesSearch = squad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         squad.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || squad.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.span 
          className="inline-block px-6 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Technical Squads
        </motion.span>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join Our Specialized Teams
        </motion.h1>
        
        <motion.p 
          className="text-lg text-base-content/80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Collaborate, learn, and innovate with like-minded individuals in our specialized technical squads.
        </motion.p>
      </div>

      {/* Search and Filter */}
      <motion.div 
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiSearch className="text-base-content/40" />
          </div>
          <input
            type="text"
            className="input input-lg input-bordered w-full pl-12 rounded-full bg-base-100/50 backdrop-blur-sm"
            placeholder="Search squads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-base-100 hover:bg-base-200 text-base-content/80'
              }`}
            >
              {category === 'all' ? 'All Squads' : category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Squads Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {filteredSquads.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSquads.map((squad, index) => (
                <motion.div
                  key={squad.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    delay: index * 0.05
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative bg-base-100/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-base-300/20"
                >
                  <div className={`h-1.5 ${squad.color || 'bg-gradient-to-r from-primary to-secondary'}`}></div>
                  <div className="p-6">
                    {/* Squad Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${squad.bgColor || 'bg-primary/10'}`}>
                        {React.cloneElement(squad.icon, { 
                          className: `text-2xl ${squad.textColor || 'text-primary'}` 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-base-200 text-base-content/70 flex items-center gap-1.5">
                          <FiUsers className="text-xs" />
                          {squad.members}
                        </span>
                        <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-base-200 text-base-content/70 flex items-center gap-1.5">
                          <FiFolder className="text-xs" />
                          {squad.projects}
                        </span>
                      </div>
                    </div>

                    {/* Squad Content */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors">
                        {squad.name}
                      </h3>
                      <p className="text-base-content/70 mb-4 line-clamp-2 text-sm">
                        {squad.description}
                      </p>
                      
                      {/* Activities */}
                      {squad.activities && squad.activities.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-base-300/20">
                          <h4 className="text-xs font-semibold text-base-content/60 mb-2">KEY ACTIVITIES</h4>
                          <ul className="space-y-2">
                            {squad.activities.slice(0, 3).map((activity, i) => (
                              <li key={i} className="flex items-center text-sm text-base-content/70">
                                <div className={`w-1.5 h-1.5 rounded-full mr-2 ${squad.bgColor || 'bg-primary'}`} />
                                <span className="line-clamp-1">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-base-300/20">
                      <Link 
                        to={`/squads/${squad.slug || squad.id}`}
                        className="btn btn-sm btn-ghost group/button text-sm px-0"
                      >
                        Explore Squad
                        <FiArrowRight className="ml-1.5 group-hover/button:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-base-content/80 mb-2">
                No squads found
              </h3>
              <p className="text-base-content/60 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="btn btn-ghost btn-sm"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="max-w-2xl mx-auto bg-base-100/50 backdrop-blur-sm rounded-2xl p-8 border border-base-300/20">
          <h3 className="text-2xl font-bold mb-4">Can't find your interest?</h3>
          <p className="text-base-content/70 mb-6">
            We're always open to new ideas and specializations. Reach out to us with your interests!
          </p>
          <button className="btn btn-primary group">
            Suggest a New Squad
            <FiPlus className="ml-2 group-hover:rotate-90 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SquadsHome;