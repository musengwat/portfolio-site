// portfolio-frontend/src/data/projects.js
export const projects = [
  {
    id: 1,
    title: 'Abyss Mobile Component Library',
    description:
      'A flexible, scalable React Native component library adopted across UnitedHealth Group and its subsidiaries. Features a three-tier design token system, 80+ components, and white labeling capabilities.',
    shortDescription: 'Enterprise React Native component library saving $2M+ annually',
    image: '/assets/images/projects/abyss-mobile.jpg',
    images: [
      '/assets/images/projects/abyss-mobile.jpg',
      '/assets/images/projects/abyss-detail-1.jpg',
      '/assets/images/projects/abyss-detail-2.jpg',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Figma',
      'Figma Token Studio',
      'Emotion Native',
      'CI/CD',
      'Jest',
    ],
    category: 'mobile',
    featured: true,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2023-01-15',
    endDate: null,
    client: 'Optum Health / UnitedHealth Group',
    challenges: [
      'Supporting both house of brands and branded house architectures',
      'Implementing white labeling capability across 3 base brands',
      'Ensuring WCAG 2.2 compliance for all components',
      'Token hierarchy allowing overwrites at any level',
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
      devHours: '50,000+ saved',
      components: '80+',
    },
  },
  {
    id: 2,
    title: 'Hunter Cooke Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing professional work and creative projects. Built with modern web technologies for optimal performance and user experience.',
    shortDescription: 'Professional portfolio website with modern design',
    image: '/assets/images/projects/hunter-cooke.jpg',
    images: [
      '/assets/images/projects/hunter-cooke.jpg',
      '/assets/images/projects/hunter-detail-1.jpg',
    ],
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design'],
    category: 'frontend',
    featured: true,
    liveUrl: 'https://huntercooke.work/',
    githubUrl: 'https://github.com/musengwat/hunter-cooke-website',
    status: 'completed',
    startDate: '2023-08-01',
    endDate: '2023-09-15',
    client: 'Hunter Cooke',
    challenges: [
      'Creating engaging visual design',
      'Optimizing for all device sizes',
      'Ensuring fast load times',
    ],
    features: [
      'Responsive design',
      'Portfolio showcase',
      'Contact integration',
      'SEO optimized',
      'Performance optimized',
      'Modern UI/UX',
    ],
    metrics: {
      performance: '95/100',
      mobile: '100/100',
      seo: '100/100',
    },
  },
  {
    id: 3,
    title: 'Ball Metal Fab Website',
    description:
      'A comprehensive business website for Ball Metal Fabrication showcasing their services, portfolio, and facilitating customer engagement with modern design and functionality.',
    shortDescription: 'Industrial business website with service showcase',
    image: '/assets/images/projects/ball-metal-fab.jpg',
    images: [
      '/assets/images/projects/ball-metal-fab.jpg',
      '/assets/images/projects/bmf-detail-1.jpg',
    ],
    technologies: ['React', 'JavaScript', 'CSS3', 'SEO', 'Responsive Design'],
    category: 'frontend',
    featured: true,
    liveUrl: 'https://ballmetalfab.com/',
    githubUrl: 'https://github.com/sumudigital/BMF',
    status: 'completed',
    startDate: '2023-06-01',
    endDate: '2023-07-30',
    client: 'Ball Metal Fabrication',
    challenges: [
      'Showcasing industrial services effectively',
      'Creating intuitive navigation for service categories',
      'Optimizing for local SEO',
    ],
    features: [
      'Service showcase',
      'Portfolio gallery',
      'Contact forms',
      'Mobile responsive',
      'SEO optimized',
      'Fast loading',
    ],
    metrics: {
      performance: '92/100',
      conversions: '+35%',
      engagement: '+50%',
    },
  },
  {
    id: 4,
    title: 'Walmart Pickup Towers UI',
    description:
      'Redesigned and developed the user interface for Walmart pickup tower progress screens, improving customer experience and saving millions in labor costs and customer hours.',
    shortDescription: 'Revolutionary pickup tower interface saving $1M+ annually',
    image: '/assets/images/projects/walmart-pickup.jpg',
    images: ['/assets/images/projects/walmart-pickup.jpg'],
    technologies: ['ReactJS', 'JavaScript', 'CSS3', 'User Experience Design'],
    category: 'frontend',
    featured: true,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2019-03-01',
    endDate: '2019-08-30',
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
      satisfaction: '95%',
    },
  },
  {
    id: 5,
    title: 'Project WIN - Logistics Platform',
    description:
      'Developed APIs and systems to optimize truck loading for Tyson Foods, ensuring compliance with regulations and improving delivery efficiency by 30%.',
    shortDescription: 'Logistics optimization platform improving efficiency by 30%',
    image: '/assets/images/projects/project-win.jpg',
    images: ['/assets/images/projects/project-win.jpg'],
    technologies: ['NodeJS', 'Sequelize', 'PostgreSQL', 'Express', 'API Development'],
    category: 'backend',
    featured: true,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2021-06-01',
    endDate: '2021-12-15',
    client: 'Tyson Foods',
    challenges: [
      'Compliance with varying state and local laws',
      'Optimizing complex delivery routes',
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
    id: 6,
    title: 'Metrics that Matter Mobile App',
    description:
      'A ReactJS-based mobile application for Walmart Store management to monitor KPIs, schedules, and essential information, saving $4 million annually.',
    shortDescription: 'Store management KPI dashboard saving $4M annually',
    image: '/assets/images/projects/metrics-matter.jpg',
    images: ['/assets/images/projects/metrics-matter.jpg'],
    technologies: ['ReactJS', 'React Native', 'Redux', 'Chart.js', 'API Integration'],
    category: 'mobile',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2018-09-01',
    endDate: '2019-02-28',
    client: 'Walmart Labs',
    challenges: [
      'Real-time data synchronization',
      'Offline functionality',
      'Complex data visualization',
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
      users: '10,000+',
      adoption: '95%',
    },
  },
  {
    id: 7,
    title: 'COVID Testing Automation Platform',
    description:
      'Rapidly developed front-end to automate random COVID testing scheduling for Tyson Foods associates, streamlining health and safety protocols.',
    shortDescription: 'Automated COVID testing scheduler for enterprise',
    image: '/assets/images/projects/covid-testing.jpg',
    images: ['/assets/images/projects/covid-testing.jpg'],
    technologies: ['ReactJS', 'NodeJS', 'PostgreSQL', 'Calendar Integration', 'Email Automation'],
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
      'Random selection algorithm',
      'Automated scheduling',
      'Email notifications',
      'Compliance tracking',
      'Reporting dashboard',
      'Calendar integration',
    ],
    metrics: {
      timeToMarket: '6 weeks',
      associates: '100,000+',
      automation: '100%',
    },
  },
  {
    id: 8,
    title: 'ICDD Data Portal',
    description:
      'Comprehensive portal for delivering diffraction data, reducing delivery time by 2 weeks per order through AWS integration and streamlined workflows.',
    shortDescription: 'Scientific data delivery portal with AWS integration',
    image: '/assets/images/projects/icdd-portal.jpg',
    images: ['/assets/images/projects/icdd-portal.jpg'],
    technologies: ['ReactJS', 'NodeJS', 'AWS S3', 'AWS Cognito', 'PostgreSQL', 'Express'],
    category: 'fullstack',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2022-07-01',
    endDate: '2022-09-30',
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
      'Automated workflows',
    ],
    metrics: {
      deliveryTime: '-2 weeks',
      fileSize: 'Up to 10GB',
      uptime: '99.9%',
    },
  },
  {
    id: 9,
    title: 'Avva Vehicle Leasing App',
    description:
      'Customer-oriented vehicle leasing application integrating maintenance, repairs, insurance, and services using React Native with real-time updates.',
    shortDescription: 'All-in-one vehicle leasing and management app',
    image: '/assets/images/projects/avva-app.jpg',
    images: ['/assets/images/projects/avva-app.jpg'],
    technologies: ['React Native', 'TypeScript', 'SWR', 'REST APIs', 'Push Notifications'],
    category: 'mobile',
    featured: false,
    liveUrl: null,
    githubUrl: null,
    status: 'completed',
    startDate: '2022-10-15',
    endDate: '2023-01-15',
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
      rating: '4.7/5',
    },
  },
  // {
  //   id: 10,
  //   title: 'AMP+ Task Delegation Portal',
  //   description:
  //     'Portal enabling task delegation from Home Office associates to store associates, streamlining operations across Walmart locations.',
  //   shortDescription: 'Enterprise task management and delegation system',
  //   image: '/assets/images/projects/amp-plus.jpg',
  //   images: ['/assets/images/projects/amp-plus.jpg'],
  //   technologies: ['ReactJS', 'NodeJS', 'Redux', 'WebSockets', 'PostgreSQL'],
  //   category: 'fullstack',
  //   featured: false,
  //   liveUrl: null,
  //   githubUrl: null,
  //   status: 'completed',
  //   startDate: '2018-03-01',
  //   endDate: '2018-08-30',
  //   client: 'Walmart Labs',
  //   // challenges: [
  //   //   'Real-time task synchronization',
  //   //   'Scalability for thousands of stores',
  //   //   'Complex permission systems',
  //   // ],
  //   // features: [
  //   //   'Task delegation',
  //   //   'Real-time updates',
  //   //   'Priority management',
  //   //   'Progress tracking',
  //   //   'Reporting tools',
  //   //   'Multi-store support',
  //   // ],
  //   // metrics: {
  //   //   stores: '4,000+',
  //   //   tasks: '100K+ daily',
  //   //   efficiency: '+40%',
  //   // },

  //   challenges: ['Complex service integration', 'Real-time updates', 'Payment processing'],
  //   features: [
  //     'Vehicle management',
  //     'Service scheduling',
  //     'Insurance integration',
  //     'Payment processing',
  //     'Push notifications',
  //     'Service history',
  //   ],
  //   metrics: {
  //     users: '5,000+',
  //     services: '7 integrated',
  //     rating: '4.7/5',
  //   },
  // },
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
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

  {
    id: 'mobile',
    label: 'Mobile',
    count: projects.filter(p => p.category === 'mobile').length,
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
