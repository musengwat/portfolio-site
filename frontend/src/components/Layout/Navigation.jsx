// portfolio-frontend/src/components/Layout/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './Navigation.css';

const Navigation = ({ isMobile = false, onItemClick }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    isMobile && onItemClick?.();
    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };
    const isRootOrHash = /^\/(#.*)?$/.test(window.location.pathname + window.location.hash);
    if (!isRootOrHash) {
      navigate(`/${href}`, { replace: false });
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }

    onItemClick?.();
  };

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'resume', label: 'Resume', href: '#resume' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id));
    const sectionTops = sections.map(section => (section ? section.offsetTop - 100 : 0));

    const currentSection = sectionTops.findIndex((top, index) => {
      const nextTop = sectionTops[index + 1];
      return scrollPosition >= top && (nextTop ? scrollPosition < nextTop : true);
    });

    if (currentSection >= 0) {
      setActiveSection(navItems[currentSection].id);
    }
  }, [scrollPosition]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.05,
        delayChildren: isMobile ? 0.2 : 0,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 20 : 0,
      x: isMobile ? 0 : -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.nav
      className={`navigation ${isMobile ? 'navigation--mobile' : 'navigation--desktop'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className="navigation__list">
        {navItems.map((item, index) => (
          <motion.li key={item.id} className="navigation__item" variants={itemVariants}>
            <motion.a
              href={item.href}
              className={`navigation__link ${
                activeSection === item.id ? 'navigation__link--active' : ''
              }`}
              onClick={e => handleNavClick(e, item.href, item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="navigation__link-text">{item.label}</span>

              {activeSection === item.id && (
                <motion.span
                  className="navigation__link-indicator"
                  layoutId={isMobile ? 'mobile-indicator' : 'desktop-indicator'}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navigation;
