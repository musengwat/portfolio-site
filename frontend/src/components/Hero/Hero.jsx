// portfolio-frontend/src/components/Hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import ParticleBackground from '../UI/ParticleBackground/ParticleBackground';
import AnimatedText from '../UI/AnimatedText/AnimatedText';
import Button from '../UI/Button/Button';
import './Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Expert',
    'UI/UX Enthusiast',
    'Problem Solver',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

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
    link.href = '/assets/resume/john-doe-resume.pdf';
    link.download = 'John-Doe-Resume.pdf';
    link.click();
  };

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
          <motion.div className="hero__greeting" variants={itemVariants}>
            <span className="hero__wave">👋</span>
            <span>Hello, I'm Thomas</span>
          </motion.div>

          <motion.h1 className="hero__name" variants={itemVariants}>
            <AnimatedText text="Thomas Musengwa" />
          </motion.h1>

          <motion.div className="hero__role-container" variants={itemVariants}>
            <span className="hero__role-prefix">I'm a </span>
            <motion.span
              key={currentRole}
              className="hero__role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          <motion.p className="hero__description" variants={itemVariants}>
            I craft beautiful, responsive web applications with modern technologies. Passionate
            about creating exceptional user experiences and scalable solutions.
          </motion.p>

          <motion.div className="hero__cta" variants={itemVariants}>
            <Button
              variant="primary"
              size="large"
              onClick={() => handleScrollToSection('contact')}
              className="hero__cta-primary"
            >
              <Mail size={20} />
              Get In Touch
            </Button>

            <Button
              variant="outline"
              size="large"
              onClick={handleDownloadResume}
              className="hero__cta-secondary"
            >
              <Download size={20} />
              Download Resume
            </Button>
          </motion.div>

          <motion.div className="hero__social" variants={itemVariants}>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Visit GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Visit LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ThomasMusengwa1@gmail.com"
              className="hero__social-link"
              aria-label="Send Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

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

        <motion.div
          className="hero__image"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="hero__image-container">
            <img
              src="/assets/images/profile-photo.jpg"
              alt="Thomas Musengwa - Full Stack Developer"
              className="hero__profile-image"
              loading="eager"
            />
            <div className="hero__image-glow"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
