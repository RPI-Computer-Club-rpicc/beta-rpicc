import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import MemberCard from '../../components/executives/MemberCard'

const FOUNDING_COMMITTEE = [
  {
    id: "e1a3b0f4-12cd-4b9a-98f7-b2c0b9c1a001",
    role: "President",
    name: "Nafis Pk",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "President, RPI Computer Club",
    quote: "Placeholder quote about leadership or motivation.",
    bio: "Short bio or description about the president goes here.",
    phone: "01710972729",
    whatsapp: "01710972729",
    email: "naficzst@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/nafiz_pk.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "b9c48d7a-284f-40f8-904b-cc34ea2b2f02",
    role: "Vice President",
    name: "Abu Mashreque Hadid",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Vice President, RPI Computer Club",
    quote: "Placeholder motivational quote.",
    bio: "Short biography about the vice president.",
    phone: "01303601981",
    whatsapp: "01303601981",
    email: "hadidahmed944@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/abu_masreque_hadid.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "c7d81b2f-8a23-4b11-b1a2-e3e7a5b4c303",
    role: "General Secretary",
    name: "Abu Sayed",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "General Secretary, RPI Computer Club",
    quote: "Placeholder quote about teamwork or innovation.",
    bio: "Brief description about the general secretary’s contributions.",
    phone: "01717963289",
    whatsapp: "01717963289",
    email: "sde.sayed24@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/abu_sayed.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "a0e59b3e-42c6-4db3-ae20-cc739e8df404",
    role: "Associate General Secretary",
    name: "MD. Sohag Ferdous",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Associate General Secretary",
    quote: "Placeholder quote.",
    bio: "Short bio about the associate general secretary.",
    phone: "01861719070",
    whatsapp: "01861719070",
    email: "mdshohagferdous772@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/shohag_ferdous.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "f4b91b6d-15e7-44c2-8d6b-1b05caa5d505",
    role: "Organisation Secretary",
    name: "Abdullah Al Asif",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Organisation Secretary",
    quote: "Placeholder quote.",
    bio: "Bio or achievements summary here.",
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
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Associate Organisation Secretary",
    quote: "Placeholder quote.",
    bio: "Short bio about associate secretary.",
    phone: "01885187500",
    whatsapp: "01885187500",
    email: "minhajulabadinpius@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/minhazul_abedin_pius.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "e25f7b3a-4d10-40f7-a836-1ef34bc8b507",
    role: "Treasurer",
    name: "Fuad Al Hasan",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Treasurer",
    quote: "Placeholder financial management quote.",
    bio: "Handles club financial matters and resources.",
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
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "d912ac4c-87e4-4b22-9d1f-37e5fa8e8c08",
    role: "Associate Treasurer",
    name: "Rokon Ahmed",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Associate Treasurer",
    quote: "Placeholder quote.",
    bio: "Assists in managing financial records and transactions.",
    phone: "01890011744",
    whatsapp: "01890011744",
    email: "roknujjamanripon@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/rokon_ahmed.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "f79f2d88-b8c5-4c45-8a84-71c6c2da8c09",
    role: "Event's and Management Secretary",
    name: "SM Shahariar Fahim",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Event's and Management Secretary",
    quote: "Placeholder event management quote.",
    bio: "Plans and coordinates all major events for the club.",
    phone: "01321063723",
    whatsapp: "01321063723",
    email: "fahimshahriar121312@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/shahriar_fahim.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "a713cbf2-05cb-4b2a-a69b-45bcba3a4c10",
    role: "Associate Event's and Management Secretary",
    name: "Abdur Rahman",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Associate Event's and Management Secretary",
    quote: "Placeholder quote.",
    bio: "Supports planning and organizing club events.",
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
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Publicity Secretary",
    quote: "Placeholder creative quote.",
    bio: "Responsible for club publicity, posters, and social reach.",
    phone: "01813800647",
    whatsapp: "01813800647",
    email: "sabbir14092007@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/sabbir_khan.jpg",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "d42b8e01-ec2f-4db2-8a08-8d43f23e9c12",
    role: "Associate Publicity Secretary",
    name: "Asfak Jarif Rahe",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Associate Publicity Secretary",
    quote: "Placeholder quote.",
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
    name: "Mahim Hosen",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Publications Secretary",
    quote: "Placeholder quote about creativity.",
    bio: "Manages club publications, newsletters, and blog content.",
    phone: "01860280614",
    whatsapp: "01860280614",
    email: "mdmahimhosen2006@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    website: "https://example.com/",
    image: "images/executives/md_mahim_hossain.png",
    joinDate: "2025-01-01",
    term: "2025-2026",
    address: "Rajshahi Polytechnic Institute, Rajshahi",
  },
  {
    id: "e92bcb59-6b12-43de-a8d5-74e0a9876c14",
    role: "Associate Publications Secretary",
    name: "Md. Hasan Muhib",
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Associate Publications Secretary",
    quote: "Placeholder quote.",
    bio: "Assists with content writing, design, and media editing.",
    phone: "01309634129",
    whatsapp: "01309634129",
    email: "mdhasanmohib@gmail.com",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
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
    department: "Computer Technology",
    batch: "XX",
    session: "20XX-20XX",
    designation: "Official Secretary",
    quote: "Placeholder quote.",
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
    address: "Rajshahi Polytechnic Institute, Rajshahi",
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
