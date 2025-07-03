// portfolio-frontend/src/data/projects.js
export const projects = [
  {
    id: 1,
    company: 'United health group',
    title: 'Abyss Mobile Component Library',
    description:
      'A flexible, scalable React Native component library adopted across UnitedHealth Group and its subsidiaries. Features a three-tier design token system, 80+ components, and white labeling capabilities.',
    shortDescription: 'Enterprise React Native component library saving $2M+ annually',
    image: '/assets/images/projects/abyss/abyss-mobile.png',
    images: [
      '/assets/images/projects/abyss/abyss-mobile.png',
      '/assets/images/projects/abyss/abyss-details-1.png',
      '/assets/images/projects/abyss/abyss-details-2.png',
      '/assets/images/projects/abyss/abyss-details-3.png',
      '/assets/images/projects/abyss/abyss-details-4.png',
      '/assets/images/projects/abyss/abyss-details-5.png',
      '/assets/images/projects/abyss/abyss-details-6.png',
      '/assets/images/projects/abyss/abyss-details-7.png',
      '/assets/images/projects/abyss/abyss-details-8.png',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Figma',
      'Figma Token Studio',
      'Figma Code Connect',
      'Emotion Native',
      'CI/CD Pipelines',
      'Jest',
      'Firebase',
      'Sauce Labs',
      'Monorepo',
    ],
    category: 'mobile',
    featured: true,
    liveUrl: null,
    githubUrl: null,
    status: 'in progress',
    // startDate: '2023-01-01',
    // endDate: '2025-07-31',
    client: 'Optum Health / UnitedHealth Group',
    challenges: [
      'Supporting both house of brands and branded house architectures',
      'Implementing white labeling capability across 3 base brands',
      'Ensuring WCAG 2.2 compliance for all components',
      'Token hierarchy allowing overwrites at any level',
      'WCAG A11y development & automated E2E testing',
      'CI/CD Pipelines automated builds with internal artifactories',
    ],
    features: [
      '80+ accessible components',
      'Three-tier token system (core, semantic, component)',
      'White labeling support',
      'Figma Code Connect integration',
      'WCAG 2.2 compliant',
      'Automated testing pipeline',
      'Multi-brand theming',
      'Comprehensive documentation',
    ],
    metrics: {
      savings: '$2M+ annually',
      'Dev Hours': '50,000+ saved',
      components: '80+',
    },
  },
  {
    id: 2,
    title: 'Hunter Cooke Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing professional work and creative projects..',
    shortDescription: 'Professional portfolio website with modern design',
    image: '/assets/images/projects/hunter-cooke-site/hunter-cooke.PNG',
    images: [
      '/assets/images/projects/hunter-cooke-site/hunter-cooke.PNG',
      '/assets/images/projects/hunter-cooke-site/hunter-detail-1.PNG',
    ],
    technologies: ['React', 'vite', 'JavaScript', 'Strapi', 'emailJS', 'Responsive Design'],
    category: 'frontend',
    featured: true,
    liveUrl: 'https://huntercooke.work/',
    githubUrl: 'https://github.com/musengwat/hunter-cooke-website',
    status: 'completed',
    startDate: '2025-06-23',
    endDate: '2025-06-30',
    client: 'Hunter Cooke',
    challenges: [
      'Creating engaging visual design',
      'Optimizing for all device sizes',
      'Ensuring fast load times',
      'Enabling Strapi CMS integration',
    ],
    features: [
      'Responsive design',
      'Portfolio showcase',
      'Contact integration',
      'SEO optimized',
      'Performance optimized',
      'Modern UI/UX',
    ],
  },
  {
    id: 3,
    title: 'Ball Metal Fab Website',
    description:
      'A comprehensive business website for Ball Metal Fabrication showcasing their services, portfolio, and facilitating customer engagement with modern design and functionality.',
    shortDescription: 'Industrial business website with service showcase',
    image: '/assets/images/projects/ball-metal-fab/ball-metal-fab.png',
    images: [
      '/assets/images/projects/ball-metal-fab/ball-metal-fab.png',
      '/assets/images/projects/ball-metal-fab/ball-metal-details-1.png',
    ],
    technologies: ['Shopify', 'Liquid', 'CMS', 'SEO', 'Responsive Design'],
    category: 'frontend',
    featured: false,
    liveUrl: 'https://ballmetalfab.com/',
    githubUrl: 'https://github.com/sumudigital/BMF',
    status: 'completed',
    startDate: '2023-09-01',
    endDate: '2023-10-01',
    client: 'Ball Metal Fabrication',
    challenges: [
      'Showcasing industrial services effectively',
      'Creating intuitive navigation for service categories',
      'Optimizing for local SEO',
    ],
    features: [
      'Service showcase',
      'Build gallery',
      'Contact forms',
      'Mobile responsive',
      'SEO optimized',
      'Fast loading',
    ],
  },
  {
    id: 4,
    title: 'Avva Vehicle Leasing App',
    description:
      'Customer-oriented vehicle leasing application integrating maintenance, repairs, insurance, and services using React Native with real-time updates.',
    shortDescription: 'All-in-one vehicle leasing and management app',
    image: '/assets/images/projects/avva/avva-app.webp',
    images: [
      '/assets/images/projects/avva/avva-app.webp',
      '/assets/images/projects/avva/avva-details-1.webp',
      '/assets/images/projects/avva/avva-details-2.webp',
      '/assets/images/projects/avva/avva-details-3.webp',
    ],
    technologies: ['React Native', 'TypeScript', 'SWR', 'REST APIs', 'Push Notifications'],
    category: 'mobile',
    featured: true,
    liveUrl: 'https://play.google.com/store/apps/details?id=com.driveavva.droid&hl=en_US',
    githubUrl: null,
    status: 'completed',
    startDate: '2022-10-15',
    endDate: '2023-01-01',
    client: 'Avva',
    challenges: ['Complex service integration', 'Real-time updates', 'Payment processing'],
    features: [
      'Vehicle management',
      'Service scheduling',
      'Insurance integration',
      'Payment processing',
      'Push notifications',
      'Service history',
    ],
    metrics: {
      users: '5,000+',
      services: '7 integrated',
      downloads: '1+ Million',
    },
  },
  {
    id: 5,
    title: 'ICDD Data Portal',
    description:
      'Comprehensive portal for delivering diffraction data, reducing delivery time by over 2 weeks per order through AWS integration and streamlined workflows.',
    shortDescription: 'Scientific data delivery portal with AWS integration',
    image: '/assets/images/projects/icdd/icdd.PNG',
    images: ['/assets/images/projects/icdd/icdd.PNG'],
    technologies: ['ReactJS', 'NodeJS', 'AWS S3', 'AWS Cognito', 'PostgreSQL', 'Express'],
    category: 'fullstack',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2022-07-01',
    endDate: '2022-07-30',
    client: 'ICDD',
    challenges: [
      'Large file handling and delivery',
      'Secure authentication system',
      'Performance optimization for data transfer',
    ],
    features: [
      'Secure file delivery',
      'User authentication',
      'Order management',
      'Progress tracking',
      'AWS integration',
    ],
    metrics: {
      'delivery Time': '-2 weeks',
      'file Size': 'Up to 10GB',
      uptime: '99.9%',
    },
  },
  {
    id: 6,
    company: 'Tyson',
    title: 'Project WIN - Logistics Platform',
    description:
      'Developed APIs and systems to optimize truck loading for Tyson Foods, ensuring compliance with regulations and improving delivery efficiency by over 30%.',
    shortDescription: 'Logistics optimization platform improving efficiency of over 30%',
    image: '/assets/images/projects/project-win/project-win.jpg',
    images: ['/assets/images/projects/project-win/project-win.jpg'],
    technologies: ['NodeJS', 'Sequelize', 'PostgreSQL', 'Express', 'API Development'],
    category: 'backend',
    featured: true,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2021-01-01',
    endDate: '2022-06-1',
    client: 'Tyson Foods',
    challenges: [
      'Compliance with varying state and local laws and regulations',
      'Optimizing complex delivery routes',
      'Optimizing truck layouts to ensure deliveries are packed in order',
      'Real-time load calculations',
    ],
    features: [
      'Automated load optimization',
      'Compliance checking',
      'Route optimization',
      'Real-time tracking',
      'Reporting dashboard',
      'API integration',
    ],
    metrics: {
      efficiency: '+30%',
      compliance: '100%',
      apiUptime: '99.9%',
    },
  },
  {
    id: 7,
    company: 'Tyson',
    title: 'Tyson.com',
    description:
      'Enhanced existing Drupal site by leveraging GatsbyJS to improve performance, user experience, and content delivery. Modernized the corporate website architecture while maintaining content management capabilities.',
    shortDescription: 'Corporate website modernization with GatsbyJS and Drupal integration',
    technologies: ['GatsbyJS', 'Drupal', 'GraphQL', 'React', 'JavaScript', 'CMS Integration'],
    category: 'frontend',
    featured: false,
    // liveUrl: 'https://tyson.com',
    githubUrl: null,
    status: 'completed',
    startDate: '2021-05-01',
    endDate: '2022-01-1',
    client: 'Tyson Foods',
    challenges: [
      'Integrating GatsbyJS with existing Drupal backend',
      'Maintaining SEO performance during migration',
      'Ensuring content editor workflow continuity',
      'Performance optimization for large content volumes',
    ],
    features: [
      'Static site generation',
      'Improved page load speeds',
      'Enhanced user experience',
      'Drupal CMS integration',
      'SEO optimization',
      'Responsive design',
    ],
    metrics: {
      'Load Time': '-60%',
      'SEO Score': '+25%',
      'User Engagement': '+40%',
    },
  },
  {
    id: 8,
    title: 'COVID Testing Automation Platform',
    company: 'Tyson',
    description:
      'Rapidly developed front-end to automate random COVID testing schedules for Tyson Foods associates, while transitioning to a hybrid work schedule.',
    shortDescription: 'Automated COVID testing scheduler for enterprise',
    // image: '/assets/images/projects/covid-testing/covid-testing.jpg',
    // images: ['/assets/images/projects/covid-testing.jpg'],
    technologies: ['ReactJS', 'NodeJS', 'PostgreSQL', 'Email Automation'],
    category: 'fullstack',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2021-03-15',
    endDate: '2021-04-30',
    client: 'Tyson Foods',
    challenges: [
      'Rapid development timeline',
      'HIPAA compliance',
      'Large-scale scheduling automation',
    ],
    features: [
      'Rapid time to market',
      'Random selection algorithm',
      'Automated scheduling',
      'Email notifications',
      'Compliance tracking',
      'Reporting dashboard',
      'Calendar integration',
    ],
  },
  {
    id: 9,
    company: 'Walmart',
    title: 'Metrics that Matter Mobile App',
    description:
      'A React Native mobile application for Walmart Store management to monitor KPIs, schedules, and essential information, saving over $4 million in annual labor costs. Later migrated to Me@walmart',
    shortDescription: 'Store management KPI dashboard saving $4M annually',
    technologies: ['React Native', 'Redux', 'Chart.js', 'API Integration'],
    category: 'mobile',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2020-02-01',
    endDate: '2021-03-1',
    client: 'Walmart Labs',
    challenges: [
      'Real-time data synchronization',
      'Offline functionality',
      'Complex data visualization',
      '95% unit test coverage',
    ],
    features: [
      'Real-time KPI tracking',
      'Schedule management',
      'Performance analytics',
      'Push notifications',
      'Offline mode',
      'Data export',
    ],
    metrics: {
      savings: '$4M annually',
      users: '25,000+',
    },
  },
  {
    id: 10,
    title: 'AMP+ Task Delegation Portal',
    company: 'Walmart',
    description:
      'Portal enabling task delegation from Home Office associates to store associates, streamlining operations across Walmart locations.',
    shortDescription: 'Enterprise task management and delegation system',
    technologies: ['ReactJS', 'NodeJS', 'Redux', 'WebSockets', 'PostgreSQL'],
    category: 'fullstack',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2019-03-01',
    endDate: '2020-2-1',
    client: 'Walmart Labs',
    challenges: [
      'Real-time task synchronization',
      'Scalability for thousands of stores',
      'Complex permission systems',
    ],
    features: [
      'Task delegation',
      'Real-time updates',
      'Priority management',
      'Progress tracking',
      'Reporting tools',
      'Multi-store support',
    ],
    metrics: {
      stores: '4,000+',
      tasks: '100K+ daily',
    },
  },
  {
    id: 11,
    title: 'Walmart Academies',
    company: 'Walmart',
    description:
      'Portal enabling task delegation from Home Office associates to store associates, streamlining operations across Walmart locations.',
    shortDescription: 'Enterprise task management and delegation system',
    technologies: ['ReactJS', 'NodeJS', 'Redux', 'WebSockets', 'PostgreSQL'],
    category: 'fullstack',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2018-06-01',
    endDate: '2019-03-01',
    client: 'Walmart Labs',
    challenges: [
      'Real-time task synchronization',
      'Scalability for thousands of stores',
      'Complex permission systems',
    ],
    features: [
      'Task delegation',
      'Real-time updates',
      'Priority management',
      'Progress tracking',
      'Reporting tools',
      'Multi-store support',
    ],
    metrics: {
      stores: '4,000+',
      tasks: '100K+ daily',
    },
  },
  {
    id: 12,
    company: 'Walmart',
    title: 'Walmart Pickup Towers UI',
    description:
      'Redesigned and developed the user interface for Walmart pickup towers, improving customer experience and saving millions in labor costs and customer hours.',
    shortDescription:
      'Designed walmarts pickup tower user interface reducing user wait time and frustration',
    // image: '/assets/images/projects/walmart-pickup-towers/walmart-pickup.webp',
    // images: [
    //   '/assets/images/projects/walmart-pickup-towers/walmart-pickup.webp',
    //   '/assets/images/projects/walmart-pickup-towers/walmart-details-1.jpeg',
    // ],
    technologies: ['ReactJS', 'TypeScript', 'User Experience Design'],
    category: 'frontend',
    featured: true,
    liveUrl: undefined,
    githubUrl: undefined,
    status: 'completed',
    startDate: '2018-01-01',
    endDate: '2018-05-30',
    client: 'Walmart Labs',
    challenges: [
      'Creating intuitive interface for diverse user base',
      'Reducing customer wait times',
      'Integrating with existing systems',
    ],
    features: [
      'Real-time order tracking',
      'Intuitive progress indicators',
      'Multi-language support',
      'Accessibility features',
      'Error handling',
      'Quick scan functionality',
    ],
    metrics: {
      savings: '$1M+ annually',
      customerHours: '3.65M saved',
    },
  },
  {
    id: 13,
    company: 'Walmart',
    title: 'Sumo Console',
    description: `Sumo is Walmart's internal notifications platform with a console interface that enables app teams to view and configure their notification settings. The platform serves a critical role in delivering emergency alerts to stores for violent threats, severe weather, and COVID exposures.`,
    shortDescription:
      'Internal notifications platform and admin console for emergency store alerts',
    technologies: ['ReactJS', 'Redux', 'Node.js', 'RESTful APIs', 'WebSocket'],
    category: 'fullstack',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2017-09-01',
    endDate: '2017-12-30',
    client: 'Walmart Labs',
    challenges: [
      'Real-time notification delivery to 4,000+ stores',
      'Emergency alert prioritization and routing',
      'Complex permission systems for different user roles',
      'High availability requirements for critical alerts',
    ],
    features: [
      'Real-time notification management',
      'Emergency alert configuration',
      'Complex permission systems for different teams and user roles',
      'Notification history and analytics',
      'Multi-channel alert delivery',
    ],
    metrics: {
      stores: '4,000+',
      notifications: '50k+ daily',
      users: '80K+ daily',
    },
  },
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  {
    id: 'mobile',
    label: 'Mobile',
    count: projects.filter(p => p.category === 'mobile').length,
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
    id: 'fullstack',
    label: 'Full Stack',
    count: projects.filter(p => p.category === 'fullstack').length,
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

export const getProjectsByClient = client => {
  return projects.filter(project => project.client.toLowerCase().includes(client.toLowerCase()));
};

export const getCompletedProjects = () => {
  return projects.filter(project => project.status === 'completed');
};

export const getInProgressProjects = () => {
  return projects.filter(project => project.status === 'in-progress');
};

export const getProjectsByYear = year => {
  return projects.filter(project => {
    const startYear = new Date(project.startDate).getFullYear();
    const endYear = project.endDate
      ? new Date(project.endDate).getFullYear()
      : new Date().getFullYear();
    return year >= startYear && year <= endYear;
  });
};

// Get total impact metrics
export const getTotalImpact = () => {
  let totalSavings = 0;
  let totalUsers = 0;

  projects.forEach(project => {
    if (project.metrics && project.metrics.savings) {
      const savings = project.metrics.savings.match(/\$([\d.]+)([MK])?/);
      if (savings) {
        let amount = parseFloat(savings[1]);
        if (savings[2] === 'M') amount *= 1000000;
        else if (savings[2] === 'K') amount *= 1000;
        totalSavings += amount;
      }
    }
    if (project.metrics && project.metrics?.users) {
      const users = project.metrics.users.match(/([\d,]+)/);
      if (users) {
        totalUsers += parseInt(users[1].replace(/,/g, ''));
      }
    }
  });

  return {
    totalSavings: `$${(totalSavings / 1000000).toFixed(1)}M+`,
    totalUsers: `${Math.floor(totalUsers / 1000)}K+`,
    projectsCompleted: getCompletedProjects().length,
  };
};

export default projects;
