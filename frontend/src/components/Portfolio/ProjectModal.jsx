// portfolio-frontend/src/components/Portfolio/ProjectModal.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  User,
  Target,
  CheckCircle,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Button from "../UI/Button/Button";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Ongoing";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="project-modal-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="project-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <motion.div
          className="project-modal__content"
          variants={contentVariants}
        >
          {/* Header */}
          <motion.div className="project-modal__header" variants={itemVariants}>
            <div className="project-modal__title-section">
              <h2 className="project-modal__title">{project.title}</h2>
              <p className="project-modal__description">
                {project.description}
              </p>

              <div className="project-modal__meta">
                <div className="project-modal__meta-item">
                  <Calendar size={16} />
                  <span>
                    {formatDate(project.startDate)} -{" "}
                    {formatDate(project.endDate)}
                  </span>
                </div>

                {project.client && (
                  <div className="project-modal__meta-item">
                    <User size={16} />
                    <span>{project.client}</span>
                  </div>
                )}

                <div className="project-modal__meta-item">
                  <span
                    className={`project-modal__status project-modal__status--${project.status}`}
                  >
                    {project.status.replace("-", " ")}
                  </span>
                </div>
              </div>
            </div>

            <div className="project-modal__actions">
              {project.liveUrl && (
                <Button
                  variant="primary"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github size={20} />
                  View Code
                </Button>
              )}
            </div>
          </motion.div>

          {/* Images Gallery */}
          <motion.div
            className="project-modal__gallery"
            variants={itemVariants}
          >
            <div className="project-modal__image-container">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="project-modal__image"
              />

              {images.length > 1 && (
                <>
                  <button
                    className="project-modal__image-nav project-modal__image-nav--prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <button
                    className="project-modal__image-nav project-modal__image-nav--next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="project-modal__image-dots">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`project-modal__image-dot ${
                          index === currentImageIndex
                            ? "project-modal__image-dot--active"
                            : ""
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Details Grid */}
          <div className="project-modal__details">
            {/* Technologies */}
            <motion.div
              className="project-modal__section"
              variants={itemVariants}
            >
              <h3 className="project-modal__section-title">
                Technologies Used
              </h3>
              <div className="project-modal__technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-modal__tech">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            {project.features && (
              <motion.div
                className="project-modal__section"
                variants={itemVariants}
              >
                <h3 className="project-modal__section-title">
                  <CheckCircle size={20} />
                  Key Features
                </h3>
                <ul className="project-modal__features">
                  {project.features.map((feature, index) => (
                    <li key={index} className="project-modal__feature">
                      <CheckCircle
                        size={16}
                        className="project-modal__feature-icon"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <motion.div
                className="project-modal__section"
                variants={itemVariants}
              >
                <h3 className="project-modal__section-title">
                  <Target size={20} />
                  Challenges & Solutions
                </h3>
                <ul className="project-modal__challenges">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="project-modal__challenge">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Metrics */}
            {project.metrics && (
              <motion.div
                className="project-modal__section"
                variants={itemVariants}
              >
                <h3 className="project-modal__section-title">
                  <TrendingUp size={20} />
                  Project Metrics
                </h3>
                <div className="project-modal__metrics">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="project-modal__metric">
                      <span className="project-modal__metric-label">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      <span className="project-modal__metric-value">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <motion.div className="project-modal__footer" variants={itemVariants}>
            <div className="project-modal__footer-content">
              <p className="project-modal__footer-text">
                Interested in learning more about this project or discussing
                similar work?
              </p>
              <Button
                variant="secondary"
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 300);
                }}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
