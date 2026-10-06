// Central source of truth for portfolio content.
// Content is based on Nguyen Xuan Trung's CV and supplied certificates.

export const personalInfo = {
  name: "Nguyễn Xuân Trung",
  title: "AI Engineer",
  taglines: [
    "Applied AI Engineer",
    "Computer Vision Practitioner",
    "LLM Application Builder",
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
  positioning:
    "AI Engineer focused on evidence-grounded multimodal and RAG systems—combining computer vision, model optimization, and reliable backend engineering.",
  currentFocus: "Evidence-grounded multimodal & RAG systems",
  availability: "Available part-time now · Full-time from July 2027",
  availabilityDetail:
    "Part-time through June 2027 · Full-time from July 2027",
  expectedGraduation: "June 2027",
  email: "nxt276651@gmail.com",
  phone: "0785656734",
  cvUrl: "/cv/Nguyen-Xuan-Trung-AI-Engineer-CV.pdf",
  socials: {
    github: "https://github.com/xuantrung-DA",
    linkedin: "https://www.linkedin.com/in/trung-nguyen-3932b4265/",
  },
};

export const experience = [
  {
    role: "AI Engineer Intern",
    company: "ECE Technology Co., Ltd.",
    period: "01/2026 – 04/2026",
    project: "AI for E-Commerce Platform (MVP v1)",
    description:
      "Developed the applied-AI layer for an e-commerce MVP, from product segmentation and market intelligence to a deployed microservice.",
    responsibilities: [
      "Built an RFM-based product segmentation module using Mini-Batch K-Means, with 7-day sales velocity and 30-day performance labels.",
      "Developed a Gemini and SerpAPI workflow for market research, trend summarization, and structured business recommendations.",
      "Built FastAPI endpoints backed by PostgreSQL, then Dockerized and deployed the AI microservice to AWS EC2.",
    ],
    highlights: [
      "Mini-Batch K-Means",
      "Gemini",
      "SerpAPI",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
    ],
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
    category: "Programming & ML Tools",
    items: ["Python", "SQL", "PyTorch", "TensorFlow", "scikit-learn", "OpenCV"],
  },
  {
    category: "AI Domains",
    items: [
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Reinforcement Learning",
      "Multimodal Learning",
      "Time-Series Modeling",
    ],
  },
  {
    category: "LLM & Agentic Systems",
    items: [
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation (RAG)",
      "Tool Calling",
    ],
  },
  {
    category: "Backend & Engineering",
    items: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SQL Server",
      "ETL Pipelines",
      "Git",
    ],
  },
  {
    category: "Languages & Strengths",
    items: ["English (B2)", "Analytical Thinking", "Problem Solving"],
  },
];

