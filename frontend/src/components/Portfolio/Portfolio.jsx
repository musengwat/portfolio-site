// portfolio-frontend/src/components/Portfolio/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grid, List } from 'lucide-react';
import ProjectCard from './ProjectCard';
import FilterTabs from './FilterTabs';
import { projects, categories, getProjectsByCategory } from '../../data/projects';
import { useApp } from '../../context/AppContext';
import './Portfolio.css';

const Portfolio = () => {
  const { state, setPortfolioFilter } = useApp();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');

  const selectedFilter = state.portfolio.selectedFilter;

  useEffect(() => {
    let filtered = getProjectsByCategory(selectedFilter);

    if (searchTerm) {
      filtered = filtered.filter(
        project =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    switch (sortBy) {
      case 'name':
        filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
        filtered = [...filtered].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
      case 'recent':
      default:
        filtered = [...filtered].sort((a, b) => {
          const dateA = new Date(a.endDate || a.startDate);
          const dateB = new Date(b.endDate || b.startDate);
          return dateB - dateA;
        });
        break;
    }

    setFilteredProjects(filtered);
  }, [selectedFilter, searchTerm, sortBy]);
  const handleFilterChange = filter => {
    setPortfolioFilter(filter);
  };

  const containerVariants = {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="portfolio">
      <div className="container">
        <motion.div
          className="portfolio__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="portfolio__header" variants={itemVariants}>
            <h2 className="portfolio__title">My Portfolio</h2>
            <p className="portfolio__subtitle">
              A collection of projects that showcase my skills and passion
            </p>
          </motion.div>

          <motion.div className="portfolio__controls" variants={itemVariants}>
            <div className="portfolio__search-sort">
              <div className="portfolio__search">
                <Search size={20} className="portfolio__search-icon" />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="portfolio__search-input"
                />
              </div>

              <div className="portfolio__sort">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="portfolio__sort-select"
                >
                  <option value="recent">Most Recent</option>
                  <option value="name">Name A-Z</option>
                  <option value="featured">Featured First</option>
                </select>
              </div>

              <div className="portfolio__view-mode">
                <button
                  className={`portfolio__view-btn ${viewMode === 'grid' ? 'portfolio__view-btn--active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <Grid size={20} />
                </button>
                <button
                  className={`portfolio__view-btn ${viewMode === 'list' ? 'portfolio__view-btn--active' : ''}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <FilterTabs
              categories={categories}
              selectedFilter={selectedFilter}
              onFilterChange={handleFilterChange}
            />
          </motion.div>

          <motion.div className="portfolio__results-info" variants={itemVariants}>
            <p className="portfolio__results-text">
              Showing {filteredProjects.length} of {projects.length} projects
              {searchTerm && <span className="portfolio__search-term"> for "{searchTerm}"</span>}
            </p>

            {filteredProjects.length === 0 && searchTerm && (
              <p className="portfolio__no-results">
                No projects found. Try adjusting your search or filters.
              </p>
            )}
          </motion.div>

          <motion.div
            className={`portfolio__grid portfolio__grid--${viewMode}`}
            variants={containerVariants}
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} viewMode={viewMode} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {filteredProjects.length >= 6 && (
            <motion.div className="portfolio__load-more" variants={itemVariants}>
              <button className="portfolio__load-more-btn">Load More Projects</button>
            </motion.div>
          )}

          {/* Featured Projects CTA */}
          <motion.div className="portfolio__cta" variants={itemVariants}>
            <div className="portfolio__cta-content">
              <h3 className="portfolio__cta-title">Interested in working together?</h3>
              <p className="portfolio__cta-description">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <button
                className="portfolio__cta-button"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </motion.div>{' '}
      </div>
    </section>
  );
};

export default Portfolio;
