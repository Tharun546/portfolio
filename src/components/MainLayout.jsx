import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  IconHome2,
  IconBriefcase,
  IconFolder,
  IconTool,
  IconSchool,
  IconMail,
  IconCertificate,
  IconMenu2,
  IconX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconArrowUpRight,
  IconMapPin,
} from "../icons";

/* ================================================================
   SITE DATA — edit content here, not inside the components
   ================================================================ */
const asset = (path) => path.startsWith("http") || path.startsWith("data:") ? path : import.meta.env.BASE_URL + path;

const LINKS = {
  github: "https://github.com/adpth",
  linkedin: "https://www.linkedin.com/in/tharunpasupuleti",
  email: "tharun14714@gmail.com",
  phone: "+1 (219) 408-7343",
  location: "McLean, VA, USA",
};

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: IconHome2 },
  { id: "experience", label: "Experience", icon: IconBriefcase },
  { id: "projects", label: "Projects", icon: IconFolder },
  { id: "skills", label: "Skills", icon: IconTool },
  { id: "certifications", label: "Certs", icon: IconCertificate },
  { id: "education", label: "Education", icon: IconSchool },
  { id: "contact", label: "Contact", icon: IconMail },
];

const CORE_STACK = [
  "Python",
  "FastAPI",
  "LangChain",
  "RAG",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "Docker",
  "AWS",
  "React",
];

const EXPERIENCES = [
  {
    title: "Graduate Student Employee",
    company: "Purdue University Northwest",
    location: "Hammond, IN, USA",
    bullets: [
      "Architected the Python/FastAPI backend for an AI-assisted aerospace learning platform — REST endpoints connecting a React frontend to document-processing, retrieval, and LLM content-generation services, structured for reuse across lab modules.",
      "Built a retrieval-augmented generation (RAG) workflow that grounds LLM answers in approved course material: Python ingestion pipelines, vector-based semantic retrieval, dynamic prompt construction, and response validation to cut unsupported answers.",
      "Orchestrated LLM interactions with LangChain — prompt templating, async API handling, and structured output parsing — with resilient handling of API failures, malformed responses, and heterogeneous document structures.",
      "Reworked the asset and data-loading pipeline around deferred/lazy loading, reducing 3D asset latency ~25% and keeping AI and processing work off the initial render path; shipped reusable FastAPI service and React component patterns that cut new-module turnaround from days to hours (~40% less build effort).",
    ],
    date: "Oct 2025 – Jan 2026",
    link: "https://www.pnw.edu/",
  },
  {
    title: "Software Engineer",
    company: "Accenture",
    location: "India",
    bullets: [
      "Built and maintained Python backend services with FastAPI and Django — RESTful APIs, request validation, and structured response handling over PostgreSQL and SQL Server.",
      "Optimized database-heavy endpoints with indexing, query restructuring, pagination, and caching, improving API response times ~30% under concurrent load.",
      "Integrated LLM APIs and RAG workflows into enterprise application flows — retrieving application data and source content before model calls, with prompt engineering and output validation to keep responses grounded.",
      "Contributed to 13 production releases on Jenkins/Docker CI/CD, helping cut deployment failures ~15% through stronger pre-deploy validation and automated tests; wrote unit and integration tests with pytest.",
    ],
    date: "Feb 2024 – Aug 2024",
    link: "https://www.accenture.com/",
  },
  {
    title: "Software Engineer",
    company: "Airbnb",
    location: "India",
    bullets: [
      "Developed Python REST APIs (FastAPI, Flask) for booking, search, availability, and user workflows on a large-scale marketplace, refactoring legacy services into modular data-access, business-logic, and API layers.",
      "Built RAG-oriented workflows with vector-based semantic retrieval and metadata filtering, plus Python data pipelines that normalized heterogeneous records into model-ready context and validated structured LLM outputs before they reached downstream services.",
      "Cut primary property-search latency from ~300ms to ~40ms via compound and 2dsphere geospatial indexes, aggregation pipelines, pagination, and selective field retrieval.",
      "Prevented double-bookings under peak load with optimistic concurrency (document versioning) and idempotent reservation handling keyed on unique request IDs.",
      "Hardened API boundaries with request validation, JWT auth, and rate limiting on search/auth endpoints; tuned Docker layer caching to speed CI builds.",
    ],
    date: "Mar 2021 – Jan 2024",
    link: "https://airbnb.com/",
  }
];

