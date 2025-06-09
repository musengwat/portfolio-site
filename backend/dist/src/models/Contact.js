// portfolio-backend/src/models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      minlength: [5, 'Subject must be at least 5 characters long'],
      maxlength: [200, 'Subject cannot exceed 200 characters'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters long'],
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    projectType: {
      type: String,
      enum: [
        'Web Application',
        'Mobile App',
        'E-commerce Site',
        'Portfolio/Blog',
        'API Development',
        'Database Design',
        'Consulting',
        'Other',
        null,
      ],
      default: null,
    },
    budget: {
      type: String,
      enum: [
        'Under $5,000',
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000+',
        "Let's discuss",
        null,
      ],
      default: null,
    },
    timeline: {
      type: String,
      enum: [
        'ASAP',
        '1-2 weeks',
        '1 month',
        '2-3 months',
        '3+ months',
        'Flexible',
        null,
      ],
      default: null,
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'archived'],
      default: 'new',
      index: true,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
      default: 'medium',
    },
    source: {
      type: String,
      enum: ['website_form', 'email', 'social_media', 'referral', 'other'],
      default: 'website_form',
    },
    ipAddress: {
      type: String,
      required: false,
    },
    userAgent: {
      type: String,
      required: false,
    },
    referrer: {
      type: String,
      required: false,
    },
    utmSource: {
      type: String,
      required: false,
    },
    utmMedium: {
      type: String,
      required: false,
    },
    utmCampaign: {
      type: String,
      required: false,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    notes: {
      type: String,
      maxlength: [1000, 'Notes cannot exceed 1000 characters'],
    },
    readAt: {
      type: Date,
      default: null,
    },
    repliedAt: {
      type: Date,
      default: null,
    },
    isSpam: {
      type: Boolean,
      default: false,
      index: true,
    },
    attachments: [
      {
        filename: String,
        originalName: String,
        mimeType: String,
        size: Number,
        path: String,
        uploadedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    responseHistory: [
      {
        respondedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        responseMethod: {
          type: String,
          enum: ['email', 'phone', 'meeting', 'other'],
        },
        responseContent: String,
        respondedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    followUpReminder: {
      type: Date,
      default: null,
    },
    isArchived: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for better query performance
contactSchema.index({ createdAt: -1 });
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ projectType: 1 });
contactSchema.index({ isSpam: 1, isArchived: 1 });

// Text index for search functionality
contactSchema.index({
  name: 'text',
  email: 'text',
  subject: 'text',
  message: 'text',
});

// Virtual for time since creation
contactSchema.virtual('timeSinceCreated').get(function () {
  const now = new Date();
  const diffTime = Math.abs(now - this.createdAt);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
});

// Virtual for response time (if replied)
contactSchema.virtual('responseTime').get(function () {
  if (!this.repliedAt) return null;

  const diffTime = Math.abs(this.repliedAt - this.createdAt);
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

  if (diffHours < 24) return `${diffHours} hours`;
  const diffDays = Math.ceil(diffHours / 24);
  return `${diffDays} days`;
});

// Pre-save middleware
contactSchema.pre('save', function (next) {
  // Auto-set priority based on project type and budget
  if (this.isNew) {
    if (this.budget === '$50,000+' || this.timeline === 'ASAP') {
      this.priority = 'high';
    } else if (
      this.budget === '$25,000 - $50,000' ||
      this.projectType === 'Web Application'
    ) {
      this.priority = 'medium';
    }

    // Auto-tag based on content
    const tags = [];
    if (this.message.toLowerCase().includes('urgent')) tags.push('urgent');
    if (this.message.toLowerCase().includes('portfolio'))
      tags.push('portfolio');
    if (this.message.toLowerCase().includes('ecommerce'))
      tags.push('ecommerce');
    if (this.message.toLowerCase().includes('mobile')) tags.push('mobile');
    this.tags = [...new Set([...this.tags, ...tags])]; // Remove duplicates
  }

  next();
});

// Static methods
contactSchema.statics.getRecentContacts = function (limit = 10) {
  return this.find({ isArchived: false })
    .sort({ createdAt: -1 })
    .limit(limit)
    .select('name email subject createdAt status priority');
};

contactSchema.statics.getContactsByStatus = function (status) {
  return this.find({ status, isArchived: false }).sort({ createdAt: -1 });
};

contactSchema.statics.searchContacts = function (searchTerm) {
  return this.find(
    {
      $text: { $search: searchTerm },
      isArchived: false,
    },
    {
      score: { $meta: 'textScore' },
    }
  ).sort({
    score: { $meta: 'textScore' },
  });
};

contactSchema.statics.getContactStats = function (startDate, endDate) {
  const matchStage = {};
  if (startDate) matchStage.createdAt = { $gte: startDate };
  if (endDate)
    matchStage.createdAt = { ...matchStage.createdAt, $lte: endDate };

  return this.aggregate([
    { $match: matchStage },
    {
      $group: {
        _id: null,
        totalContacts: { $sum: 1 },
        newContacts: {
          $sum: { $cond: [{ $eq: ['$status', 'new'] }, 1, 0] },
        },
        readContacts: {
          $sum: { $cond: [{ $eq: ['$status', 'read'] }, 1, 0] },
        },
        repliedContacts: {
          $sum: { $cond: [{ $eq: ['$status', 'replied'] }, 1, 0] },
        },
        avgResponseTime: {
          $avg: {
            $cond: [
              { $ne: ['$repliedAt', null] },
              { $subtract: ['$repliedAt', '$createdAt'] },
              null,
            ],
          },
        },
      },
    },
  ]);
};

// Instance methods
contactSchema.methods.markAsRead = function () {
  this.status = 'read';
  this.readAt = new Date();
  return this.save();
};

contactSchema.methods.markAsReplied = function (
  responseMethod = 'email',
  responseContent = ''
) {
  this.status = 'replied';
  this.repliedAt = new Date();

  if (responseContent) {
    this.responseHistory.push({
      responseMethod,
      responseContent,
      respondedAt: new Date(),
    });
  }

  return this.save();
};

contactSchema.methods.addTag = function (tag) {
  if (!this.tags.includes(tag)) {
    this.tags.push(tag);
    return this.save();
  }
  return this;
};

contactSchema.methods.removeTag = function (tag) {
  this.tags = this.tags.filter((t) => t !== tag);
  return this.save();
};

contactSchema.methods.archive = function () {
  this.isArchived = true;
  this.status = 'archived';
  return this.save();
};

contactSchema.methods.unarchive = function () {
  this.isArchived = false;
  if (this.status === 'archived') {
    this.status = 'read';
  }
  return this.save();
};

// Export model
export default mongoose.model('Contact', contactSchema);
