// portfolio-frontend/src/components/Portfolio/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Star, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project, viewMode = 'grid', index = 0 }) => {
  const navigate = useNavigate();
  const handleExternalClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const getStatusColor = status => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'planning':
        return 'info';
      default:
        return 'default';
    }
  };

  const formatDate = dateString => {
    if (!dateString) return 'Ongoing';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <motion.article
      className={`project-card project-card--${viewMode}`}
      variants={cardVariants}
      whileHover={{
        y: viewMode === 'grid' ? -8 : -2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/project/${project.id}`)}
    >
      {project.featured && (
        <div className="project-card__badge project-card__badge--featured">
          <Star size={14} />
          <span>Featured</span>
        </div>
      )}

      {/* Status Badge */}
      <div
        className={`project-card__badge project-card__badge--status project-card__badge--${getStatusColor(project.status)}`}
      >
        {project.status.replace('-', ' ')}
      </div>

      {/* Image */}
      <div className="project-card__image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay">
          <div className="project-card__image-actions">
            <button
              className="project-card__action-btn project-card__action-btn--view"
              aria-label="View project details"
            >
              <Eye size={20} />
            </button>

            {project.liveUrl && (
              <button
                className="project-card__action-btn project-card__action-btn--external"
                onClick={e => handleExternalClick(e, project.liveUrl)}
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </button>
            )}

            {project.githubUrl && (
              <button
                className="project-card__action-btn project-card__action-btn--github"
                onClick={e => handleExternalClick(e, project.githubUrl)}
                aria-label="View source code"
              >
                <Github size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="project-card__content">
        {/* Header */}
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>

          {viewMode === 'list' && (
            <div className="project-card__meta">
              <span className="project-card__date">
                <Calendar size={14} />
                {formatDate(project.endDate || project.startDate)}
              </span>
              {project.client && <span className="project-card__client">{project.client}</span>}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="project-card__description">
          {viewMode === 'grid' ? project.shortDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="project-card__technologies">
          {project.technologies.slice(0, viewMode === 'grid' ? 4 : 6).map((tech, index) => (
            <span key={index} className="project-card__tech">
              {tech}
            </span>
          ))}
          {project.technologies.length > (viewMode === 'grid' ? 4 : 6) && (
            <span className="project-card__tech project-card__tech--more">
              +{project.technologies.length - (viewMode === 'grid' ? 4 : 6)}
            </span>
          )}
        </div>

        {/* Metrics (List view only) */}
        {viewMode === 'list' && project.metrics && (
          <div className="project-card__metrics">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="project-card__metric">
                <span className="project-card__metric-label">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </span>
                <span className="project-card__metric-value">{value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="project-card__footer">
          {viewMode === 'grid' && (
            <div className="project-card__date">
              <Calendar size={14} />
              <span>{formatDate(project.endDate || project.startDate)}</span>
            </div>
          )}

          <div className="project-card__links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                onClick={e => e.stopPropagation()}
                aria-label="View live demo"
              >
                <ExternalLink size={16} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                onClick={e => e.stopPropagation()}
                aria-label="View source code"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="project-card__hover-effect"></div>
    </motion.article>
  );
};

export default ProjectCard;
