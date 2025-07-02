// portfolio-frontend/src/components/About/SkillsChart.jsx
import React, { useState, useEffect } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import './SkillsChart.css';

const SkillsChart = ({ skills }) => {
  const categories = Object.keys(skills);
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || 'languages');
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    setAnimateProgress(false);
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const getSkillIcon = skillName => {
    const iconMap = {
      // Frontend
      JavaScript: '🟨',
      TypeScript: '🔷',
      React: '⚛️',
      'React Native': '📱',
      AngularJS: '🅰️',
      Flutter: '🦋',
      'Vue.js': '💚',
      'HTML5/CSS3': '🎨',
      'Tailwind CSS': '💨',
      Sass: '🌸',
      Swift: '🍎',
      GatsbyJS: '🚀',
      Liquid: '💧',

      // Backend
      'Node.js': '🟢',
      Sequelize: '🔗',
      Express: '⚡',
      Strapi: '🚀',
      Drupal: '💧',
      AWS: '☁️',
      Firebase: '🔥',

      // Database
      PostgreSQL: '🐘',
      MongoDB: '🍃',
      MySQL: '🐬',
      SQL: '🗄️',
      GraphQL: '🕸️',

      // Tools
      Figma: '🎨',
      'CI/CD Pipelines': '🔄',
      Git: '🌳',
      Docker: '🐳',
      Jira: '📋',
      Jest: '🃏',
      'CMS (Drupal/Strapi)': '📝',
      'E2E Testing': '🧪',

      // Specialized
      'WCAG 2.2/A11y': '♿',
      'Design Tokens': '🎭',
      Shopify: '🛒',
      'Figma Code Connect': '🔌',
    };
    return iconMap[skillName] || '🔧';
  };

  const getSkillColor = level => {
    if (level >= 90) return 'expert';
    if (level >= 75) return 'advanced';
    if (level >= 60) return 'intermediate';
    return 'beginner';
  };
  dayjs.extend(relativeTime);

  return (
    <div className="skills-chart">
      <div className="skills-chart__tabs">
        {categories.map(category => (
          <motion.button
            key={category}
            className={`skills-chart__tab ${selectedCategory === category ? 'skills-chart__tab--active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
            <span className="skills-chart__tab-count">{skills[category]?.length || 0}</span>
          </motion.button>
        ))}
      </div>

      <motion.div
        className="skills-chart__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory}
      >
        <div className="skills-chart__grid">
          {skills[selectedCategory]?.map((skill, index) => (
            <motion.div
              key={`${selectedCategory}-${skill.name}-${index}`}
              className={`skills-chart__skill skills-chart__skill--${getSkillColor(skill.level)}`}
              variants={skillVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="skills-chart__skill-header">
                <div className="skills-chart__skill-info">
                  <span className="skills-chart__skill-icon">{getSkillIcon(skill.name)}</span>
                  <span className="skills-chart__skill-name">{skill.name}</span>
                </div>
                <span className="skills-chart__skill-level">{skill.level}%</span>
              </div>

              <div className="skills-chart__skill-bar">
                <motion.div
                  className="skills-chart__skill-progress"
                  initial={{ width: 0 }}
                  animate={{
                    width: animateProgress ? `${skill.level}%` : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                />
              </div>

              {skill.description && (
                <p className="skills-chart__skill-description">{skill.description}</p>
              )}

              {skill.years && (
                <div className="skills-chart__skill-experience">
                  <span className="skills-chart__skill-years">
                    {dayjs(`${skill.years}-12-30`).toNow(true)} of experience
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsChart;
