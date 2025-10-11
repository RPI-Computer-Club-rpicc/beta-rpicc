import React from 'react';
import { useParams, Link } from 'react-router';
import { FiCalendar, FiUser, FiClock, FiHeart, FiMessageSquare, FiArrowLeft, FiTag, FiShare2, FiBookmark } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import BLOGS from "../../utils/Blogs";
import ReactMarkdown from 'react-markdown';

const SingleBlog = () => {
  const { id } = useParams();
  const blog = BLOGS.find(blog => blog.id == id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blogs" className="text-sky-600 hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/blogs" 
              className="flex items-center text-gray-400 hover:text-sky-600 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to all posts
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{blog.readTime}</span>
              <button className="p-2 text-gray-500 hover:text-sky-600 transition-colors">
                <FiBookmark />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="h-96 w-full overflow-hidden">
        <img 
          src={blog.featuredImage} 
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x600?text=Blog+Image';
          }}
        />
      </div>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="flex-1">
            <div className="mb-8">
              <span className="inline-block bg-sky-100 text-sky-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {blog.category}
              </span>
              <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
              
              {/* Author and Date */}
              <div className="flex items-center mb-8">
                <img 
                  src={blog.authorAvatar} 
                  alt={blog.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-medium">{blog.author}</p>
                  <p className="text-sm text-gray-500">{blog.authorRole}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <FiCalendar className="mr-1.5" size={14} />
                    {formattedDate}
                    {blog.lastUpdated && (
                      <span className="ml-3 text-xs text-gray-400">
                        Updated on {new Date(blog.lastUpdated).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose max-w-none prose-lg">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <FiTag className="text-gray-500 mr-2" />
                  <h3 className="font-medium">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <FiHeart className="w-5 h-5" />
                  </button>
                  <span className="text-gray-600">{blog.likes}</span>
                  <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <FiMessageSquare className="w-5 h-5" />
                  </button>
                  <span className="text-gray-600">{blog.comments}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 mr-2">Share:</span>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-2 rounded-full bg-gray-100 text-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-2 rounded-full bg-gray-100 text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-2 rounded-full bg-gray-100 text-blue-700 hover:bg-blue-50 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-base-200 p-6 rounded-lg mb-6">
                <h3 className="font-medium text-lg mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src={blog.authorAvatar} 
                    alt={blog.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">{blog.author}</p>
                    <p className="text-sm text-gray-600">{blog.authorRole}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {blog.author} is a {blog.authorRole.toLowerCase()} with expertise in {blog.category} and related technologies.
                </p>
              </div>

              <div className="bg-base-200 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {BLOGS
                    .filter(b => b.id !== blog.id && b.category === blog.category)
                    .slice(0, 3)
                    .map(relatedPost => (
                      <Link 
                        key={relatedPost.id} 
                        to={`/blogs/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                            <img 
                              src={relatedPost.featuredImage} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm group-hover:text-sky-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Newsletter CTA */}
      <section className="bg-base-200 py-16 mt-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest articles and resources sent straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;