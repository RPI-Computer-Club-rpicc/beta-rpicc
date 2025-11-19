import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import MemberCard from '../../components/executives/MemberCard'

const FOUNDING_COMMITTEE =  [
  {
    id: "e1a3b0f4-12cd-4b9a-98f7-b2c0b9c1a001",
    role: "President",
    name: "Nafiz Pk",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "President, Squad Co-Leader At Research & Emerging Tech (AI,ML,Blockchain) Squad, RPI Computer Club",
    quote: "Inspire. Innovate. Lead.",
    bio: "As the President of the Computer Club: RPI, I believe in turning ideas into innovation and guiding others to grow through technology.",
    phone: "01710972729",
    whatsapp: "01710972729",
    email: "nafizcst@gmail.com",
    facebook: "https://www.facebook.com/nafiz.ahmed.27102005",
    instagram: "https://www.instagram.com/nafizahamed27/",
    linkedin: "https://www.linkedin.com/in/nafizpk27/",
    github: "https://github.com/nafizpk27",
    twitter: "https://x.com/nafizahmed27?t=r-CUdhO22o1LkUfT-TUMfA&s=09",
    website: "https://nafizpk27.github.io/",
    image: "images/executives/nafiz_pk.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Choto Bongram Primary School More , Chondrima , Rajshahi.",
  },
  {
    id: "b9c48d7a-284f-40f8-904b-cc34ea2b2f02",
    role: "Vice President",
    name: "Abu Md Mashreque Hadid",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Vice President,Squad Leader At Graphics And Ui/UX Squad, RPI Computer Club",
    quote: "Our anxiety does not come from thinking about the future but from wanting to control it!!",
    bio: "Hey, I'm Hadid.An inquisitive student who enjoys design and technology in general. Usually, I'm experimenting with new tools, making sketches, or figuring out how technology and creativity can complement one another.",
    phone: "01303601981",
    whatsapp: "01303601981",
    email: "hadidahmed944@gmail.com",
    facebook: "https://www.facebook.com/hadid721503/",
    instagram: "https://www.instagram.com/liv_inghell8/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/abu_masreque_hadid.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Nowhata , Poba , Rajshahi.",
  },
  {
    id: "c7d81b2f-8a23-4b11-b1a2-e3e7a5b4c303",
    role: "General Secretary",
    name: "Abu Sayed",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "General Secretary, Squad Leader At Research And Emerging Tech & Web And Software Development, Squad Co-Leader At Programming & Netwrorking Squad .",
    quote: "If You Think IT IS , Then IT IS - If You Don't __ It Won't .",
    bio: `Abu Sayed is a passionate and accomplished Computer Science student with over 5 years of experience in software development and 1 year of focused work in AI engineering. Currently serving as the Campus Ambassador at ICTOB and General Secretary of the RPI Computer Club, he plays a key role in fostering technical excellence, leadership, and innovation among his peers.

Abu's journey in AI began with the Machine Learning course by Andrew Ng (Stanford University, Coursera) and Mathematics for Machine Learning by DeepLearning.AI, which laid the foundation for his understanding of modern AI systems. He later earned a Data Science certification from Ostad Learning Platform and completed the Phitron Computer Science Fundamentals Course, gaining deep expertise in data structures, algorithms, and computational problem solving. To date, he has solved over 1000 programming problems, demonstrating his persistence and mastery of algorithmic thinking.

A versatile developer skilled in Python, MERN stack, Next.js, and AI technologies, Abu has worked on multiple complex software projects, ranging from IoT systems to RESTful APIs and intelligent automation platforms. His leadership experience includes serving as team lead on collaborative development projects, where he guided peers through design, implementation, and deployment stages.

His dedication to continuous learning and innovation was recognized when he won the 2025 Skills Competition at Rajshahi Polytechnic Institute, a testament to his technical expertise and problem-solving ability.

Looking ahead, Abu aims to advance as a professional AI and backend engineer, merging his solid foundation in software development, mathematics, and data science to build scalable, intelligent systems that empower real-world change.`,
    phone: "01717963289",
    whatsapp: "01717963289",
    email: "sde.sayed24@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/abusayed6499/",
    linkedin: "https://www.linkedin.com/in/itisabusayed/",
    github: "https://github.com/coder-black-mamba",
    twitter: "https://twitter.com/",
    website: "https://absyd.xyz/",
    image: "images/executives/abu_sayed.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Choto Bongram Primary School More , Chondrima , Rajshahi.",
  },
  {
    id: "a0e59b3e-42c6-4db3-ae20-cc739e8df404",
    role: "Associate General Secretary",
    name: "Md Shohag Ferdous ",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Associate General Secretary",
    quote: "Leadership isn't about position or power — i's about purpose, passion, and the courage to make a difference.",
    bio: "Associate General Secretary at Rajshahi Polytechnic Institute Computer Club | Passionate about Leadership, Innovation & Technology | Dedicated to creating positive change through teamwork and vision.",
    phone: "01861719070",
    whatsapp: "01861719070",
    email: "mdshohagferdous772@gmail.com",
    facebook: "https://www.facebook.com/shohag.ferdous.2025",
    instagram: "https://www.instagram.com/_shohag_here/",
    linkedin: "https://www.linkedin.com/in/md-shohag-ferdous-1ab0b5387/?trk=opento_sprofile_topcard",
    github: "https://github.com/shohagferdous",
    twitter: "https://x.com/ShohagFerd39135",
    website: "https://shohagferdous.github.io/",
    image: "images/executives/shohag_ferdous.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "f4b91b6d-15e7-44c2-8d6b-1b05caa5d505",
    role: "Organisation Secretary",
    name: "Abdullah Al Asif",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Organisation Secretary",
    quote: "Let's Learn - Build - Innovate.",
    bio: "Organisation Secretary at Rajshahi Polytechnic Institute Computer Club | Passionate about Leadership, Innovation & Technology | Dedicated to creating positive change through teamwork and vision.",
    phone: "01794657283",
    whatsapp: "01794657283",
    email: "mdabdullahalasif8@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/abdullah_al_asif.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "df8c9a2d-70e2-40f4-98c7-5125c02a6b06",
    role: "Associate Organisation Secretary",
    name: "Minhajul Abadin Pius",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Associate Organisation Secretary",
    quote: "Just Do For Yourself.",
    bio: "I'm a Computer Science student who loves to code and is fascinated by the Cyber Security. My journey is all about understanding how systems work, both to build innovative applications and to defend them from threats. I am constantly exploring everything from ethical hacking and penetration testing to secure coding practices.",
    phone: "01885187500",
    whatsapp: "01885187500",
    email: "minhajulabadinpius@gmail.com",
    facebook: "https://m.facebook.com/minhajulabadinpius/",
    instagram: "https://www.instagram.com/aj_0_pius/",
    linkedin: "https://www.linkedin.com/in/minhajul-abadin-pius",
    github: "https://github.com/aj-0-pius",
    twitter: "https://x.com/aj_0_pius",
    website: "https://aj-0-pius.github.io/aj_0_pius.github.io/",
    image: "images/executives/minhazul_abedin_pius.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Monayem Hostel, Rajshahi Polytechnic Institute, Airport Road, Sopura Rajshahi ",
  },
  {
    id: "e25f7b3a-4d10-40f7-a836-1ef34bc8b507",
    role: "Treasurer",
    name: "Fuad Al Hasan",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Treasurer",
    quote: "I'm not a good businessman, but I'm a good treasurer.",
    bio: "I'm a Computer Science student who loves to code and is fascinated by the Cyber Security. My journey is all about understanding how systems work, both to build innovative applications and to defend them from threats. I am constantly exploring everything from ethical hacking and penetration testing to secure coding practices.",
    phone: "01569153117",
    whatsapp: "01569153117",
    email: "fuadalhasan2202@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/fuad_al_hasan.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Puthia, Rajshahi",
  },
  {
    id: "d912ac4c-87e4-4b22-9d1f-37e5fa8e8c08",
    role: "Associate Treasurer",
    name: "MD Rokon",
    department: "Computer Science",
    batch: "23",
    session: "2023-2024",
    designation: "Associate Treasurer , Squad Co-Leader At Web And Software Dev Squad.",
    quote: "Innovation distinguishes between a leader and a follower.",
    bio: "As a Computer Science student, I am passionate about coding and technology. I am always eager to learn new things and apply them to real-world problems. I am also a team player and enjoy working with others to achieve a common goal.",
    phone: "01890011744",
    whatsapp: "01890011744",
    email: "roknujjamanripon@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/md_rokon.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Asam koloni, chandrima, Rajshahi ",
  },
  {
    id: "f79f2d88-b8c5-4c45-8a84-71c6c2da8c09",
    role: "Event's and Management Secretary",
    name: "SM Shahariar Fahim",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Event's and Management Secretary",
    quote: "The key to success is to manage your time, not your priorities.",
    bio: "Event's and Management Secretary at Rajshahi Polytechnic Institute Computer Club | Passionate about Leadership, Innovation & Technology | Dedicated to creating positive change through teamwork and vision.",
    phone: "01321063723",
    whatsapp: "01321063723",
    email: "fahimshahriar121312@gmail.com",
    facebook: "https://www.facebook.com/share/1D6DMGK3rB/",
    instagram: "https://www.instagram.com/shah_riar_fahim_?igsh=MTg4c25rdXc4eHA4OQ==",
    linkedin: "https://www.linkedin.com/in/shahriar-fahim-a2a103354",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/shahriar_fahim.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Mental Hospital , Pabna.",
  },
  {
    id: "a713cbf2-05cb-4b2a-a69b-45bcba3a4c10",
    role: "Associate Event's and Management Secretary",
    name: "Abdur Rahman",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Associate Event's and Management Secretary",
    quote: "Learn - Build - Innovate.",
    bio: "As An Associate Supports planning and organizing club events. His responsibilities include event planning, resource management, and team coordination.",
    phone: "01301234173",
    whatsapp: "01301234173",
    email: "abdurrahmanfahad025@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/abdur_rahman.png",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "b8729e4a-5bdf-44d3-bb27-3b2ed9a5b511",
    role: "Publicity Secretary",
    name: "Sabbir Ahmed",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Publicity Secretary , Squad Leader At Digital Marketing And SEO Squad",
    quote: "It's all in the mind. The power to build, to destroy, to become something more... or something monstrous. The choice is ours, every second of every day.",
    bio: "Dream big, stay humble. Turning ideas into reality.  Spreading positivity one step at a time. Always learning, always growing.",
    phone: "01813800647",
    whatsapp: "01813800647",
    email: "sabbir14092007@gmail.com",
    facebook: "https://www.facebook.com/share/19JwisAVXV/",
    instagram: "https://www.instagram.com/sabbirahmed4941?igsh=MXI1Zzh0eGdpaXNsMw==",
    linkedin: "https://www.linkedin.com/in/sabbir-khan-264b71386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/sabbir_ahmed.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Sopura,Rajshahi ",
  },
  {
    id: "d42b8e01-ec2f-4db2-8a08-8d43f23e9c12",
    role: "Associate Publicity Secretary",
    name: "Asfak Jarif Rahe",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Associate Publicity Secretary , Co-Squad Leader At Digital Marketing And SEO Squad.",
    quote: "Learn - Build - Innovate.",
    bio: "Assists in promoting club events and media content.",
    phone: "01328128856",
    whatsapp: "01328128856",
    email: "asfakjarifrahe@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/asfak_jarif_rahe.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "f12a3bc5-221a-4ad2-8e0b-dbc0a32a8d13",
    role: "Publications Secretary",
    name: "Md Mahim Hosen",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Publications Secretary",
    quote: "I don't just dream of the future — I'm building it, one line of code at a time.",
    bio: "I'm Md Mahim Hosen, a passionate Computer Technology student.As an  Ambassador and ICT Olympiad Ambassador & Team Leader, I love taking on challenges, leading teams, and exploring new technologies. I'm always driven by curiosity, creativity, and a desire to make meaningful impact through technology.",
    phone: "01860280614",
    whatsapp: "01860280614",
    email: "mdmahimhosen2006@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=61569641356049&mibextid=ZbWKwL",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/Mahim2025",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/md_mahim_hossain.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "e92bcb59-6b12-43de-a8d5-74e0a9876c14",
    role: "Associate Publications Secretary",
    name: "Md. Hasan Muhib",
    department: "Computer Science",
    batch: "23",
    session: "2023-2024",
    designation: "Associate Publications Secretary",
    quote: "Let's Learn Build Innovate , RPICC.",
    bio: "Assists with content writing, design, and media editing.",
    phone: "01309634129",
    whatsapp: "01309634129",
    email: "mdhasanmohib@gmail.com",
    facebook: "https://www.facebook.com/mdhasanmuhib2",
    instagram: "https://www.instagram.com/mdhasanmuhib/",
    linkedin: "https://www.linkedin.com/in/md-hasan-muhib-a86b29255/",
    github: "https://github.com/mdhasanmuhib",
    twitter: "https://github.com/mdhasanmuhib	https://x.com/Technicalmuhib",
    website: "https://example.com/",
    image: "images/executives/muhib_hasan.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "a62f4b9c-0c3b-47f1-9cc0-917f7cda8f15",
    role: "Official Secretary",
    name: "Tanvir Ahmed",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "Official Secretary",
    quote: "Life Is Beutifull , So Enjoy It.",
    bio: "Maintains records and assists with documentation.",
    phone: "01858739475",
    whatsapp: "01858739475",
    email: "mdtanvirahmed3437r@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/tanvir_ahmed.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Choighati Mor , Sopura , Rajshahi",
  },
  {
    id: "a62f4b9c-0c3b-47f1-9cc0-ey6gf838gfhu34rh83",
    role: "General Executive Member",
    name: "Hasan Morshed Khan Zahid",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "General Executive Member",
    quote: "Learn - Build - Innovate.",
    bio: "Assists with documentation.",
    phone: "01770066044",
    whatsapp: "01770066044",
    email: "mredulrtx@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/hmk_zahid.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Mirzapur,binodpur bazar,motihar Rajshahi",
  },
  {
    id: "a62f4b9c-0c3b-47f1-9cc0-dchv787buivn4cr897dshndvhuer7G",
    role: "General Executive Member",
    name: "SWARAJ PAUL",
    department: "Computer Science",
    batch: "23",
    session: "2023-2024",
    designation: "General Executive Member",
    quote: "Learn - Build - Innovate.",
    bio: "Assists with documentation.",
    phone: "01993760626",
    whatsapp: "01993760626",
    email: "swarajp974@gmail.com",
    facebook: "https://www.facebook.com/share/1GVfsifk3X/",
    instagram: "https://www.instagram.com/swarajp974?igsh=MXdkc2EwMGxwdmIweA==",
    linkedin: "https://www.linkedin.com/in/swaraj-paul-b08072360/",
    github: "https://github.com/swaraj200721",
    twitter: "https://x.com/kumar_paul83384?t=6pE6QCo41sCcf3R8vpppQQ&s=09",
    website: "https://example.com/",
    image: "images/executives/swaraj_paul.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Uttar Nawdapara, Shamokdum, Rajshahi .",
  },

  {
    id: "a62f4b9c-0c3b-47f1-sdfsdf43r34f-sdnjsdf74899863hfj9&",
    role: "Squad Leader",
    name: "Md Nasim Pk",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "General Executive Member - Squad Leader At Cyber Security Squad",
    quote: "Learn - Build - Innovate. RPICC",
    bio: "Leds The Cyber Security Squad.",
    phone: "01306507034",
    whatsapp: "01306507034",
    email: "mbnasimpk@gmail.com",
    facebook: "https://www.facebook.com/mbnasimpk",
    instagram: "https://www.instagram.com/mbnasimpk?igsh=MXdkc2EwMGxwdmIweA==",
    linkedin: "https://www.linkedin.com/in/md-nasim-pk-86b07a34b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/mbnasimpk",
    twitter: "https://x.com/mbnasimpk",
    website: "https://example.com/",
    image: "images/executives/md_nasim_pk.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Sagorpara,bolia thana, Rajshahi .",
  },

  // {
  //   id: "a62f4b9c-0c3b-47f1-sdfsdf43r34f-5899h9gvun4h983nfN",
  //   role: "Squad Leader",
  //   name: "Md. Mahafujur 	Rahman",
  //   department: "Computer Science",
  //   batch: "22",
  //   session: "2022-2023",
  //   designation: "General Executive Member - Squad Leader At Programming Squad",
  //   quote: "Learn - Build - Innovate.",
  //   bio: "Leads the programming squad.",
  //   phone: "01305154353",
  //   whatsapp: "01305154353",
  //   email: "mdmahafujurrahman2040@gmail.com",
  //   facebook: "https://www.facebook.com/share/1GVfsifk3X/",
  //   instagram: "https://www.instagram.com/mdmahafujurrahman2040?igsh=MXdkc2EwMGxwdmIweA==",
  //   linkedin: "https://www.linkedin.com/in/md-mahafujur-rahman-2040/",
  //   github: "https://github.com/mdmahafujurrahman2040",
  //   twitter: "https://x.com/kumar_paul83384?t=6pE6QCo41sCcf3R8vpppQQ&s=09",
  //   website: "https://example.com/",
  //   image: "images/executives/md_mahafujur_rahman.jpg",
  //   joinDate: "2025-01-01",
  //   term: "2025-2026",
  //   address: "Rajshahi Polytechnic Institute, Rajshahi .",
  // },
  {
    id: "a62f4b9c-0c3b-47f1-sdfsdf43r34f-dsh43h8943bf",
    role: "Squad Leader",
    name: "Abu Bokor 	Siddik ",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "General Executive Member - Squad Leader At Netwrorking Squad",
    quote: "Learn - Build - Innovate.",
    bio: "Leads the Networking squad.",
    phone: "01701856167",
    whatsapp: "01701856167",
    email: "abubokorsiddik1238@gmail.com",
    facebook: "https://www.facebook.com/share/1GVfsifk3X/",
    instagram: "https://www.instagram.com/abubokorsiddik1238?igsh=MXdkc2EwMGxwdmIweA==",
    linkedin: "https://www.linkedin.com/in/abu-bokor8/",
    github: "https://github.com/abubokorsiddik1238",
    twitter: "https://x.com/abubokorsiddik1238",
    website: "https://example.com/",
    image: "images/executives/abu_bokor_siddik.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi .",
  }
  ,
  {
    id: "a62f4b9c-0c3b-47f1-sdfsdf43r34f-sdfh439&gf7437&",
    role: "Squad Co Leader",
    name: "Md Abdullah Al Mahmud",
    department: "Computer Science",
    batch: "22",
    session: "2022-2023",
    designation: "General Executive Member - Squad Co Leader At IOT And Harware Squad",
    quote: "Build yourself properly until you will success .",
    bio: "Hi, I am a MERN Stack developer.",
    phone: "01928670584",
    whatsapp: "01928670584",
    email: "ovim842@gmail.com",
    facebook: "https://www.facebook.com/mahmud.ovi.562/",
    instagram: "https://www.instagram.com/abubokorsiddik1238?igsh=MXdkc2EwMGxwdmIweA==",
    linkedin: "https://www.linkedin.com/in/ md-abdullah-al-mahmud-al-mahmud-8885a3387/",
    github: "https://github.com/mahmud938",
    twitter: "https://x.com/ovim842",
    website: "https://example.com/",
    image: "images/executives/abdullah_al_mahmud.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Sagorpara,bolia thana, Rajshahi .",
  },
  {
    id: "a62f4b9c-0c3b-47f1-sdfsdf43r34f-sdfh8473y75fh8efb",
    role: "Squad Co Leader",
    name: "Mst Hafiza Khatun ",
    department: "Computer Science",
    batch: "23",
    session: "2023-2024",
    designation: "General Executive Member - Squad Co Leader At Graphics And UI/UX Squad",
    quote: "Learn - Build - Innovate.",
    bio: "Leads the Graphics and UI/UX squad.",
    phone: "01341310722",
    whatsapp: "01341310722",
    email: "msthafizakhatunrajshahi@gmail.com",
    facebook: "https://www.facebook.com/mahmud.ovi.562/",
    instagram: "https://www.instagram.com/msthafizakhatunrajshahi?igsh=MXdkc2EwMGxwdmIweA==",
    linkedin: "https://www.linkedin.com/in/mst-hafiza-khatun-rajshahi/",
    github: "https://github.com/mahmud938",
    twitter: "https://x.com/ovim842",
    website: "https://example.com/",
    image: "images/executives/mst_hafiza_khatun.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Khathalbariya (Shahajipara),Rajshahi,Court-6201, Rajshahi .",
  }
];
const FoundingCommittee = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle 
        title="Founding Committee" 
        subtitle="The Visionaries Who Started It All"
      />
      
      <div className="bg-base-100 rounded-xl shadow-lg p-6 mb-12">
        <h3 className="text-2xl font-bold mb-4">Our Story</h3>
        <p className="text-base-content/80 leading-relaxed mb-6">
          The RPI Computer Club was established with a vision to create a platform for 
          technology enthusiasts to collaborate, learn, and innovate. Our founding 
          members worked tirelessly to lay the foundation for what has become a thriving 
          community of tech enthusiasts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">Our Mission</h4>
            <p className="text-base-content/70">
              To foster technical excellence, innovation, and collaboration among students 
              through workshops, projects, and community engagement.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Our Vision</h4>
            <p className="text-base-content/70">
              To be the leading technical community that drives technological advancement 
              and creates future tech leaders.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {FOUNDING_COMMITTEE.map((member, index) => (
          <div 
            key={member.id}
            className={`bg-base-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex flex-col`}
          >
            <div className="md:w-1/3 h-64 relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4f46e5&color=fff&size=256`;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sky-300 text-sm">{member.role}</p>
              </div>
            </div>
            
            <div className="p-6 md:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary">{member.designation}</h4>
                  <p className="text-sm text-base-content/70">
                    {member.department} • Batch: {member.batch} • {member.session}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {member.phone && (
                    <a 
                      href={`tel:${member.phone}`}
                      className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-white transition-colors"
                      title="Call"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5 5h1.5c.1 1.2.3 2.4.7 3.5l-1.4 1.4C5.1 8.2 5 6.6 5 5zm14 14c-1.6-.1-3.2-.5-4.6-1.3l1.4-1.4c1.1.4 2.3.7 3.5.7V19z"/>
                      </svg>
                    </a>
                  )}
                  {member.whatsapp && (
                    <a 
                      href={`https://wa.me/${member.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-base-200 hover:bg-green-500 hover:text-white transition-colors"
                      title="WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.5 14.4l-2-1c-.3-.1-.6-.1-.8 0l-1.5.8c-.2.1-.5.1-.8-.1-.7-.5-2.7-2.2-3.4-3.4-.2-.3-.2-.6-.1-.8l.8-1.5c.1-.3.1-.6 0-.8l-1-2c-.2-.4-.7-.6-1.2-.4l-2.5 1c-.3.1-.5.4-.5.7 0 4.6 3.7 8.3 8.3 8.3.3 0 .5 0 .8-.1.3-.1.5-.3.6-.5l1-2.5c.2-.5 0-1-.4-1.2zM12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                      </svg>
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-base-200 hover:bg-primary hover:text-white transition-colors"
                      title="Email"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                {member.quote && (
                  <blockquote className="border-l-4 border-primary pl-4 italic text-base-content/80">
                    "{member.quote}"
                  </blockquote>
                )}
                
                <div>
                  <h5 className="font-medium mb-1">About</h5>
                  <p className="text-base-content/80">{member.bio}</p>
                </div>
                
                <div className="pt-2 border-t border-base-200">
                  <h5 className="font-medium mb-2">Contact Information</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {member.phone && (
                      <div className="flex items-center">
                        <span className="text-base-content/60 w-24">Phone:</span>
                        <a href={`tel:${member.phone}`} className="hover:text-primary">
                          {member.phone}
                        </a>
                      </div>
                    )}
                    {member.email && (
                      <div className="flex items-center">
                        <span className="text-base-content/60 w-24">Email:</span>
                        <a href={`mailto:${member.email}`} className="hover:text-primary truncate">
                          {member.email}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center">
                      <span className="text-base-content/60 w-24">Term:</span>
                      <span>{member.term}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-primary/5 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Become Part of Our Legacy</h3>
        <p className="text-base-content/80 max-w-2xl mx-auto mb-6">
          The RPI Computer Club continues to grow and evolve. Join us in our mission to
          foster innovation and technical excellence in our community.
        </p>
        <button className="btn btn-primary">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default FoundingCommittee;
