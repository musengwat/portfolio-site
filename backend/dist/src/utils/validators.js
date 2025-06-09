// src/utils/validators.js
import { validationResult } from 'express-validator';

export const validateContactForm = (data) => {
  const errors = [];

  // Required fields
  if (
    !data.name ||
    typeof data.name !== 'string' ||
    data.name.trim().length < 2
  ) {
    errors.push({
      field: 'name',
      message: 'Name must be at least 2 characters long',
    });
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please provide a valid email address',
    });
  }

  if (
    !data.subject ||
    typeof data.subject !== 'string' ||
    data.subject.trim().length < 5
  ) {
    errors.push({
      field: 'subject',
      message: 'Subject must be at least 5 characters long',
    });
  }

  if (
    !data.message ||
    typeof data.message !== 'string' ||
    data.message.trim().length < 10
  ) {
    errors.push({
      field: 'message',
      message: 'Message must be at least 10 characters long',
    });
  }

  // Optional fields validation
  if (data.projectType !== undefined && data.projectType !== null) {
    const validProjectTypes = [
      'Web Application',
      'Mobile App',
      'E-commerce Site',
      'Portfolio/Blog',
      'API Development',
      'Database Design',
      'Consulting',
      'Other',
    ];
    if (!validProjectTypes.includes(data.projectType)) {
      errors.push({ field: 'projectType', message: 'Invalid project type' });
    }
  }

  if (data.budget !== undefined && data.budget !== null) {
    const validBudgets = [
      'Under $5,000',
      '$5,000 - $10,000',
      '$10,000 - $25,000',
      '$25,000 - $50,000',
      '$50,000+',
      "Let's discuss",
    ];
    if (!validBudgets.includes(data.budget)) {
      errors.push({ field: 'budget', message: 'Invalid budget range' });
    }
  }

  if (data.timeline !== undefined && data.timeline !== null) {
    const validTimelines = [
      'ASAP',
      '1-2 weeks',
      '1 month',
      '2-3 months',
      '3+ months',
      'Flexible',
    ];
    if (!validTimelines.includes(data.timeline)) {
      errors.push({ field: 'timeline', message: 'Invalid timeline' });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateMongoId = (id) => {
  const ObjectId = /^[0-9a-fA-F]{24}$/;
  return ObjectId.test(id);
};

export const validatePaginationParams = (page, limit) => {
  const pageNum = parseInt(page, 10) || 1;
  const limitNum = parseInt(limit, 10) || 10;
  return {
    page: Math.max(1, pageNum),
    limit: Math.min(100, Math.max(1, limitNum)),
  };
};
