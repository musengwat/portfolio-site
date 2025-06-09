// portfolio-frontend/src/data/projects.js
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    shortDescription: 'Full-stack e-commerce platform with payment integration',
    image: '/assets/images/projects/ecommerce-platform.jpg',
    images: [
      '/assets/images/projects/ecommerce-platform.jpg',
      '/assets/images/projects/ecommerce-detail-1.jpg',
      '/assets/images/projects/ecommerce-detail-2.jpg',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Material-UI'],
    category: 'fullstack',
    featured: true,
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/musengwat/ecommerce-platform',
    status: 'completed',
    startDate: '2024-01-15',
    endDate: '2024-03-20',
    client: 'Personal Project',
    challenges: [
      'Implementing secure payment processing with Stripe',
      'Optimizing database queries for large product catalogs',
      'Creating responsive design for mobile commerce',
    ],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing',
      'Order tracking and history',
      'Admin dashboard for inventory management',
      'Email notifications',
      'Responsive design',
    ],
    metrics: {
      users: '500+',
      pageSpeed: '95/100',
      uptime: '99.9%',
    },
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
    shortDescription: 'Collaborative task management with real-time updates',
    image: '/assets/images/projects/task-management.jpg',
    images: [
      '/assets/images/projects/task-management.jpg',
      '/assets/images/projects/task-detail-1.jpg',
      '/assets/images/projects/task-detail-2.jpg',
    ],
    technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis'],
    category: 'frontend',
    featured: true,
    liveUrl: 'https://taskflow-demo.com',
    githubUrl: 'https://github.com/musengwat/taskflow',
    status: 'completed',
    startDate: '2023-10-01',
    endDate: '2023-12-15',
    client: 'Startup Company',
    challenges: [
      'Implementing real-time collaboration features',
      'Managing complex state with TypeScript',
      'Optimizing performance for large datasets',
    ],
    features: [
      'Real-time collaboration',
      'Drag-and-drop interface',
      'Team management',
      'File attachments',
      'Time tracking',
      'Gantt charts',
      'Mobile responsive',
    ],
    metrics: {
      users: '1000+',
      performance: '98/100',
      satisfaction: '4.8/5',
    },
  },
  {
    id: 3,
    title: 'Weather Analytics Dashboard',
    description:
      'A comprehensive weather analytics dashboard that visualizes climate data, trends, and forecasts using interactive charts and maps.',
    shortDescription: 'Interactive weather data visualization platform',
    image: '/assets/images/projects/weather-dashboard.jpg',
    images: [
      '/assets/images/projects/weather-dashboard.jpg',
      '/assets/images/projects/weather-detail-1.jpg',
    ],
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    category: 'data',
    featured: false,
    liveUrl: 'https://weather-analytics.com',
    githubUrl: 'https://github.com/musengwat/weather-analytics',
    status: 'completed',
    startDate: '2023-07-01',
    endDate: '2023-09-30',
    client: 'Research Institute',
    challenges: [
      'Processing large datasets efficiently',
      'Creating interactive data visualizations',
      'Integrating multiple weather APIs',
    ],
    features: [
      'Interactive maps',
      'Real-time weather updates',
      'Historical data analysis',
      'Custom alerts',
      'Data export functionality',
      'Multi-location tracking',
    ],
    metrics: {
      dataPoints: '10M+',
      accuracy: '99.2%',
      response: '<200ms',
    },
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with React and Node.js, featuring animations, contact forms, and admin dashboard.',
    shortDescription: 'Modern portfolio with admin dashboard',
    image: '/assets/images/projects/portfolio-website.jpg',
    images: ['/assets/images/projects/portfolio-website.jpg'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Framer Motion', 'EmailJS'],
    category: 'frontend',
    featured: false,
    liveUrl: 'https://thomasmusengwa.me',
    githubUrl: 'https://github.com/musengwat/portfolio',
    status: 'completed',
    startDate: '2024-02-01',
    endDate: '2024-02-28',
    client: 'Personal Project',
    challenges: [
      'Creating smooth animations',
      'Optimizing for performance',
      'Implementing contact form',
    ],
    features: [
      'Responsive design',
      'Smooth animations',
      'Contact form',
      'Project showcase',
      'Blog integration',
      'SEO optimized',
    ],
    metrics: {
      performance: '100/100',
      accessibility: '100/100',
      seo: '100/100',
    },
  },
  {
    id: 5,
    title: 'API Gateway Service',
    description:
      'A robust API gateway service built with Node.js and Express, featuring rate limiting, authentication, logging, and microservices integration.',
    shortDescription: 'Microservices API gateway with advanced features',
    image: '/assets/images/projects/api-gateway.jpg',
    images: ['/assets/images/projects/api-gateway.jpg'],
    technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes', 'JWT'],
    category: 'backend',
    featured: true,
    liveUrl: null,
    githubUrl: 'https://github.com/musengwat/api-gateway',
    status: 'completed',
    startDate: '2023-05-01',
    endDate: '2023-08-15',
    client: 'Enterprise Client',
    challenges: [
      'Implementing high-performance routing',
      'Managing microservices communication',
      'Ensuring security and rate limiting',
    ],
    features: [
      'API routing and load balancing',
      'Rate limiting and throttling',
      'Authentication and authorization',
      'Request/response logging',
      'Health checks and monitoring',
      'Docker containerization',
    ],
    metrics: {
      throughput: '10k req/sec',
      latency: '<50ms',
      uptime: '99.99%',
    },
  },
  {
    id: 6,
    title: 'Machine Learning Platform',
    description:
      'A comprehensive ML platform for data scientists featuring model training, deployment, monitoring, and collaborative workflows.',
    shortDescription: 'End-to-end machine learning platform',
    image: '/assets/images/projects/ml-platform.jpg',
    images: ['/assets/images/projects/ml-platform.jpg'],
    technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes', 'React', 'FastAPI'],
    category: 'data',
    featured: false,
    liveUrl: 'https://ml-platform-demo.com',
    githubUrl: 'https://github.com/musengwat/ml-platform',
    status: 'in-progress',
    startDate: '2024-01-01',
    endDate: null,
    client: 'AI Startup',
    challenges: [
      'Scaling model training pipelines',
      'Managing ML model versions',
      'Creating intuitive data science workflows',
    ],
    features: [
      'Model training pipelines',
      'Automated model deployment',
      'Performance monitoring',
      'Data visualization',
      'Collaborative notebooks',
      'Version control for models',
    ],
    metrics: {
      models: '50+',
      accuracy: '94%',
      deployment: 'Auto',
    },
  },
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  {
    id: 'fullstack',
    label: 'Full Stack',
    count: projects.filter(p => p.category === 'fullstack').length,
  },
  {
    id: 'frontend',
    label: 'Frontend',
    count: projects.filter(p => p.category === 'frontend').length,
  },
  {
    id: 'backend',
    label: 'Backend',
    count: projects.filter(p => p.category === 'backend').length,
  },
  {
    id: 'data',
    label: 'Data & ML',
    count: projects.filter(p => p.category === 'data').length,
  },
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectById = id => {
  return projects.find(project => project.id === parseInt(id));
};

export const getProjectsByCategory = category => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectsByTechnology = technology => {
  return projects.filter(project =>
    project.technologies.some(tech => tech.toLowerCase().includes(technology.toLowerCase()))
  );
};

export const getCompletedProjects = () => {
  return projects.filter(project => project.status === 'completed');
};

export const getInProgressProjects = () => {
  return projects.filter(project => project.status === 'in-progress');
};

export default projects;
