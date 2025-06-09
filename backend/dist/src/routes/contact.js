// src/routes/contact.js
import express from 'express';
import { body, validationResult } from 'express-validator';
import { submitContactForm } from '../controllers/contactController.js';

const router = express.Router();

// Middleware to validate express-validator results
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }
  next();
};

router.post(
  '/',
  [
    // Input validation
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Name is required')
      .isLength({ min: 2 })
      .withMessage('Name must be at least 2 characters long'),
    body('email').trim().isEmail().withMessage('Please provide a valid email'),
    body('subject')
      .trim()
      .notEmpty()
      .withMessage('Subject is required')
      .isLength({ min: 5 })
      .withMessage('Subject must be at least 5 characters long'),
    body('message')
      .trim()
      .notEmpty()
      .withMessage('Message is required')
      .isLength({ min: 10 })
      .withMessage('Message must be at least 10 characters long'),
    body('projectType')
      .optional({ nullable: true })
      .isIn([
        'Web Application',
        'Mobile App',
        'E-commerce Site',
        'Portfolio/Blog',
        'API Development',
        'Database Design',
        'Consulting',
        'Other',
      ])
      .withMessage('Invalid project type'),
    body('budget')
      .optional({ nullable: true })
      .isIn([
        'Under $5,000',
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000+',
        "Let's discuss",
      ])
      .withMessage('Invalid budget range'),
    body('timeline')
      .optional({ nullable: true })
      .isIn([
        'ASAP',
        '1-2 weeks',
        '1 month',
        '2-3 months',
        '3+ months',
        'Flexible',
      ])
      .withMessage('Invalid timeline'),
  ],
  validateRequest,
  submitContactForm
);

export default router;
