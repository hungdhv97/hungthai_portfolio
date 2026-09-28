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
      "Lead and mentor a team of 5 engineers across SMLC, SMLP, and CLIMS. Own technical direction for authorization and workflow layers, drive Agile delivery with code review and CI/CD standards, and partner with product and compliance to ship multiple features per release cycle.",
  },
  {
    role: "Software Engineer",
    company: "SOTATEK., JSC",
    period: "Mar 2020 — Oct 2024",
    description:
      "Led a backend team of 5 engineers across Python (Django/FastAPI) and Java/Kotlin (Spring Boot) microservices. Owned Agile delivery, standardized CI/CD with Docker, Kubernetes, and GitHub Actions, and established Datadog monitoring to sustain high availability.",
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
        "Technical challenge: unify the end-to-end loan value chain for Philippine National Bank (SMLC, SMLP, CLIMS) under strict regulatory constraints. Solution: architected fine-grained RBAC (FAP/DAP), multi-level approval chains, and business-rule engines; defined service/API boundaries and hardened Oracle/Hibernate data access. Impact: compliant rollout across three systems with predictable multi-feature releases.",
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
        "Technical challenge: 12M+ users, 2M+ DAU, ~10,000 req/s peak on a Django monolith bottleneck. Solution: led migration to microservices with event-driven Kafka architecture for core flows plus AWS serverless (SQS, SNS, Lambda). Impact: ~35% lower API latency, ~25% lower cost, ~99.9% uptime with Datadog and 80%+ coverage.",
      tech: ["Java", "Kotlin", "Python", "Kafka", "AWS"],
      github: "https://github.com/hungdhv97",
      external: "https://github.com/hungdhv97",
    },
    {
      title: "OwenFashion — E-Commerce Platform",
      description:
        "Technical challenge: 50,000+ products and ~1,000 concurrent users with slow search and long deploy cycles. Solution: reworked search and PostgreSQL access, added Redis caching, containerized with Docker and built GitHub Actions CI/CD. Impact: ~40% performance improvement and ~30% faster deployments.",
      tech: ["Django", "Next.js", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/hungdhv97",
      external: "https://github.com/hungdhv97",
    },
    {
      title: "Waka — Book Reading Website",
      description:
        "Technical challenge: large-scale content ingestion and responsive reading under heavy crawling and background-job load. Solution: built Django backend with Scrapy and Celery queues on PostgreSQL, responsive Next.js frontend, and GitHub Actions CI/CD. Impact: stabilized high-volume ingestion and automated releases for faster iteration.",
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
  languages: ["Java", "Python", "Kotlin"],
  familiar: ["TypeScript", "C++", "C#"],
  frameworks: ["Spring Boot", "Java EE", "Django", "FastAPI"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Oracle"],
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
