// portfolio-frontend/src/components/Resume/ExperienceTimeline.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ExperienceTimeline.css';
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
} from 'lucide-react';
import './ExperienceTimeline.css';

const formatDate = dateString => {
  if (!dateString) return 'Present';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
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
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
  }
};

const CompanyInfo = ({ comp }) => {
  return (
    <div className="experience-timeline__company-info">
      <div className="experience-timeline__company-detail">
        <strong>Industry:</strong> {comp.industry}
      </div>
      <div className="experience-timeline__company-detail">
        <strong>Size:</strong> {comp.size}
      </div>
    </div>
  );
};

const Responsibilities = ({ responsibilities }) => {
  return (
    <div className="experience-timeline__section">
      <h4 className="experience-timeline__section-title">
        <CheckCircle size={16} />
        Responsibilities
      </h4>
      <ul className="experience-timeline__list">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="experience-timeline__list-item">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Achievements = ({ achievements }) => {
  return (
    <div className="experience-timeline__section">
      <h4 className="experience-timeline__section-title">
        <Target size={16} />
        Key Achievements
      </h4>
      <ul className="experience-timeline__list">
        {achievements.map((achievement, index) => (
          <li key={index} className="experience-timeline__list-item">
            <CheckCircle size={14} />
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExpandButton = ({ isExpanded, onClick }) => {
  return (
    <button className="experience-timeline__toggle" onClick={onClick} aria-expanded={isExpanded}>
      <span>{isExpanded ? 'Show Less' : 'Show More Details'}</span>
      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>
  );
};

const Technologies = ({ technologies }) => {
  return (
    <div className="experience-timeline__technologies">
      {technologies.slice(0, 6).map((tech, index) => (
        <span key={index} className="experience-timeline__tech">
          {tech}
        </span>
      ))}
      {technologies.length > 6 && (
        <span className="experience-timeline__tech experience-timeline__tech--more">
          +{technologies.length - 6} more
        </span>
      )}
    </div>
  );
};

const Header = ({ item }) => {
  return (
    <div className="experience-timeline__main-info">
      <h3 className="experience-timeline__title">{item.title}</h3>
      <div className="experience-timeline__company">
        {item.company && <span className="experience-timeline__company-name">{item.company}</span>}{' '}
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
  );
};

const StatusBadge = () => {
  return (
    <div className="experience-timeline__status">
      <span className="experience-timeline__status-badge">Current Position</span>
    </div>
  );
};

const TimeLocation = ({ item }) => {
  return (
    <div className="experience-timeline__meta">
      <div className="experience-timeline__date-location">
        <div className="experience-timeline__date">
          <Calendar size={14} />
          <span>
            {formatDate(item.startDate)} - {formatDate(item.endDate)}
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
  );
};

const ExperienceTimeline = ({ data, type = 'experience' }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = id => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
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
        ease: 'easeOut',
      },
    },
  };

  const getTypeIcon = itemType => {
    switch (itemType) {
      case 'degree':
        return <Award size={20} />;
      case 'bootcamp':
        return <Code size={20} />;
      default:
        return <Building size={20} />;
    }
  };

  const getStatusColor = endDate => {
    return endDate ? 'completed' : 'current';
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
              <div className={`experience-timeline__dot experience-timeline__dot--${statusColor}`}>
                {type === 'education' ? getTypeIcon(item.type) : <Building size={20} />}
              </div>

              {/* Content */}
              <div className="experience-timeline__content">
                <div className="experience-timeline__header">
                  <Header item={item} />
                  <TimeLocation item={item} />
                </div>

                {statusColor === 'current' && <StatusBadge />}

                <p className="experience-timeline__description">{item.description}</p>

                {item.technologies && <Technologies technologies={item.technologies} />}

                {(item.achievements || item.responsibilities || item.relevantCoursework) && (
                  <ExpandButton isExpanded={isExpanded} onClick={() => toggleExpanded(item.id)} />
                )}

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="experience-timeline__details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Achievements */}
                      {item.achievements && <Achievements achievements={item.achievements} />}

                      {/* Responsibilities */}
                      {item.responsibilities && (
                        <Responsibilities responsibilities={item.responsibilities} />
                      )}

                      {/* Company Info */}
                      {item?.companyInfo && <CompanyInfo comp={item.companyInfo} />}
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