export const projects = [
  {
    id: 7,
    slug: "tracevision-evidence-grounded-video-search",
    title: "TraceVision: Evidence-Grounded Video Search",
    role: "Independent AI Engineer",
    period: "2026",
    teamSize: 1,
    status: "Working prototype",
    description:
      "Developed TraceVision, a local-first video investigation system that indexes objects, tracks, speech, and visual embeddings, then answers English and Vietnamese queries through multimodal retrieval and selective vision-language inference, with timestamped citations and routing diagnostics.",
    metrics: [
      { value: "52.3×", label: "cache-reuse speedup" },
      { value: "34.3 ms", label: "local query p95" },
      { value: "87.5%", label: "query-plan match" },
    ],
    highlights: [
      "Built a local-first video investigation system that combines object detection and tracking, speech transcription, and visual embeddings into a persistent, timestamped evidence index.",
      "Implemented content-addressed, stage-level caching with dependency-aware invalidation, enabling unchanged evidence to be reused across repeated indexing runs and questions.",
      "Developed rule-based English and Vietnamese query planning with explicit intents, entities, attributes, and time windows; achieved 87.5% full-plan match on 40 authored evaluation queries.",
      "Combined structured evidence, transcript search, and image–text similarity to retrieve candidate time intervals before selecting a bounded set of frames for visual reasoning.",
      "Implemented heuristic routing between structured answers and optional VLM inference, with schema validation, citation-consistency checks, and inspectable routing diagnostics.",
      "Measured a 52.3× warm-cache indexing speedup across 15 short videos on an RTX 4050 Laptop GPU, with 24.2 ms p50 and 34.3 ms p95 warm direct-node structured-query latency.",
      "Built a FastAPI and React workspace with shared LangGraph workflow nodes, stage-level profiling, reproducible evaluation scripts, and regression coverage for orchestration, caching, retrieval, and provider boundaries.",
    ],
    tags: [
      "Python",
      "PyTorch",
      "YOLO11n",
      "faster-whisper",
      "OpenCLIP",
      "SQLite",
      "FAISS",
      "LangGraph",
      "FastAPI",
      "React",
    ],
    category: "Multimodal AI",
    github: "https://github.com/xuantrung-DA/TraceVision",
    visualImage:
      "/images/projects/tracevision-evidence-grounded-video-search.svg",
    visualAlt:
      "TraceVision architecture showing cached local multimodal indexing into a persistent evidence store, followed by bilingual query planning, multimodal retrieval, heuristic routing, optional VLM inference, and timestamped cited answers",
    visualCaption:
      "TraceVision local-first indexing and evidence-grounded investigation workflow",
    visualWidth: 1800,
    visualHeight: 640,
    visualTheme: "light",
    measurementScope:
      "Cache speedup measures reuse of persisted outputs. Query latency excludes HTTP, LangGraph orchestration, and VLM inference. Query-plan match measures parsing correctness, not answer accuracy. External VLM calls were disabled during the recorded local benchmark.",
    caseStudy: {
      problem:
        "Turn local video into inspectable evidence that can answer bounded English and Vietnamese questions without rerunning every model for each query.",
      dataset:
        "Local benchmark: 15 short videos, 389.18 seconds of input and 372 sampled frames. Query planning used 80 development queries and a separate 40-query authored evaluation split.",
      baseline:
        "The routing audit compared the heuristic router with an always-VLM label baseline; retrieval also keeps structured, transcript, and visual-similarity paths independently inspectable.",
      evaluation:
        "RTX 4050 Laptop GPU, Python 3.12 and PyTorch 2.6.0+cu124. Warm query latency is direct-node only; OCR and external VLM calls were disabled for the recorded local-model run.",
      tradeoffs:
        "Rule-based bilingual planning and heuristic score fusion are predictable and cheap, but support fewer paraphrases than an LLM planner and do not prove answer sufficiency.",
      limitations:
        "Short-clip evaluation, approximately 1 FPS default sampling, no frame-perfect timing guarantee, no public-service authentication boundary, and three false-sufficient decisions among 12 cheap routes.",
      engineering:
        "Content-addressed stage caches, dependency-aware invalidation, schema and citation checks, bounded provider retries, routing diagnostics, stage profiling, and 133 reported regression tests.",
      reproduction:
        "The repository documents Python 3.12 setup, constrained installation, a model-free smoke path, optional local-model extras, evaluation scripts, and published raw benchmark records.",
    },
    demo: "",
    featured: true,
    featuredRank: 2,
  },
  {
    id: 8,
    slug: "subject-knowledge-hub-version-aware-pdf-rag",
    title: "Subject Knowledge Hub: Version-Aware PDF RAG",
    role: "Independent AI Engineer",
    period: "2026",
    teamSize: 1,
    status: "Working application · Local Docker Compose",
    description:
      "Developed Subject Knowledge Hub, a full-stack RAG application for Vietnamese and English PDFs, combining subject-scoped retrieval, version-aware page citations, and resumable document ingestion with bounded AI tools and inspectable evaluation results.",
    metrics: [
      { value: "25.3%", label: "fewer input tokens" },
      { value: "41.0 s", label: "1,000-page local test" },
      { value: "3/3", label: "jobs recovered" },
    ],
    highlights: [
      "Built a full-stack PDF knowledge application for Vietnamese and English study material, with authenticated accounts, subject-scoped conversations, and citations linked to exact document versions and physical pages.",
      "Implemented document deduplication and version replacement with atomic activation, preserving the previous usable version when ingestion fails and keeping historical citations tied to their original sources.",
      "Developed resumable Celery ingestion with PostgreSQL checkpoints, advisory locks, and embedding-cache reuse; applied ownership, subject, active-version, and embedding-space filters before retrieval ranking.",
      "Reduced provider input tokens by 25.3% through page-boundary chunking on 70 held-out synthetic bilingual questions, while maintaining 100% page-evidence Recall@6 on the 56 answerable cases.",
      "Processed a 1,000-page synthetic PDF using real OpenAI embeddings in 41.0 seconds, including three retrieval checks; added three new pages in one embedding batch without reindexing the existing 1,000 chunks.",
      "Recovered all three interrupted ingestion jobs without duplicate chunks in controlled Celery process-kill tests, using fixture embeddings and a ten-second stale-job threshold.",
      "Integrated bounded document tools, token and call budgets, usage accounting, and an evaluation workspace; verified backup/restore consistency across 17 table fingerprints and 35 PDF hashes in a separate local deployment.",
    ],
    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Celery",
      "Redis",
      "OpenAI",
      "Docker Compose",
      "Playwright",
    ],
    category: "LLM & RAG",
    github: "https://github.com/xuantrung-DA/Subject-Knowledge-Hub",
    visualImage:
      "/images/projects/subject-knowledge-hub-version-aware-pdf-rag.svg",
    visualAlt:
      "Subject Knowledge Hub architecture showing authenticated PDF admission, resumable Celery ingestion, a versioned PostgreSQL and pgvector index, scoped retrieval, bounded OpenAI responses, and version-specific source-page citations",
    visualCaption:
      "Subject Knowledge Hub version-aware ingestion and evidence-grounded RAG workflow",
    visualWidth: 1800,
    visualHeight: 640,
    visualTheme: "light",
    measurementScope:
      "Token and scale measurements used synthetic material. The 41.0-second result includes ingestion and three retrieval checks with real embeddings. Recovery was tested separately using fixture embeddings. Page-evidence recall does not measure answer accuracy; these local results are not production guarantees.",
    caseStudy: {
      problem:
        "Keep PDF answers scoped to the correct user, subject, active document version, and physical source page while making long-running ingestion recoverable.",
      dataset:
        "Seventy held-out synthetic bilingual questions for the chunking comparison, 56 answerable cases for page Recall@6, a synthetic 1,000-page PDF for scale, and a fixed 100-question QASPER subset for external retrieval.",
      baseline:
        "Page-boundary chunking was paired against a cross-page baseline on the same questions; dense, lexical, and reciprocal-rank-fusion retrieval modes were also reported separately.",
      evaluation:
        "The 41.0-second local result includes ingestion plus three retrieval checks with real OpenAI embeddings. Recovery used real Celery, PostgreSQL and Redis with fixture embeddings and a ten-second stale threshold.",
      tradeoffs:
        "Atomic version activation and durable checkpoints preserve citation history and recoverability, at the cost of more database state, worker coordination, and explicit embedding-space migrations.",
      limitations:
        "Synthetic token and scale material, text-bearing PDFs only, 0% lexical recall on measured natural-language subsets, three false refusals, and no production concurrency or uptime claim.",
      engineering:
        "Durable jobs, advisory locks, reconciliation, embedding-cache reuse, bounded tools and retries, usage budgets, backup/restore verification, 90 backend tests, and two Chromium application flows.",
      reproduction:
        "Docker Compose starts PostgreSQL/pgvector, Redis, FastAPI, Celery and React. The repository separates test stacks, requires explicit paid-benchmark opt-in, and documents backup, restore, evaluation, and browser checks.",
    },
    demo: "",
    featured: true,
    featuredRank: 3,
  },
  {
    id: 9,
    slug: "decision-aware-trajectory-utility-offline-rl",
    title: "DATU: Decision-Aware Trajectory Utility in Offline RL",
    role: "Independent Research Engineer",
    period: "2026",
    teamSize: 1,
    status: "Original study complete · Source released",
    description:
      "Developed DATU, a nonnegative offline ranking proxy for identifying trajectories that support consequential, weakly represented decisions, then evaluated its removal utility across matched PointMaze datasets and four offline-RL learners.",
    metrics: [
      { value: "+10.0 pp", label: "matched-support IQL gap" },
      { value: "86/86", label: "full-training jobs" },
      { value: "17.8M", label: "gradient updates" },
    ],
    highlights: [
      "Formulated empirical group-removal utility and implemented DATU as an offline proxy combining decision sensitivity, ensemble disagreement, and local support contribution.",
      "Built matched PointMaze dataset conditions that controlled trajectory count, return, action statistics, and global coverage while varying decision-critical support.",
      "Implemented and audited a frozen 86-job experiment matrix spanning BC, IQL, ReBRAC, and a CQL diagnostic, totaling 17.8 million downstream gradient updates.",
      "Measured a +10.0 percentage-point paired IQL success gap across five seeds for critical-high versus critical-low support, with a BCa 95% interval of [+4.0, +18.0] pp.",
      "Found positive top-DATU removal utility for IQL (+13.3 pp) and ReBRAC (+11.7 pp), while reporting that ranking superiority was algorithm-dependent rather than universal.",
      "Implemented frozen manifests and hashes, final-checkpoint evaluation, corrected paired bootstrap analysis, resumable matrix execution, checkpoint recovery, and non-finite-loss aborts.",
      "Published source, configs, unit tests, smoke checks, and ordered reproduction commands; historical datasets, checkpoints, and result archives remain external to the repository.",
    ],
    tags: [
      "Python",
      "PyTorch",
      "Offline RL",
      "IQL",
      "ReBRAC",
      "CQL",
      "Behavior Cloning",
      "D4RL",
      "Minari",
      "SciPy",
    ],
    category: "Reinforcement Learning",
    github:
      "https://github.com/xuantrung-DA/Decision-Aware-Trajectory-Utility-in-Offline-RL",
    visualImage:
      "/images/projects/datu-offline-rl-architecture.svg",
    visualAlt:
      "DATU offline reinforcement learning architecture showing matched PointMaze trajectories, a fixed IQL reference ensemble, three offline utility components, frozen trajectory rankings, downstream policy training, and paired group-removal evaluation",
    visualCaption:
      "DATU offline scoring and frozen group-removal evaluation workflow",
    visualWidth: 1800,
    visualHeight: 640,
    visualTheme: "light",
    measurementScope:
      "The +10.0 pp result is a five-seed paired IQL comparison on one frozen D4RL/PointMaze medium construction using a shared 20-episode evaluation panel. The 86 jobs and 17.8M updates cover the completed original matrix; the separate five-member reference scorer adds 500k updates. Results are algorithm-dependent, not evidence of universal DATU superiority, and historical run artifacts are not distributed in the source-only repository.",
    caseStudy: {
      problem:
        "Estimate which offline trajectories matter because removing them changes the quality of a learned policy, without using online rollout outcomes to choose the groups.",
      dataset:
        "D4RL/pointmaze/medium-v2; four frozen matched conditions with 180 trajectories each. Removal interventions delete 40 trajectories from the reference condition.",
      baseline:
        "Reward density, rarity, and global coverage, evaluated beside DATU over the frozen intervention groups; BC, IQL, ReBRAC, and CQL define downstream learner boundaries.",
      evaluation:
        "Final checkpoints only; 20 shared evaluation episodes per seed, 250-step cap, paired training seeds, and corrected SciPy BCa intervals with 10,000 resamples.",
      tradeoffs:
        "A fixed IQL reference ensemble makes scoring fully offline and reusable, but the score is not algorithm-conditioned and fitting five critics costs an additional 500k updates.",
      limitations:
        "One PointMaze construction, small seed counts, overlapping removal groups, approximate local-support search, incomplete retrained ablations, and no universal ranking advantage over reward density.",
      engineering:
        "Frozen configuration signatures, dataset and preregistration hashes, explicit execute/resume controls, stable job IDs, periodic and interruption checkpoints, NaN/Inf aborts, and matrix-integrity tests.",
      reproduction:
        "Python 3.11 reference environment. Run Ruff, Pytest, and the matrix plan check before manually downloading the Minari dataset and following the ordered preparation, scoring, preregistration, and training commands in the repository README.",
    },
    demo: "",
    featured: true,
    featuredRank: 4,
  },
  {
    id: 1,
    slug: "multimodal-bearing-rul-wca-gru",
    title: "Multimodal Bearing RUL Prediction with WCA-GRU",
    role: "Sole Developer · Second Author",
    period: "06/2026",
    teamSize: 2,
    status: "Accepted at SIMC 2026 · Springer LNEE",
    description:
      "Developed an end-to-end multimodal framework for bearing Remaining Useful Life prediction, combining wavelet-based vibration features with thermal degradation signals through cross-attention and GRU-based temporal modeling.",
    metrics: [
      { value: "16.75", label: "RMSE on S2" },
      { value: "15.40", label: "MAE on S2" },
      { value: "5.52", label: "PHM score" },
    ],
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
    visualImage:
      "/images/projects/bearing-rul-wca-gru-architecture.webp",
    visualAlt:
      "WCA-GRU architecture combining wavelet vibration features and temperature features through cross-attention before GRU-based RUL prediction",
    visualCaption:
      "WCA-GRU multimodal architecture",
    visualWidth: 1993,
    visualHeight: 789,
    measurementScope:
      "RMSE and MAE are reported for the S2 split. The PHM score comes from rolling-origin evaluation under leakage-aware temporal splits; these are predictive-quality metrics, not deployment latency or cross-dataset guarantees.",
    demo: "",
    featured: false,
  },
  {
    id: 2,
    slug: "noise-robust-vietnamese-asr-tone-aware-lora",
    title: "Noise-Robust Vietnamese ASR with Tone-Aware LoRA",
    role: "Team Leader · Error Analysis Lead",
    period: "06/2026 – 07/2026",
    teamSize: 4,
    status: "Completed",
    description:
      "Led a four-member research-oriented project investigating the limitations of current Vietnamese ASR models under clean and noisy conditions, with the long-term goal of developing a more robust Vietnamese speech recognition system.",
    metrics: [
      { value: "12.99%", label: "overall WER" },
      { value: "8.37%", label: "clean WER" },
      { value: "24.31%", label: "WER at 0 dB" },
    ],
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
    visualImage:
      "/images/projects/vietnamese-asr-tone-aware-lora-wer-ablation.webp",
    visualAlt:
      "Six-panel WER ablation comparing the ordinary model with tone-aware LoRA objectives under clean, 20 dB, 10 dB, 5 dB, 0 dB, and aggregated noisy conditions",
    visualCaption:
      "Tone-aware LoRA WER ablation across clean and noisy conditions",
    visualWidth: 1681,
    visualHeight: 936,
    measurementScope:
      "WER was evaluated on 2,300 samples using VIVOS, MUSAN noise, and the Vietnamese subset of FLEURS across clean, 20, 10, 5, and 0 dB conditions. The 24.31% figure is specifically the 0 dB subset.",
    demo: "",
    featured: false,
  },
  {
    id: 4,
    slug: "secure-login-face-anti-spoofing",
    title: "Secure Login System — Face Anti-Spoofing Module",
    role: "Project Leader · Sole FAS Developer",
    period: "08/2025 – 11/2025",
    teamSize: 4,
    status: "Completed",
    description:
      "Led the development of a secure face-authentication system and independently built its Face Anti-Spoofing module to detect presentation attacks before images enter the face-recognition pipeline.",
    metrics: [
      { value: "96.85%", label: "FAS accuracy" },
      { value: "3.16%", label: "ACER" },
      { value: "ONNX", label: "deployment format" },
    ],
    highlights: [
      "Led a four-member team developing the overall Secure Login System.",
      "Independently implemented the complete Face Anti-Spoofing module, including data processing, model development, training, evaluation, and deployment preparation.",
      "Implemented CDCN++ variants with Spatial Attention and CBAM to compare attention mechanisms for spoof detection.",
      "Compared both variants on the test benchmark; the repository reports CBAM as the strongest model, so this is documented as a post-hoc test-set comparison rather than unbiased model selection.",
      "Achieved 96.85% test accuracy with an ACER of 0.0316 on CelebA-Spoof.",
      "Exported the selected CBAM checkpoint to ONNX for integration into the authentication pipeline.",
    ],
    tags: [
      "PyTorch",
      "CDCN++",
      "CBAM",
      "OpenCV",
      "MTCNN",
      "ONNX",
    ],
    category: "Computer Vision",
    github: "https://github.com/xuantrung-DA/Face-Anti-Spoofing",
    visualImage:
      "/images/projects/secure-login-cdcn-spatial-attention-architecture.webp",
    visualAlt:
      "CDCN face anti-spoofing architecture comparing Spatial Attention and CBAM variants before ONNX export",
    visualCaption:
      "CDCN attention variants for face anti-spoofing",
    visualWidth: 1619,
    visualHeight: 972,
    measurementScope:
      "Accuracy and ACER are repository-reported CelebA-Spoof test results. Spatial Attention and CBAM were compared on the test benchmark, so the comparison is post-hoc rather than an unbiased final test; ONNX denotes export format, not measured deployment speed.",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    slug: "learned-conditional-routing-uav-detection",
    title: "Learned Conditional Routing for Multi-Domain UAV Object Detection",
    role: "Data & Detection Engineer",
    period: "05/2026 – 07/2026",
    teamSize: 4,
    status: "Submitted to RIVF 2026",
    description:
      "Contributed to a four-member team developing a learned conditional-routing system that selects a specialized object detector for clean, synthetic low-light, or real low-light UAV imagery, with a focus on robust small-object detection.",
    metrics: [
      { value: "0.523 ms", label: "router p95" },
      { value: "91.90%", label: "balanced accuracy" },
      { value: "412–465", label: "TensorRT FPS" },
    ],
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
    visualImage:
      "/images/projects/uav-conditional-routing-system-overview.webp",
    visualAlt:
      "Learned conditional-routing architecture that sends each UAV frame to one of three specialist YOLO11n detectors, with router, low-light detection, ExDark, and TensorRT deployment results",
    visualCaption:
      "Learned conditional routing architecture and multi-domain evaluation",
    visualWidth: 1672,
    visualHeight: 941,
    visualTheme: "dark",
    measurementScope:
      "Router latency and balanced accuracy describe the 5,755-parameter routing component. TensorRT FP16 throughput was measured for specialist detectors on an RTX 4060 Laptop GPU and is not the end-to-end routed pipeline rate; mAP values are domain-specific.",
    demo: "",
    featured: false,
  },
  {
    id: 6,
    slug: "aqb-fas-edge-face-anti-spoofing",
    title:
      "AQB-FAS: Quality–Bitrate Adaptive Face Anti-Spoofing for Edge Devices",
    role: "First Author · Model Architecture & Evaluation",
    period: "04/2026 – 06/2026",
    teamSize: 3,
    status: "Submitted to RIVF 2026",
    description:
      "Proposed and evaluated AQB-FAS, a split-computing Face Anti-Spoofing framework that converts facial inputs into fixed-bitrate latent representations, balancing presentation-attack detection performance with edge-to-server communication efficiency.",
    metrics: [
      { value: "2,352×", label: "payload compression" },
      { value: "97.01%", label: "accuracy" },
      { value: "9.17 ms", label: "edge encoder" },
    ],
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
    researchUrl: "",
    researchLabel: "RIVF 2026",
    visualImage:
      "/images/projects/aqb-fas-architecture.webp",
    visualAlt:
      "AQB-FAS split-computing architecture with a MobileNetV3 encoder, bottleneck projector, uniform quantizer, receiver MLP, and multi-task prediction heads",
    visualCaption:
      "AQB-FAS quality–bitrate adaptive split-computing architecture",
    visualWidth: 1491,
    visualHeight: 1055,
    measurementScope:
      "Payload compression compares a 64-byte z64/b8 serialized latent with a 150,528-byte 224×224 RGB input. Accuracy and ACER use a validation-selected operating threshold on the CelebA-Spoof test split. The 9.17 ms figure is edge-encoder compute on an Intel Arc B580, not network or end-to-end request latency.",
    caseStudy: {
      problem:
        "Reduce edge-to-server communication for face anti-spoofing while preserving an explicit, testable presentation-attack detection interface.",
      dataset:
        "CelebA-Spoof with identity-disjoint training and validation indexes, a held-out test split, and LCC-FASD for external stress evaluation.",
      baseline:
        "Full-image MobileNetV3, bottleneck and auxiliary-head ablations, equal-payload JPEG/WebP and downsampling codecs, plus quantized and projected MobileNet feature baselines.",
      evaluation:
        "Test metrics use validation-selected thresholds. Byte-level payloads come from the serialized representation; edge profiling reports encoder, quantizer, receiver and total compute separately on Intel Arc B580 XPU.",
      tradeoffs:
        "A fixed 64-byte latent sharply reduces communication but introduces a representation bottleneck and separates model compute from network latency and server-side execution.",
      limitations:
        "Source-domain results do not guarantee cross-domain robustness; validation was more optimistic than test performance, and external stress results must be interpreted separately from the headline CelebA-Spoof metric.",
      engineering:
        "Resumable training, validation-only threshold policies, byte-level serialization checks, multi-seed and bootstrap tooling, corruption tests, network simulation, profiling, and leakage diagnostics.",
      reproduction:
        "The repository documents dataset indexing, baseline and AQB training, resume behavior, held-out testing, artifact generation, profiling, and CPU/CUDA/XPU configuration paths.",
    },
    demo: "",
    featured: true,
    featuredRank: 1,
  },
];

