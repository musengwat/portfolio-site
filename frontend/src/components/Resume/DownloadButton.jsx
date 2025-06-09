// portfolio-frontend/src/components/Resume/DownloadButton.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle } from 'lucide-react';
import Button from '../UI/Button/Button';
import './DownloadButton.css';
import { trackDownload } from '../../services/analytics';
import { api } from '../../services/api';
import './DownloadButton.css';

const DownloadButton = ({ variant = 'primary', size = 'medium', className = '' }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;

    setIsDownloading(true);

    try {
      // Track download attempt
      trackDownload('thomas-musengwa-resume.pdf', 'pdf');

      // Track download on backend
      await api.trackResumeDownload();

      // Simulate download process (in real app, you'd fetch the actual file)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create download link
      const link = document.createElement('a');
      link.href = '/assets/resume/thomas-musengwa-resume.pdf';
      link.download = 'thomas-musengwa-resume.pdf';
      link.target = '_blank';

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success state
      setDownloadSuccess(true);

      // Reset success state after 3 seconds
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Download failed:', error);
      // You could show an error message here
    } finally {
      setIsDownloading(false);
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    downloading: {
      scale: [1, 0.95, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    success: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    idle: { rotate: 0 },
    downloading: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      },
    },
    success: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const getButtonState = () => {
    if (downloadSuccess) return 'success';
    if (isDownloading) return 'downloading';
    return 'idle';
  };

  const getButtonContent = () => {
    const state = getButtonState();

    switch (state) {
      case 'downloading':
        return (
          <>
            <motion.div variants={iconVariants}>
              <Download size={20} />
            </motion.div>
            Downloading...
          </>
        );
      case 'success':
        return (
          <>
            <motion.div variants={iconVariants}>
              <CheckCircle size={20} />
            </motion.div>
            Downloaded!
          </>
        );
      default:
        return (
          <>
            <FileText size={20} />
            Download Resume
          </>
        );
    }
  };

  return (
    <motion.div
      className={`download-button ${className}`}
      variants={buttonVariants}
      animate={getButtonState()}
    >
      <Button
        variant={downloadSuccess ? 'success' : variant}
        size={size}
        onClick={handleDownload}
        disabled={isDownloading}
        className={`download-button__btn download-button__btn--${getButtonState()}`}
      >
        {getButtonContent()}
      </Button>

      {/* Download Info Tooltip */}
      <div className="download-button__tooltip">
        <div className="download-button__tooltip-content">
          <FileText size={16} />
          <div className="download-button__tooltip-text">
            <span className="download-button__tooltip-title">Resume PDF</span>
            <span className="download-button__tooltip-subtitle">Latest version • 245KB</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DownloadButton;
