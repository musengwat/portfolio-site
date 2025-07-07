// portfolio-frontend/src/components/Resume/DownloadButton.jsx
import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle } from 'lucide-react';
import { trackDownload } from '../../services/analytics';
import { api } from '../../services/api';
import './DownloadButton.css';

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

const getButtonContent = ({ state }) => {
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
          Resume Downloaded!
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

const ToolTip = ({}) => {
  return (
    <div className="download-button__tooltip">
      <div className="download-button__tooltip-content">
        <FileText size={16} color={'var(--color-text-primary)'} />
        <div className="download-button__tooltip-text">
          <span className="download-button__tooltip-title">Resume PDF</span>
          <span className="download-button__tooltip-subtitle">Latest version • 245KB</span>
        </div>
      </div>
    </div>
  );
};

const DownloadButton = ({ variant = 'primary', size = 'medium', className = '' }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;

    setIsDownloading(true);

    try {
      // Track download attempt
      // trackDownload('thomas-musengwa-resume.pdf', 'pdf');

      // Track download on backend
      // await api.trackResumeDownload();
      const link = document.createElement('a');
      link.href = '/assets/resume/thomas-musengwa-resume.pdf';
      link.download = 'thomas-musengwa-resume.pdf';
      link.target = '_blank';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadSuccess(true);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const getButtonState = () => {
    if (downloadSuccess) return 'success';
    if (isDownloading) return 'downloading';
    return 'idle';
  };

  return (
    <motion.div
      className={`download-button ${className}`}
      variants={buttonVariants}
      animate={getButtonState()}
    >
      <Button
        variant={!downloadSuccess ? 'success' : variant}
        size={size}
        onClick={handleDownload}
        disabled={isDownloading}
        className={`download-button__button download-button__button--${getButtonState()}`}
      >
        {getButtonContent(getButtonState())}
      </Button>
      <ToolTip />
    </motion.div>
  );
};

export default DownloadButton;