export const honors = [
  {
    title: "Academic Excellence Recognition",
    organization: "FPT University",
    year: "2023–2026",
    description:
      "Earned Top 100 Excellent Student recognition in two completed semesters and Honor Student recognition in the other five.",
    completedSemesters: 7,
    honorSemesters: 5,
    gpa: "3.75/4.0",
    academicHighlights: [
      {
        label: "Top 100 Excellent Students",
        count: "2 semesters",
        semesters: ["Summer 2025", "Fall 2025"],
      },
      {
        label: "Honor Student",
        count: "5 semesters",
        coverage: "Other five completed semesters",
      },
    ],
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
    statusLabel: "Published",
    doi: "10.1007/978-981-95-4969-6_33",
    credentialUrl:
      "https://link.springer.com/chapter/10.1007/978-981-95-4969-6_33",
    linkLabel: "View publication",
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
    statusLabel: "Published",
    doi: "10.1007/978-981-95-6111-7_13",
    credentialUrl:
      "https://link.springer.com/chapter/10.1007/978-981-95-6111-7_13",
    linkLabel: "View publication",
    type: "research",
  },
  {
    title: "Accepted Paper — IEEE ICARCV 2026",
    organization:
      "ICARCV 2026 · 19th International Conference on Control, Automation, Robotics and Vision",
    year: "2026",
    description:
      '“CounterFail-Edge: Compact Black-Box Verification of Robotic Manipulation from Before–After Images and Instructions.”',
    authors:
      "Hoai My Nguyen; Xuan Trung Nguyen; Anh Minh Phan; Nguyen Minh Phong Pham; Ha Anh Vu",
    acceptedDate: "19 August 2026",
    paperId: "232",
    status: "Accepted",
    statusLabel: "Accepted at ICARCV 2026",
    credentialUrl: "https://www.carvs-icarcv.org/",
    linkLabel: "Conference website",
    type: "research",
  },
  {
    title: "Accepted Paper — Springer LNEE",
    organization:
      "SIMC 2026 · Special Thematic Symposium of EIDT 2026 · Springer LNEE",
    year: "2026",
    description:
      '“A Multimodal Framework for Bearing Remaining Useful Life Prediction Using Wavelet Cross-Attention GRU.”',
    authors: "Anh Minh Phan; Xuan Trung Nguyen; Le Phu Nguyen",
    acceptedDate: "2 August 2026",
    paperId: "1571301735",
    status: "Accepted",
    statusLabel: "Accepted at SIMC 2026",
    credentialUrl: "https://www.simc-conf.org/",
    linkLabel: "Conference website",
    type: "research",
  },
  {
    title: "Submitted Short Paper — EAI FISAT 2026",
    organization:
      "EAI FISAT 2026 · EAI FPT International Conference on Intelligent Systems and Advanced Technologies",
    year: "2026",
    description:
      "“TinyConformalAD: A Compact TCN Autoencoder with a Split-Conformal Alarm-Scoring Interface.”",
    authors:
      "Anh Minh Phan; Hoai My Nguyen; Xuan Trung Nguyen; Nguyen Minh Phong Pham; Dang Thanh Ngan Ngo",
    paperType: "Short paper",
    status: "Accepted",
    statusLabel: "Accepted at FISAT 2026",
    credentialUrl: "https://fisat.eai-conferences.org/2026/",
    linkLabel: "Conference website",
    type: "research",
  },
  {
    title: "Submitted Manuscript — RIVF 2026",
    organization:
      "RIVF 2026 · 20th International Conference on Computing and Communication Technologies",
    year: "2026",
    description:
      '“Attribute-Guided Quantized Bottlenecks for Bandwidth-Efficient Split-Computing Face Anti-Spoofing.”',
    authors:
      "Xuan Trung Nguyen; Vy Kiet Trinh; Thanh Phat Nguyen; Ha Anh Vu",
    status: "Submitted",
    statusLabel: "Submitted to RIVF 2026",
    credentialUrl: "https://rivf2026.org/",
    linkLabel: "Conference website",
    type: "research",
  },
  {
    title: "Submitted Manuscript — RIVF 2026",
    organization:
      "RIVF 2026 · 20th International Conference on Computing and Communication Technologies",
    year: "2026",
    description:
      '“Lightweight Conditional Routing for Multi-Domain Object Detection in Low-Light UAV Imagery.”',
    authors:
      "Hoai My Nguyen; Xuan Trung Nguyen; Anh Minh Phan; Nguyen Minh Phong Pham; Ha Anh Vu",
    status: "Submitted",
    statusLabel: "Submitted to RIVF 2026",
    credentialUrl: "https://rivf2026.org/",
    linkLabel: "Conference website",
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
    title: "AI Engineer Professional Specialization",
    issuer: "Packt",
    date: "07/2026",
    type: "Specialization",
    skills: [
      "AI Engineering",
      "Deep Learning",
      "AI Agents",
      "Model Optimization",
    ],
    priority: 1,
    credentialUrl:
      "https://coursera.org/verify/specialization/6J4SFXR6XNEH",
  },
  {
    title: "Gradient to Production: MLOps & Model Serving Specialization",
    issuer: "Coursera",
    date: "07/2026",
    type: "Specialization",
    skills: ["MLOps", "Model Serving", "Production AI", "Model Deployment"],
    priority: 2,
    credentialUrl:
      "https://coursera.org/verify/specialization/4ZEFB8QBVQ3H",
  },
  {
    title: "Natural Language Processing",
    issuer: "DeepLearning.AI",
    date: "04/2026",
    type: "Specialization",
    skills: ["NLP", "Sequence Models", "Attention", "Transformers"],
    priority: 3,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/1V0NB10PQJ8Z?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
  },
  {
    title: "Foundations of Model Optimization and Deep Learning",
    issuer: "Packt",
    date: "06/2026",
    type: "Course",
    skills: ["Model Optimization", "Deep Learning", "Neural Networks"],
    priority: 4,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/8R3ABB65M4GU",
  },
  {
    title: "AI Agents and MLOps for Production-Ready AI",
    issuer: "Packt",
    date: "07/2026",
    type: "Course",
    skills: ["AI Agents", "MLOps", "Production AI", "Agent Deployment"],
    priority: 5,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/JPJIIRRE8UGW",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "11/2025",
    type: "Course",
    skills: ["Deep Learning", "Neural Networks", "Backpropagation"],
    priority: 6,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/W5FF12EC0BE1?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Data Science Fundamentals with Python and SQL",
    issuer: "IBM",
    date: "03/2025",
    type: "Specialization",
    skills: ["Python", "SQL", "Data Science", "Statistics", "Jupyter"],
    priority: 7,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/ONF0050FPX27",
  },
  {
    title: "Application Development using Microservices and Serverless",
    issuer: "IBM",
    date: "10/2025",
    type: "Course",
    skills: [
      "Microservices",
      "Serverless",
      "Cloud-Native",
      "Application Development",
    ],
    priority: 8,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/5MF1R15M91CY",
  },
  {
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM",
    date: "10/2025",
    type: "Course",
    skills: ["Docker", "Kubernetes", "OpenShift", "Containers"],
    priority: 9,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/HLMM0JU7X2LQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    date: "09/2025",
    type: "Course",
    skills: ["Cloud Computing", "IaaS", "PaaS", "SaaS"],
    priority: 10,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/WYDPLGA8BCQA",
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    date: "03/2025",
    type: "Course",
    skills: ["SQL", "Relational Databases", "Python", "Data Analysis"],
    honors: true,
    priority: 11,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/RYC5F16GL4OG",
  },
  {
    title: "Software Development Lifecycle",
    issuer: "University of Minnesota",
    date: "05/2025",
    type: "Specialization",
    skills: ["Software Engineering", "SDLC", "Agile", "Lean", "Secure Software"],
    priority: 12,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/WXX62A3ZD8J8",
  },
  {
    title: "Project Management Principles and Practices",
    issuer: "University of California, Irvine",
    date: "07/2026",
    type: "Specialization",
    skills: [
      "Project Management",
      "Project Planning",
      "Risk Management",
      "Team Leadership",
    ],
    priority: 13,
    credentialUrl:
      "https://coursera.org/share/ec56a968914753e9ae5ded937fceaf2b",
  },
];

export const navLinks = [
  { label: "Home", path: "#home" },
  { label: "Work", path: "#work" },
  { label: "Experience", path: "#experience" },
  { label: "Capabilities", path: "#capabilities" },
  { label: "Research", path: "#research" },
  { label: "About", path: "#about" },
];
