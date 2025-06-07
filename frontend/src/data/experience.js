// portfolio-frontend/src/data/experience.js
export const experienceData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    startDate: "2022-03-01",
    endDate: null, // Current position
    type: "full-time",
    description:
      "Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Led migration of legacy system to modern React/Node.js stack, improving performance by 60%",
      "Architected microservices infrastructure serving 100K+ daily active users",
      "Mentored team of 5 junior developers, improving team productivity by 40%",
      "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      "Designed and built real-time analytics dashboard used by C-level executives",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    responsibilities: [
      "Full-stack development using modern JavaScript frameworks",
      "Database design and optimization for high-traffic applications",
      "Code review and technical mentorship",
      "Architecture planning and technical decision making",
      "Performance monitoring and optimization",
      "Agile development and sprint planning",
    ],
    companyInfo: {
      industry: "Financial Technology",
      size: "200-500 employees",
      website: "https://techflow.com",
    },
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "InnovateWeb Agency",
    location: "Remote",
    startDate: "2020-06-01",
    endDate: "2022-02-28",
    type: "full-time",
    description:
      "Developed custom web applications for diverse clients ranging from startups to Fortune 500 companies. Specialized in React frontend development and Node.js backend services.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Built e-commerce platform handling $2M+ in annual transactions",
      "Reduced client site load times by average of 45% through optimization",
      "Implemented automated testing suite improving code quality by 70%",
      'Won "Developer of the Year" award for outstanding client satisfaction',
    ],
    technologies: [
      "React",
      "Vue.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Stripe",
      "AWS",
      "Netlify",
    ],
    responsibilities: [
      "Client consultation and technical requirement gathering",
      "Full-stack web application development",
      "Third-party API integrations",
      "Performance optimization and SEO implementation",
      "Client training and project handoff",
      "Maintenance and support for live applications",
    ],
    companyInfo: {
      industry: "Web Development Agency",
      size: "50-100 employees",
      website: "https://innovateweb.com",
    },
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "StartupLaunch",
    location: "Austin, TX",
    startDate: "2019-01-15",
    endDate: "2020-05-30",
    type: "full-time",
    description:
      "Joined early-stage startup to build user-facing applications from the ground up. Worked closely with design team to create intuitive and responsive user interfaces.",
    achievements: [
      "Built MVP that attracted 10K+ beta users in first 3 months",
      "Implemented responsive design system used across all products",
      "Achieved 95+ Google Lighthouse scores for all main application pages",
      "Reduced user onboarding time by 60% through UX improvements",
      "Contributed to $2.5M Series A funding round success",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Sass",
      "Webpack",
      "Jest",
      "Figma",
      "Firebase",
    ],
    responsibilities: [
      "React component library development",
      "Mobile-first responsive design implementation",
      "User experience optimization",
      "Cross-browser compatibility testing",
      "Collaboration with design and product teams",
      "Frontend performance monitoring",
    ],
    companyInfo: {
      industry: "SaaS Startup",
      size: "10-25 employees",
      website: "https://startuplaunch.io",
    },
  },
  {
    id: 4,
    title: "Junior Web Developer",
    company: "Digital Solutions Corp",
    location: "San Jose, CA",
    startDate: "2018-03-01",
    endDate: "2018-12-31",
    type: "full-time",
    description:
      "First professional role focused on learning modern web development practices. Worked on maintenance and feature development for client websites and internal tools.",
    achievements: [
      "Successfully completed 6-month intensive training program",
      "Contributed to 10+ client website projects",
      "Improved personal productivity by learning advanced Git workflows",
      'Received "Rising Star" recognition for rapid skill development',
      "Assisted in migration of 5 legacy sites to modern frameworks",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "PHP",
      "MySQL",
      "WordPress",
    ],
    responsibilities: [
      "Website maintenance and bug fixes",
      "Feature development for existing applications",
      "Content management system customization",
      "Client support and minor updates",
      "Code testing and quality assurance",
      "Documentation and technical writing",
    ],
    companyInfo: {
      industry: "Web Development Services",
      size: "25-50 employees",
      website: "https://digitalsolutions.com",
    },
  },
];

