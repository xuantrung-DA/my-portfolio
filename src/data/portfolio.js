// Central source of truth for portfolio content.
// Content is based on Nguyen Xuan Trung's CV and supplied certificates.

export const personalInfo = {
  name: "Nguyễn Xuân Trung",
  title: "AI Engineer",
  taglines: [
    "Applied AI Engineer",
    "Computer Vision Practitioner",
    "LLM & Agentic AI Builder",
    "MLOps & Backend Developer",
  ],
  bio: `AI undergraduate at FPT University (GPA: 3.75/4.0) with hands-on
    experience in computer vision, LLM-powered workflows, and backend API
    development. I build AI applications and production-oriented pipelines
    using PyTorch, FastAPI, Docker, and AWS EC2, and I am interested in AI
    Engineer and Applied AI opportunities.`,
  location: "Phu Huu, Ho Chi Minh City",
  email: "nxt276651@gmail.com",
  phone: "0785656734",
  socials: {
    github: "https://github.com/xuantrung-DA",
    linkedin: "https://www.linkedin.com/in/trung-nguyen-3932b4265/",
  },
};

export const stats = [
  { label: "Current GPA", value: "3.75/4.0" },
  { label: "Featured Projects", value: "3" },
  { label: "Accepted Papers", value: "2" },
  { label: "Expected Graduation", value: "06/2027" },
];

export const experience = [
  {
    role: "AI Intern",
    company: "ECE Technology Co., Ltd.",
    period: "01/2026 – 04/2026",
    project: "AI FOR ECOM",
    description:
      "Built AI and data services for e-commerce analytics, market intelligence, and internal automation workflows.",
    responsibilities: [
      "Built a product performance classification module using MiniBatch K-Means with RFM features.",
      "Designed 30-day performance and rule-based velocity labels for product movement analysis.",
      "Built an LLM-powered market intelligence workflow using SerpAPI and Gemini API.",
      "Automated SQL Server-to-PostgreSQL ETL pipelines and developed FastAPI services.",
      "Containerized services with Docker and deployed API services on AWS EC2.",
    ],
    highlights: ["MiniBatch K-Means", "FastAPI", "Docker", "AWS EC2"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Artificial Intelligence",
    school: "FPT University",
    period: "2023 – Present",
    description:
      "Relevant coursework: Computer Vision, Natural Language Processing, Machine Learning, and Deep Learning.",
    gpa: "3.75/4.0",
    expectedGraduation: "06/2027",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL"],
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "Scikit-learn", "NLP", "Computer Vision", "ASR"],
  },
  {
    category: "LLM & Agentic AI",
    items: ["LangChain", "LangGraph", "RAG", "LLM Applications", "Agentic AI"],
  },
  {
    category: "Backend & Data Engineering",
    items: ["FastAPI", "RESTful APIs", "PostgreSQL", "Data Pipelines", "System Design"],
  },
  {
    category: "DevOps & MLOps",
    items: ["Docker", "Git", "GitHub", "Postman", "AWS EC2"],
  },
  {
    category: "Professional Skills",
    items: [
      "English",
      "Analytical Thinking",
      "Problem Solving",
      "Research",
      "Cross-functional Communication",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Career Agent",
    role: "Personal Project",
    period: "In Progress",
    description:
      "A personal AI career assistant that evaluates the match between a candidate's CV and a job description, identifies skill gaps, and builds a personalized optimization roadmap for career development.",
    highlights: [
      "CV–JD matching analysis",
      "Skill-gap identification",
      "Personalized career roadmap",
    ],
    tags: ["AI Career Guidance", "CV–JD Matching", "Personalization"],
    category: "AI/ML",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 2,
    title: "Flux AI — AI Personal Financial Coach",
    role: "AI Engineer",
    period: "04/2026 – Present",
    description:
      "A multi-step AI financial advisory workflow that provides personalized financial recommendations for Gen Z users.",
    highlights: [
      "Developing FastAPI services and LLM orchestration for personalized recommendations.",
      "Implementing specialized agents for transaction analysis, market signals, and product recommendations.",
      "Collaborating with AI, Business, and Marketing teammates.",
    ],
    tags: ["FastAPI", "LLM Orchestration", "Agentic AI"],
    category: "AI/ML",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "Secure Login System",
    role: "Project Leader",
    period: "08/2025 – 11/2025",
    description:
      "An end-to-end secure login authentication pipeline combining face anti-spoofing and face recognition.",
    highlights: [
      "Optimized a CDCN-based face anti-spoofing module to 96.9% accuracy with an ACER of 0.032.",
      "Integrated face anti-spoofing with a face recognition system achieving 95.8% accuracy.",
      "Evaluated and refined model performance for secure authentication requirements.",
    ],
    tags: ["PyTorch", "OpenCV", "Face Recognition", "Computer Vision"],
    category: "Computer Vision",
    github: "",
    demo: "",
    featured: true,
  },
];

export const honors = [
  {
    title: "Top 100 Excellent Students",
    organization: "FPT University",
    year: "2025",
    description: "Recognized among the Top 100 Excellent Students in both the Summer and Fall semesters.",
    type: "academic",
  },
  {
    title: "Accepted Paper — Springer LNAI (Scopus Q2)",
    organization: "Springer",
    year: "2025",
    description:
      '“Weather Forecasting System ‘Four Seasons in One Day’ and Shelter Suggestion for Sydney and Melbourne and Canberra.”',
    type: "research",
  },
  {
    title: "Accepted Paper — Springer LNEE (Scopus Q4)",
    organization: "Springer",
    year: "2025",
    description:
      '“Optimizing YOLOv11n for Real-Time Object Detection: Leveraging Quantization and Model Optimization.”',
    type: "research",
  },
];

export const activities = [
  {
    title: "LotusHacks × HackHarvard × GenAI Fund Vietnam Hackathon",
    role: "Participant",
    period: "20/03/2026 – 22/03/2026",
    description:
      "Developed an AI-powered livestream support platform with script generation, live customer response assistance, and post-livestream analysis.",
  },
  {
    title: "FPTU AI & Robotics Challenge 2025",
    role: "Organizing Committee — AI",
    period: "05/2025 – 08/2025",
    description:
      "Supported AI competition segments through participant assistance, technical coordination, and event execution.",
  },
];

export const certifications = [
  {
    title: "Natural Language Processing",
    issuer: "DeepLearning.AI",
    date: "04/2026",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/1V0NB10PQJ8Z?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "11/2025",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/W5FF12EC0BE1?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM",
    date: "10/2025",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/HLMM0JU7X2LQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Project Management Principles and Practices",
    issuer: "University of California, Irvine",
    date: "11/07/2026",
    credentialUrl:
      "https://coursera.org/share/ec56a968914753e9ae5ded937fceaf2b",
  },
  {
    title: "Gradient to Production: MLOps & Model Serving Specialization",
    issuer: "Coursera",
    date: "11/07/2026",
    credentialUrl: "https://coursera.org/verify/specialization/4ZEFB8QBVQ3H",
  },
  {
    title: "AI Engineer Professional Specialization",
    issuer: "Coursera",
    date: "11/07/2026",
    credentialUrl: "https://coursera.org/verify/specialization/6J4SFXR6XNEH",
  },
];

export const navLinks = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Skills", path: "#skills" },
  { label: "Projects", path: "#projects" },
  { label: "Honors", path: "#honors" },
  { label: "Contact", path: "#contact" },
];
