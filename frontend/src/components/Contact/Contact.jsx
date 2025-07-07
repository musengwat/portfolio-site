// portfolio-frontend/src/components/Contact/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { personalInfo } from '../../data/skills';
import './Contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      description: 'Open to relocation',
    },
    {
      icon: Clock,
      label: 'Timezone',
      value: personalInfo.timezone,
      description: 'Central standard Time',
    },
  ];

  return (
    <section className="contact">
      <div className="container">
        <motion.div
          className="contact__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="contact__header" variants={itemVariants}>
            <h2 className="contact__title">Get In Touch</h2>
            <p className="contact__subtitle">Let's create something amazing together.</p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="contact__grid">
            {/* Contact Information */}
            <motion.div className="contact__info" variants={itemVariants}>
              <div className="contact__info-content">
                <h3 className="contact__info-title">Let's Connect</h3>
                <p className="contact__info-description">
                  I'm always excited to take on new challenges and collaborate with passionate
                  teams. Whether you have a project in mind or just want to say hello, I'd love to
                  hear from you.
                </p>

                {/* Contact Details */}
                <div className="contact__details">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    const content = (
                      <motion.div
                        key={index}
                        className="contact__detail"
                        variants={itemVariants}
                        whileHover={
                          item.href && {
                            x: 5,
                            transition: { duration: 0.2 },
                          }
                        }
                      >
                        <div className="contact__detail-icon">
                          <IconComponent size={20} />
                        </div>
                        <div className="contact__detail-content">
                          <span className="contact__detail-label">{item.label}</span>
                          <span className="contact__detail-value">{item.value}</span>
                          <span className="contact__detail-description">{item.description}</span>
                        </div>
                      </motion.div>
                    );

                    return item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        className="contact__detail-link"
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    );
                  })}
                </div>

                {/* Social Links */}
                <motion.div className="contact__social" variants={itemVariants}>
                  <h4 className="contact__social-title">Follow Me</h4>
                  <SocialLinks />
                </motion.div>

                {/* Availability Status */}
                <motion.div className="contact__availability" variants={itemVariants}>
                  <div className="contact__availability-indicator">
                    <div className="contact__availability-dot"></div>
                    <span className="contact__availability-text">{personalInfo.availability}</span>
                  </div>
                  <p className="contact__availability-description">
                    Currently accepting new projects and collaborations
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact__form-container" variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </div>

          {/* Additional Info */}
          {/* <motion.div className="contact__additional" variants={itemVariants}>
            <div className="contact__additional-grid">
              <div className="contact__additional-item">
                <h4 className="contact__additional-title">Response Time</h4>
                <p className="contact__additional-text">
                  I typically respond to emails within 24 hours during business days.
                </p>
              </div>

              <div className="contact__additional-item">
                <h4 className="contact__additional-title">Project Timeline</h4>
                <p className="contact__additional-text">
                  Most projects start within 1-2 weeks of initial consultation.
                </p>
              </div>

              <div className="contact__additional-item">
                <h4 className="contact__additional-title">Free Consultation</h4>
                <p className="contact__additional-text">
                  30-minute discovery call to discuss your project needs and goals.
                </p>
              </div>
            </div>
          </motion.div> */}

          {/* CTA Section */}
          <motion.div className="contact__cta" variants={itemVariants}>
            <div className="contact__cta-content">
              <h3 className="contact__cta-title">Ready to Start Your Project?</h3>
              <p className="contact__cta-description">
                Let's schedule a call to discuss your vision and how we can bring it to life.
              </p>
              <div className="contact__cta-actions">
                <a
                  href={`mailto:${personalInfo.email}?subject=Project Inquiry`}
                  className="contact__cta-button contact__cta-button--primary"
                >
                  Email Me
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="contact__cta-button contact__cta-button--secondary"
                >
                  Call Me
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
