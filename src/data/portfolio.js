// ============================================
// PORTFOLIO DATA - Edit this file to update content
// ============================================

export const personalInfo = {
  name: "Nguyễn Xuân Trung",
  title: "AI Engineer",
  taglines: [
    "Machine Learning Engineer",
    "Deep Learning Specialist",
    "AI Solutions Architect",
    "Data Science Enthusiast",
  ],
  bio: `Passionate AI Engineer with expertise in building intelligent systems 
    and machine learning solutions. I specialize in developing cutting-edge 
    AI applications that solve real-world problems, from computer vision to 
    natural language processing. My goal is to leverage artificial intelligence 
    to create impactful, scalable solutions.`,
  location: "Vietnam",
  email: "xuantrung@example.com",
  phone: "+84 xxx xxx xxx",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    facebook: "https://facebook.com/yourusername",
  },
};

export const stats = [
  { label: "Projects", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Awards", value: "5+" },
  { label: "Experience", value: "2+ Years" },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Tech Company",
    period: "2024 - Present",
    description:
      "Developing and deploying machine learning models for production systems. Building end-to-end ML pipelines and optimizing model performance.",
    highlights: ["Model Development", "MLOps", "Data Pipeline"],
  },
  {
    role: "Machine Learning Intern",
    company: "AI Startup",
    period: "2023 - 2024",
    description:
      "Worked on computer vision and NLP projects. Contributed to research and development of AI-powered products.",
    highlights: ["Computer Vision", "NLP", "Research"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    period: "2020 - 2024",
    description: "Specialized in Artificial Intelligence and Machine Learning.",
    gpa: "3.5/4.0",
  },
];

export const skills = [
  {
    category: "AI / Machine Learning",
    items: [
      { name: "TensorFlow / Keras", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 88 },
      { name: "Computer Vision (OpenCV)", level: 82 },
      { name: "NLP / Transformers", level: 80 },
      { name: "MLOps / MLflow", level: 75 },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 78 },
      { name: "SQL", level: 82 },
      { name: "C/C++", level: 70 },
      { name: "Java", level: 65 },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "FastAPI / Flask", level: 85 },
      { name: "React", level: 72 },
      { name: "Docker", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "Linux", level: 78 },
    ],
  },
  {
    category: "Data & Cloud",
    items: [
      { name: "Pandas / NumPy", level: 92 },
      { name: "PostgreSQL / MongoDB", level: 80 },
      { name: "AWS / GCP", level: 70 },
      { name: "Apache Spark", level: 65 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Chatbot Assistant",
    description:
      "An intelligent conversational AI chatbot built using Transformer architecture and fine-tuned on custom datasets. Features include context awareness, multi-turn conversation, and sentiment analysis.",
    tags: ["Python", "PyTorch", "Transformers", "FastAPI"],
    category: "AI/ML",
    github: "https://github.com/yourusername/ai-chatbot",
    demo: "https://demo.example.com/chatbot",
    featured: true,
  },
  {
    id: 2,
    title: "Object Detection System",
    description:
      "Real-time object detection system using YOLOv8 for industrial quality inspection. Achieves 98% accuracy with optimized inference pipeline running at 30+ FPS.",
    tags: ["Python", "YOLOv8", "OpenCV", "Docker"],
    category: "AI/ML",
    github: "https://github.com/yourusername/object-detection",
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "Sentiment Analysis Dashboard",
    description:
      "Full-stack web application for real-time sentiment analysis of social media data. Includes interactive visualizations and automated reporting.",
    tags: ["Python", "NLP", "React", "PostgreSQL"],
    category: "Web",
    github: "https://github.com/yourusername/sentiment-dashboard",
    demo: "https://demo.example.com/sentiment",
    featured: true,
  },
  {
    id: 4,
    title: "Image Classification API",
    description:
      "RESTful API for image classification using transfer learning with EfficientNet. Deployed on AWS with auto-scaling capabilities.",
    tags: ["TensorFlow", "FastAPI", "AWS", "Docker"],
    category: "AI/ML",
    github: "https://github.com/yourusername/image-classifier",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    title: "Data Pipeline Framework",
    description:
      "Automated ETL pipeline framework for processing large-scale datasets. Supports batch and stream processing with monitoring dashboard.",
    tags: ["Python", "Apache Spark", "Airflow", "PostgreSQL"],
    category: "Data",
    github: "https://github.com/yourusername/data-pipeline",
    demo: "",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React, Vite, and Tailwind CSS featuring dark luxury design, smooth animations, and responsive layout.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    category: "Web",
    github: "https://github.com/yourusername/portfolio",
    demo: "",
    featured: false,
  },
];

export const honors = [
  {
    title: "Best AI Innovation Award",
    organization: "National Tech Competition",
    year: "2024",
    description:
      "First place for developing an innovative AI-powered solution for healthcare diagnostics at the national technology competition.",
    type: "competition",
  },
  {
    title: "Outstanding Graduate",
    organization: "University Name",
    year: "2024",
    description:
      "Recognized as one of the top graduates in the Computer Science department for academic excellence and research contributions.",
    type: "academic",
  },
  {
    title: "Hackathon Winner",
    organization: "Google Developer Student Clubs",
    year: "2023",
    description:
      "Won first prize at the regional hackathon for building an AI-powered accessibility tool that helps visually impaired users navigate websites.",
    type: "competition",
  },
  {
    title: "Research Paper Published",
    organization: "IEEE Conference",
    year: "2023",
    description:
      "Published research paper on efficient deep learning model compression techniques for edge devices at IEEE international conference.",
    type: "research",
  },
  {
    title: "Dean's List",
    organization: "University Name",
    year: "2022 - 2024",
    description:
      "Consistently maintained a GPA above 3.5, earning a place on the Dean's List for academic excellence throughout the program.",
    type: "academic",
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Honors", path: "/honors" },
  { label: "Contact", path: "/contact" },
];
