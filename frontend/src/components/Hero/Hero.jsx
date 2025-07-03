// portfolio-frontend/src/components/Hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import ParticleBackground from '../UI/ParticleBackground/ParticleBackground';
import AnimatedText from '../UI/AnimatedText/AnimatedText';
import Button from '../UI/Button/Button';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Expert',
  'Problem Solver',
  'Team Player',
];

const socialLink = {
  github: {
    label: 'Visit GitHub Profile',
    icon: <Github size={24} />,
    href: 'https://github.com/musengwat',
  },
  linkedin: {
    label: 'Visit LinkedIn Profile',
    icon: <Linkedin size={24} />,
    href: 'https://www.linkedin.com/in/thomas-m-22299913a/',
  },
  email: {
    label: 'Send Email',
    icon: <Mail size={24} />,
    href: 'mailto:ThomasMusengwa1@gmail.com',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const handleScrollToSection = sectionId => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const handleDownloadResume = () => {
  // Track download event
  if (window.gtag) {
    window.gtag('event', 'download', {
      event_category: 'engagement',
      event_label: 'resume',
    });
  }

  // Trigger download
  const link = document.createElement('a');
  link.href = '/assets/resume/thomas-musengwa-resume.pdf';
  link.download = 'Thomas-Musengwa-Resume.pdf';
  link.click();
};

const Greeting = () => {
  return (
    <motion.div className="hero__greeting" variants={itemVariants}>
      <span className="hero__wave">👋</span>
      <motion.span variants={itemVariants}>
        <AnimatedText text={`Hello, I'm Thomas`} delay={1} duration={0.1} animationType="bounce" />
      </motion.span>
    </motion.div>
  );
};

const HeroRole = ({ role }) => {
  return (
    <motion.div className="hero__role-container" variants={itemVariants}>
      <span className="hero__role-prefix">I'm a </span>
      <motion.span
        key={role}
        className="hero__role"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <AnimatedText text={role} delay={0.2} animationType="fade" />
      </motion.span>
    </motion.div>
  );
};

const GetInTouchButton = () => {
  return (
    <Button
      variant="primary"
      size="large"
      onClick={() => handleScrollToSection('contact')}
      className="hero__cta-primary"
    >
      <Mail size={20} />
      Get In Touch
    </Button>
  );
};

const ResumeDownloadButton = () => {
  return (
    <Button
      variant="outline"
      size="large"
      onClick={handleDownloadResume}
      className="hero__cta-secondary"
    >
      <Download size={20} />
      Download Resume
    </Button>
  );
};

const HeroSocial = ({ platform }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="hero__social-link"
      href={socialLink[platform].href}
      aria-label={socialLink[platform].label}
    >
      {socialLink[platform].icon}
    </a>
  );
};

const HeroScrollIndicator = () => {
  return (
    <motion.div
      className="hero__scroll-indicator"
      variants={itemVariants}
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      }}
    >
      <button
        onClick={() => handleScrollToSection('about')}
        className="hero__scroll-button"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={24} />
        <span>Scroll Down</span>
      </button>
    </motion.div>
  );
};

const HeroImage = () => {
  return (
    <motion.div
      className="hero__image"
      variants={itemVariants}
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.3 }}
    >
      <div className="hero__image-container">
        <img
          src={'/assets/images/profile-photo.JPG'}
          alt="Thomas Musengwa - Full Stack Developer"
          className="hero__profile-image"
          loading="eager"
        />
        <div className="hero__image-glow"></div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="hero">
      <ParticleBackground />

      <motion.div
        className="hero__container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero__content" variants={itemVariants}>
          <Greeting />

          {/* <motion.h1 class="hero__name" variants={itemVariants}>
            <AnimatedText text="Thomas " delay={1.5} duration={0.1} animationType="slide" />
            <AnimatedText text="Musengwa" delay={2} duration={0.1} animationType="slide" />
          </motion.h1> */}

          <HeroRole role={roles[currentRole]} />

          <motion.p className="hero__description" variants={itemVariants}>
            I craft beautiful, responsive web & mobile applications with modern technologies.
            Passionate about creating exceptional user experiences and scalable solutions.
          </motion.p>

          <motion.div className="hero__cta" variants={itemVariants}>
            <GetInTouchButton />
            <ResumeDownloadButton />
          </motion.div>

          <motion.div className="hero__social" variants={itemVariants}>
            <HeroSocial platform="github" />
            <HeroSocial platform="linkedin" />
            <HeroSocial platform="email" />
          </motion.div>
        </motion.div>

        {/* <HeroScrollIndicator /> */}

        <HeroImage />
      </motion.div>
    </section>
  );
};

export default Hero;
