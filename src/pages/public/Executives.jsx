import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiUsers, FiUserCheck, FiX } from 'react-icons/fi';
import MemberCard from '../../components/executives/MemberCard';
import AdvisorCard from '../../components/executives/AdvisorCard';
import { executives } from '../../utils/data/executives';
import { advisors } from '../../utils/data/advisors';

const Executives = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('team');
  const [filters, setFilters] = useState({
    department: '',
    role: '',
    batch: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Get unique filter options
  const filterOptions = useMemo(() => ({
    departments: [...new Set(executives.map(exec => exec.department).filter(Boolean))].sort(),
    roles: [...new Set(executives.map(exec => exec.role).filter(Boolean))].sort(),
    batches: [...new Set(executives.map(exec => exec.batch).filter(Boolean))].sort((a, b) => b.localeCompare(a))
  }), []);

  // Filter executives
  const filteredExecutives = useMemo(() => {
    return executives.filter(exec => {
      const matchesSearch = searchQuery === '' || 
        exec.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exec.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exec.department?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilters = Object.entries(filters).every(([key, value]) => 
        !value || String(exec[key] || '').toLowerCase() === value.toLowerCase()
      );

      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, filters]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.15 }
    }
  };

  const clearFilters = () => {
    setFilters({ department: '', role: '', batch: '' });
    setSearchQuery('');
  };

  const hasActiveFilters = Object.values(filters).some(Boolean) || searchQuery;

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 to-sky-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get to know the talented individuals who drive our organization forward with passion and dedication.
          </motion.p>
          
          {/* Search and Tabs */}
          <motion.div 
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-1 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab === 'team' ? 'team members' : 'advisors'}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/10 border-0 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/30 focus:outline-none"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    <FiX size={18} />
                  </button>
                )}
              </div>
              
              <div className="flex rounded-lg overflow-hidden border border-white/20">
                <button
                  onClick={() => setActiveTab('team')}
                  className={`px-4 py-2.5 text-sm font-medium flex items-center gap-2 ${
                    activeTab === 'team' 
                      ? 'bg-white text-primary' 
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <FiUsers size={16} />
                  Team
                </button>
                <button
                  onClick={() => setActiveTab('advisors')}
                  className={`px-4 py-2.5 text-sm font-medium flex items-center gap-2 ${
                    activeTab === 'advisors' 
                      ? 'bg-white text-primary' 
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  <FiUserCheck size={16} />
                  Advisors
                </button>
              </div>
            </div>
          </motion.div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mt-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {searchQuery && (
                <span className="inline-flex items-center bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                  Search: {searchQuery}
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="ml-2 hover:text-white/80"
                  >
                    <FiX size={16} />
                  </button>
                </span>
              )}
              {Object.entries(filters).map(([key, value]) => 
                value && (
                  <span key={key} className="inline-flex items-center bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                    {key}: {value}
                    <button 
                      onClick={() => setFilters(prev => ({ ...prev, [key]: '' }))}
                      className="ml-2 hover:text-white/80"
                    >
                      <FiX size={16} />
                    </button>
                  </span>
                )
              )}
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-white/80 hover:text-white text-sm font-medium flex items-center ml-2"
                >
                  Clear all
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filter Bar */}
        {activeTab === 'team' && (
          <motion.div 
            className="mb-8 bg-base-200/50 rounded-xl p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 text-sm font-medium text-base-content/80 hover:text-primary transition-colors"
                >
                  <FiFilter size={16} />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
                <span className="text-sm text-base-content/50 ml-4">
                  {filteredExecutives.length} {filteredExecutives.length === 1 ? 'member' : 'members'} found
                </span>
              </div>
              
              {showFilters && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 md:mt-0">
                  <select
                    value={filters.department}
                    onChange={(e) => setFilters({...filters, department: e.target.value})}
                    className="text-sm bg-base-100 border border-base-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
                  >
                    <option value="">All Departments</option>
                    {filterOptions.departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  
                  <select
                    value={filters.role}
                    onChange={(e) => setFilters({...filters, role: e.target.value})}
                    className="text-sm bg-base-100 border border-base-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
                  >
                    <option value="">All Roles</option>
                    {filterOptions.roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  
                  <select
                    value={filters.batch}
                    onChange={(e) => setFilters({...filters, batch: e.target.value})}
                    className="text-sm bg-base-100 border border-base-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
                  >
                    <option value="">All Batches</option>
                    {filterOptions.batches.map(batch => (
                      <option key={batch} value={batch}>{batch}</option>
                    ))}
                  </select>
                  
                  <button
                    onClick={clearFilters}
                    className="text-sm font-medium text-base-content/70 hover:text-primary transition-colors text-left"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'advisors' ? (
            <motion.div
              key="advisors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {advisors.map((advisor) => (
                <motion.div
                  key={advisor.id}
                  variants={item}
                  initial="hidden"
                  animate="show"
                  layout
                >
                  <AdvisorCard advisor={advisor} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="team"
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredExecutives.length > 0 ? (
                filteredExecutives.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={item}
                    layout
                    className="flex justify-center"
                  >
                    <MemberCard member={member} />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="col-span-full text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium text-base-content/80 mb-2">
                    No members found
                  </h3>
                  <p className="text-base-content/50">
                    Try adjusting your search or filters
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Executives;