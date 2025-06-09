// portfolio-backend/src/controllers/contactController.js
import Contact from '../models/Contact.js';
import {
  sendContactNotification,
  sendAutoReply,
} from '../services/emailService.js';
import { logger } from '../utils/logger.js';
import { validateContactForm } from '../utils/validators.js';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, projectType, budget, timeline, message } =
      req.body;

    // Validate input
    const validation = validateContactForm(req.body);
    if (!validation.isValid) {
      return res.status(400).json({
        error: 'Validation failed',
        details: validation.errors,
      });
    }

    // Get client IP for tracking
    const clientIP = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Create contact record
    const contactData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject.trim(),
      message: message.trim(),
      projectType: projectType || null,
      budget: budget || null,
      timeline: timeline || null,
      ipAddress: clientIP,
      userAgent: userAgent,
      source: 'website_form',
      status: 'new',
    };

    const contact = new Contact(contactData);
    await contact.save();

    logger.info('New contact form submission', {
      contactId: contact._id,
      email: contact.email,
      subject: contact.subject,
      ip: clientIP,
    });

    // Send notification email to admin
    try {
      await sendContactNotification(contact);
      logger.info('Contact notification email sent', {
        contactId: contact._id,
      });
    } catch (emailError) {
      logger.error('Failed to send contact notification email', {
        contactId: contact._id,
        error: emailError.message,
      });
      // Don't fail the request if email fails
    }

    // Send auto-reply to user
    try {
      await sendAutoReply(contact);
      logger.info('Auto-reply email sent', { contactId: contact._id });
    } catch (emailError) {
      logger.error('Failed to send auto-reply email', {
        contactId: contact._id,
        error: emailError.message,
      });
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message:
        "Message sent successfully! I'll get back to you within 24 hours.",
      contactId: contact._id,
    });
  } catch (error) {
    logger.error('Contact form submission error', {
      error: error.message,
      stack: error.stack,
      body: req.body,
    });

    res.status(500).json({
      error: 'Failed to send message',
      message: 'Please try again later or contact me directly via email.',
    });
  }
};

// @desc    Get contact messages (admin only)
// @route   GET /api/admin/contacts
// @access  Private/Admin
const getContactMessages = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      status,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = req.query;

    // Build filter object
    const filter = {};

    if (status && status !== 'all') {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } },
      ];
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute query
    const [contacts, totalCount] = await Promise.all([
      Contact.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(parseInt(limit))
        .select('-__v'),
      Contact.countDocuments(filter),
    ]);

    // Calculate pagination info
    const totalPages = Math.ceil(totalCount / parseInt(limit));
    const hasNextPage = parseInt(page) < totalPages;
    const hasPrevPage = parseInt(page) > 1;

    res.json({
      success: true,
      data: {
        contacts,
        pagination: {
          currentPage: parseInt(page),
          totalPages,
          totalCount,
          hasNextPage,
          hasPrevPage,
          limit: parseInt(limit),
        },
      },
    });
  } catch (error) {
    logger.error('Get contact messages error', {
      error: error.message,
      stack: error.stack,
      query: req.query,
    });

    res.status(500).json({
      error: 'Failed to retrieve contact messages',
      message: 'Please try again later.',
    });
  }
};

// @desc    Get single contact message
// @route   GET /api/admin/contacts/:id
// @access  Private/Admin
const getContactMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id).select('-__v');

    if (!contact) {
      return res.status(404).json({
        error: 'Contact message not found',
      });
    }

    // Mark as read if it's new
    if (contact.status === 'new') {
      contact.status = 'read';
      contact.readAt = new Date();
      await contact.save();
    }

    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    logger.error('Get contact message error', {
      error: error.message,
      stack: error.stack,
      contactId: req.params.id,
    });

    res.status(500).json({
      error: 'Failed to retrieve contact message',
      message: 'Please try again later.',
    });
  }
};

