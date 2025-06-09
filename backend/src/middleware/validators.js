// src/middleware/validators.js
import { validationResult } from 'express-validator';
import { logger } from '../utils/logger.js';

// Middleware to validate express-validator results
export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.debug('Validation errors:', errors.array());
    return res.status(400).json({
      status: 'error',
      errors: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }
  next();
};
