const PROJECTS = [
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


export default PROJECTS;