// @desc    Update contact message status
// @route   PUT /api/admin/contacts/:id
// @access  Private/Admin
const updateContactMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const validStatuses = ['new', 'read', 'replied', 'archived'];

    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        error: 'Invalid status',
        message: `Status must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const updateData = {};
    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    if (status === 'replied' && !updateData.repliedAt) {
      updateData.repliedAt = new Date();
    }

    const contact = await Contact.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select('-__v');

    if (!contact) {
      return res.status(404).json({
        error: 'Contact message not found',
      });
    }
    logger.info('Contact message updated', {
      contactId: id,
      status: contact.status,
      updatedBy: req.user ? req.user.email : 'system',
    });

    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    logger.error('Update contact message error', {
      error: error.message,
      stack: error.stack,
      contactId: req.params.id,
    });

    res.status(500).json({
      error: 'Failed to update contact message',
      message: 'Please try again later.',
    });
  }
};

// @desc    Delete contact message
// @route   DELETE /api/admin/contacts/:id
// @access  Private/Admin
const deleteContactMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({
        error: 'Contact message not found',
      });
    }

    logger.info('Contact message deleted', {
      contactId: id,
      email: contact.email,
      deletedBy: req.user?.email,
    });

    res.json({
      success: true,
      message: 'Contact message deleted successfully',
    });
  } catch (error) {
    logger.error('Delete contact message error', {
      error: error.message,
      stack: error.stack,
      contactId: req.params.id,
    });

    res.status(500).json({
      error: 'Failed to delete contact message',
      message: 'Please try again later.',
    });
  }
};

// @desc    Get contact statistics
// @route   GET /api/admin/contacts/stats
// @access  Private/Admin
const getContactStats = async (req, res) => {
  try {
    const { period = '30d' } = req.query;

    // Calculate date range
    const now = new Date();
    let startDate;

    switch (period) {
      case '7d':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case '30d':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case '90d':
        startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        break;
      case '1y':
        startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    }

    const [
      totalContacts,
      newContacts,
      repliedContacts,
      contactsByStatus,
      contactsByProject,
      recentContacts,
      dailyStats,
    ] = await Promise.all([
      // Total contacts
      Contact.countDocuments(),

      // New contacts in period
      Contact.countDocuments({
        createdAt: { $gte: startDate },
      }),

      // Replied contacts in period
      Contact.countDocuments({
        status: 'replied',
        repliedAt: { $gte: startDate },
      }),

      // Contacts by status
      Contact.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),

      // Contacts by project type
      Contact.aggregate([
        { $match: { projectType: { $ne: null } } },
        { $group: { _id: '$projectType', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),

      // Recent contacts
      Contact.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select('name email subject createdAt status'),

      // Daily stats for period
      Contact.aggregate([
        {
          $match: {
            createdAt: { $gte: startDate },
          },
        },
        {
          $group: {
            _id: {
              $dateToString: {
                format: '%Y-%m-%d',
                date: '$createdAt',
              },
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ]),
    ]);

    // Calculate response rate
    const totalReplied = await Contact.countDocuments({ status: 'replied' });
    const totalReceived = await Contact.countDocuments();
    const responseRate =
      totalReceived > 0 ? ((totalReplied / totalReceived) * 100).toFixed(1) : 0;

    res.json({
      success: true,
      data: {
        summary: {
          totalContacts,
          newContacts,
          repliedContacts,
          responseRate: parseFloat(responseRate),
        },
        contactsByStatus: contactsByStatus.reduce((acc, item) => {
          acc[item._id] = item.count;
          return acc;
        }, {}),
        contactsByProject,
        recentContacts,
        dailyStats,
        period,
      },
    });
  } catch (error) {
    logger.error('Get contact stats error', {
      error: error.message,
      stack: error.stack,
    });

    res.status(500).json({
      error: 'Failed to retrieve contact statistics',
      message: 'Please try again later.',
    });
  }
};

export {
  submitContactForm,
  getContactMessages,
  getContactMessage,
  updateContactMessage,
  deleteContactMessage,
  getContactStats,
};
