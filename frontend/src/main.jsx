// portfolio-frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import analytics from './services/analytics';
import './styles/globals.css';

// Initialize analytics
analytics.init();

// Performance monitoring
if (typeof window !== 'undefined' && 'performance' in window) {
  // Track initial page load
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    analytics.trackEvent('page_load_complete', {
      load_time: Math.round(loadTime),
      timestamp: Date.now(),
    });
  });
}

// Development vs Production rendering
const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
};

// Initialize the application
renderApp();

// Hot Module Replacement (HMR) - Development only
if (import.meta.hot) {
  import.meta.hot.accept('./App.js', () => {
    renderApp();
  });
}
