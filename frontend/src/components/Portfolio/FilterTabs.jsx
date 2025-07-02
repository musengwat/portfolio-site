// portfolio-frontend/src/components/Portfolio/FilterTabs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './FilterTabs.css';

const FilterTabs = ({ categories, selectedFilter, onFilterChange }) => {
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="filter-tabs"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map(category => (
        <motion.button
          key={category.id}
          className={`filter-tab ${selectedFilter === category.id && 'filter-tab--active'}`}
          onClick={() => onFilterChange(category.id)}
          variants={tabVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="filter-tabs__label">{category.label}:</span>
          <span className="filter-tab__count">{category.count}</span>

          {selectedFilter === category.id && (
            <motion.div
              className="filter-tabs__indicator"
              layoutId="activeTab"
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30,
              }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default FilterTabs;
