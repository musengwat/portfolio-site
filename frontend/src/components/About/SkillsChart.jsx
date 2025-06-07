// portfolio-frontend/src/components/About/SkillsChart.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SkillsChart.css";

const SkillsChart = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const [animateProgress, setAnimateProgress] = useState(false);

  const categories = Object.keys(skills);

  useEffect(() => {
    // Trigger animation when component mounts or category changes
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
        ease: "easeOut",
      },
    },
  };

  const getSkillIcon = (skillName) => {
    const iconMap = {
      React: "⚛️",
      JavaScript: "🟨",
      TypeScript: "🔷",
      "Vue.js": "💚",
      HTML5: "🧡",
      CSS3: "🔵",
      Sass: "🌸",
      "Tailwind CSS": "💨",
      "Node.js": "💚",
      Express: "⚡",
      Python: "🐍",
      Django: "🎸",
      FastAPI: "⚡",
      PHP: "🟣",
      Laravel: "🔴",
      Java: "☕",
      "Spring Boot": "🍃",
      MongoDB: "🥬",
      PostgreSQL: "🐘",
      MySQL: "🐬",
      Redis: "🔴",
      Firebase: "🔥",
      AWS: "☁️",
      Docker: "🐳",
      Kubernetes: "⚓",
      Git: "🌳",
      Linux: "🐧",
      Nginx: "🟢",
    };
    return iconMap[skillName] || "🔧";
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "expert";
    if (level >= 75) return "advanced";
    if (level >= 60) return "intermediate";
    return "beginner";
  };

  return (
    <div className="skills-chart">
      {/* Category Tabs */}
      <div className="skills-chart__tabs">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`skills-chart__tab ${selectedCategory === category ? "skills-chart__tab--active" : ""}`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
            <span className="skills-chart__tab-count">
              {skills[category]?.length || 0}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Skills List */}
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
                  <span className="skills-chart__skill-icon">
                    {getSkillIcon(skill.name)}
                  </span>
                  <span className="skills-chart__skill-name">{skill.name}</span>
                </div>
                <span className="skills-chart__skill-level">
                  {skill.level}%
                </span>
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
                    ease: "easeOut",
                  }}
                />
              </div>

              {skill.description && (
                <p className="skills-chart__skill-description">
                  {skill.description}
                </p>
              )}

              {skill.years && (
                <div className="skills-chart__skill-experience">
                  <span className="skills-chart__skill-years">
                    {skill.years} {skill.years === 1 ? "year" : "years"}{" "}
                    experience
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        className="skills-chart__summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="skills-chart__summary-stats">
          <div className="skills-chart__summary-stat">
            <span className="skills-chart__summary-number">
              {skills[selectedCategory]?.length || 0}
            </span>
            <span className="skills-chart__summary-label">Skills</span>
          </div>
          <div className="skills-chart__summary-stat">
            <span className="skills-chart__summary-number">
              {Math.round(
                (skills[selectedCategory]?.reduce(
                  (acc, skill) => acc + skill.level,
                  0
                ) || 0) / (skills[selectedCategory]?.length || 1)
              )}
              %
            </span>
            <span className="skills-chart__summary-label">
              Avg. Proficiency
            </span>
          </div>
          <div className="skills-chart__summary-stat">
            <span className="skills-chart__summary-number">
              {skills[selectedCategory]?.filter((skill) => skill.level >= 90)
                .length || 0}
            </span>
            <span className="skills-chart__summary-label">Expert Level</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsChart;