const PROJECT_CATEGORIES = ["All", "AI & LLM", "Backend & APIs", "Data Pipelines", "Full-Stack"];

const PROJECTS = [
  {
    title: "QueryPilot",
    role: "Solo build",
    desc: "Agentic Text-to-SQL system that answers natural language questions over SQL databases with autonomous schema exploration, query formulation, and error-driven self-repair.",
    impact: "LangGraph state machine with 2-layer read-only security (AST parsing + SQLite URI mode); automated evaluation harness measures execution accuracy & repair rates against benchmark ground truth with an enforced CI regression gate.",
    image: "querypilot_arch.svg",
    link: "",
    featured: true,
    status: "Production",
    tags: ["Agentic AI", "LangGraph", "Eval Harness"],
    tech: ["Python 3.12", "LangGraph", "FastAPI", "SQLite", "Pydantic", "pytest", "GitHub Actions"],
    category: ["AI & LLM", "Backend & APIs", "Data Pipelines"],
  },
  {
    title: "RepoMind",
    role: "Solo build",
    desc: "Full-stack platform for context-aware conversations with any GitHub repo, built on a Retrieval-Augmented Generation architecture.",
    impact: "Indexes 500+ file repositories in under 60s; pgvector nearest-neighbour search plus SSE token streaming delivers sub-200ms first-token responses with clickable source citations.",
    image: "repomind_arch.svg",
    link: "",
    featured: true,
    status: "Production",
    tags: ["RAG", "LLM"],
    tech: ["Java 21", "Spring Boot", "Spring AI", "PostgreSQL", "pgvector", "OpenAI API", "Next.js"],
    category: ["AI & LLM", "Backend & APIs"],
  },
  {
    title: "TaskPilot AI",
    role: "Solo build",
    desc: "Autonomous planning service that turns natural-language goals into structured, dependency-aware task roadmaps.",
    impact: "FastAPI backend enforces a strict JSON schema with Pydantic validation and an automatic retry loop; recursive PostgreSQL CTEs traverse the dependency graph in one round trip.",
    image: "taskpilot_arch.svg",
    link: "https://github.com/adpth/TaskPilot-AI",
    featured: true,
    status: "Production",
    tags: ["AI SaaS", "LLM"],
    tech: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Supabase", "Gemini AI"],
    category: ["AI & LLM", "Backend & APIs", "Full-Stack"],
  },
  {
    title: "SprintForge",
    role: "Solo build",
    desc: "AI Kanban that breaks high-level goals into prioritized, human-in-the-loop task roadmaps.",
    impact: "Server-side LLM calls validated against strongly typed schemas before any insert; Prisma connection pooling via PgBouncer keeps serverless load stable.",
    image: "sprintforge_arch.svg",
    link: "https://github.com/adpth/SprintForge",
    featured: true,
    status: "Production",
    tags: ["AI SaaS"],
    tech: ["Next.js 15", "TypeScript", "Google Generative AI", "Prisma", "PostgreSQL"],
    category: ["AI & LLM", "Full-Stack"],
  },
  {
    title: "AI NotebookLM Clone",
    role: "Solo build",
    desc: "Document-intelligence platform: upload PDFs and text, then get AI summaries, document-grounded Q&A, and auto-generated podcast-style audio.",
    impact: "Decoupled Next.js + FastAPI architecture with multi-stage LangChain pipelines, JsonOutputParser-enforced structured outputs, and RAG grounding over uploaded sources.",
    image: "notebooklm_arch.svg",
    link: "",
    featured: true,
    status: "Production",
    tags: ["RAG", "LLM"],
    tech: ["Python", "FastAPI", "LangChain", "Google Gemini", "Next.js", "Coqui TTS"],
    category: ["AI & LLM", "Backend & APIs"],
  },
  {
    title: "Smart Receipt & Expense Tracker",
    role: "Solo build",
    desc: "Cross-platform mobile app that uses multimodal AI to extract and categorize receipt data from a single photo.",
    impact: "500+ test receipts at 95% extraction accuracy via Gemini Vision with sub-2s latency; FastAPI + Pydantic validation layer with automatic retry on malformed model output.",
    image: "receipt_tracker_arch.svg",
    link: "",
    featured: true,
    status: "Production",
    tags: ["Multimodal AI"],
    tech: ["React Native", "Python", "FastAPI", "Gemini Vision", "PostgreSQL", "Supabase"],
    category: ["AI & LLM", "Backend & APIs"],
  },
  {
    title: "TweetMind v2",
    role: "Solo build",
    desc: "Modular Python pipeline that collects social data, detects trends, and generates structured insights and draft content with an LLM.",
    impact: "Separated ingestion, normalization, trend detection, generation, and Notion sync stages; defensive REST integration plus a pytest suite with mocked services running in under 1s.",
    image: "tweetmind_arch.svg",
    link: "https://github.com/adpth/TweetMind",
    featured: true,
    status: "Production",
    tags: ["Data Pipeline", "LLM"],
    tech: ["Python 3.12", "Gemini API", "Apify API", "Notion API", "pytest"],
    category: ["AI & LLM", "Data Pipelines"],
  },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "Bash", "HTML5", "CSS3"],
    core: ["Python", "SQL", "TypeScript"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Async Programming",
      "Auth (JWT / OAuth2)",
      "Rate Limiting",
    ],
    core: ["FastAPI", "Flask", "Django", "REST APIs", "Microservices"],
  },
  {
    title: "Generative AI & LLM",
    skills: [
      "LLM APIs (OpenAI, Gemini)",
      "RAG",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "AI Agents / Agentic AI",
      "Vector Databases (pgvector)",
      "Embeddings",
      "Structured Outputs",
    ],
    core: ["RAG", "LangChain", "LLM APIs (OpenAI, Gemini)", "Prompt Engineering", "Vector Databases (pgvector)"],
  },
  {
    title: "Data & Pipelines",
    skills: [
      "ETL",
      "Data Pipelines",
      "Pandas",
      "NumPy",
      "Data Validation",
      "API Data Ingestion",
      "Web Scraping",
      "Celery",
    ],
    core: ["ETL", "Data Pipelines", "Pandas"],
  },
  {
    title: "Databases & Storage",
    skills: [
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Redis",
      "SQLAlchemy",
      "Alembic",
    ],
    core: ["PostgreSQL", "pgvector", "Redis", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "Linux",
    ],
    core: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Testing & Observability",
    skills: [
      "Pytest",
      "unittest",
      "Jest",
      "Integration Testing",
      "API Testing",
      "Logging",
      "Monitoring",
      "Error Handling",
    ],
    core: ["Pytest", "Integration Testing", "Monitoring"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion"],
    core: ["React", "Next.js"],
  },
];

