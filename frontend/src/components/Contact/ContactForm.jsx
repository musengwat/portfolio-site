// portfolio-frontend/src/components/Contact/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, Briefcase } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../UI/Button/Button';
import { useApp } from '../../context/AppContext';
import { trackFormSubmission } from '../../services/analytics';
import './ContactForm.css';

const ContactForm = () => {
  const { state, setContactSubmitting, setContactSubmitted, setContactError, resetContactForm } =
    useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  // EmailJS configuration
  const EMAILJS_CONFIG = {
    serviceId: 'service_kk1zzgv',
    templateId: 'template_6yp0hnr',
    publicKey: 'sXKT6IXUv-LaVoLmT',
    // serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    // templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    // publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  };

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Site',
    'Portfolio/Blog',
    'API Development',
    'Database Design',
    'Consulting',
    'Other',
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    "Let's discuss",
  ];

  const timelineOptions = ['ASAP', '1-2 weeks', '1 month', '2-3 months', '3+ months', 'Flexible'];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'subject':
        return value.trim().length < 5 ? 'Subject must be at least 5 characters' : '';
      case 'message':
        return value.trim().length < 20 ? 'Message must be at least 20 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInputBlur = e => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
    setFocusedField(null);
  };

  const handleInputFocus = fieldName => {
    setFocusedField(fieldName);
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['name', 'email', 'subject', 'message'];

    requiredFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check if EmailJS is properly configured
    if (
      !EMAILJS_CONFIG.serviceId ||
      !EMAILJS_CONFIG.templateId ||
      !EMAILJS_CONFIG.publicKey ||
      EMAILJS_CONFIG.serviceId === 'your_service_id'
    ) {
      setContactError(
        'Email service is not properly configured. Please contact the administrator.'
      );
      return;
    }

    setContactSubmitting(true);
    setContactError(null);

    try {
      const templateParams = {
        to_name: 'Thomas Musengwa',
        to_email: 'thomasmusengwa1@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        project_type: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        timestamp: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);

      // Track successful submission
      // if (typeof trackFormSubmission === 'function') {
      //   trackFormSubmission('contact', true);
      // }

      setContactSubmitted(true);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        resetContactForm();
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);

      let errorMessage = 'Failed to send message. Please try again.';

      // Handle specific EmailJS error cases
      if (error.status === 400) {
        errorMessage = 'Invalid email configuration. Please check your details.';
      } else if (error.status === 402) {
        errorMessage = 'Email service quota exceeded. Please try again later.';
      } else if (error.status === 403) {
        errorMessage = 'Email service access denied. Please contact support.';
      } else if (error.text) {
        errorMessage = `Email service error: ${error.text}`;
      }

      setContactError(errorMessage);

      // Track failed submission
      // if (typeof trackFormSubmission === 'function') {
      //   trackFormSubmission('contact', false, error.text || error.message);
      // }
    } finally {
      setContactSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  // Show success state
  if (state.contactForm.submitted) {
    return (
      <motion.div
        className="contact-form__success"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-form__success-content">
          <CheckCircle size={48} className="contact-form__success-icon" />
          <h3 className="contact-form__success-title">Message Sent!</h3>
          <p className="contact-form__success-text">
            Thank you for reaching out! I'll get back to you within 24 hours.
          </p>
          <Button
            variant="outline"
            onClick={resetContactForm}
            className="contact-form__success-button"
          >
            Send Another Message
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      variants={formVariants}
      initial="hidden"
      animate="visible"
      noValidate
    >
      <div className="contact-form__header">
        <h3 className="contact-form__title">Send Me a Message</h3>
        <p className="contact-form__description">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Error Message */}
      {state.contactForm.error && (
        <motion.div
          className="contact-form__error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle size={20} />
          <span>{state.contactForm.error}</span>
        </motion.div>
      )}

      <div className="contact-form__fields">
        {/* Name and Email Row */}
        <div className="contact-form__row">
          <motion.div className="contact-form__field" variants={fieldVariants}>
            <label htmlFor="name" className="contact-form__label">
              <User size={16} />
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onFocus={() => handleInputFocus('name')}
              className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''} ${focusedField === 'name' ? 'contact-form__input--focused' : ''}`}
              placeholder="Your full name"
              required
            />
            {errors.name && <span className="contact-form__field-error">{errors.name}</span>}
          </motion.div>

          <motion.div className="contact-form__field" variants={fieldVariants}>
            <label htmlFor="email" className="contact-form__label">
              <Mail size={16} />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onFocus={() => handleInputFocus('email')}
              className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''} ${focusedField === 'email' ? 'contact-form__input--focused' : ''}`}
              placeholder="your.email@example.com"
              required
            />
            {errors.email && <span className="contact-form__field-error">{errors.email}</span>}
          </motion.div>
        </div>

        {/* Subject */}
        <motion.div className="contact-form__field" variants={fieldVariants}>
          <label htmlFor="subject" className="contact-form__label">
            <MessageSquare size={16} />
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={() => handleInputFocus('subject')}
            className={`contact-form__input ${errors.subject ? 'contact-form__input--error' : ''} ${focusedField === 'subject' ? 'contact-form__input--focused' : ''}`}
            placeholder="What's this about?"
            required
          />
          {errors.subject && <span className="contact-form__field-error">{errors.subject}</span>}
        </motion.div>

        {/* Project Details Row - Uncomment if you want to include these fields */}
        {/* <div className="contact-form__row">
          <motion.div className="contact-form__field" variants={fieldVariants}>
            <label htmlFor="projectType" className="contact-form__label">
              <Briefcase size={16} />
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="contact-form__select"
            >
              <option value="">Select project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div className="contact-form__field" variants={fieldVariants}>
            <label htmlFor="budget" className="contact-form__label">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="contact-form__select"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map(range => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </motion.div>
        </div> */}

        {/* Timeline */}
        {/* <motion.div className="contact-form__field" variants={fieldVariants}>
          <label htmlFor="timeline" className="contact-form__label">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="contact-form__select"
          >
            <option value="">Select timeline</option>
            {timelineOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </motion.div> */}

        {/* Message */}
        <motion.div className="contact-form__field" variants={fieldVariants}>
          <label htmlFor="message" className="contact-form__label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={() => handleInputFocus('message')}
            className={`contact-form__textarea ${errors.message ? 'contact-form__textarea--error' : ''} ${focusedField === 'message' ? 'contact-form__textarea--focused' : ''}`}
            placeholder="Tell me about your project, goals, and any specific requirements..."
            rows={6}
            required
          />
          {errors.message && <span className="contact-form__field-error">{errors.message}</span>}
        </motion.div>
      </div>

      {/* Submit Button */}
      <motion.div className="contact-form__submit" variants={fieldVariants}>
        <Button
          type="submit"
          variant="primary"
          size="large"
          loading={state.contactForm.isSubmitting}
          disabled={state.contactForm.isSubmitting}
          className="contact-form__submit-button"
        >
          <Send size={20} />
          {state.contactForm.isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        <p className="contact-form__privacy">
          Your information is secure and will only be used to respond to your inquiry.
        </p>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
