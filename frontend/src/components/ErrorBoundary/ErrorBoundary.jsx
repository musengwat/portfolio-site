// portfolio-frontend/src/components/ErrorBoundary/ErrorBoundary.jsx
import React from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      errorId: Date.now().toString(),
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    this.setState({
      error,
      errorInfo,
    });

    // Log to analytics/monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true,
        error_id: this.state.errorId,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  logErrorToService = (error, errorInfo) => {
    // Example: Send to your error reporting service
    // Sentry.captureException(error, { extra: errorInfo });

    // Or send to your backend
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      }),
    }).catch(err => {
      console.error('Failed to log error to service:', err);
    });
  };

  handleRetry = () => {
    // Clear error state and retry
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    });
  };

  handleGoHome = () => {
    // Navigate to home and clear error
    window.location.href = '/';
  };

  handleReload = () => {
    // Reload the page
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__container">
            <div className="error-boundary__content">
              {/* Error Icon */}
              <div className="error-boundary__icon">
                <AlertTriangle size={64} />
              </div>

              {/* Error Message */}
              <div className="error-boundary__message">
                <h1 className="error-boundary__title">Oops! Something went wrong</h1>
                <p className="error-boundary__description">
                  I apologize for the inconvenience. An unexpected error occurred while loading this
                  page. Please try one of the options below to continue.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="error-boundary__actions">
                <button
                  onClick={this.handleRetry}
                  className="error-boundary__button error-boundary__button--primary"
                >
                  <RefreshCw size={20} />
                  Try Again
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="error-boundary__button error-boundary__button--secondary"
                >
                  <Home size={20} />
                  Go Home
                </button>

                <button
                  onClick={this.handleReload}
                  className="error-boundary__button error-boundary__button--outline"
                >
                  <RefreshCw size={20} />
                  Reload Page
                </button>
              </div>

              {/* Contact Information */}
              <div className="error-boundary__contact">
                <p className="error-boundary__contact-text">
                  If this problem persists, please contact me directly:
                </p>
                <a
                  href="mailto:ThomasMusengwa1@gmail.com?subject=Website Error - ID: {this.state.errorId}"
                  className="error-boundary__contact-link"
                >
                  <Mail size={16} />
                  ThomasMusengwa1@gmail.com
                </a>
              </div>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="error-boundary__details">
                  <summary className="error-boundary__details-summary">
                    Error Details (Development)
                  </summary>
                  <div className="error-boundary__details-content">
                    <div className="error-boundary__error-info">
                      <h3>Error Message:</h3>
                      <pre>{this.state.error.message}</pre>
                    </div>
                    <div className="error-boundary__error-info">
                      <h3>Stack Trace:</h3>
                      <pre>{this.state.error.stack}</pre>
                    </div>
                    {this.state.errorInfo && (
                      <div className="error-boundary__error-info">
                        <h3>Component Stack:</h3>
                        <pre>{this.state.errorInfo.componentStack}</pre>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {/* Error ID */}
              <div className="error-boundary__error-id">
                <small>Error ID: {this.state.errorId}</small>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
