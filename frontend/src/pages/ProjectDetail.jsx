import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  ExternalLink,
  Github,
  CheckCircle,
  Target,
  TrendingUp,
  ArrowLeft,
} from 'lucide-react';
import { getProjectById } from '../data/projects';
import Button from '../components/UI/Button/Button';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    const foundProject = getProjectById(id);
    if (!foundProject) {
      navigate('/');
      return;
    }

    setProject(foundProject);
    document.title = `${foundProject.title} - Project Details`;
    window.scrollTo(0, 0);
  }, [id, navigate]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const formatDate = dateString => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  const handleGetInTouch = e => {
    const contactElement = document.getElementById('contact');

    navigate(`/#contact`, { replace: false });
    setTimeout(
      contactElement.scrollIntoView({
        behavior: 'smooth',
      }),
      500
    );
  };

  if (!project) return null;

  return (
    <div className="project-detail">
      <div className="container">
        <motion.div
          className="project-detail__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div className="project-detail__back" variants={itemVariants}>
            <Button
              variant="text"
              onClick={() => navigate('/')}
              className="project-detail__back-btn"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Button>
          </motion.div>

          {/* Header Section */}
          <motion.div className="project-detail__header" variants={itemVariants}>
            <div className="project-detail__title-section">
              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__description">{project.description}</p>

              <div className="project-detail__meta">
                <div className="project-detail__meta-item">
                  <Calendar size={16} />
                  <span>
                    {formatDate(project.startDate)} - {formatDate(project.endDate)}
                  </span>
                </div>

                {project.client && (
                  <div className="project-detail__meta-item">
                    <User size={16} />
                    <span>{project.client}</span>
                  </div>
                )}

                <div className="project-detail__meta-item">
                  <span
                    className={`project-detail__status project-detail__status--${project.status}`}
                  >
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>

            <div className="project-detail__actions">
              {project.liveUrl && (
                <Button
                  variant="primary"
                  onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  variant="secondary"
                  onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                >
                  <Github size={20} />
                  View Source Code
                </Button>
              )}
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div className="project-detail__gallery" variants={itemVariants}>
            {project.images && project.images.length > 0 && (
              <div className="project-detail__image-container">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="project-detail__image"
                />

                {project.images.length > 1 && (
                  <div className="project-detail__image-nav">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`project-detail__image-dot ${
                          index === currentImageIndex ? 'project-detail__image-dot--active' : ''
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Main Content Grid */}
          <div className="project-detail__grid">
            {/* Technologies */}
            <motion.div className="project-detail__section" variants={itemVariants}>
              <h2 className="project-detail__section-title">Technologies Used</h2>
              <div className="project-detail__technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-detail__tech">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            {project.features && (
              <motion.div className="project-detail__section" variants={itemVariants}>
                <h2 className="project-detail__section-title">
                  <CheckCircle size={20} />
                  Key Features
                </h2>
                <ul className="project-detail__features">
                  {project.features.map((feature, index) => (
                    <li key={index} className="project-detail__feature">
                      <CheckCircle size={16} className="project-detail__feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <motion.div className="project-detail__section" variants={itemVariants}>
                <h2 className="project-detail__section-title">
                  <Target size={20} />
                  Challenges & Solutions
                </h2>
                <ul className="project-detail__challenges">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="project-detail__challenge">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Metrics */}
            {project.metrics && (
              <motion.div className="project-detail__section" variants={itemVariants}>
                <h2 className="project-detail__section-title">
                  <TrendingUp size={20} />
                  Project Metrics
                </h2>
                <div className="project-detail__metrics">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="project-detail__metric">
                      <span className="project-detail__metric-label">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      <span className="project-detail__metric-value">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* CTA Section */}
          <motion.div className="project-detail__cta" variants={itemVariants}>
            <div className="project-detail__cta-content">
              <h3 className="project-detail__cta-title">Interested in working together?</h3>
              <p className="project-detail__cta-description">
                Let's discuss your project and see how I can help bring your ideas to life.
              </p>
              <Button variant="primary" onClick={handleGetInTouch}>
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
