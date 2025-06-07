// portfolio-frontend/src/pages/Home.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { trackPageView } from '../services/analytics';
import './Home.css';

const Home = () => {
  const [heroRef, heroInView] = useIntersectionObserver({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useIntersectionObserver({ threshold: 0.3 });
  const [portfolioRef, portfolioInView] = useIntersectionObserver({
    threshold: 0.3,
  });
  const [resumeRef, resumeInView] = useIntersectionObserver({ threshold: 0.3 });
  const [contactRef, contactInView] = useIntersectionObserver({
    threshold: 0.3,
  });

  useEffect(() => {
    // Track page view
    trackPageView('home');

    // Update document title
    document.title = 'John Doe - Full Stack Developer Portfolio';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Full Stack JavaScript Developer specializing in React, Node.js, and modern web technologies. View my portfolio and get in touch.'
      );
    }
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className="home">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        id="hero"
        className="section"
      >
        <Hero />
      </motion.section>
      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        id="about"
        className="section"
      >
        <About />
      </motion.section>
      {/* Portfolio Section */}
      <motion.section
        ref={portfolioRef}
        initial="hidden"
        animate={portfolioInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        id="portfolio"
        className="section"
      >
        <Portfolio />
      </motion.section>
      {/* Resume Section */}
      <motion.section
        ref={resumeRef}
        initial="hidden"
        animate={resumeInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        id="resume"
        className="section"
      >
        <Resume />
      </motion.section>{' '}
      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        id="contact"
        className="section"
      >
        <Contact />
      </motion.section>
    </main>
  );
};

export default Home;
