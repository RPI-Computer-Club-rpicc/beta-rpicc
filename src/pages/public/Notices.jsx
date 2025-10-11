import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FiCalendar, FiClock, FiUser, FiAlertCircle, FiDownload, FiShare2, FiEye } from 'react-icons/fi';

// Mock data - Replace with actual API call
const mockNotices = [
  {
    id: 1,
    title: 'Important: Upcoming Workshop on Advanced Web Development',
    content: 'We are excited to announce a hands-on workshop on Advanced Web Development covering modern frameworks and best practices. The workshop will be conducted by industry experts and is open to all members.',
    publishDate: '2025-10-05',
    lastUpdated: '2025-10-08',
    author: 'RPI Computer Club',
    category: 'Workshop',
    priority: 'high',
    status: 'active',
    views: 124,
    attachments: [
      { name: 'Workshop_Details.pdf', url: 'https://absyd.xyz' },
      { name: 'Registration_Form.docx', url: 'https://absyd.xyz' }
    ]
  },
  {
    id: 2,
    title: 'Notice: Club Meeting Rescheduled',
    content: 'The monthly club meeting originally scheduled for October 15th has been rescheduled to October 17th at the same time and location. Please update your calendars accordingly.',
    publishDate: '2025-10-01',
    lastUpdated: '2025-10-01',
    author: 'Club Secretary',
    category: 'Announcement',
    priority: 'medium',
    status: 'active',
    views: 89,
    attachments: []
  },
  {
    id: 3,
    title: 'Call for Project Proposals: Hackathon 2025',
    content: 'Submit your innovative project proposals for the upcoming Hackathon 2025. Selected teams will receive mentorship and resources to bring their ideas to life. The deadline for submission is November 1st, 2025.',
    publishDate: '2025-09-25',
    lastUpdated: '2025-09-28',
    author: 'Events Committee',
    category: 'Opportunity',
    priority: 'high',
    status: 'active',
    views: 156,
    attachments: [
      { name: 'Hackathon_Guidelines.pdf', url: 'https://absyd.xyz' },
      { name: 'Project_Proposal_Template.docx', url: 'https://absyd.xyz' }
    ]
  }
];

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Simulate API fetch
    const fetchNotices = async () => {
      try {
        // In a real app, you would fetch from an API:
        // const response = await fetch('/api/notices');
        // const data = await response.json();
        
        // For now, using mock data
        setTimeout(() => {
          setNotices(mockNotices);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching notices:', error);
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(notices.map(notice => notice.category))];

  if (loading) {
    return (
      <div className="min-h-screen   py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-12   rounded w-1/3"></div>
            <div className="h-6   rounded w-1/2"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6   rounded-lg shadow-md">
                <div className="h-6   rounded w-3/4 mb-4"></div>
                <div className="h-4   rounded w-full mb-2"></div>
                <div className="h-4   rounded w-5/6 mb-4"></div>
                <div className="h-4   rounded w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold   mb-4">Notices & Announcements</h1>
          <p className="text-lg  text-gray-400 ">Stay updated with the latest news and important information</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search notices..."
              className="w-full px-4 py-3 pl-10   border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-3.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-sky-600 text-white'
                    : ' border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-6">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div key={notice.id} className="bg-base-200   rounded-lg p-4 transition-colors">
                
                <h3 className="text-base font-medium   mb-2"><span className={`${getPriorityColor(notice.priority)} px-2 py-0.5 text-xs font-medium rounded mr-2`}>{notice.priority.toUpperCase()}</span>{notice.title}</h3>
                
                <div className="flex items-center justify-between text-xs text-gray-400 ">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <FiUser className="mr-1" size={12} />
                      {notice.author}
                    </span>
                    <span className="flex items-center">
                      <FiCalendar className="mr-1" size={12} />
                      {formatDate(notice.publishDate)}
                    </span>
                  </div>
                  
                  {notice.attachments && notice.attachments.length > 0 && (
                    <a href={notice.attachments[0].url} download={notice.attachments[0].name}>
                    <button 
                      className="text-blue-600 cursor-pointer text-sky-500 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                      
                    >
                      <FiDownload size={14} />
                    </button>
                    </a>
                  )}
                </div>
                </div> 
            ))
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                <FiAlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No notices found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {searchTerm 
                  ? `No notices match your search for "${searchTerm}"`
                  : selectedCategory !== 'all'
                    ? `No notices found in the ${selectedCategory} category`
                    : 'There are currently no notices available.'}
              </p>
              {(searchTerm || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notices;