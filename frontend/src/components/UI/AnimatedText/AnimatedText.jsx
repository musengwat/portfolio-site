// portfolio-frontend/src/components/UI/AnimatedText/AnimatedText.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedText.css';

const AnimatedText = ({
  text,
  delay = 0,
  duration = 0.05,
  className = '',
  animationType = 'fade', // 'fade', 'bounce', 'slide'
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay,
      },
    },
  };

  const fadeVariants = {
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

  const bounceVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 150,
        damping: 10,
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const getVariant = () => {
    switch (animationType) {
      case 'bounce':
        return bounceVariants;
      case 'slide':
        return slideVariants;
      default:
        return fadeVariants;
    }
  };

  const chars = text.split('');

  return (
    <motion.div
      className={`animated-text ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="animated-text__char"
          variants={getVariant()}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
