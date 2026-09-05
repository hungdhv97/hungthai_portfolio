// Content for hungthai.id.vn — Thai Doan Hung

export const site = {
  name: 'Thai Doan Hung',
  role: 'Software Engineer',
  tagline: 'I build reliable backend systems, web applications, and automation tools.',
  description:
    'Software engineer focused on building dependable backend services and web applications, and automation tools.',
  location: 'Hanoi, Vietnam',
  email: 'hungdhv97@gmail.com',
  github: 'https://github.com/hungdhv97',
  linkedin: 'https://www.linkedin.com/in/hungdhv97',
  site: 'https://hungthai.id.vn'
};

export const about = [
  'Hi there! I\'m Hung, a software engineer who enjoys building things — from backend services and web applications to automation tools. My work spans Python, Java, C++, C#, and JavaScript.',
  'I\'ve built a full-stack social network (MERN), researched deep-learning image customization with the OpenAI GLOW model, and developed a range of automation tools — from a Vietnamese voice assistant to game and browser automation utilities.',
  'I studied Information Technology at the People\'s Security Academy, where I developed a strong foundation in data structures, algorithms, and object-oriented programming. Outside of code, I enjoy problem solving and building things that make life a little easier.'
];

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const experience = [
  {
    role: 'Bachelor of Science in Information Technology',
    company: 'People\'s Security Academy',
    period: 'Sep 2015 — Sep 2019',
    description:
      'Developed a strong foundation in data structures, algorithms, and object-oriented programming. Completed a graduation thesis applying the OpenAI GLOW network to customize object images to support investigation work.',
    tech: ['Python', 'TensorFlow', 'C++', 'Java']
  }
];

export const projects = {
  featured: [
    {
      title: 'e-network — Social Network',
      description:
        'Full-stack social network built on the MERN stack. Features include authentication, post creation/editing, notifications, follow/unfollow, comments, user search, and real-time chat with messaging, voice, and video calls.',
      tech: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
      github: 'https://github.com/hungdhv97',
      external: 'https://github.com/hungdhv97'
    },
    {
      title: 'Graduation Thesis — GLOW Image Customization',
      description:
        'Researched the application of the OpenAI GLOW network to customize object images to support investigation work. Applied a pre-trained GLOW model to Vietnamese portrait datasets and compared generated images with normal images.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'dlib'],
      github: 'https://github.com/hungdhv97',
      external: 'https://github.com/hungdhv97'
    },
    {
      title: 'Vietnamese Virtual Assistant',
      description:
        'A voice assistant that listens, speaks, and executes Vietnamese commands — greetings, time, web/app launch, Google search, email, weather, music, wallpaper, news, and Q&A.',
      tech: ['Python', 'Speech Recognition', 'Selenium'],
      github: 'https://github.com/hungdhv97',
      external: 'https://github.com/hungdhv97'
    }
  ],
  grid: [
    {
      title: 'Friday Night Funkin Bot',
      description:
        'Tool that reads mod songs (JSON) to automatically press keys with high accuracy. Initially Python (PyQT5, pyautogui), then rewritten in C++ to fix multi-threading timing issues.',
      tech: ['Python', 'C++', 'PyQT5', 'pyautogui']
    },
    {
      title: 'Twitter Automation Tool',
      description:
        'Selenium-based tool that operates a list of accounts to perform actions like like, share, follow, comment, retweet, and quote tweet on given post links.',
      tech: ['C#', 'Selenium']
    },
    {
      title: 'Chrome Multi-Browser Simulator',
      description:
        'Tool using mouse and keyboard hooks to simulate operations across multiple browsers, mirroring the first opened browser, similar to an Android multi-instance emulator.',
      tech: ['C#', 'Mouse Hook', 'Keyboard Hook']
    }
  ]
};

export const skills = {
  languages: ['Python', 'Java', 'C++', 'C#', 'JavaScript', 'HTML/CSS'],
  databases: ['MySQL', 'MongoDB'],
  other: ['Data Structures & Algorithms', 'OOP', 'Linux', 'Windows', 'REST APIs']
};

export const education = [
  {
    school: 'People\'s Security Academy',
    degree: 'Bachelor of Science in Information Technology',
    period: 'Sep 2015 — Sep 2019',
    location: 'Hanoi, Vietnam',
    detail: 'GPA: 3.02/4'
  }
];

export const awards = [
  '2015 — Third Prize, National Mathematics Olympiad (Grade 12)',
  '2016 — Third Prize, National Mathematics Olympiad (University)',
  '2016 — Consolation Prize, National Computer Science Olympiad',
  '2017 — First Prize, National Mathematics Olympiad (University)',
  '2017 — Third Prize, National Computer Science Olympiad',
  '2018 — First Prize, National Mathematics Olympiad (University)',
  '2019 — Second Prize, Student Scientific Research Competition, People\'s Security Academy'
];
