// portfolio-frontend/src/components/Resume/ExperienceTimeline.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Award,
  Target,
  CheckCircle,
  Code,
} from "lucide-react";
import "./ExperienceTimeline.css";

const ExperienceTimeline = ({ data, type = "experience" }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));

    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;

    if (years === 0) {
      return `${months} month${months !== 1 ? "s" : ""}`;
    } else if (months === 0) {
      return `${years} year${years !== 1 ? "s" : ""}`;
    } else {
      return `${years} year${years !== 1 ? "s" : ""}, ${months} month${months !== 1 ? "s" : ""}`;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getTypeIcon = (itemType) => {
    switch (itemType) {
      case "degree":
        return <Award size={20} />;
      case "bootcamp":
        return <Code size={20} />;
      default:
        return <Building size={20} />;
    }
  };

  const getStatusColor = (endDate) => {
    return endDate ? "completed" : "current";
  };

  return (
    <motion.div
      className="experience-timeline"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="experience-timeline__container">
        {data.map((item, index) => {
          const isExpanded = expandedItems[item.id];
          const isLast = index === data.length - 1;
          const statusColor = getStatusColor(item.endDate);

          return (
            <motion.div
              key={item.id}
              className={`experience-timeline__item experience-timeline__item--${statusColor}`}
              variants={itemVariants}
            >
              {/* Timeline Line */}
              {!isLast && <div className="experience-timeline__line" />}

              {/* Timeline Dot */}
              <div
                className={`experience-timeline__dot experience-timeline__dot--${statusColor}`}
              >
                {type === "education" ? (
                  getTypeIcon(item.type)
                ) : (
                  <Building size={20} />
                )}
              </div>

              {/* Content */}
              <div className="experience-timeline__content">
                {/* Header */}
                <div className="experience-timeline__header">
                  <div className="experience-timeline__main-info">
                    <h3 className="experience-timeline__title">{item.title}</h3>
                    <div className="experience-timeline__company">
                      <span className="experience-timeline__company-name">
                        {item.company}
                      </span>
                      {item.companyInfo?.website && (
                        <a
                          href={item.companyInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-timeline__company-link"
                          aria-label={`Visit ${item.company} website`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="experience-timeline__meta">
                    <div className="experience-timeline__date-location">
                      <div className="experience-timeline__date">
                        <Calendar size={14} />
                        <span>
                          {formatDate(item.startDate)} -{" "}
                          {formatDate(item.endDate)}
                        </span>
                      </div>
                      <div className="experience-timeline__location">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="experience-timeline__duration">
                      {calculateDuration(item.startDate, item.endDate)}
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                {statusColor === "current" && (
                  <div className="experience-timeline__status">
                    <span className="experience-timeline__status-badge">
                      Current Position
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="experience-timeline__description">
                  {item.description}
                </p>

                {/* Education Specific Info */}
                {type === "education" && (
                  <div className="experience-timeline__education-info">
                    {item.gpa && (
                      <div className="experience-timeline__gpa">
                        <strong>GPA:</strong> {item.gpa}
                      </div>
                    )}
                    {item.honors && item.honors.length > 0 && (
                      <div className="experience-timeline__honors">
                        <strong>Honors:</strong> {item.honors.join(", ")}
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                {item.technologies && (
                  <div className="experience-timeline__technologies">
                    {item.technologies.slice(0, 6).map((tech, index) => (
                      <span key={index} className="experience-timeline__tech">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 6 && (
                      <span className="experience-timeline__tech experience-timeline__tech--more">
                        +{item.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                )}

                {/* Expand/Collapse Button */}
                {(item.achievements ||
                  item.responsibilities ||
                  item.relevantCoursework) && (
                  <button
                    className="experience-timeline__toggle"
                    onClick={() => toggleExpanded(item.id)}
                    aria-expanded={isExpanded}
                  >
                    <span>
                      {isExpanded ? "Show Less" : "Show More Details"}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                )}

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="experience-timeline__details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Achievements */}
                      {item.achievements && (
                        <div className="experience-timeline__section">
                          <h4 className="experience-timeline__section-title">
                            <Target size={16} />
                            Key Achievements
                          </h4>
                          <ul className="experience-timeline__list">
                            {item.achievements.map((achievement, index) => (
                              <li
                                key={index}
                                className="experience-timeline__list-item"
                              >
                                <CheckCircle size={14} />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Responsibilities */}
                      {item.responsibilities && (
                        <div className="experience-timeline__section">
                          <h4 className="experience-timeline__section-title">
                            <CheckCircle size={16} />
                            Responsibilities
                          </h4>
                          <ul className="experience-timeline__list">
                            {item.responsibilities.map(
                              (responsibility, index) => (
                                <li
                                  key={index}
                                  className="experience-timeline__list-item"
                                >
                                  {responsibility}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Relevant Coursework (Education) */}
                      {item.relevantCoursework && (
                        <div className="experience-timeline__section">
                          <h4 className="experience-timeline__section-title">
                            <Code size={16} />
                            Relevant Coursework
                          </h4>
                          <div className="experience-timeline__coursework">
                            {item.relevantCoursework.map((course, index) => (
                              <span
                                key={index}
                                className="experience-timeline__course"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Projects (Education) */}
                      {item.projects && (
                        <div className="experience-timeline__section">
                          <h4 className="experience-timeline__section-title">
                            <Code size={16} />
                            Projects
                          </h4>
                          <ul className="experience-timeline__list">
                            {item.projects.map((project, index) => (
                              <li
                                key={index}
                                className="experience-timeline__list-item"
                              >
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Company Info */}
                      {item.companyInfo && (
                        <div className="experience-timeline__company-info">
                          <div className="experience-timeline__company-detail">
                            <strong>Industry:</strong>{" "}
                            {item.companyInfo.industry}
                          </div>
                          <div className="experience-timeline__company-detail">
                            <strong>Size:</strong> {item.companyInfo.size}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
