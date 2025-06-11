// portfolio-frontend/src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://thomasmusengwa.me:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      headers: { ...this.defaultHeaders, ...options.headers },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);

      // Handle different response types
      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        throw new ApiError(
          data.message || `HTTP error! status: ${response.status}`,
          response.status,
          data
        );
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      // Handle network errors
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new ApiError('Network error - please check your connection', 0);
      }

      throw new ApiError(error.message || 'An unexpected error occurred', 0);
    }
  }

  // HTTP methods
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;

    return this.request(url, {
      method: 'GET',
    });
  }

  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async patch(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }

  // File upload method
  async uploadFile(endpoint, file, additionalData = {}) {
    const formData = new FormData();
    formData.append('file', file);

    // Add additional form data
    Object.keys(additionalData).forEach(key => {
      formData.append(key, additionalData[key]);
    });

    return this.request(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        // Don't set Content-Type for FormData - browser will set it with boundary
      },
    });
  }

  // Portfolio API methods
  async getProjects(filters = {}) {
    return this.get('/projects', filters);
  }

  async getProject(id) {
    return this.get(`/projects/${id}`);
  }

  // Contact API methods
  async sendContactMessage(contactData) {
    return this.post('/contact', contactData);
  }

  async getContactMessages() {
    return this.get('/admin/messages');
  }

  // Testimonials API methods
  async getTestimonials() {
    return this.get('/testimonials');
  }

  async submitTestimonial(testimonialData) {
    return this.post('/testimonials', testimonialData);
  }

  // Resume API methods
  async downloadResume() {
    return this.request('/resume/download', {
      method: 'GET',
      headers: {
        Accept: 'application/pdf',
      },
    });
  }

  async trackResumeDownload() {
    return this.post('/resume/track-download');
  }

  // Analytics API methods
  async trackEvent(eventData) {
    return this.post('/analytics/track', eventData);
  }

  async getAnalytics(dateRange = {}) {
    return this.get('/admin/analytics', dateRange);
  }

  // Authentication API methods
  async login(credentials) {
    const response = await this.post('/auth/login', credentials);

    if (response.token) {
      localStorage.setItem('auth_token', response.token);
    }

    return response;
  }

  async logout() {
    localStorage.removeItem('auth_token');
    return this.post('/auth/logout');
  }

  async verifyToken() {
    return this.get('/auth/verify');
  }

  // Admin API methods
  async getAdminStats() {
    return this.get('/admin/stats');
  }

  async updateProject(id, projectData) {
    return this.put(`/admin/projects/${id}`, projectData);
  }

  async deleteProject(id) {
    return this.delete(`/admin/projects/${id}`);
  }

  async deleteContactMessage(id) {
    return this.delete(`/admin/messages/${id}`);
  }

  // Utility methods
  setAuthToken(token) {
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  getAuthToken() {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated() {
    return !!this.getAuthToken();
  }
}

// Custom error class for API errors
class ApiError extends Error {
  constructor(message, status = 0, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// Create and export singleton instance
export const api = new ApiService();
export { ApiError };
export default api;
