// portfolio-frontend/src/data/skills.js
export const skills = {
  frontend: [
    {
      name: "React",
      level: 95,
      years: 4,
      description:
        "Expert in hooks, context, performance optimization, and advanced patterns",
    },
    {
      name: "JavaScript",
      level: 92,
      years: 5,
      description:
        "ES6+, async/await, closures, prototypes, and modern JS features",
    },
    {
      name: "TypeScript",
      level: 88,
      years: 3,
      description:
        "Strong typing, interfaces, generics, and advanced type manipulation",
    },
    {
      name: "Vue.js",
      level: 80,
      years: 2,
      description:
        "Composition API, Vuex, Vue Router, and component architecture",
    },
    {
      name: "HTML5",
      level: 98,
      years: 5,
      description:
        "Semantic markup, accessibility, web standards, and SEO optimization",
    },
    {
      name: "CSS3",
      level: 95,
      years: 5,
      description:
        "Flexbox, Grid, animations, responsive design, and modern CSS features",
    },
    {
      name: "Sass",
      level: 90,
      years: 4,
      description:
        "Mixins, variables, nesting, and maintainable stylesheet architecture",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      years: 2,
      description:
        "Utility-first approach, custom components, and design systems",
    },
  ],
  backend: [
    {
      name: "Node.js",
      level: 93,
      years: 4,
      description:
        "Express, Koa, microservices, and scalable server-side applications",
    },
    {
      name: "Express",
      level: 90,
      years: 4,
      description:
        "RESTful APIs, middleware, authentication, and security best practices",
    },
    {
      name: "Python",
      level: 87,
      years: 3,
      description:
        "Django, Flask, FastAPI, data processing, and automation scripts",
    },
    {
      name: "Django",
      level: 82,
      years: 2,
      description:
        "ORM, admin interface, authentication, and full-stack web development",
    },
    {
      name: "FastAPI",
      level: 78,
      years: 1,
      description: "Modern Python API framework with automatic documentation",
    },
    {
      name: "PHP",
      level: 75,
      years: 3,
      description: "Laravel, Symfony, and legacy system maintenance",
    },
    {
      name: "Laravel",
      level: 72,
      years: 2,
      description:
        "Eloquent ORM, Artisan CLI, and rapid application development",
    },
    {
      name: "Java",
      level: 70,
      years: 2,
      description:
        "Spring Boot, Maven, enterprise applications, and design patterns",
    },
  ],
  database: [
    {
      name: "MongoDB",
      level: 88,
      years: 3,
      description:
        "Document design, aggregation pipelines, and performance optimization",
    },
    {
      name: "PostgreSQL",
      level: 85,
      years: 3,
      description:
        "Complex queries, indexing, stored procedures, and database design",
    },
    {
      name: "MySQL",
      level: 82,
      years: 4,
      description:
        "Query optimization, replication, and database administration",
    },
    {
      name: "Redis",
      level: 80,
      years: 2,
      description: "Caching strategies, pub/sub, and session management",
    },
    {
      name: "Firebase",
      level: 75,
      years: 2,
      description:
        "Firestore, Authentication, Cloud Functions, and real-time features",
    },
  ],
  tools: [
    {
      name: "Git",
      level: 95,
      years: 5,
      description:
        "Version control, branching strategies, and collaborative workflows",
    },
    {
      name: "Docker",
      level: 88,
      years: 3,
      description:
        "Containerization, multi-stage builds, and development environments",
    },
    {
      name: "AWS",
      level: 82,
      years: 2,
      description: "EC2, S3, Lambda, RDS, and serverless architectures",
    },
    {
      name: "Kubernetes",
      level: 75,
      years: 1,
      description:
        "Container orchestration, deployments, and cluster management",
    },
    {
      name: "Linux",
      level: 85,
      years: 4,
      description:
        "Server administration, shell scripting, and system optimization",
    },
    {
      name: "Nginx",
      level: 78,
      years: 2,
      description:
        "Reverse proxy, load balancing, and web server configuration",
    },
  ],
};

export const personalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "https://johndoe.dev",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  twitter: "https://twitter.com/johndoe",
  experience: "5+",
  availability: "Available for hire",
  timezone: "PST (UTC-8)",
  languages: ["English (Native)", "Spanish (Conversational)", "French (Basic)"],

  // Certifications
  certifications: [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "https://aws.amazon.com/verification",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credential: "https://coursera.org/verify/certificate",
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      credential: "https://cloud.google.com/certification",
    },
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      year: "2019",
      gpa: "3.8/4.0",
      honors: ["Magna Cum Laude", "Dean's List"],
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "General Assembly",
      year: "2018",
      duration: "6 months intensive",
      focus: "Modern web technologies and agile development",
    },
  ],

  // Interests & Hobbies
  interests: [
    "Open Source Contributions",
    "Technology Blogging",
    "Mentoring Developers",
    "Rock Climbing",
    "Photography",
    "Travel & Culture",
  ],

  // Work preferences
  workPreferences: {
    remoteWork: true,
    relocation: false,
    travel: "Occasional",
    contractWork: true,
    fullTime: true,
    partTime: false,
  },

  // Social links with icons
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/johndoe",
      icon: "github",
      username: "@johndoe",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin",
      username: "johndoe",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: "twitter",
      username: "@johndoe",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/johndoe",
      icon: "instagram",
      username: "@johndoe",
    },
  ],
};

// Skill categories with metadata
export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    description: "User interface and client-side technologies",
    icon: "💻",
    color: "#3b82f6",
  },
  {
    id: "backend",
    name: "Backend",
    description: "Server-side development and APIs",
    icon: "⚙️",
    color: "#10b981",
  },
  {
    id: "database",
    name: "Database",
    description: "Data storage and management systems",
    icon: "🗄️",
    color: "#f59e0b",
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    description: "Development tools and deployment",
    icon: "🛠️",
    color: "#8b5cf6",
  },
];

// Get skills by proficiency level
export const getSkillsByLevel = (level) => {
  const allSkills = Object.values(skills).flat();

  switch (level) {
    case "expert":
      return allSkills.filter((skill) => skill.level >= 90);
    case "advanced":
      return allSkills.filter((skill) => skill.level >= 75 && skill.level < 90);
    case "intermediate":
      return allSkills.filter((skill) => skill.level >= 60 && skill.level < 75);
    case "beginner":
      return allSkills.filter((skill) => skill.level < 60);
    default:
      return allSkills;
  }
};

// Get top skills across all categories
export const getTopSkills = (count = 10) => {
  const allSkills = Object.values(skills).flat();
  return allSkills.sort((a, b) => b.level - a.level).slice(0, count);
};

// Get skills by technology/framework
export const getSkillsByTechnology = (technologies) => {
  const allSkills = Object.values(skills).flat();
  return allSkills.filter((skill) =>
    technologies.some((tech) =>
      skill.name.toLowerCase().includes(tech.toLowerCase())
    )
  );
};

// Calculate overall proficiency
export const getOverallProficiency = () => {
  const allSkills = Object.values(skills).flat();
  const totalLevel = allSkills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(totalLevel / allSkills.length);
};

export default { skills, personalInfo, skillCategories };
