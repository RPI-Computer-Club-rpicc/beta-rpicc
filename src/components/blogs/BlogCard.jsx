
import { Link } from 'react-router';
import { FiUser, FiCalendar, FiClock, FiHeart, FiMessageSquare } from 'react-icons/fi';

const BlogCard = ({ blog }) => {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link to={`/blogs/${blog.id}`}>

    <article className=" rounded-xl bg-base-300 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Featured Image */}
      <div className="h-48  overflow-hidden">
        <img 
          src={blog.featuredImage} 
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400?text=Blog+Image';
          }}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Category and Featured Badge */}
        <div className="flex justify-between items-center mb-3">
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {blog.category}
          </span>
          {blog.featured && (
            <span className="inline-flex items-center bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-bold  mb-2 hover:text-sky-600 transition-colors">
            {blog.title}
        </h2>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {blog.excerpt}
        </p>
        
        {/* Meta Info */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <FiUser className="mr-1.5" size={14} />
                {blog.author}
              </span>
              <span className="flex items-center">
                <FiCalendar className="mr-1.5" size={14} />
                {formattedDate}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <FiClock className="mr-1.5" size={14} />
                {blog.readTime}
              </span>
            </div>
          </div>
          
          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <FiHeart className="mr-1.5" size={14} />
                {blog.likes}
              </span>
              <span className="flex items-center">
                <FiMessageSquare className="mr-1.5" size={14} />
                {blog.comments}
              </span>
            </div>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
              {blog.views} views
            </span>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default BlogCard;