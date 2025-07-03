// portfolio-frontend/src/components/Resume/Resume.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Award,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import ExperienceTimeline from './ExperienceTimeline';
import DownloadButton from './DownloadButton';
import SkillsChart from '../About/SkillsChart';
import { personalInfo, skills } from '../../data/skills';
import { experienceData, educationData, certificationsData } from '../../data/experience';
import Button from '../UI/Button/Button';
import './Resume.css';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const containerVariants = {
    hidden: { opacity: 0, y: 48 },
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

  const sections = [
    {
      id: 'experience',
      label: 'Experience',
      icon: Briefcase,
      count: experienceData.length,
    },
    {
      id: 'education',
      label: 'Education',
      icon: GraduationCap,
      count: educationData.length,
    },
    {
      id: 'certifications',
      label: 'Certifications',
      icon: Award,
      count: certificationsData.length,
    },
    { id: 'skills', label: 'Skills Matrix', icon: null, count: null },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'experience':
        return <ExperienceTimeline data={experienceData} />;
      case 'education':
        return <ExperienceTimeline data={educationData} type="education" />;
      case 'certifications':
        return (
          <div className="resume__certifications">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                className="resume__certification"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="resume__certification-header">
                  <div className="resume__certification-info">
                    <h4 className="resume__certification-name">{cert.name}</h4>
                    <p className="resume__certification-issuer">{cert.issuer}</p>
                  </div>
                  <div className="resume__certification-meta">
                    <span className="resume__certification-date">{cert.date}</span>
                    {cert.credential && (
                      <a
                        href={cert.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume__certification-link"
                      >
                        <ExternalLink size={16} />
                        Verify
                      </a>
                    )}
                  </div>
                </div>
                {cert.description && (
                  <p className="resume__certification-description">{cert.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        );
      // case 'skills':
      //   return <SkillsChart skills={skills} />;
      // default:
      //   return null;
    }
  };

  return (
    <section className="resume">
      <div className="container">
        <motion.div
          className="resume__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div className="resume__header" variants={itemVariants}>
            <h2 className="resume__title">Resume & Experience</h2>
            <p className="resume__subtitle">
              My professional journey, education, and expertise in modern web development
            </p>
          </motion.div>

          {/* Resume Summary */}
          <motion.div className="resume__summary" variants={itemVariants}>
            <div className="resume__summary-content">
              <div className="resume__summary-text">
                <h3 className="resume__summary-title">
                  {personalInfo.title} • {personalInfo.experience} Years Experience
                </h3>
                <p className="resume__summary-description">
                  Full-stack developer with expertise in modern web & mobile technologies. Proven
                  track record of delivering scalable applications and leading development teams.
                  Focused on creating exceptional user experiences and efficient, maintainable code.
                </p>
                <div className="resume__summary-highlights">
                  <span className="resume__summary-highlight">React & React Native Expert</span>
                  <span className="resume__summary-highlight">Team Leadership</span>
                  <span className="resume__summary-highlight">Agile Development</span>
                  <span className="resume__summary-highlight">Node.js Expert</span>
                </div>
              </div>

              <div className="resume__summary-actions">
                <DownloadButton />
                <Button
                  variant="outline"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Section Navigation */}
          {/* <motion.div className="resume__nav" variants={itemVariants}>
            {sections.map(section => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  className={`resume__nav-item ${
                    activeSection === section.id && 'resume__nav-item--active'
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {IconComponent && <IconComponent size={20} />}
                  <span className="resume__nav-label">{section.label}</span>
                  {section.count && <span className="resume__nav-count">{section.count}</span>}
                </button>
              );
            })}
          </motion.div> */}

          {/* Section Content */}
          <motion.div
            className="resume__section-content"
            variants={itemVariants}
            key={activeSection}
          >
            {renderSection()}
          </motion.div>

          {/* Additional Info */}
          <motion.div className="resume__additional" variants={itemVariants}>
            <div className="resume__additional-grid">
              <div className="resume__additional-item">
                <MapPin size={24} className="resume__additional-icon" />
                <div className="resume__additional-content">
                  <h4 className="resume__additional-title">Location</h4>
                  <p className="resume__additional-text">{personalInfo.location}</p>
                  <span className="resume__additional-detail">
                    Open to remote work and relocation
                  </span>
                </div>
              </div>

              <div className="resume__additional-item">
                <Calendar size={24} className="resume__additional-icon" />
                <div className="resume__additional-content">
                  <h4 className="resume__additional-title">Availability</h4>
                  <p className="resume__additional-text">{personalInfo.availability}</p>
                  <span style={{ color: 'green' }} className="resume__additional-detail">
                    Ready to start new projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages & Interests */}
          <motion.div className="resume__extras" variants={itemVariants}>
            <div className="resume__extras-grid">
              <div className="resume__extras-section">
                <h4 className="resume__extras-title">Languages</h4>
                <div className="resume__extras-content">
                  {personalInfo.languages?.map((language, index) => (
                    <span key={index} className="resume__extras-item">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              <div className="resume__extras-section">
                <h4 className="resume__extras-title">Interests</h4>
                <div className="resume__extras-content">
                  {personalInfo.interests?.map((interest, index) => (
                    <span key={index} className="resume__extras-item">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="resume__cta" variants={itemVariants}>
            <div className="resume__cta-content">
              <h3 className="resume__cta-title">Ready to Work Together?</h3>
              <p className="resume__cta-description">
                Let's discuss how my skills and experience can contribute to your next project.
              </p>
              <div className="resume__cta-actions">
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  Get In Touch
                </Button>
                <DownloadButton variant="outline" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