const CERTIFICATIONS = [
  {
    title: "Android Basics in Kotlin",
    issuer: "Google",
    desc: "Android fundamentals, UI components, background processing, and app architecture with Kotlin.",
    date: "Certified",
    link: "https://smartinternz.com/internships/google_stu_certificates/7515989d1c2f94c0cf8c5e4aefd3d12b",
  },
  {
    title: "Google Cloud Big Data & Machine Learning Fundamentals",
    issuer: "Google Cloud · Coursera",
    desc: "Big data processing, scalable cloud pipelines, and ML workflows using BigQuery and Vertex AI.",
    date: "Certified",
    link: "https://www.coursera.org/account/accomplishments/verify/A8HQQ6Z5L6R9",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    desc: "Relational database modeling, complex SQL query optimization, indexing strategies, and schema normalization.",
    date: "Certified",
    link: "",
  },
  {
    title: "MERN Stack Internship",
    issuer: "Accenture",
    desc: "Enterprise full-stack application development, asynchronous processing, REST APIs, and microservices.",
    date: "Certified",
    link: "",
  },
  {
    title: "Meta Full Stack Developer: Front-End & Back-End from Scratch Specialization",
    issuer: "Meta · Coursera",
    desc: "End-to-end full stack software development: React, Django, database architecture, RESTful APIs, and CI/CD pipelines.",
    date: "Certified",
    link: "",
  },
];

const EDUCATION = [
  {
    degree: "M.S. in Computer Science (GPA: 3.52)",
    school: "Purdue University Northwest",
    date: "Aug 2024 – May 2026",
    bullets: [
      "Key Coursework: Artificial Intelligence, Distributed Systems, Advanced Algorithms, Database Management Systems",
      "Graduate Student Employee — built the FastAPI + RAG backend and React frontend for an AI-assisted aerospace learning platform used by 150+ engineering students",
      "Focus: backend engineering, LLM/RAG application systems, and distributed cloud computing",
    ],
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "KITSW (Kakatiya Institute of Technology & Science)",
    date: "June 2019 – June 2023",
    bullets: [
      "President, CSEA (Aug 2022 – Apr 2023) · Joint Secretary (Aug 2021) · Executive Member (Nov 2020)",
      "Co-founded Fudoo — production mobile app on Google Play Store with 1,000+ weekly transactions",
      "Developed TSRTC Medaram Jathara app — government-recognized public transit app serving 15,000+ commuters",
    ],
  },
];

