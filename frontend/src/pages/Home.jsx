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

const sectionVariants = {
  hidden: { opacity: 0.2, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
  const [heroRef, heroInView] = useIntersectionObserver();
  const [aboutRef, aboutInView] = useIntersectionObserver();
  const [portfolioRef, portfolioInView] = useIntersectionObserver();
  const [resumeRef, resumeInView] = useIntersectionObserver();
  const [contactRef, contactInView] = useIntersectionObserver();

  useEffect(() => {
    trackPageView('home');
    document.title = 'Thomas Musengwa';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Full Stack JavaScript Developer specializing in React, Node.js, and modern web technologies. View my portfolio and get in touch.'
      );
    }
  }, []);

  return (
    <main className="home">
      <motion.section
        id="hero"
        ref={heroRef}
        animate={heroInView ? 'visible' : 'hidden'}
        initial="hidden"
        variants={sectionVariants}
        className="section"
      >
        <div className="wip-banner">
          🚧 This site is still under construction, feel free to look around but some bugs and
          errors may persist. 🚧
        </div>
        <Hero />
      </motion.section>
      <motion.section
        id="about"
        ref={aboutRef}
        animate={aboutInView ? 'visible' : 'hidden'}
        initial="hidden"
        variants={sectionVariants}
        className="section"
      >
        <About />
      </motion.section>
      <motion.section
        id="portfolio"
        ref={portfolioRef}
        animate={portfolioInView ? 'visible' : 'hidden'}
        initial="hidden"
        variants={sectionVariants}
        className="section"
      >
        <Portfolio />
      </motion.section>
      <motion.section
        id="resume"
        ref={resumeRef}
        animate={resumeInView ? 'visible' : 'hidden'}
        initial="hidden"
        variants={sectionVariants}
        className="section"
      >
        <Resume />
      </motion.section>
      <motion.section
        id="contact"
        ref={contactRef}
        animate={contactInView ? 'visible' : 'hidden'}
        initial="hidden"
        variants={sectionVariants}
        className="section"
      >
        <Contact />
      </motion.section>
    </main>
  );
};

export default Home;
