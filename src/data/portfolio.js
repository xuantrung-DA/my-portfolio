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
  portfolioLocation: "Ho Chi Minh City",
  targetRoles: ["AI Engineer", "Applied AI Engineer"],
  availability:
    "Open to AI Engineer opportunities — Internship & Part-time",
  expectedGraduation: "June 2027",
  email: "nxt276651@gmail.com",
  phone: "0785656734",
  cvUrl: "/cv/NguyenXuanTrung_AI_Engineer_CV.pdf",
  socials: {
    github: "https://github.com/xuantrung-DA",
    linkedin: "https://www.linkedin.com/in/trung-nguyen-3932b4265/",
  },
};

export const stats = [
  { label: "Current GPA", value: "3.75/4.0" },
  { label: "Projects", value: "6" },
  { label: "Published Papers", value: "2" },
  { label: "Expected Graduation", value: "06/2027" },
];

export const experience = [
  {
    role: "AI Engineer Intern",
    company: "ECE Technology Co., Ltd.",
    period: "01/2026 – 06/2026",
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
    title: "Multimodal Bearing RUL Prediction with WCA-GRU",
    role: "Sole Developer · Second Author",
    period: "06/2026",
    teamSize: 2,
    status: "Under Review at SIMC 2026",
    description:
      "Developed an end-to-end multimodal framework for bearing Remaining Useful Life prediction, combining wavelet-based vibration features with thermal degradation signals through cross-attention and GRU-based temporal modeling.",
    highlights: [
      "Solely implemented the complete research codebase, including preprocessing, model architecture, training, and evaluation pipelines.",
      "Designed a dual-encoder architecture using a 1D CNN for wavelet vibration features and an MLP for bearing-temperature features.",
      "Developed a cross-attention mechanism to condition vibration representations on thermal degradation context.",
      "Applied leakage-aware forward temporal splits and rolling-origin validation.",
      "Achieved an RMSE/MAE of 16.75/15.40 on the S2 split and a PHM Score of 5.52 on rolling-origin evaluation.",
    ],
    tags: [
      "PyTorch",
      "Wavelet Transform",
      "1D CNN",
      "Cross-Attention",
      "GRU",
    ],
    category: "Predictive Maintenance",
    github:
      "https://github.com/xuantrung-DA/bearing-rul-multimodal-eidt-2026",
    researchUrl: "https://www.simc-conf.org/home",
    researchLabel: "SIMC 2026",
    demo: "",
    featured: true,
  },
  {
    id: 2,
    title: "Noise-Robust Vietnamese ASR with Tone-Aware LoRA",
    role: "Team Leader · Error Analysis Lead",
    period: "06/2026 – 07/2026",
    teamSize: 4,
    status: "Completed",
    description:
      "Led a four-member research-oriented project investigating the limitations of current Vietnamese ASR models under clean and noisy conditions, with the long-term goal of developing a more robust Vietnamese speech recognition system.",
    highlights: [
      "Led the team's research direction, experiment coordination, and evaluation workflow.",
      "Conducted Vietnamese-specific error analysis covering word, character, tone, diacritic, final-consonant, and short-word recognition errors.",
      "Evaluated Whisper, PhoWhisper, and tone-aware LoRA models using VIVOS speech, MUSAN noise, and the Vietnamese subset of FLEURS.",
      "Benchmarked models on 2,300 samples across clean speech and noisy conditions at 20, 10, 5, and 0 dB.",
      "The selected PhoWhisper tone-aware LoRA model achieved 12.99% overall WER, 8.37% clean WER, 14.15% noisy WER, and 24.31% WER at 0 dB.",
    ],
    tags: [
      "PyTorch",
      "PhoWhisper",
      "LoRA",
      "Hugging Face",
      "VIVOS",
      "MUSAN",
      "FLEURS",
    ],
    category: "Speech Processing",
    github: "https://github.com/KietIT/SLP",
    demo: "",
    featured: false,
  },
  {
    id: 3,
    title: "AI Career Intelligence Agent",
    role: "Sole Developer",
    period: "07/2026 – Present",
    teamSize: 1,
    status: "In Development",
    description:
      "Building an AI-powered career analysis agent that compares a candidate's CV with job requirements, identifies skill gaps, and generates actionable development plans while serving as an experimentation platform for agentic workflows and token-efficient CV analysis.",
    highlights: [
      "Designed a LangGraph workflow with conditional routing based on the candidate's CV–JD match and identified skill gaps.",
      "Built CV parsing, skill extraction, deterministic Career Fit scoring, project recommendations, a 14-day roadmap, and interview-question generation.",
      "Experimenting with different CV skill-filtering strategies to reduce unnecessary token usage while preserving relevant candidate information.",
      "Using GPT-5 with LangChain and LangGraph to improve practical skills in LLM orchestration and agentic system design.",
      "Developed a FastAPI backend and React dashboard for uploading CVs and reviewing analysis results.",
    ],
    tags: [
      "LangGraph",
      "LangChain",
      "GPT-5",
      "FastAPI",
      "React",
      "PyMuPDF",
    ],
    category: "Agentic AI",
    github: "https://github.com/xuantrung-DA/AI-CAREER-AGENT",
    demo: "",
    featured: true,
  },
  {
    id: 4,
    title: "Secure Login System — Face Anti-Spoofing Module",
    role: "Project Leader · Sole FAS Developer",
    period: "08/2025 – 11/2025",
    teamSize: 4,
    status: "Completed",
    description:
      "Led the development of a secure face-authentication system and independently built its Face Anti-Spoofing module to detect presentation attacks before images enter the face-recognition pipeline.",
    highlights: [
      "Led a four-member team developing the overall Secure Login System.",
      "Independently implemented the complete Face Anti-Spoofing module, including data processing, model development, training, evaluation, and deployment preparation.",
      "Developed a CDCN++ architecture with Spatial Attention to capture spoofing-related facial features.",
      "Compared Spatial Attention and CBAM variants, selecting the Spatial Attention model based on test performance.",
      "Achieved 96.85% test accuracy with an ACER of 0.0316 on CelebA-Spoof.",
      "Exported the trained model to ONNX for integration into the authentication pipeline.",
    ],
    tags: [
      "PyTorch",
      "CDCN++",
      "Spatial Attention",
      "OpenCV",
      "MTCNN",
      "ONNX",
    ],
    category: "Computer Vision",
    github: "https://github.com/xuantrung-DA/Face-Anti-Spoofing",
    demo: "",
    featured: true,
  },
  {
    id: 5,
    title: "Learned Conditional Routing for Multi-Domain UAV Object Detection",
    role: "Data & Detection Engineer",
    period: "05/2026 – 07/2026",
    teamSize: 4,
    status: "Completed · Extension in Progress",
    description:
      "Contributed to a four-member team developing a learned conditional-routing system that selects a specialized object detector for clean, synthetic low-light, or real low-light UAV imagery, with a focus on robust small-object detection.",
    highlights: [
      "Processed, converted, and audited UAV detection datasets for training and evaluation.",
      "Built a YOLO11n slim-P2 detector to improve the representation of small objects in UAV imagery.",
      "Conducted model evaluation, ablation studies, and failure analysis across illumination levels and object-size groups.",
      "Identified that the proposed image enhancer reduced recall across low-light conditions, supporting the decision to remove it from the production path.",
      "The final team system used a 5,755-parameter conditional router with 91.90% balanced routing accuracy and 0.523 ms p95 latency.",
      "The team achieved 0.13916 mAP50 on synthetic low-light LL2 and 0.60492 mAP50 on ExDark while limiting the clean-domain mAP50 reduction to 0.70%.",
      "Specialist detectors exported to TensorRT FP16 reached approximately 412–465 FPS on an RTX 4060 Laptop GPU.",
    ],
    tags: [
      "PyTorch",
      "YOLO11n",
      "Ultralytics",
      "OpenCV",
      "ONNX",
      "TensorRT",
    ],
    category: "Computer Vision",
    github: "https://github.com/xuantrung-DA/DAT301-SU26",
    demo: "",
    featured: false,
  },
  {
    id: 6,
    title:
      "AQB-FAS: Quality–Bitrate Adaptive Face Anti-Spoofing for Edge Devices",
    role: "First Author · Model Architecture & Evaluation",
    period: "04/2026 – 06/2026",
    teamSize: 3,
    status: "Under Review at ICARCV 2026",
    description:
      "Proposed and evaluated AQB-FAS, a split-computing Face Anti-Spoofing framework that converts facial inputs into fixed-bitrate latent representations, balancing presentation-attack detection performance with edge-to-server communication efficiency.",
    highlights: [
      "Proposed the core AQB-FAS idea and model architecture.",
      "Led model evaluation, threshold-policy analysis, metric interpretation, and experimental reporting.",
      "Collaborated with the team to plan model optimization, ablation studies, and edge-deployment experiments.",
      "Reduced the transmitted representation from 150,528 bytes per image to a fixed 64-byte latent payload, achieving a 2,352× compression ratio and a 99.96% reduction in transmitted data.",
      "Reached 97.01% accuracy, 99.52% AUC, and 2.66% ACER using a validation-selected operating threshold.",
      "Measured 9.17 ms average edge-encoder latency and approximately 9.72 ms total compute time on an Intel Arc B580 12 GB.",
      "Evaluated robustness and cross-domain behavior using CelebA-Spoof and an external LCC-FASD benchmark.",
    ],
    tags: [
      "PyTorch XPU",
      "MobileNetV3",
      "Quantization",
      "Split Computing",
      "CelebA-Spoof",
      "Intel Arc B580",
    ],
    category: "Computer Vision",
    github: "https://github.com/xuantrung-DA/Paper-2026",
    researchUrl: "https://www.carvs-icarcv.org/",
    researchLabel: "ICARCV 2026",
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
    title: "Published Paper — Springer LNCS / LNAI",
    organization: "AI 2025: Advances in Artificial Intelligence · Volume 16370",
    year: "2026",
    description:
      '“Weather Forecasting System ‘Four Seasons in One Day’ and Shelter Suggestion for Sydney and Melbourne and Canberra.”',
    authors: "My, N.H.; Trung, N.X.; Phong, P.N.M.; Thu, L.V.M.",
    publishedDate: "25 November 2025",
    doi: "10.1007/978-981-95-4969-6_33",
    credentialUrl:
      "https://link.springer.com/chapter/10.1007/978-981-95-4969-6_33",
    type: "research",
  },
  {
    title: "Published Paper — Springer LNEE",
    organization: "EIDT 2025: Explainable Intelligence in Digital Twins · Volume 1531",
    year: "2026",
    description:
      '“Optimizing YOLOv11n for Real-Time Object Detection: Leveraging Quantization and Model Optimization.”',
    authors: "Minh, P.A.; Phat, N.T.; Kiet, T.V.; Trung, N.X.; Le, P.N.",
    publishedDate: "1 May 2026",
    doi: "10.1007/978-981-95-6111-7_13",
    credentialUrl:
      "https://link.springer.com/chapter/10.1007/978-981-95-6111-7_13",
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
