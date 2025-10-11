import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiGitBranch,
  FiUsers,
  FiCalendar,
  FiClock,
  FiCode,
  FiFileText,
  FiList,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";
// import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the project data by ID from an API
    const fetchProject = async () => {
      try {
        // Simulate API call
        // const response = await fetch('/projects.json');
        // const data = await response.json();
        // const projectData = data.find(p => p.id === parseInt(id));
        const projectData = {
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
            {
              id: 1,
              title: "Initial Setup",
              completed: true,
              date: "2023-09-01",
            },
            {
              id: 2,
              title: "Core Features",
              completed: true,
              date: "2023-10-01",
            },
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
        };
        setProject(projectData);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyber-dark py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-cyber-gray/30 rounded-xl max-w-2xl"></div>
            <div className="h-96 bg-cyber-gray/20 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cyber-light mb-4">
            Project not found
          </h2>
          <Link to="/projects" className="text-cyber-blue hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="prose prose-invert "> 
              {project.longDescription} 
          </div>
        );
      case "screenshots":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots?.map((screenshot, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border border-cyber-gray/30"
              >
                <img
                  src={screenshot}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        );
      case "roadmap":
        return (
          <div className="space-y-6">
            {project.roadmap?.map((item) => (
              <div key={item.id} className="flex items-start">
                <div
                  className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                    item.completed
                      ? "bg-green-500/20 text-green-400"
                      : "bg-cyber-gray/30 text-cyber-light/50"
                  }`}
                >
                  {item.completed ? (
                    <FiCheckCircle className="h-5 w-5" />
                  ) : (
                    <FiClock className="h-5 w-5" />
                  )}
                </div>
                <div className="ml-4">
                  <h4 className="text-cyber-light font-medium">{item.title}</h4>
                  <p className="text-sm text-cyber-light/60">
                    {formatDate(item.date)} •{" "}
                    {item.completed ? "Completed" : "Pending"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );
      case "faq":
        return (
          <div className="space-y-4">
            {project.faqs?.map((faq, index) => (
              <div key={index} className="border-b border-cyber-gray/30 pb-4">
                <h4 className="text-cyber-light font-medium">{faq.question}</h4>
                <p className="text-cyber-light/70 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-cyber-blue hover:text-cyber-blue/80 mb-8 transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 text-cyber-blue group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-cyber-gray/10 rounded-xl p-6 mb-8 border border-cyber-gray/20 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-cyber-light mb-2">
                {project.title}
              </h1>
              <p className="text-cyber-light/80 text-lg">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyber-blue/20 text-cyber-blue">
                  {project.category}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-400">
                  {project.status.charAt(0).toUpperCase() +
                    project.status.slice(1)}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400">
                  {project.difficulty}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-cyber-blue/20 rounded-lg text-sm font-medium text-cyber-light bg-cyber-gray/20 hover:bg-cyber-gray/30 transition-colors"
                >
                  <FiGithub className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-cyber-blue/30 rounded-lg text-sm font-medium text-white bg-cyber-blue/90 hover:bg-cyber-blue transition-colors"
                >
                  <FiExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="border-b border-cyber-gray/30 mb-8">
              <nav className="-mb-px flex space-x-8">
                {["overview", "screenshots", "roadmap", "faq"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? "border-cyber-blue text-cyber-blue"
                        : "border-transparent text-cyber-light/60 hover:text-cyber-light hover:border-cyber-gray/50"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mb-12">{renderTabContent()}</div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Project Info */}
            <div className="bg-cyber-gray/10 rounded-xl p-6 border border-cyber-gray/20 shadow-sm">
              <h3 className="text-lg font-medium text-cyber-light mb-4">
                Project Information
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-cyber-light/60">
                    Status
                  </h4>
                  <p className="text-cyber-light">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === "active"
                          ? "bg-cyber-green/20 text-cyber-green"
                          : project.status === "completed"
                          ? "bg-cyber-blue/20 text-cyber-blue"
                          : "bg-cyber-yellow/20 text-cyber-yellow"
                      }`}
                    >
                      {project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                    </span>
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-cyber-light/60">
                    Started
                  </h4>
                  <p className="text-cyber-light">
                    {formatDate(project.startDate)}
                  </p>
                </div>

                {project.endDate && (
                  <div>
                    <h4 className="text-sm font-medium text-cyber-light/60">
                      Target Completion
                    </h4>
                    <p className="text-cyber-light">
                      {formatDate(project.endDate)}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-medium text-cyber-light/60">
                    Category
                  </h4>
                  <p className="text-cyber-light">{project.category}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-cyber-light/60">
                    Difficulty
                  </h4>
                  <p className="text-cyber-light">{project.difficulty}</p>
                </div>

                {project.license && (
                  <div>
                    <h4 className="text-sm font-medium text-cyber-light/60">
                      License
                    </h4>
                    <p className="text-cyber-light">{project.license}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-cyber-gray/10 rounded-xl p-6 border border-cyber-gray/20 shadow-sm">
              <h3 className="text-lg font-medium text-cyber-light mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyber-gray/20 text-cyber-light/90 border border-cyber-gray/30 hover:bg-cyber-gray/30 transition-colors"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Contributors */}
            {project.contributors?.length > 0 && (
              <div className="bg-cyber-gray/10 rounded-xl p-6 border border-cyber-gray/20 shadow-sm">
                <h3 className="text-lg font-medium text-cyber-light mb-4">
                  Team
                </h3>
                <div className="space-y-3">
                  {project.contributors.map((contributor, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="text-cyber-light font-medium">
                          {contributor.name}
                        </p>
                        <p className="text-sm text-cyber-light/60">
                          {contributor.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="bg-cyber-gray/10 rounded-xl p-6 border border-cyber-gray/20 shadow-sm">
              <h3 className="text-lg font-medium text-cyber-light mb-4">
                Links
              </h3>
              <div className="space-y-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyber-blue hover:text-cyber-blue/80 transition-colors group"
                  >
                    <FiGithub className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    GitHub Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyber-blue hover:text-cyber-blue/80 transition-colors group"
                  >
                    <FiExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </a>
                )}
                {project.documentationUrl && (
                  <a
                    href={project.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyber-blue hover:text-cyber-blue/80 transition-colors group"
                  >
                    <FiFileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Documentation
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
