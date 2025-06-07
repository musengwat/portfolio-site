// portfolio-frontend/src/services/analytics.js
import { api } from "./api";

class AnalyticsService {
  constructor() {
    this.sessionStartTime = Date.now();
    this.pageViews = {};
    this.events = [];
    this.isInitialized = false;
  }

  // Initialize analytics
  init() {
    if (this.isInitialized) return;

    this.isInitialized = true;
    this.trackSessionStart();
    this.setupEventListeners();

    // Initialize Google Analytics if available
    if (typeof window.gtag === "function") {
      window.gtag("config", "GA_MEASUREMENT_ID");
    }
  }

  // Track page view
  trackPageView(page, title = "") {
    const timestamp = Date.now();
    const pageData = {
      page,
      title,
      timestamp,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };

    this.pageViews[page] = pageData;

    // Send to Google Analytics
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: title,
        page_location: window.location.href,
        page_path: `/${page}`,
      });
    }

    // Send to backend
    this.sendToBackend("pageview", pageData);
  }

  // Track custom event
  trackEvent(eventName, eventData = {}) {
    const event = {
      name: eventName,
      data: eventData,
      timestamp: Date.now(),
      page: window.location.pathname,
    };

    this.events.push(event);

    // Send to Google Analytics
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventData);
    }

    // Send to backend
    this.sendToBackend("event", event);
  }

  // Track scroll depth
  trackScrollDepth() {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    // Track at 25%, 50%, 75%, and 100%
    const milestones = [25, 50, 75, 100];
    const milestone = milestones.find(
      (m) => scrollPercent >= m && !this.hasTrackedScrollDepth(m)
    );

    if (milestone) {
      this.trackEvent("scroll_depth", {
        depth: milestone,
        page: window.location.pathname,
      });
      this.markScrollDepthTracked(milestone);
    }
  }

  // Track session duration
  trackSessionEnd() {
    const sessionDuration = Date.now() - this.sessionStartTime;
    this.trackEvent("session_end", {
      duration: sessionDuration,
      pageViews: Object.keys(this.pageViews).length,
      events: this.events.length,
    });
  }

  // Track clicks on important elements
  trackClick(elementType, elementId = "", additionalData = {}) {
    this.trackEvent("click", {
      elementType,
      elementId,
      ...additionalData,
    });
  }

  // Track form submissions
  trackFormSubmission(formType, success = true, errorMessage = "") {
    this.trackEvent("form_submission", {
      formType,
      success,
      errorMessage,
    });
  }

  // Track file downloads
  trackDownload(fileName, fileType) {
    this.trackEvent("download", {
      fileName,
      fileType,
    });
  }

  // Track external link clicks
  trackExternalLink(url, linkText = "") {
    this.trackEvent("external_link", {
      url,
      linkText,
    });
  }

  // Private methods
  trackSessionStart() {
    this.trackEvent("session_start", {
      timestamp: this.sessionStartTime,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      screen: {
        width: window.screen.width,
        height: window.screen.height,
      },
    });
  }

  setupEventListeners() {
    // Track scroll depth
    let scrollTimeout;
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.trackScrollDepth();
      }, 100);
    });

    // Track session end
    window.addEventListener("beforeunload", () => {
      this.trackSessionEnd();
    });

    // Track visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.trackEvent("page_hidden");
      } else {
        this.trackEvent("page_visible");
      }
    });

    // Track external links
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link && link.hostname !== window.location.hostname) {
        this.trackExternalLink(link.href, link.textContent);
      }
    });
  }

  hasTrackedScrollDepth(milestone) {
    return this.events.some(
      (event) =>
        event.name === "scroll_depth" &&
        event.data.depth === milestone &&
        event.page === window.location.pathname
    );
  }

  markScrollDepthTracked(milestone) {
    // This is handled by adding the event to the events array
  }

  async sendToBackend(type, data) {
    try {
      await api.post("/analytics/track", {
        type,
        data,
        sessionId: this.getSessionId(),
        timestamp: Date.now(),
      });
    } catch (error) {
      console.warn("Failed to send analytics data:", error);
    }
  }

  getSessionId() {
    let sessionId = sessionStorage.getItem("analytics_session_id");
    if (!sessionId) {
      sessionId =
        "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem("analytics_session_id", sessionId);
    }
    return sessionId;
  }

  // Get analytics summary
  getSummary() {
    return {
      sessionDuration: Date.now() - this.sessionStartTime,
      pageViews: Object.keys(this.pageViews).length,
      events: this.events.length,
      pages: Object.keys(this.pageViews),
      lastActivity:
        this.events.length > 0
          ? this.events[this.events.length - 1].timestamp
          : this.sessionStartTime,
    };
  }
}

// Create and export singleton instance
const analytics = new AnalyticsService();

// Export named functions for easier usage
export const trackPageView = (page, title) =>
  analytics.trackPageView(page, title);
export const trackEvent = (eventName, eventData) =>
  analytics.trackEvent(eventName, eventData);
export const trackClick = (elementType, elementId, additionalData) =>
  analytics.trackClick(elementType, elementId, additionalData);
export const trackFormSubmission = (formType, success, errorMessage) =>
  analytics.trackFormSubmission(formType, success, errorMessage);
export const trackDownload = (fileName, fileType) =>
  analytics.trackDownload(fileName, fileType);
export const trackExternalLink = (url, linkText) =>
  analytics.trackExternalLink(url, linkText);

export default analytics;
