import { 
    FaCode, 
    FaLaptopCode, 
    FaNetworkWired, 
    FaMicrochip, 
    FaPalette, 
    FaPaintRoller, 
    FaBullhorn, 
    FaShieldAlt, 
    FaBrain ,
    FaSearchDollar
  } from "react-icons/fa";
  
  const SQUAD_DATA = [
    {
      id: 1,
      name: 'Programming Squad',
      slug: 'programming',
      icon: <FaCode className="text-4xl text-blue-500" />,
      description: 'Master competitive programming, algorithms, and problem-solving skills through regular contests and workshops.',
      longDescription: 'Join our Programming Squad to participate in coding competitions, algorithmic challenges, and hackathons. We focus on data structures, algorithms, and problem-solving techniques used in technical interviews and programming contests. Members get access to weekly practice sessions, mock interviews, and mentorship from experienced coders.',
      activities: [
        'Weekly coding challenges',
        'Mock interviews',
        'Competitive programming contests',
        'Algorithm study groups'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      members: 45,
      projects: 12,
      leader: 'Md. Mahafujur Rahman',
      co_leader: 'Abu Sayed',
      mobile_number: {
        leader: '01305154353',
        co_leader: '01717963289'
      },
      squad_icon: <FaCode className="h-6 w-6 text-sky-600" />
    },
    {
      id: 2,
      name: 'Web & Software Development Squad',
      slug: 'web-software-dev',
      icon: <FaLaptopCode className="text-4xl text-green-500" />,
      description: 'Build real-world web and software applications using modern technologies and best practices.',
      longDescription: 'Our Web & Software Development squad focuses on full-stack development, covering frontend, backend, and DevOps. Learn popular frameworks like React, Node.js, and modern development workflows including CI/CD, testing, and deployment strategies.',
      activities: [
        'Web development workshops',
        'Group projects',
        'Code reviews',
        'Tech stack deep dives'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      members: 38,
      projects: 15,
      leader: 'Abu Sayed',
      co_leader: 'Rokon',
      mobile_number: {
        leader: '01717963289',
        co_leader: '01890011744'
      },
      squad_icon: <FaLaptopCode className="h-6 w-6 text-sky-600" />
    },
    {
      id: 3,
      name: 'Networking Squad',
      slug: 'networking',
      icon: <FaNetworkWired className="text-4xl text-purple-500" />,
      description: 'Explore network infrastructure, security, and system administration with hands-on experience.',
      longDescription: 'Dive into the world of networking with our expert-led sessions on network architecture, protocols, and security. Get hands-on experience with real networking equipment and simulations.',
      activities: [
        'Network setup labs',
        'Security workshops',
        'CTF challenges',
        'Guest lectures from industry experts'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      members: 28,
      projects: 8,
      leader: 'Abu Bokor Siddik',
      co_leader: 'Abu Sayed',
      mobile_number: {
        leader: '01701856167',
        co_leader: '01717963289'
      },
      squad_icon: <FaNetworkWired className="h-6 w-6 text-sky-600" />
    },
    {
      id: 4,
      name: 'IOT & Hardware Squad',
      slug: 'iot-hardware',
      icon: <FaMicrochip className="text-4xl text-yellow-500" />,
      description: 'Dive into Internet of Things, embedded systems, and hardware prototyping.',
      longDescription: 'Explore the intersection of software and hardware. Work with microcontrollers, sensors, and embedded systems to create innovative IoT solutions.',
      activities: [
        'Arduino/Raspberry Pi projects',
        'Sensor integration',
        'Prototype development',
        'Hardware hacking'
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      members: 32,
      projects: 10,
      leader: 'Fuad Al Hasan',
      co_leader: 'Abdullah Al Mahmud',
      mobile_number: {
        // leader: '01569153117',
        co_leader: '01928670584'
      },
      squad_icon: <FaMicrochip className="h-6 w-6 text-sky-600" />
    },
    {
      id: 5,
      name: 'Graphics & UI/UX Squad',
      slug: 'graphics-ui-ux',
      icon: <FaPalette className="text-4xl text-pink-500" />,
      description: 'Master visual design, user experience, and creative digital media production.',
      longDescription: 'Learn the principles of design, user experience, and visual communication. Work on real projects to build your portfolio and collaborate with developers.',
      activities: [
        'Design sprints',
        'UI/UX workshops',
        'Portfolio reviews',
        'Design system development'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      members: 27,
      projects: 9,
      leader: 'Abu Mashreque Hadid',
      co_leader: 'Mst. Hafiza Khatun',
      mobile_number: {
        leader: '01303601981',
        co_leader: '01341310722'
      },
      squad_icon: <FaPaintRoller className="h-6 w-6 text-sky-600" />
    },
    {
      id: 6,
      name: 'Digital Marketing & SEO Squad',
      slug: 'digital-marketing',
      icon: <FaSearchDollar className="text-4xl text-red-500" />,
      description: 'Learn digital marketing strategies, SEO, and social media management.',
      longDescription: 'Master the art of digital marketing, from content creation to analytics. Learn how to optimize for search engines and create effective social media campaigns.',
      activities: [
        'SEO workshops',
        'Content strategy sessions',
        'Analytics deep dives',
        'Campaign planning'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      members: 22,
      projects: 7,
      leader: 'MD. Sabbir Ahmed',
      co_leader: 'Asfak Jarif Rahe',
      mobile_number: {
        leader: '01813800647',
        co_leader: '01328128856'
      },
      squad_icon: <FaBullhorn className="h-6 w-6 text-sky-600" />
    },
    {
      id: 7,
      name: 'Cyber Security Squad',
      slug: 'cyber-security',
      icon: <FaShieldAlt className="text-4xl text-indigo-500" />,
      description: 'Explore ethical hacking, penetration testing, and cybersecurity best practices.',
      longDescription: 'Dive into the world of cybersecurity with hands-on training in ethical hacking, penetration testing, and security analysis. Learn to think like a hacker to better defend against threats.',
      activities: [
        'Capture The Flag (CTF) events',
        'Security workshops',
        'Vulnerability research',
        'Red team/Blue team exercises'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      members: 35,
      projects: 11,
      leader: 'Nasim Pk',
      co_leader: 'Abdullah Al Asif',
      mobile_number: {
        leader: '01306507034',
        co_leader: '01794657283'
      },
      squad_icon: <FaShieldAlt className="h-6 w-6 text-sky-600" />
    },
    {
      id: 8,
      name: 'Research & Emerging Tech Squad',
      slug: 'emerging-tech',
      icon: <FaBrain className="text-4xl text-teal-500" />,
      description: 'Dive into AI, ML, blockchain, and other cutting-edge technologies.',
      longDescription: 'Stay ahead of the curve with our research-focused squad. Explore artificial intelligence, machine learning, blockchain, and other emerging technologies through research projects and collaborations.',
      activities: [
        'Research paper discussions',
        'Hackathons',
        'Prototype development',
        'Industry expert sessions'
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      members: 30,
      projects: 14,
      leader: 'Abu Sayed',
      co_leader: 'Nafiz PK',
      mobile_number: {
        leader: '01717963289',
        co_leader: '01710972729'
      },
      squad_icon: <FaBrain className="h-6 w-6 text-sky-600" />
    }
  ];
  
  export default SQUAD_DATA;
  