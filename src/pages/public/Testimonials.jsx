import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionTitle from '../../components/common/SectionTitle';

// Sample testimonials data
const allTestimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Computer Science Student',
    batch: '2023',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    content: 'Joining the RPI Computer Club was the best decision of my college life. The workshops and hackathons helped me land my dream job at a top tech company!',
    rating: 5,
    date: '2023-05-15',
    tags: ['Workshops', 'Career']
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Alumni',
    batch: '2020',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    content: 'The networking opportunities through the club connected me with industry professionals and opened doors I never thought possible. Forever grateful!',
    rating: 4,
    date: '2023-04-22',
    tags: ['Networking', 'Alumni']
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Computer Technology Student',
    batch: '2024',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    content: 'The hands-on projects and mentorship from seniors helped me build a strong portfolio. I got three internship offers in my third year!',
    rating: 5,
    date: '2023-06-10',
    tags: ['Projects', 'Mentorship']
  },
  {
    id: 4,
    name: 'Emily Wilson',
    role: 'Computer Science Student',
    batch: '2023',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    content: 'The coding competitions pushed me out of my comfort zone and improved my problem-solving skills significantly.',
    rating: 4,
    date: '2023-03-05',
    tags: ['Competitions', 'Learning']
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Alumni',
    batch: '2019',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    content: 'The leadership experience I gained as a club officer was invaluable. It helped me develop skills that I use daily in my role as a tech lead.',
    rating: 5,
    date: '2023-02-18',
    tags: ['Leadership', 'Career']
  },
  {
    id: 6,
    name: 'Priya Patel',
    role: 'Computer Technology Student',
    batch: '2025',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    content: 'The supportive community helped me overcome imposter syndrome and find my passion for machine learning. Highly recommend joining!',
    rating: 5,
    date: '2023-01-30',
    tags: ['Community', 'Learning']
  }
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(allTestimonials);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    batch: 'All',
    rating: 'All',
    tag: 'All'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  // Get unique values for filters
  const batches = ['All', ...new Set(allTestimonials.map(t => t.batch))];
  const ratings = ['All', ...new Set(allTestimonials.map(t => t.rating))].sort((a, b) => b - a);
  const allTags = ['All', ...new Set(allTestimonials.flatMap(t => t.tags))];

  // Filter and search testimonials
  useEffect(() => {
    let filtered = [...allTestimonials];

    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        t =>
          t.name.toLowerCase().includes(term) ||
          t.role.toLowerCase().includes(term) ||
          t.content.toLowerCase().includes(term) ||
          t.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Apply filters
    if (filters.batch !== 'All') {
      filtered = filtered.filter(t => t.batch === filters.batch);
    }
    if (filters.rating !== 'All') {
      filtered = filtered.filter(t => t.rating === parseInt(filters.rating));
    }
    if (filters.tag !== 'All') {
      filtered = filtered.filter(t => t.tags.includes(filters.tag));
    }

    setTestimonials(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, filters]);

  // Get current testimonials for pagination
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Render star rating
  const renderStars = rating => {
    return Array(5)
      .fill()
      .map((_, i) => (
        <FiStar
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-sky-400 fill-current' : 'text-gray-300'}`}
        />
      ));
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hear what our members and alumni have to say about their experiences with RPI Computer Club
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-base-200 rounded-xl p-6 shadow-sm mb-12">
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="batch-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Batch
              </label>
              <select
                id="batch-filter"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md"
                value={filters.batch}
                onChange={e => setFilters({ ...filters, batch: e.target.value })}
              >
                {batches.map(batch => (
                  <option key={batch} value={batch}>
                    {batch === 'All' ? 'All Batches' : `Batch ${batch}`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="rating-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <select
                id="rating-filter"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md"
                value={filters.rating}
                onChange={e => setFilters({ ...filters, rating: e.target.value })}
              >
                {ratings.map(rating => (
                  <option key={rating} value={rating}>
                    {rating === 'All' ? 'All Ratings' : `${rating} Star${rating > 1 ? 's' : ''}`}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="tag-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="tag-filter"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md"
                value={filters.tag}
                onChange={e => setFilters({ ...filters, tag: e.target.value })}
              >
                {allTags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag === 'All' ? 'All Categories' : tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        {testimonials.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentTestimonials.map(testimonial => (
                <div
                  key={testimonial.id}
                  className="bg-base-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        className="h-12 w-12 rounded-full object-cover mr-4"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div>
                        <h3 className="font-semibold text-lg text-base-content">{testimonial.name}</h3>
                        <p className="text-sm text-base-content/70">
                          {testimonial.role} • Batch {testimonial.batch}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
                    <p className="text-base-content/70 mb-4 line-clamp-4">{testimonial.content}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {testimonial.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-sm text-base-content/70">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full hover:bg-base-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiChevronLeft className="h-5 w-5" />
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    // Show first page, last page, current page, and pages around current page
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => paginate(pageNum)}
                        className={`px-4 py-2 rounded-full ${
                          currentPage === pageNum
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No testimonials found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Have an experience with RPI Computer Club you'd like to share? We'd love to hear from you!
          </p>
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-200">
            Submit Your Testimonial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;