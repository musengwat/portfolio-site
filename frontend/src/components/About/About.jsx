// portfolio-frontend/src/components/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Palette, Zap, Users, Target } from 'lucide-react';
import SkillsChart from './SkillsChart';
import { skills, personalInfo } from '../../data/skills';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    {
      icon: Code2,
      label: 'Projects Completed',
      value: '50+',
      color: 'primary',
    },
    { icon: Users, label: 'Happy Clients', value: '25+', color: 'secondary' },
    { icon: Zap, label: 'Years Experience', value: '5+', color: 'accent' },
    { icon: Target, label: 'Success Rate', value: '98%', color: 'success' },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description:
        'Expert in modern web technologies including React, Node.js, and cloud platforms.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Proficient in SQL and NoSQL databases, optimization, and data architecture.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces with focus on user experience.',
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="about__header" variants={itemVariants}>
            <h2 className="about__title">About Me</h2>
            <p className="about__subtitle">
              Passionate developer creating digital experiences that matter
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="about__grid">
            {/* Personal Info */}
            <motion.div className="about__personal" variants={itemVariants}>
              <div className="about__image-container">
                <img
                  src="/assets/images/about-photo.jpg"
                  alt="Thomas Musengwa working"
                  className="about__image"
                />
                <div className="about__image-overlay">
                  <div className="about__image-badge">
                    <span>💼</span>
                    <span>Available for hire</span>
                  </div>
                </div>
              </div>

              <div className="about__bio">
                <h3 className="about__bio-title">Hello! I'm Thomas Musengwa</h3>
                <p className="about__bio-text">
                  I'm a passionate full-stack developer with {personalInfo.experience} years of
                  experience creating digital solutions that drive business growth. I specialize in
                  modern web technologies and love turning complex problems into simple, beautiful
                  designs.
                </p>
                <p className="about__bio-text">
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open-source projects, or mentoring fellow developers. I believe in writing clean,
                  maintainable code and creating applications that users love.
                </p>

                <div className="about__bio-details">
                  <div className="about__detail">
                    <span className="about__detail-label">Location:</span>
                    <span className="about__detail-value">{personalInfo.location}</span>
                  </div>
                  <div className="about__detail">
                    <span className="about__detail-label">Email:</span>
                    <span className="about__detail-value">{personalInfo.email}</span>
                  </div>
                  <div className="about__detail">
                    <span className="about__detail-label">Status:</span>
                    <span className="about__detail-value about__detail-value--available">
                      {personalInfo.availability}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div className="about__skills" variants={itemVariants}>
              <h3 className="about__skills-title">Technical Skills</h3>
              <SkillsChart skills={skills} />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div className="about__stats" variants={itemVariants}>
            <div className="about__stats-grid">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className={`about__stat about__stat--${stat.color}`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="about__stat-icon">
                      <IconComponent size={32} />
                    </div>
                    <div className="about__stat-content">
                      <div className="about__stat-value">{stat.value}</div>
                      <div className="about__stat-label">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Highlights Section */}
          <motion.div className="about__highlights" variants={itemVariants}>
            <h3 className="about__highlights-title">What I Do Best</h3>
            <div className="about__highlights-grid">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="about__highlight"
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="about__highlight-icon">
                      <IconComponent size={24} />
                    </div>
                    <h4 className="about__highlight-title">{highlight.title}</h4>
                    <p className="about__highlight-description">{highlight.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div className="about__philosophy" variants={itemVariants}>
            <div className="about__philosophy-content">
              <blockquote className="about__quote">
                "Code is not just about solving problems—it's about creating possibilities. Every
                line of code is an opportunity to make someone's life a little bit better."
              </blockquote>
              <cite className="about__quote-author">— My Development Philosophy</cite>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