/* ================================================================
   ANIMATION VARIANTS
   ================================================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const sectionViewport = { once: true, margin: "-80px" };

/* ================================================================
   MAIN LAYOUT
   ================================================================ */
const MainLayout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    // Delay to ensure DOM elements exist
    const timer = setTimeout(() => {
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5]">
      <a href="#home" className="skip-link">Skip to content</a>

      {/* ===== Mobile Top Bar ===== */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-[#1e1e1e]">
        <div className="flex items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-3">
            <img
              src={asset("tharun.webp")}
              alt="Tharun Pasupuleti"
              width="32"
              height="32"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#2563eb]/30"
            />
            <span className="font-semibold text-sm tracking-tight heading-font">
              Tharun Pasupuleti
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200 focus-ring cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </header>

      {/* ===== Mobile Drawer ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed left-0 top-0 bottom-0 w-[280px] bg-[#0a0a0a] border-r border-[#1e1e1e] z-50 lg:hidden overflow-y-auto scrollbar-hide"
            >
              <SidebarContent
                activeSection={activeSection}
                onNavigate={scrollToSection}
                onClose={() => setMobileMenuOpen(false)}
                isMobile
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[260px] flex-col bg-[#0a0a0a] border-r border-[#1e1e1e]/60 z-30">
        <SidebarContent
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />
      </aside>

      {/* ===== Main Scrollable Content ===== */}
      <main className="lg:ml-[260px] min-h-screen pt-14 lg:pt-0">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <HeroSection onContact={scrollToSection} />
          <div className="section-divider" />
          <ExperienceSection />
          <div className="section-divider" />
          <ProjectsSection />
          <div className="section-divider" />
          <SkillsSection />
          <div className="section-divider" />
          <CertificationsSection />
          <div className="section-divider" />
          <EducationSection />
          <div className="section-divider" />
          <ContactSection />
        </div>

        {/* Footer */}
        <footer className="border-t border-[#1e1e1e] mt-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#5c5c66] text-xs">
              © {new Date().getFullYear()} Tharun Pasupuleti
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

/* ================================================================
   SIDEBAR — Shared between Desktop and Mobile
   ================================================================ */
const SidebarContent = ({ activeSection, onNavigate, onClose, isMobile }) => (
  <div className="flex flex-col h-full px-5 py-7">
    {isMobile && (
      <div className="flex justify-end mb-4">
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200 focus-ring cursor-pointer"
          aria-label="Close menu"
        >
          <IconX size={18} />
        </button>
      </div>
    )}

    {/* Profile */}
    <div className="flex flex-col items-center text-center mb-8">
      <div className="relative mb-3">
        <img
          src={asset("tharun.webp")}
          alt="Tharun Pasupuleti"
          width="96"
          height="96"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-2 ring-[#2563eb]/20 ring-offset-2 ring-offset-[#0a0a0a]"
        />
        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#34d399] rounded-full border-2 border-[#0a0a0a] status-pulse" />
      </div>
      <h2 className="text-base font-bold tracking-tight heading-font">
        Tharun Pasupuleti
      </h2>
      <p className="text-xs text-[#a1a1aa] mt-0.5 font-medium">
        Backend & AI Engineer
      </p>
      <div className="flex items-center gap-1 mt-1">
        <IconMapPin size={11} className="text-[#5c5c66]" />
        <p className="text-[10px] text-[#5c5c66] font-medium">
          McLean, VA · Open to relocation (US)
        </p>
      </div>
      <div className="mt-2.5 px-2.5 py-0.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/25 text-[10px] text-[#7ab2ff] font-mono font-medium">
        F-1 OPT · STEM Eligible
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex-1" aria-label="Main navigation">
      <ul className="flex flex-col gap-0.5">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <button
              onClick={() => onNavigate(id)}
              className={`sidebar-nav-link w-full ${activeSection === id ? "active" : ""}`}
              aria-current={activeSection === id ? "true" : undefined}
            >
              <span className="nav-indicator" />
              <Icon size={15} className="shrink-0" />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>

    {/* LinkedIn CTA */}
    <div className="mt-6 mb-5">
      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noreferrer"
        className="btn-primary w-full uppercase tracking-wide text-xs"
      >
        <IconBrandLinkedin size={15} />
        Connect on LinkedIn
      </a>
    </div>

    {/* Social */}
    <div className="flex items-center justify-center gap-5 pt-4 border-t border-[#1e1e1e]">
      <a
        href={LINKS.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="text-[#5c5c66] hover:text-[#f4f4f5] transition-colors duration-200 focus-ring"
      >
        <IconBrandGithub size={18} />
      </a>
      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-[#5c5c66] hover:text-[#7ab2ff] transition-colors duration-200 focus-ring"
      >
        <IconBrandLinkedin size={18} />
      </a>
      <a
        href={`mailto:${LINKS.email}`}
        aria-label="Email"
        className="text-[#5c5c66] hover:text-[#7ab2ff] transition-colors duration-200 focus-ring"
      >
        <IconMail size={18} />
      </a>
    </div>
  </div>
);

/* ================================================================
   HERO
   ================================================================ */
const HERO_STATS = [
  { n: "15K+", label: "Commuters & users served" },
  { n: "75%", label: "Max DB latency cut (recursive CTEs)" },
  { n: "~30%", label: "API latency reduction" },
  { n: "13", label: "Production releases delivered" },
];

const HeroSection = ({ onContact }) => (
  <section id="home" className="pt-10 pb-16 lg:pt-20 lg:pb-20">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      {/* Headline */}
      <motion.div variants={fadeUp}>
        <p className="kicker mb-3">Target Roles: Backend Engineer · AI &amp; LLM Systems Engineer · Full-Stack Software Engineer</p>
        <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] heading-font">
          High-performance backend services and LLM architectures
          <br />
          <span className="gradient-text">engineered for production.</span>
        </h1>
      </motion.div>

      {/* Bio */}
      <motion.div variants={fadeUp} className="max-w-2xl space-y-3">
        <p className="text-[#a1a1aa] text-[15px] leading-relaxed">
          I'm a backend and AI engineer with 3+ years of experience building resilient Python microservices, distributed data pipelines, and production RAG/LLM applications. At Airbnb and Accenture, I architected RESTful APIs, optimized database bottlenecks under heavy concurrent load, and integrated AI-assisted workflows into core products.
        </p>
        <p className="text-[#71717a] text-sm leading-relaxed">
          Holding an <span className="text-[#f4f4f5] font-medium">M.S. in Computer Science from Purdue University Northwest (GPA: 3.52)</span>, I specialize in the full lifecycle of intelligent services—from API schema design and async queue workers to vector database indexing (pgvector), strict Pydantic validation loops, and containerized cloud deployment on AWS &amp; Docker.
        </p>
      </motion.div>

      {/* Core stack readout */}
      <motion.div variants={fadeUp}>
        <p className="text-[10px] font-mono text-[#5c5c66] uppercase tracking-[0.15em] mb-2">
          Core stack
        </p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Core technology stack">
          {CORE_STACK.map((s) => (
            <li key={s} className="stack-chip">{s}</li>
          ))}
        </ul>
      </motion.div>

      {/* Stats */}
      <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
        {HERO_STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex items-baseline gap-2 px-4 py-2.5 rounded-lg bg-[#111] border border-[#1e1e1e] hover:border-[#2e2e2e] transition-colors duration-200"
          >
            <span className="text-xl metric text-[#7ab2ff]">{stat.n}</span>
            <span className="text-[11px] text-[#71717a] font-medium uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="btn-primary">
          <IconBrandLinkedin size={16} />
          Connect on LinkedIn
        </a>
        <button onClick={() => onContact("contact")} className="btn-secondary">
          <IconMail size={16} />
          Get in touch
        </button>
        <div className="flex items-center gap-4 sm:ml-2">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-[#f4f4f5] font-medium transition-colors duration-200 focus-ring"
          >
            <IconBrandGithub size={16} />
            GitHub
            <IconArrowUpRight size={13} className="text-[#5c5c66]" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

/* ================================================================
   SECTION HEADING — Reusable
   ================================================================ */
const SectionHeading = ({ kicker, children, sub }) => (
  <div className="mb-8">
    {kicker && <p className="kicker mb-2">{kicker}</p>}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight heading-font">
      {children}
    </h2>
    {sub && <p className="text-[#71717a] text-sm mt-2 max-w-md">{sub}</p>}
  </div>
);

/* ================================================================
   EXPERIENCE
   ================================================================ */
const ExperienceSection = () => (
  <section id="experience" className="py-12">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading kicker="experience">Where I've worked</SectionHeading>
      </motion.div>

      <div className="flex flex-col gap-2">
        {EXPERIENCES.map((exp, i) => {
          const CardWrapper = exp.link ? motion.a : motion.div;
          const wrapperProps = exp.link
            ? { href: exp.link, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <CardWrapper
              key={`${exp.company}-${exp.title}`}
              variants={fadeUp}
              custom={i}
              {...wrapperProps}
              className={`group p-5 sm:p-6 ${
                exp.link ? "card-interactive" : "card-static"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-base font-bold text-[#f4f4f5] group-hover:text-[#7ab2ff] transition-colors duration-200 heading-font flex items-center gap-1.5">
                    {exp.title}
                    {exp.link && (
                      <IconArrowUpRight size={14} className="text-[#5c5c66] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </h3>
                  <p className="text-[#a1a1aa] text-sm font-medium">
                    {exp.company}
                    {exp.location && (
                      <span className="text-[#5c5c66] text-xs font-normal ml-2">
                        · {exp.location}
                      </span>
                    )}
                  </p>
                </div>
                <span className="text-[#5c5c66] text-xs font-mono shrink-0 mt-0.5 sm:mt-1">
                  {exp.date}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-[#a1a1aa] text-sm leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#2563eb] mt-2 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </CardWrapper>
          );
        })}
      </div>

      {/* Leadership */}
      <motion.div variants={fadeUp} className="mt-6">
        <p className="text-[10px] font-mono text-[#5c5c66] uppercase tracking-[0.15em] mb-2 px-5">
          Leadership
        </p>
        <div className="card-static p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
            <div>
              <h3 className="text-base font-bold text-[#f4f4f5] heading-font">
                President
              </h3>
              <p className="text-[#a1a1aa] text-sm">
                Computer Science Engineering Association (CSEA)
              </p>
            </div>
            <span className="text-[#5c5c66] text-xs font-mono shrink-0">
              Aug 2022 – Apr 2023
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-[#a1a1aa] text-sm leading-relaxed flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#2563eb] mt-2 shrink-0" />
              Led technical initiatives, workshops, and coding competitions for 200+ CS students as elected President
            </p>
            <p className="text-[#71717a] text-xs leading-relaxed flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[#3f3f46] mt-1.5 shrink-0" />
              Previously Joint Secretary (Aug 2021 – Jul 2022) · Executive Member (Nov 2020 – Jul 2021)
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

/* ================================================================
   PROJECTS
   ================================================================ */
const FeaturedProjectCard = ({ project: p }) => {
  const Wrapper = p.link ? "a" : "div";
  const wrapperProps = p.link
    ? { href: p.link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group card-static overflow-hidden flex flex-col h-full hover:border-[#2563eb]/40 ${
        p.link ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Media band */}
      <div className="project-media">
        <img src={asset(p.image)} alt={`${p.title} preview`} loading="lazy" decoding="async" />
        {p.status && <span className="media-status">{p.status}</span>}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-[#f4f4f5] group-hover:text-[#7ab2ff] transition-colors duration-200 heading-font flex items-center gap-1.5">
          {p.title}
          {p.link && (
            <IconArrowUpRight size={14} className="text-[#5c5c66] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}
        </h3>
        <span className="text-[11px] font-mono text-[#5c5c66] mt-0.5">
          {p.role}
        </span>

        <p className="text-[#a1a1aa] text-sm mt-2 leading-relaxed">{p.desc}</p>
        <p className="text-[#71717a] text-xs mt-1.5 leading-relaxed">
          <span className="text-[#7ab2ff] font-semibold uppercase tracking-wide text-[10px]">Impact</span>{" "}
          {p.impact}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
          {p.tags.map((t) => (
            <span key={t} className="tag tag-success">{t}</span>
          ))}
          {p.tech.map((t) => (
            <span key={t} className="tag tag-accent">{t}</span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const CompactProjectRow = ({ project: p }) => {
  const Wrapper = p.link ? "a" : "div";
  const wrapperProps = p.link
    ? { href: p.link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group card-interactive p-4 sm:px-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 ${
        p.link ? "" : "cursor-default"
      }`}
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold text-[#f4f4f5] group-hover:text-[#7ab2ff] transition-colors duration-200 heading-font flex items-center gap-1.5">
          {p.isWip && <span className="w-2 h-2 rounded-full bg-[#fbbf24] status-pulse shrink-0" />}
          {p.title}
          {p.link && (
            <IconArrowUpRight size={13} className="text-[#5c5c66] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}
        </h3>
        <p className="text-[#a1a1aa] text-xs mt-0.5 leading-relaxed">{p.desc}</p>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 sm:justify-end sm:max-w-[45%]">
        {p.isWip && <span className="tag tag-warning">In development</span>}
        {p.tech.slice(0, 3).map((t) => (
          <span key={t} className="tag tag-neutral">{t}</span>
        ))}
      </div>
    </Wrapper>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const matchesFilter = (p) =>
    activeCategory === "All" || p.category.includes(activeCategory);

  const featured = PROJECTS.filter((p) => p.featured && matchesFilter(p));
  const others = PROJECTS.filter((p) => !p.featured && matchesFilter(p));

  return (
    <section id="projects" className="py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            kicker="projects"
            sub="Production backends, LLM/RAG applications, and data pipelines — with the stack behind each."
          >
            What I've built
          </SectionHeading>
        </motion.div>

        {/* Category filter */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter projects by category">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus-ring cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#111] text-[#a1a1aa] hover:bg-[#1a1a1a] hover:text-[#f4f4f5] border border-[#1e1e1e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured grid */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AnimatePresence mode="popLayout">
              {featured.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <FeaturedProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* More builds */}
        {others.length > 0 && (
          <div className={featured.length > 0 ? "mt-8" : ""}>
            <p className="text-[10px] font-mono text-[#5c5c66] uppercase tracking-[0.15em] mb-2 px-1">
              More builds
            </p>
            <div className="flex flex-col gap-2">
              <AnimatePresence mode="popLayout">
                {others.map((p) => (
                  <motion.div
                    key={p.title}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CompactProjectRow project={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {featured.length === 0 && others.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
            <p className="text-[#71717a]">No projects in this category yet.</p>
          </motion.div>
        )}

        {/* Archive Link */}
        <motion.div variants={fadeUp} className="mt-8">
          <Link
            to="/archive/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-[#7ab2ff] font-semibold transition-colors duration-200 focus-ring group"
          >
            View full project archive
            <IconArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ================================================================
   SKILLS
   ================================================================ */
const SkillsSection = () => (
  <section id="skills" className="py-12">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading
          kicker="skills"
          sub="Backend, data, and LLM tooling I reach for in production — highlighted items are day-to-day."
        >
          Engineering toolkit
        </SectionHeading>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SKILL_GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            custom={i}
            className="card-static p-4 sm:p-5"
          >
            <h3 className="text-sm font-bold text-[#f4f4f5] mb-3 heading-font">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className={`tag ${group.core.includes(s) ? "tag-core" : "tag-neutral"}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

/* ================================================================
   CERTIFICATIONS
   ================================================================ */
const CertificationsSection = () => (
  <section id="certifications" className="py-12">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading kicker="certifications">Verified credentials</SectionHeading>
      </motion.div>

      <div className="flex flex-col gap-2.5">
        {CERTIFICATIONS.map((c, i) => {
          const Wrapper = c.link ? motion.a : motion.div;
          const wrapperProps = c.link
            ? { href: c.link, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <Wrapper
              key={c.title}
              variants={fadeUp}
              custom={i}
              {...wrapperProps}
              className={`group card-interactive p-5 sm:p-6 ${c.link ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[#f4f4f5] group-hover:text-[#7ab2ff] transition-colors duration-200 heading-font flex items-center gap-1.5">
                    {c.title}
                    {c.link && (
                      <IconArrowUpRight size={14} className="text-[#5c5c66] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                    )}
                  </h3>
                  <p className="text-xs text-[#71717a] font-medium mt-0.5">
                    {c.issuer}
                  </p>
                </div>
                <div className="shrink-0">
                  {c.link ? (
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#2563eb]/10 text-[#7ab2ff] border border-[#2563eb]/20">
                      Verify Credential
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1e1e1e] text-[#a1a1aa] border border-[#2e2e2e]">
                      Verified
                    </span>
                  )}
                </div>
              </div>
              <p className="text-[#a1a1aa] text-sm mt-2 leading-relaxed">
                {c.desc}
              </p>
            </Wrapper>
          );
        })}
      </div>
    </motion.div>
  </section>
);

/* ================================================================
   EDUCATION
   ================================================================ */
const EducationSection = () => (
  <section id="education" className="py-12">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading kicker="education">Academic background</SectionHeading>
      </motion.div>

      <div className="flex flex-col gap-3">
        {EDUCATION.map((e, i) => (
          <motion.div
            key={e.degree}
            variants={fadeUp}
            custom={i}
            className="card-static p-5 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base font-bold text-[#f4f4f5] heading-font">
                  {e.degree}
                </h3>
                <p className="text-sm text-[#7ab2ff] font-medium">{e.school}</p>
              </div>
              <span className="text-xs text-[#5c5c66] font-mono shrink-0 mt-0.5 sm:mt-1">
                {e.date}
              </span>
            </div>
            <ul className="space-y-2">
              {e.bullets.map((b) => (
                <li key={b} className="text-[#a1a1aa] text-sm leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#2563eb] mt-2 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

/* ================================================================
   CONTACT
   ================================================================ */
const ContactSection = () => (
  <section id="contact" className="py-12">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading
          kicker="contact"
          sub="Open to full-time backend, Python, and AI engineering roles. I usually reply within a day."
        >
          Let's build something
        </SectionHeading>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <a
          href={`mailto:${LINKS.email}`}
          className="group flex items-center gap-4 p-5 rounded-xl border border-[#1e1e1e] hover:border-[#2563eb]/30 hover:bg-[#111] transition-all duration-200 focus-ring"
        >
          <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2563eb]/15 transition-colors duration-200">
            <IconMail size={18} className="text-[#7ab2ff]" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#f4f4f5]">Email</p>
            <p className="text-xs text-[#71717a] truncate">{LINKS.email}</p>
          </div>
        </a>

        <a
          href={`tel:${LINKS.phone.replace(/[^0-9+]/g, "")}`}
          className="group flex items-center gap-4 p-5 rounded-xl border border-[#1e1e1e] hover:border-[#2563eb]/30 hover:bg-[#111] transition-all duration-200 focus-ring"
        >
          <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2563eb]/15 transition-colors duration-200">
            <IconMapPin size={18} className="text-[#7ab2ff]" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#f4f4f5]">Direct Phone</p>
            <p className="text-xs text-[#71717a] truncate">{LINKS.phone}</p>
          </div>
        </a>

        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 p-5 rounded-xl border border-[#1e1e1e] hover:border-[#2563eb]/30 hover:bg-[#111] transition-all duration-200 focus-ring"
        >
          <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2563eb]/15 transition-colors duration-200">
            <IconBrandLinkedin size={18} className="text-[#7ab2ff]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#f4f4f5]">LinkedIn</p>
            <p className="text-xs text-[#71717a]">tharunpasupuleti</p>
          </div>
        </a>

        <a
          href={LINKS.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 p-5 rounded-xl border border-[#1e1e1e] hover:border-[#2e2e2e] hover:bg-[#111] transition-all duration-200 focus-ring"
        >
          <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] flex items-center justify-center shrink-0 group-hover:bg-[#222] transition-colors duration-200">
            <IconBrandGithub size={18} className="text-[#f4f4f5]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#f4f4f5]">GitHub</p>
            <p className="text-xs text-[#71717a]">github.com/adpth</p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-5 rounded-xl border border-[#1e1e1e] bg-[#111]">
          <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center shrink-0">
            <IconMapPin size={18} className="text-[#7ab2ff]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#f4f4f5]">Location</p>
            <p className="text-xs text-[#71717a]">McLean, VA (US Relocation &amp; Remote)</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 rounded-xl border border-[#1e1e1e] bg-[#111]">
          <div className="w-10 h-10 rounded-lg bg-[#34d399]/10 flex items-center justify-center shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#34d399] status-pulse" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#f4f4f5]">Work Authorization</p>
            <p className="text-xs text-[#34d399]">F-1 OPT (STEM Eligible · Immediate Start)</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default MainLayout;
