// src/middleware/auth.js
import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger.js';

export const auth = (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'No authentication token, authorization denied.',
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    logger.error('Auth middleware error:', err);
    res.status(401).json({
      status: 'fail',
      message: 'Token is not valid',
    });
  }
};

export const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({
      status: 'fail',
      message: 'Admin access required',
    });
  }
  next();
};
