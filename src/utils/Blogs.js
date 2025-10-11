const BLOGS = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    slug: "getting-started-with-react-hooks",
    excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    content: `# Getting Started with React Hooks

React Hooks have revolutionized how we write React components. In this comprehensive guide, we'll explore the most commonly used hooks like useState, useEffect, and useContext.

## What are Hooks?
Hooks are functions that let you use state and other React features without writing classes. They were introduced in React 16.8 and have since become the recommended way to write React components.

## Key Benefits
- **Simplified Code**: Write less code with the same functionality
- **Reusable Logic**: Extract component logic into reusable functions
- **Better Organization**: Related code is kept together in the same component

## Getting Started
To start using Hooks, you'll need React 16.8 or later. No need to install anything special - they're part of React!`,
    author: "Sarah Johnson",
    authorRole: "Senior Frontend Developer",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
    date: "2025-10-15",
    lastUpdated: "2025-10-18",
    readTime: "8 min read",
    category: "React",
    tags: ["react", "hooks", "frontend", "javascript"],
    featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
    featured: true,
    status: "published",
    views: 1245,
    likes: 89,
    comments: 23,
    seo: {
      metaTitle: "Master React Hooks: A Comprehensive Guide for Developers",
      metaDescription: "Learn how to use React Hooks to build better React applications with this step-by-step tutorial.",
      keywords: ["react", "hooks", "tutorial", "frontend development"]
    }
  },
  {
    id: 2,
    title: "The Future of Web Development in 2025",
    slug: "future-of-web-development-2025",
    excerpt: "Explore the latest trends and technologies shaping the future of web development in 2025.",
    content: `# The Future of Web Development in 2025

As we move further into the decade, web development continues to evolve at a rapid pace. Here are the key trends to watch in 2025...`,
    author: "Michael Chen",
    authorRole: "Tech Lead",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    date: "2025-10-10",
    lastUpdated: "2025-10-12",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["webdev", "trends", "2025", "technology"],
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    featured: true,
    status: "published",
    views: 987,
    likes: 145,
    comments: 42,
    seo: {
      metaTitle: "Web Development Trends 2025: What's Next?",
      metaDescription: "Discover the top web development trends and technologies that will dominate in 2025.",
      keywords: ["web development", "trends", "2025", "technology"]
    }
  },
  {
    id: 3,
    title: "Mastering CSS Grid Layout",
    slug: "mastering-css-grid-layout",
    excerpt: "A comprehensive guide to CSS Grid Layout with practical examples and best practices.",
    content: `# Mastering CSS Grid Layout

CSS Grid has completely changed how we approach web layouts. In this guide, we'll cover everything you need to know...`,
    author: "Emma Davis",
    authorRole: "UI/UX Designer",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    date: "2025-10-05",
    lastUpdated: "2025-10-08",
    readTime: "15 min read",
    category: "CSS",
    tags: ["css", "grid", "layout", "frontend"],
    featuredImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
    featured: false,
    status: "published",
    views: 765,
    likes: 92,
    comments: 18,
    seo: {
      metaTitle: "Complete Guide to CSS Grid Layout in 2025",
      metaDescription: "Learn how to create complex layouts with CSS Grid through practical examples and best practices.",
      keywords: ["css grid", "layout", "frontend", "web design"]
    }
  },
  {
    id: 4,
    title: "Building Scalable Node.js Applications",
    slug: "scalable-nodejs-applications",
    excerpt: "Best practices and patterns for building highly scalable Node.js applications in production.",
    content: `# Building Scalable Node.js Applications

Node.js has become the go-to runtime for building scalable network applications. In this article, we'll explore...`,
    author: "David Kim",
    authorRole: "Backend Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    date: "2025-09-28",
    lastUpdated: "2025-10-02",
    readTime: "20 min read",
    category: "Node.js",
    tags: ["nodejs", "backend", "scalability", "performance"],
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    featured: false,
    status: "published",
    views: 1102,
    likes: 178,
    comments: 34,
    seo: {
      metaTitle: "Node.js Scalability: Best Practices for 2025",
      metaDescription: "Learn how to build highly scalable Node.js applications with these proven patterns and techniques.",
      keywords: ["nodejs", "scalability", "backend", "performance"]
    }
  },
  {
    id: 5,
    title: "Introduction to WebAssembly",
    slug: "introduction-to-webassembly",
    excerpt: "A beginner's guide to WebAssembly and how it's changing web performance.",
    content: `# Introduction to WebAssembly

WebAssembly (WASM) is a binary instruction format that enables high-performance applications on web pages...`,
    author: "Lisa Wong",
    authorRole: "Web Performance Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    date: "2025-09-20",
    lastUpdated: "2025-09-25",
    readTime: "10 min read",
    category: "WebAssembly",
    tags: ["webassembly", "performance", "web", "javascript"],
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    featured: true,
    status: "published",
    views: 890,
    likes: 134,
    comments: 27,
    seo: {
      metaTitle: "WebAssembly 101: Boosting Web Performance",
      metaDescription: "Discover how WebAssembly can dramatically improve your web application's performance.",
      keywords: ["webassembly", "performance", "web", "javascript"]
    }
  }
];

export default BLOGS;