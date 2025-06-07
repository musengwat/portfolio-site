import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__inner"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
