import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4">
      {[
        {
          icon: <FaFacebook size={20} />,
          href: "https://www.facebook.com/people/Computer-Club-Rpi/61581226467108/",
          color: "#1877F2",
        },
        {
          icon: <FaInstagram size={20} />,
          href: "https://instagram.com/rpi.cc",
          color: "#E4405F",
        },
        {
          icon: <FaGithub size={20} />,
          href: "https://github.com/RPI-Computer-Club-rpicc",
          color: "#333",
        },
        {
          icon: <FaLinkedin size={20} />,
          href: "https://www.linkedin.com/company/rpi-computer-club/",
          color: "#0A66C2",
        },
        {
          icon: <FaYoutube size={20} />,
          href: "https://youtube.com/@rpicomputerclub",
          color: "#FF0000",
        },
        {
          icon: <FaDiscord size={20} />,
          href: "https://discord.gg/rpicc",
          color: "#5865F2",
        },
      ].map((social, i) => (
        <a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white transition-colors"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
