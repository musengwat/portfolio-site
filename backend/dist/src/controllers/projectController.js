// src/controllers/projectController.js
import Project from '../models/Project.js';
import { logger } from '../utils/logger.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res) => {
  try {
    const { category, technology, status, featured } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (status) filter.status = status;
    if (featured) filter.featured = featured === 'true';
    if (technology) {
      filter.technologies = { 
        $regex: new RegExp(technology, 'i') 
      };
    }

    const projects = await Project.find(filter).sort({ startDate: -1 });

    res.json({
      status: 'success',
      data: projects
    });
  } catch (error) {
    logger.error('Error fetching projects:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch projects'
    });
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        status: 'error',
        message: 'Project not found'
      });
    }

    res.json({
      status: 'success',
      data: project
    });
  } catch (error) {
    logger.error('Error fetching project:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch project'
    });
  }
};

// @desc    Create new project
// @route   POST /api/projects
// @access  Private/Admin
export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    logger.info('New project created:', { projectId: project._id });

    res.status(201).json({
      status: 'success',
      data: project
    });
  } catch (error) {
    logger.error('Error creating project:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create project'
    });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private/Admin
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        status: 'error',
        message: 'Project not found'
      });
    }

    logger.info('Project updated:', { projectId: project._id });

    res.json({
      status: 'success',
      data: project
    });
  } catch (error) {
    logger.error('Error updating project:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update project'
    });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        status: 'error',
        message: 'Project not found'
      });
    }

    logger.info('Project deleted:', { projectId: req.params.id });

    res.json({
      status: 'success',
      message: 'Project deleted successfully'
    });
  } catch (error) {
    logger.error('Error deleting project:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete project'
    });
  }
};
