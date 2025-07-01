// src/routes/projects.js
import express from 'express';
import { body } from 'express-validator';
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';
import { auth, isAdmin } from '../middleware/auth.js';
import { validateRequest } from '../middleware/validators.js';

const router = express.Router();

// Public routes
router.get('/', getProjects);
router.get('/:id', getProject);

// Protected routes
router.use(auth);
router.use(isAdmin);

// Admin routes
router.post('/', authenticate, authorize('admin'), createProject);
router.put('/:id', authenticate, authorize('admin'), updateProject);
router.delete('/:id', authenticate, authorize('admin'), deleteProject);

router.post(
  '/',
  [
    body('title').trim().notEmpty().withMessage('Project title is required'),
    body('description')
      .trim()
      .notEmpty()
      .withMessage('Project description is required'),
    body('technologies').isArray().withMessage('Technologies must be an array'),
    body('category')
      .trim()
      .notEmpty()
      .withMessage('Project category is required'),
    body('status')
      .isIn(['completed', 'in-progress', 'planning'])
      .withMessage('Invalid project status'),
    body('startDate').isISO8601().withMessage('Invalid start date'),
    body('endDate').optional().isISO8601().withMessage('Invalid end date'),
    validateRequest,
  ],
  createProject
);

router.put(
  '/:id',
  [
    body('title')
      .optional()
      .trim()
      .notEmpty()
      .withMessage('Project title cannot be empty'),
    body('description')
      .optional()
      .trim()
      .notEmpty()
      .withMessage('Project description cannot be empty'),
    body('technologies')
      .optional()
      .isArray()
      .withMessage('Technologies must be an array'),
    body('category')
      .optional()
      .trim()
      .notEmpty()
      .withMessage('Project category cannot be empty'),
    body('status')
      .optional()
      .isIn(['completed', 'in-progress', 'planning'])
      .withMessage('Invalid project status'),
    body('startDate').optional().isISO8601().withMessage('Invalid start date'),
    body('endDate').optional().isISO8601().withMessage('Invalid end date'),
    validateRequest,
  ],
  updateProject
);

router.delete('/:id', deleteProject);

export default router;
