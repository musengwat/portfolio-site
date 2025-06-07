// portfolio-frontend/src/components/Contact/SocialLinks.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";
import { personalInfo } from "../../data/skills";
import { trackExternalLink } from "../../services/analytics";
import "./SocialLinks.css";

const SocialLinks = ({ variant = "default", size = "medium" }) => {
  const getIcon = (platform) => {
    const iconMap = {
      github: Github,
      linkedin: Linkedin,
      twitter: Twitter,
      instagram: Instagram,
      youtube: Youtube,
      website: Globe,
    };
    return iconMap[platform.toLowerCase()] || Globe;
  };

  const handleSocialClick = (url, platform) => {
    trackExternalLink(url, platform);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconSize = {
    small: 16,
    medium: 20,
    large: 24,
  };

  return (
    <motion.div
      className={`social-links social-links--${variant} social-links--${size}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {personalInfo.socialLinks?.map((social, index) => {
        const IconComponent = getIcon(social.icon);

        return (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-links__link social-links__link--${social.platform.toLowerCase()}`}
            onClick={() => handleSocialClick(social.url, social.platform)}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Visit my ${social.platform} profile`}
            title={`${social.platform} - ${social.username}`}
          >
            <IconComponent size={iconSize[size]} />
            {variant === "detailed" && (
              <div className="social-links__details">
                <span className="social-links__platform">
                  {social.platform}
                </span>
                <span className="social-links__username">
                  {social.username}
                </span>
              </div>
            )}
          </motion.a>
        );
      })}

      {/* Email link */}
      <motion.a
        href={`mailto:${personalInfo.email}`}
        className="social-links__link social-links__link--email"
        onClick={() =>
          handleSocialClick(`mailto:${personalInfo.email}`, "Email")
        }
        variants={itemVariants}
        whileHover={{
          scale: 1.1,
          y: -2,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Send me an email"
        title={`Email - ${personalInfo.email}`}
      >
        <svg
          width={iconSize[size]}
          height={iconSize[size]}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4 4 16 0 0 16-16 0z" />
          <path d="m4 4 8 8 8-8" />
        </svg>
        {variant === "detailed" && (
          <div className="social-links__details">
            <span className="social-links__platform">Email</span>
            <span className="social-links__username">{personalInfo.email}</span>
          </div>
        )}
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
