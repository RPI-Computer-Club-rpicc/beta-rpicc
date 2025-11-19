import React from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserGraduate,
  FaGraduationCap,
  FaUserTie,
  FaQuoteLeft,
  FaBuilding,
  FaIdCard,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import { executives } from "../../utils/data/executives";

const ExecutiveMemberProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = executives.find((exec) => exec.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100 p-4">
        <div className="text-center p-8 bg-base-200 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Member Not Found</h2>
          <p className="text-base-content/70 mb-6">
            The requested executive member could not be found.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-primary w-full sm:w-auto"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      label: "Email",
      value: member.email,
      href: `mailto:${member.email}`,
      type: "email",
    },
    {
      icon: <FaPhone className="w-4 h-4" />,
      label: "Phone",
      value: member.phone,
      href: `tel:${member.phone}`,
      type: "phone",
    },
    {
      icon: <FaWhatsapp className="w-4 h-4" />,
      label: "WhatsApp",
      value: member.whatsapp ? `+${member.whatsapp}` : null,
      href: `https://wa.me/${member.whatsapp}`,
      type: "whatsapp",
    },
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      label: "Address",
      value: member.address,
      type: "text",
    },
    {
      icon: <FaBuilding className="w-4 h-4" />,
      label: "Department",
      value: member.department,
      type: "text",
    },
    {
      icon: <FaGraduationCap className="w-4 h-4" />,
      label: "Batch",
      value: member.batch,
      type: "text",
    },
  ].filter((item) => item.value);

  const socialLinks = [
    { icon: <FaLinkedin />, url: member.linkedin, label: "LinkedIn" },
    { icon: <FaGithub />, url: member.github, label: "GitHub" },
    { icon: <FaTwitter />, url: member.twitter, label: "Twitter" },
    { icon: <FaFacebook />, url: member.facebook, label: "Facebook" },
    { icon: <FaInstagram />, url: member.instagram, label: "Instagram" },
    { icon: <FaGlobe />, url: member.website, label: "Website" },
  ].filter((link) => link.url);

  return (
    <div className="min-h-screen bg-base-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost mb-6 pl-0 hover:bg-transparent hover:pl-2 transition-all"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back to Team</span>
        </button>

        <div className="bg-base-200 rounded-2xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-white/80 bg-white shadow-xl overflow-hidden">
                {member.image ? (
                  <img
                    src={`/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                    <FaUserTie className="w-12 h-12 text-blue-300" />
                  </div>
                )}
              </div>
              <div className="text-center md:text-left text-white w-full md:w-[70%]">
                <h1 className="text-2xl md:text-3xl font-bold mb-1">
                  {member.name}
                </h1>
                <p className="text-blue-100 font-medium">{member.role}</p>
                {member.designation && (
                  <p className="text-blue-100/90 text-sm mt-1">
                    {member.designation}
                  </p>
                )}

                {/* Social Links */}
                {socialLinks.length > 0 && (
                  <div className="flex justify-center md:justify-start space-x-2 mt-4">
                    {socialLinks.map(({ icon, url, label }, index) => (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90 hover:text-white transition-colors"
                        aria-label={label}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - About */}
              <div className="lg:col-span-2">
                {member.bio && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <FaUserTie className="mr-2 text-blue-600" />
                      About
                    </h2>
                    <div className="prose max-w-none">
                      <p className="text-base-content/90">{member.bio}</p>
                    </div>
                  </div>
                )}

                {/* Contact Information */}
                <div className="bg-base-100 rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <FaIdCard className="mr-2 text-blue-600" />
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 hover:bg-base-200/50 rounded-lg transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-base-content/70">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-medium text-base-content hover:text-blue-600 transition-colors break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium text-base-content">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Additional Info */}
              <div className="space-y-6">
                {member.quote && (
                  <div className="bg-base-100 rounded-xl p-6 shadow-sm">
                    <div className="relative">
                      <FaQuoteLeft className="text-blue-600/20 text-4xl absolute -top-2 -left-1" />
                      <blockquote className="pl-8 italic text-base-content/90 relative z-10">
                        {member.quote}
                      </blockquote>
                      {member.quoteAuthor && (
                        <p className="text-right mt-3 text-base-content/70 font-medium">
                          — {member.quoteAuthor}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/* Role Details */}
                <div className="bg-base-100 rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-semibold mb-4">Role Details</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-base-content/70">Position</p>
                      <p className="font-medium">{member.role}</p>
                    </div>
                    {member.term && (
                      <div>
                        <p className="text-sm text-base-content/70">Term</p>
                        <p className="font-medium">{member.term}</p>
                      </div>
                    )}
                    {member.joinDate && (
                      <div>
                        <p className="text-sm text-base-content/70">
                          Member Since
                        </p>
                        <p className="font-medium">
                          {formatDate(member.joinDate)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-base-100 rounded-xl p-6 shadow-sm">
                  <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                  <div className="space-y-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-between p-3 hover:bg-base-200/50 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center">
                          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mr-3">
                            <FaEnvelope className="w-4 h-4" />
                          </div>
                          <span>Send Email</span>
                        </div>
                        <FaChevronRight className="w-3.5 h-3.5 text-base-content/40 group-hover:text-blue-600 transition-colors" />
                      </a>
                    )}
                    {member.whatsapp && (
                      <a
                        href={`https://wa.me/${member.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 hover:bg-base-200/50 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center">
                          <div className="p-2 rounded-lg bg-green-50 text-green-600 mr-3">
                            <FaWhatsapp className="w-4 h-4" />
                          </div>
                          <span>Message on WhatsApp</span>
                        </div>
                        <FaChevronRight className="w-3.5 h-3.5 text-base-content/40 group-hover:text-green-600 transition-colors" />
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center justify-between p-3 hover:bg-base-200/50 rounded-lg transition-colors group"
                      >
                        <div className="flex items-center">
                          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mr-3">
                            <FaPhone className="w-4 h-4" />
                          </div>
                          <span>Call Now</span>
                        </div>
                        <FaChevronRight className="w-3.5 h-3.5 text-base-content/40 group-hover:text-blue-600 transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveMemberProfile;
