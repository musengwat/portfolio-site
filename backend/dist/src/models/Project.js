// src/models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      unique: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    technologies: {
      type: [String],
      required: [true, 'At least one technology must be specified'],
      validate: [(val) => val.length > 0, 'Technologies cannot be empty'],
    },
    category: {
      type: String,
      required: [true, 'Project category is required'],
      enum: ['frontend', 'backend', 'fullstack', 'mobile', 'other'],
      index: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['completed', 'in-progress', 'planning'],
      default: 'planning',
      index: true,
    },
    images: [
      {
        url: String,
        alt: String,
        order: Number,
      },
    ],
    liveUrl: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return !v || /^https?:\/\/.+/.test(v);
        },
        message: 'Invalid URL format',
      },
    },
    githubUrl: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return !v || /^https?:\/\/(github\.com).+/.test(v);
        },
        message: 'Invalid GitHub URL format',
      },
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: Date,
    client: String,
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    challenges: [String],
    features: [String],
    metrics: {
      users: String,
      performance: String,
      impact: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual field for duration
projectSchema.virtual('duration').get(function () {
  if (!this.startDate) return null;
  const end = this.endDate || new Date();
  const months = (
    (end - this.startDate) /
    (1000 * 60 * 60 * 24 * 30.44)
  ).toFixed(1);
  return parseFloat(months);
});

// Static methods
projectSchema.statics.getFeaturedProjects = function () {
  return this.find({ featured: true }).sort('-createdAt');
};

projectSchema.statics.getProjectsByCategory = function (category) {
  return this.find({ category }).sort('-startDate');
};

projectSchema.statics.getProjectsByTechnology = function (technology) {
  return this.find({
    technologies: { $regex: new RegExp(technology, 'i') },
  }).sort('-startDate');
};

// Text index for search
projectSchema.index({
  title: 'text',
  description: 'text',
  technologies: 'text',
});

export default mongoose.model('Project', projectSchema);
