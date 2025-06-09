// portfolio-backend/src/services/emailService.js
import nodemailer from 'nodemailer';
import { logger } from '../utils/logger.js';

// Email configuration
const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport(emailConfig);
};

// Email templates
const emailTemplates = {
  contactNotification: (contact) => ({
    subject: `🔔 New Contact Form Submission - ${contact.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb, #c026d3); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin: 15px 0; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #2563eb; }
          .field-label { font-weight: 600; color: #374151; margin-bottom: 5px; }
          .field-value { color: #6b7280; }
          .message-content { background: white; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb; margin: 15px 0; }
          .meta-info { background: #f3f4f6; padding: 15px; border-radius: 6px; font-size: 14px; color: #6b7280; }
          .button { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
          .priority-high { border-left-color: #dc2626; }
          .priority-urgent { border-left-color: #dc2626; background: #fef2f2; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">You have received a new message through your portfolio website</p>
          </div>
          
          <div class="content">
            <div class="field ${
              contact.priority === 'high' || contact.priority === 'urgent'
                ? 'priority-' + contact.priority
                : ''
            }">
              <div class="field-label">From</div>
              <div class="field-value"><strong>${contact.name}</strong> (${
                contact.email
              })</div>
            </div>
            
            <div class="field">
              <div class="field-label">Subject</div>
              <div class="field-value">${contact.subject}</div>
            </div>
            
            ${
              contact.projectType
                ? `
            <div class="field">
              <div class="field-label">Project Type</div>
              <div class="field-value">${contact.projectType}</div>
            </div>
            `
                : ''
            }
            
            ${
              contact.budget
                ? `
            <div class="field">
              <div class="field-label">Budget</div>
              <div class="field-value">${contact.budget}</div>
            </div>
            `
                : ''
            }
            
            ${
              contact.timeline
                ? `
            <div class="field">
              <div class="field-label">Timeline</div>
              <div class="field-value">${contact.timeline}</div>
            </div>
            `
                : ''
            }
            
            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-content">${contact.message.replace(
                /\n/g,
                '<br>'
              )}</div>
            </div>
            
            <div class="meta-info">
              <p><strong>Submitted:</strong> ${new Date(
                contact.createdAt
              ).toLocaleString()}</p>
              <p><strong>IP Address:</strong> ${
                contact.ipAddress || 'Unknown'
              }</p>
              <p><strong>User Agent:</strong> ${
                contact.userAgent || 'Unknown'
              }</p>
              <p><strong>Contact ID:</strong> ${contact._id}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="${
                process.env.ADMIN_URL || 'https://johndoe-portfolio.com/admin'
              }/contacts/${contact._id}" class="button">
                View in Admin Panel
              </a>
              <a href="mailto:${contact.email}?subject=Re: ${encodeURIComponent(
                contact.subject
              )}" class="button">
                Reply to ${contact.name}
              </a>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  autoReply: (contact) => ({
    subject: `Thank you for contacting me, ${contact.name}!`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Thank you for your message</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb, #c026d3); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
          .message-summary { background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #10b981; margin: 20px 0; }
          .response-time { background: #ecfdf5; padding: 15px; border-radius: 6px; text-align: center; margin: 20px 0; }
          .contact-info { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
          .social-links { text-align: center; margin: 20px 0; }
          .social-links a { display: inline-block; margin: 0 10px; color: #2563eb; text-decoration: none; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">👋 Thank You!</h1>
            <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">I've received your message</p>
          </div>
          
          <div class="content">
            <p>Hi ${contact.name},</p>
            
            <p>Thank you for reaching out through my portfolio website! I've successfully received your message and wanted to confirm that it's safely in my inbox.</p>
            
            <div class="message-summary">
              <h3 style="margin-top: 0; color: #059669;">📝 Your Message Summary</h3>
              <p><strong>Subject:</strong> ${contact.subject}</p>
              ${
                contact.projectType
                  ? `<p><strong>Project Type:</strong> ${contact.projectType}</p>`
                  : ''
              }
              ${
                contact.timeline
                  ? `<p><strong>Timeline:</strong> ${contact.timeline}</p>`
                  : ''
              }
              <p><strong>Submitted:</strong> ${new Date(
                contact.createdAt
              ).toLocaleString()}</p>
            </div>
            
            <div class="response-time">
              <h3 style="margin-top: 0; color: #059669;">⏰ What's Next?</h3>
              <p style="margin-bottom: 0;"><strong>I typically respond within 24 hours during business days.</strong></p>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280;">You'll hear from me soon with a detailed response!</p>
            </div>
            
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Check out my latest projects on my <a href="${
                process.env.FRONTEND_URL || 'https://johndoe-portfolio.com'
              }/#portfolio" style="color: #2563eb;">portfolio</a></li>
              <li>Connect with me on social media (links below)</li>
              <li>Review my <a href="${
                process.env.FRONTEND_URL || 'https://johndoe-portfolio.com'
              }/assets/resume/john-doe-resume.pdf" style="color: #2563eb;">resume</a> for more details about my experience</li>
            </ul>
            
            <div class="contact-info">
              <h3 style="margin-top: 0; color: #374151;">📞 Other Ways to Reach Me</h3>
              <p><strong>Email:</strong> ThomasMusengwa1@gmail.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Location:</strong> San Francisco, CA</p>
            </div>
            
            <div class="social-links">
              <a href="https://linkedin.com/in/johndoe" target="_blank">LinkedIn</a>
              <a href="https://github.com/johndoe" target="_blank">GitHub</a>
              <a href="https://twitter.com/johndoe" target="_blank">Twitter</a>
            </div>
            
            <p>Looking forward to discussing your project with you!</p>
            
            <p>Best regards,<br>
            <strong>Thomas Musengwa</strong><br>
            Full Stack Developer</p>
            
            <div class="footer">
              <p>This is an automated response to confirm receipt of your message.<br>
              Please do not reply to this email - I'll be in touch personally soon!</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  }),
};

// Send contact notification to admin
export const sendContactNotification = async (contact) => {
  try {
    const transporter = createTransporter();
    const template = emailTemplates.contactNotification(contact);

    const mailOptions = {
      from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: template.subject,
      html: template.html,
      priority: contact.priority === 'urgent' ? 'high' : 'normal',
    };

    const result = await transporter.sendMail(mailOptions);

    logger.info('Contact notification email sent', {
      contactId: contact._id,
      messageId: result.messageId,
      to: mailOptions.to,
    });

    return result;
  } catch (error) {
    logger.error('Failed to send contact notification email', {
      error: error.message,
      stack: error.stack,
      contactId: contact._id,
    });
    throw error;
  }
};

// Send auto-reply to contact
export const sendAutoReply = async (contact) => {
  try {
    const transporter = createTransporter();
    const template = emailTemplates.autoReply(contact);

    const mailOptions = {
      from: `"${process.env.ADMIN_NAME || 'John Doe'}" <${process.env.EMAIL_USER}>`,
      to: contact.email,
      subject: template.subject,
      html: template.html,
    };

    const result = await transporter.sendMail(mailOptions);

    logger.info('Auto-reply email sent', {
      contactId: contact._id,
      messageId: result.messageId,
      to: mailOptions.to,
    });

    return result;
  } catch (error) {
    logger.error('Failed to send auto-reply email', {
      error: error.message,
      stack: error.stack,
      contactId: contact._id,
    });
    throw error;
  }
};

// Send custom email response
const sendCustomResponse = async (contact, responseData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"Thomas Musengwa" <${process.env.EMAIL_USER}>`,
      to: contact.email,
      subject: responseData.subject || `Re: ${contact.subject}`,
      html: responseData.html || responseData.message,
      text: responseData.text,
      replyTo: process.env.EMAIL_USER,
      inReplyTo: contact._id.toString(),
      references: contact._id.toString(),
    };

    const result = await transporter.sendMail(mailOptions);

    logger.info('Custom response email sent', {
      contactId: contact._id,
      messageId: result.messageId,
      to: contact.email,
      subject: mailOptions.subject,
    });

    return result;
  } catch (error) {
    logger.error('Failed to send custom response email', {
      contactId: contact._id,
      error: error.message,
    });
    throw error;
  }
};

// Test email configuration
const testEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();

    logger.info('Email configuration test successful');
    return { success: true, message: 'Email configuration is valid' };
  } catch (error) {
    logger.error('Email configuration test failed', { error: error.message });
    return { success: false, error: error.message };
  }
};

// Send test email
const sendTestEmail = async (testEmail) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"Portfolio Test" <${process.env.EMAIL_USER}>`,
      to: testEmail,
      subject: '🧪 Portfolio Email Test',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb;">Email Configuration Test</h2>
          <p>This is a test email to verify that your portfolio email configuration is working correctly.</p>
          <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>From:</strong> ${process.env.EMAIL_USER}</p>
          <p style="color: #059669;"><strong>✅ If you received this email, your configuration is working!</strong></p>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);

    logger.info('Test email sent', {
      messageId: result.messageId,
      to: testEmail,
    });

    return result;
  } catch (error) {
    logger.error('Failed to send test email', {
      error: error.message,
      to: testEmail,
    });
    throw error;
  }
};

export {
  sendContactNotification,
  sendAutoReply,
  sendCustomResponse,
  testEmailConfig,
  sendTestEmail,
};