export const educationData = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    company: "University of California, Berkeley", // Using 'company' field for institution
    location: "Berkeley, CA",
    startDate: "2015-08-01",
    endDate: "2019-05-15",
    type: "degree",
    description:
      "Comprehensive computer science education with focus on software engineering, algorithms, and system design. Graduated Magna Cum Laude with strong foundation in mathematics and programming.",
    achievements: [
      "Graduated Magna Cum Laude with 3.8 GPA",
      "Dean's List for 6 consecutive semesters",
      "Member of Computer Science Honor Society",
      "Teaching Assistant for Data Structures course",
      "Led student team in ACM Programming Competition",
      "Completed senior capstone project on distributed systems",
    ],
    technologies: [
      "Java",
      "Python",
      "C++",
      "Algorithms",
      "Data Structures",
      "Database Systems",
      "Operating Systems",
    ],
    responsibilities: [
      "Core computer science curriculum completion",
      "Independent research projects",
      "Peer tutoring and teaching assistance",
      "Collaborative software development projects",
      "Technical presentation and documentation",
      "Algorithm design and analysis",
    ],
    companyInfo: {
      industry: "Higher Education",
      size: "45,000+ students",
      website: "https://berkeley.edu",
    },
    gpa: "3.8/4.0",
    honors: ["Magna Cum Laude", "Dean's List", "CS Honor Society"],
    relevantCoursework: [
      "Data Structures and Algorithms",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Web Development",
      "Distributed Systems",
    ],
  },
  {
    id: 2,
    title: "Full Stack Web Development Bootcamp",
    company: "General Assembly",
    location: "San Francisco, CA",
    startDate: "2018-06-01",
    endDate: "2018-11-30",
    type: "bootcamp",
    description:
      "Intensive 6-month program focused on modern web development technologies and practices. Hands-on learning with real-world projects and industry mentorship.",
    achievements: [
      "Completed 600+ hours of intensive coding training",
      "Built 4 full-stack applications from scratch",
      "Graduated as top 10% of cohort",
      "Received job placement assistance and career coaching",
      "Presented final project to panel of industry professionals",
      "Established network of 30+ fellow developers",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
    ],
    responsibilities: [
      "Daily coding challenges and assignments",
      "Team-based project development",
      "Code review and peer programming",
      "Technical presentation delivery",
      "Industry best practices implementation",
      "Portfolio development and job preparation",
    ],
    companyInfo: {
      industry: "Education Technology",
      size: "Global presence",
      website: "https://generalassemb.ly",
    },
    projects: [
      "E-commerce platform with payment integration",
      "Social media application with real-time features",
      "Task management tool with team collaboration",
      "Personal portfolio website with custom CMS",
    ],
  },
];

export const certificationsData = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    expiryDate: "2026",
    credential: "https://aws.amazon.com/verification",
    description:
      "Validates expertise in developing and maintaining applications on AWS platform",
    skills: [
      "AWS Lambda",
      "EC2",
      "S3",
      "DynamoDB",
      "CloudFormation",
      "API Gateway",
    ],
    credentialId: "AWS-CDA-12345",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta (Facebook)",
    date: "2022",
    expiryDate: "2025",
    credential: "https://coursera.org/verify/certificate",
    description:
      "Comprehensive certification covering React fundamentals, advanced patterns, and ecosystem",
    skills: ["React", "JSX", "Hooks", "Context API", "Redux", "Testing"],
    credentialId: "META-RCT-67890",
  },
  {
    name: "Google Cloud Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2023",
    expiryDate: "2025",
    credential: "https://cloud.google.com/certification",
    description:
      "Demonstrates ability to design, build, and deploy scalable applications on Google Cloud",
    skills: [
      "Google Cloud Platform",
      "App Engine",
      "Cloud Functions",
      "Kubernetes",
      "BigQuery",
    ],
    credentialId: "GCP-PCD-54321",
  },
  {
    name: "MongoDB Certified Developer Associate",
    issuer: "MongoDB University",
    date: "2022",
    expiryDate: "2024",
    credential: "https://university.mongodb.com/certification",
    description:
      "Validates skills in MongoDB database development and administration",
    skills: [
      "MongoDB",
      "Aggregation Pipeline",
      "Indexing",
      "Schema Design",
      "Performance Tuning",
    ],
    credentialId: "MDB-CDA-98765",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    expiryDate: "2026",
    credential: "https://cncf.io/certification",
    description:
      "Demonstrates ability to design, build and deploy applications for Kubernetes",
    skills: [
      "Kubernetes",
      "Docker",
      "Container Orchestration",
      "Pods",
      "Services",
      "Deployments",
    ],
    credentialId: "CNCF-CKAD-11223",
  },
];

// Helper functions
export const getCurrentPosition = () => {
  return experienceData.find((exp) => exp.endDate === null);
};

export const getTotalExperience = () => {
  const startDate = new Date(
    experienceData[experienceData.length - 1].startDate
  );
  const endDate = new Date();
  const years = (endDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(years * 10) / 10; // Round to 1 decimal place
};

export const getActiveCertifications = () => {
  const currentDate = new Date();
  return certificationsData.filter((cert) => {
    if (!cert.expiryDate) return true;
    const expiryDate = new Date(cert.expiryDate);
    return expiryDate > currentDate;
  });
};

export const getEducationByType = (type) => {
  return educationData.filter((edu) => edu.type === type);
};

export const getAllTechnologies = () => {
  const allTech = experienceData.reduce((acc, exp) => {
    return acc.concat(exp.technologies);
  }, []);

  // Count occurrences and return unique technologies with counts
  const techCount = {};
  allTech.forEach((tech) => {
    techCount[tech] = (techCount[tech] || 0) + 1;
  });

  return Object.entries(techCount)
    .map(([tech, count]) => ({ name: tech, count }))
    .sort((a, b) => b.count - a.count);
};

export const getExperienceByCompany = (companyName) => {
  return experienceData.filter((exp) =>
    exp.company.toLowerCase().includes(companyName.toLowerCase())
  );
};

export const getRecentExperience = (years = 5) => {
  const cutoffDate = new Date();
  cutoffDate.setFullYear(cutoffDate.getFullYear() - years);

  return experienceData.filter((exp) => {
    const startDate = new Date(exp.startDate);
    return startDate >= cutoffDate;
  });
};

export default {
  experienceData,
  educationData,
  certificationsData,
  getCurrentPosition,
  getTotalExperience,
  getActiveCertifications,
  getEducationByType,
  getAllTechnologies,
  getExperienceByCompany,
  getRecentExperience,
};
