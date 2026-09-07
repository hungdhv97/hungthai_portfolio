// Content for hungthai.id.vn — Hung Thai

export const site = {
  name: "Hung Thai",
  role: "Software Engineer",
  tagline:
    "I build scalable, high-availability distributed systems for e-commerce and lending/banking.",
  description:
    "Software engineer with 6+ years of experience building scalable, high-availability distributed systems across e-commerce and lending/banking.",
  location: "Hanoi, Vietnam",
  email: "hungdhv97@gmail.com",
  github: "https://github.com/hungdhv97",
  linkedin: "https://www.linkedin.com/in/hungdhv97",
  site: "https://hungthai.id.vn",
};

export const about = [
  "Software engineer with 6+ years of experience building scalable, high-availability distributed systems — across both e-commerce and lending/banking. I've shipped products at consumer scale and engineered the complex, compliance-driven systems behind enterprise loan lifecycles.",
  "In e-commerce, I built and scaled backend services that handled high traffic and high transaction volumes, optimizing performance and reliability under real-world load. In lending/banking, I design and own the authorization and workflow layers — fine-grained RBAC, multi-level approval chains, and business rule engines that map precisely to regulatory and operational constraints.",
  "I take ownership of system design, collaborate across teams to align technical decisions with business logic, and mentor engineers to raise the quality bar. In fast, agile environments, I deliver multiple features per release cycle without sacrificing quality or compliance.",
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Aurionpro Integro Lending",
    period: "Oct 2024 — Present",
    description:
      "Design and own the authorization and workflow layers of enterprise lending systems — fine-grained RBAC, multi-level approval chains, and business rule engines aligned with regulatory and operational constraints.",
  },
  {
    role: "Software Engineer",
    company: "SOTATEK., JSC",
    period: "Mar 2020 — Oct 2024",
    description:
      "Built and scaled backend services for e-commerce that handled high traffic and high transaction volumes, optimizing performance and reliability under real-world load.",
  },
  {
    role: "Bachelor of Science in Information Technology",
    company: "People's Security Academy",
    period: "Sep 2015 — Sep 2019",
    description:
      "Developed a strong foundation in data structures, algorithms, and object-oriented programming. Completed a graduation thesis applying the OpenAI GLOW network to customize object images to support investigation work.",
  },
];

export const projects = {
  featured: [
    {
      title: "PNB SmartLender — Enterprise Lending Platform",
      description:
        "An enterprise lending platform for Philippine National Bank that unifies SmartLender Commercial (SMLC), SmartLender Portal (SMLP), and CLIMS into one end-to-end loan value chain — from origination through servicing to collateral and credit management. I own the authorization and workflow architecture: fine-grained RBAC (FAP/DAP), multi-level approval chains, and business rule engines mapped precisely to regulatory constraints across all three systems.",
      tech: [
        "Java",
        "Spring",
        "Java EE",
        "Hibernate",
        "Oracle",
        "Activiti/Camunda",
        "Kafka",
      ],
      github: "https://github.com/hungdhv97",
      external: "https://github.com/hungdhv97",
    },
    {
      title: "Yogiyo — Large-Scale Food Ordering Service",
      description:
        "Backend for a high-traffic food ordering platform serving 12M+ users and 2M+ daily active users. Handled peak traffic of 10,000 req/s by optimizing API performance and architecture, migrated from monolith to microservices, and reduced API response time by 35%.",
      tech: ["Java", "Kotlin", "Python", "Kafka", "AWS"],
      github: "https://github.com/hungdhv97",
      external: "https://github.com/hungdhv97",
    },
    {
      title: "OwenFashion — E-Commerce Platform",
      description:
        "Built a full e-commerce platform with a Django backend and Next.js frontend handling 50,000+ products. Optimized search and database performance to support 1,000 concurrent users and integrated Redis caching, improving system performance by 40%.",
      tech: ["Django", "Next.js", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/hungdhv97",
      external: "https://github.com/hungdhv97",
    },
    {
      title: "Waka — Book Reading Website",
      description:
        "Designed backend services with Django and web scraping with Scrapy, handling complex task queues with Celery. Built a responsive reading experience with Next.js and established CI/CD pipelines with GitHub Actions.",
      tech: ["Django", "Next.js", "Scrapy", "Celery", "PostgreSQL"],
      github: "https://github.com/hungdhv97",
      external: "https://github.com/hungdhv97",
    },
  ],
  grid: [
    {
      title: "Friday Night Funkin Bot",
      description:
        "High-accuracy game automation bot using multithreading in Python, C++, and C#. Migrated from Python to C++ for significant performance gains, reducing execution time by over 50% and miss rates to near 0%.",
      tech: ["Python", "C++", "C#", "Multithreading"],
    },
    {
      title: "Graduation Thesis — GLOW Image Customization",
      description:
        "Applied the OpenAI GLOW network to customize object images to support investigation work, comparing generated images with normal images on Vietnamese portrait datasets.",
      tech: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    },
    {
      title: "Vietnamese Virtual Assistant",
      description:
        "A voice assistant that listens, speaks, and executes Vietnamese commands — greetings, time, web/app launch, Google search, email, weather, music, wallpaper, news, and Q&A.",
      tech: ["Python", "Speech Recognition", "Selenium"],
    },
  ],
};

export const skills = {
  languages: ["Java", "Kotlin", "Python", "TypeScript", "C++", "C#"],
  frameworks: ["Spring Boot", "Django", "FastAPI"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  cloud: ["AWS (S3, SQS, SNS, Lambda)"],
  tools: [
    "Kafka",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Datadog",
    "Nginx",
  ],
};

export const education = [
  {
    school: "People's Security Academy",
    degree: "Bachelor of Science in Information Technology",
    period: "Sep 2015 — Sep 2019",
    location: "Hanoi, Vietnam",
    detail: "GPA: 3.02/4",
  },
];

export const awards = [
  "2015 — Third Prize, National Mathematics Olympiad (Grade 12)",
  "2016 — Third Prize, National Mathematics Olympiad (University)",
  "2016 — Consolation Prize, National Computer Science Olympiad",
  "2017 — First Prize, National Mathematics Olympiad (University)",
  "2017 — Third Prize, National Computer Science Olympiad",
  "2018 — First Prize, National Mathematics Olympiad (University)",
  "2019 — Second Prize, Student Scientific Research Competition, People's Security Academy",
];
