// portfolio-frontend/src/components/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Accessibility, Code2 } from 'lucide-react';
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

  const highlights = [
    {
      icon: MonitorSmartphone,
      title: 'React / React Native',
      description:
        'Expert at building scalable web and mobile apps with a focus on performance, efficiency & accessibility.',
    },
    {
      icon: Accessibility,
      title: 'WCAG / A11y Development',
      description:
        'Consistently deliver inclusive, accessible experiences through WCAG-compliant design and development.',
    },
    {
      icon: Code2,
      title: 'Dynamic Design Systems',
      description:
        'Experienced at Designing flexible, token-based systems to enable theming, white labeling, and cross-platform consistency.',
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
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="about__header" variants={itemVariants}>
            <h2 className="about__title">About Me</h2>
            <p className="about__subtitle">
              Passionate developer creating digital experiences that matter
            </p>
          </motion.div>

          <div className="about__grid">
            <motion.div className="about__personal" variants={itemVariants}>
              <div className="about__image-container">
                <img
                  src={'/assets/images/profile-photo.JPG'}
                  alt="Thomas Musengwa working"
                  className="about__image"
                />
                <div className="about__image-overlay">
                  {personalInfo.forHire && (
                    <div className="about__image-badge">
                      <span>💼</span>
                      <span>Available for hire</span>
                    </div>
                  )}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  height: '100%',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3 className="about__bio-title">Hello! I'm Thomas Musengwa</h3>
                  <p className="about__bio-text">
                    I'm a passionate full-stack developer with {personalInfo.experience} years of
                    experience crafting digital experiences that drive business growth. My
                    specialization is in building web & mobile products to transform complex
                    challenges into elegant, accessible solutions that delight users and empower
                    development teams. I believe in writing clean, maintainable code and creating
                    applications that users love.
                  </p>
                  <p className="about__bio-text">
                    From Walmart's pickup towers to UnitedHealth's design systems, I've delivered
                    high-impact applications that transform how millions of users interact with
                    technology. Additionally, my efforts have saved my employers over 50,000
                    development hours, over $7 million in labor costs and over 3 million customer
                    hours.
                  </p>
                  <p className="about__bio-text">
                    When I'm not coding, you'll find me exploring the gorgeous scenery of Northwest
                    Arkansas, working on my 15' Chevy SS, or organizing pick-up games of
                    Counter-Strike 2.
                  </p>
                </div>
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

            <motion.div className="about__skills" variants={itemVariants}>
              <h3 className="about__skills-title">Technical Skills</h3>
              <SkillsChart skills={skills} />
            </motion.div>
          </div>

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

          <motion.div className="about__philosophy" variants={itemVariants}>
            <div className="about__philosophy-content">
              <blockquote className="about__quote">
                If we want users to like our software, we should design it to behave like a likable
                person.
              </blockquote>
              <cite className="about__quote-author">- Alan Cooper</cite>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
