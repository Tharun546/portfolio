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
  IconFileDownload,
  IconBrandGithub,
  IconBrandLinkedin,
  IconArrowUpRight,
  IconMapPin,
  IconTrophy,
} from "@tabler/icons-react";

/* ================================================================
   SITE DATA — edit content here, not inside the components
   ================================================================ */
const asset = (path) => import.meta.env.BASE_URL + path;

const LINKS = {
  github: "https://rebrand.ly/adpth",
  linkedin: "https://rebrand.ly/linkedinLnk",
  // TODO: point at a hosted resume PDF (e.g. public/resume.pdf → asset("resume.pdf"))
  resume: "https://rebrand.ly/linkedinLnk",
  email: "tharun.p147@gmail.com",
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
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "AWS",
];

const EXPERIENCES = [
  {
    title: "Graduate Research Assistant",
    company: "Purdue University Northwest",
    bullets: [
      "Designed and built an interactive 3D aerospace learning platform end-to-end, serving 150+ students across engineering curricula",
      "Architected a responsive React frontend integrating X3D/X3DOM graphics engines, reducing 3D model loading latency by 25% through asset optimization (GLB/GLTF parsing)",
      "Created a library of reusable UI components, cutting laboratory module creation time for faculty by 40%",
      "Partnered directly with faculty and researchers to ship reliable, deployment-ready software under tight academic deadlines",
    ],
    date: "Aug 2024 – May 2026",
    link: "https://www.pnw.edu/",
  },
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    bullets: [
      "Engineered React and Node.js enterprise features on Agile delivery teams, delivering secure, high-compliance applications for global clients",
      "Cut client-side latency by 20% by implementing code splitting, lazy loading, and state-management optimizations",
      "Improved API performance by 30% through SQL query indexing and Redis database caching",
      "Owned CI/CD deployment workflows and resolved live production issues, reducing deployment failures by 15%",
    ],
    date: "Feb 2024 – Aug 2024",
    link: "https://www.accenture.com/",
  },
];

const PROJECT_CATEGORIES = ["All", "AI & Data", "Web & SaaS", "Mobile Apps", "EdTech"];

const PROJECTS = [
  {
    title: "TaskPilot AI",
    role: "Solo build",
    desc: "An autonomous AI task-planning SaaS that decomposes complex user goals into dynamically scheduled sub-tasks.",
    impact: "Implemented structured LLM outputs using Gemini API and dynamic dependency graphs to auto-schedule tasks. Built with Next.js, FastAPI, and PostgreSQL.",
    date: "Apr – May 2026",
    image: "taskpilot_thumbnail.png",
    link: "https://github.com/adpth/TaskPilot-AI",
    featured: true,
    status: "Production",
    tags: ["AI SaaS"],
    tech: ["Next.js", "React 19", "FastAPI", "PostgreSQL", "Gemini AI"],
    category: ["Web & SaaS", "AI & Data"],
  },
  {
    title: "X3D-VR for Aerospace",
    role: "Graduate research",
    desc: "Interactive browser-based 3D visualization platform for aerospace engineering curricula.",
    impact: "Directly adopted by the Aerospace department at Purdue NW. Rendered 3D GLB turbine models dynamically using X3DOM and React.",
    date: "Oct 2025 – Jan 2026",
    image: "aerospace_thumbnail_final.png",
    link: "https://xreal-xperienz.org/x3d/beta/index.html",
    featured: true,
    status: "Live",
    tags: ["EdTech"],
    tech: ["X3D", "X3DOM", "GLB", "React"],
    category: ["Web & SaaS", "EdTech"],
  },
  {
    title: "Fudoo",
    role: "Co-founder",
    desc: "A real-time, multi-vendor food ordering mobile application shipped to the Google Play Store.",
    impact: "Co-founded and scaled the mobile app to 500+ active student users. Implemented Firebase Realtime DB and AWS microservices to cut checkout transaction latency by 30%.",
    date: "Jun 2023 – Aug 2024",
    image: "fudoo_thumbnail.png",
    link: "https://play.google.com/store/apps/details?id=com.kitsw.canteen",
    featured: true,
    status: "Play Store",
    tags: ["Production"],
    tech: ["React Native", "Firebase", "Node.js", "AWS"],
    category: ["Mobile Apps"],
  },
  {
    title: "TSRTC Medaram Jathara",
    role: "Lead developer",
    desc: "Government-backed transit and navigation app for one of India's largest religious gatherings (10M+ attendees).",
    impact: "Served 15,000+ active commuters with real-time GPS tracking. Awarded official recognition by the State Transport Corporation (TSRTC).",
    date: "Jan – Feb 2022",
    image: "tsrtc_logo.webp",
    link: "https://rebrand.ly/fphf08l",
    featured: true,
    status: "Govt. recognized",
    tags: ["Public Utility"],
    tech: ["Java", "Firebase", "MySQL", "Google Cloud"],
    category: ["Mobile Apps"],
  },
  {
    title: "FeedbackFlow",
    role: "Solo build",
    desc: "Web platform for teams to collect, manage, and embed user feedback widgets.",
    impact: "Reduced feedback collection setup from hours to minutes using a custom script embed.",
    date: "Sep – Dec 2024",
    image: "feedback_flow_logo.png",
    link: "",
    tags: ["SaaS"],
    tech: ["React.js", "Node.js", "MongoDB"],
    category: ["Web & SaaS"],
  },
  {
    title: "ShortLnk",
    role: "Solo build",
    desc: "Production-ready URL shortener service built with the MERN stack.",
    impact: "Deployed and working end-to-end with optimized redirects and custom analytics dashboard.",
    date: "2024",
    image: "",
    link: "https://github.com/adpth/ShortLnk",
    tags: ["Full-stack", "Utility"],
    tech: ["Node.js", "MongoDB", "React.js", "Express.js"],
    category: ["Web & SaaS"],
  },
  {
    title: "Wevento",
    role: "Co-developer",
    desc: "Location-based events discovery mobile app using native Android technology.",
    impact: "Connected users to nearby events in real time with Google Maps API and Firebase.",
    date: "2023",
    image: "",
    link: "",
    tags: ["Mobile App"],
    tech: ["Kotlin", "Firebase", "PHP", "MySQL"],
    category: ["Mobile Apps"],
  },
  {
    title: "AI Sales Outreach Assistant",
    role: "Solo build",
    desc: "Automated lead research and personalized outreach workflows.",
    impact: "Architecting multi-agent orchestration via Python and LLMs; backend schema 80% complete.",
    date: "2026",
    image: "",
    link: "",
    tags: ["AI Agent", "Automation"],
    tech: ["Node.js", "Python", "LLMs"],
    category: ["AI & Data"],
    isWip: true,
  },
  {
    title: "LLM-Powered Data Analyst",
    role: "Solo build",
    desc: "AI-powered data analysis and report generation platform.",
    impact: "Developing AI-powered analytics playground; frontend mockups and FastAPI routing completed.",
    date: "2026",
    image: "",
    link: "",
    tags: ["AI Engineering", "Data"],
    tech: ["React", "TypeScript", "FastAPI", "OpenAI"],
    category: ["AI & Data"],
    isWip: true,
  },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3"],
    core: ["React.js", "Next.js", "TypeScript"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "FastAPI", "Python", "Java", "REST APIs"],
    core: ["Node.js", "FastAPI"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Kotlin", "Android SDK", "Play Store delivery"],
    core: ["React Native"],
  },
  {
    title: "Data & Cloud",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase", "AWS", "Google Cloud"],
    core: ["PostgreSQL", "AWS"],
  },
  {
    title: "AI Engineering",
    skills: ["OpenAI", "Gemini AI", "LLM integration", "Prompt Engineering", "Pandas"],
    core: ["LLM integration"],
  },
  {
    title: "DevOps & Tooling",
    skills: ["Git / GitHub", "Docker", "CI/CD", "Postman", "Vercel", "Render"],
    core: ["CI/CD"],
  },
];

const CERTIFICATIONS = [
  {
    title: "Android Basics in Kotlin",
    issuer: "Google",
    desc: "Android fundamentals, UI components, and app architecture using Kotlin.",
    date: "Oct 2022",
    link: "https://smartinternz.com/internships/google_stu_certificates/7515989d1c2f94c0cf8c5e4aefd3d12b",
  },
  {
    title: "Google Cloud Big Data & ML Fundamentals",
    issuer: "Google Cloud · Coursera",
    desc: "Data pipelines, cloud analytics, and ML workflows using Vertex AI.",
    date: "Aug 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/A8HQQ6Z5L6R9",
  },
];

const EDUCATION = [
  {
    degree: "M.S. in Computer Science",
    school: "Purdue University Northwest",
    date: "Aug 2024 – May 2026",
    bullets: [
      "Key Coursework: Distributed Systems, Advanced Algorithms, Artificial Intelligence, Database Management Systems",
      "Graduate Research Assistant — built the Aerospace/X3D educational platform",
      "Designed & launched FeedbackFlow and ShortLnk (MERN-based SaaS tools)",
    ],
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "KITSW (Kakatiya Institute of Technology & Science)",
    date: "Aug 2020 – May 2024",
    bullets: [
      "President of the Computer Science Engineering Association (CSEA)",
      "Co-founded Fudoo — production mobile app on Google Play Store",
      "Developed TSRTC Medaram Jathara app — awarded by the government",
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
              src={asset("tharun.png")}
              alt="Tharun Pasupuleti"
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
            <p className="text-[#5c5c66] text-xs font-mono">
              react · tailwind · framer-motion
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
          src={asset("tharun.png")}
          alt="Tharun Pasupuleti"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-2 ring-[#2563eb]/20 ring-offset-2 ring-offset-[#0a0a0a]"
        />
        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#34d399] rounded-full border-2 border-[#0a0a0a] status-pulse" />
      </div>
      <h2 className="text-base font-bold tracking-tight heading-font">
        Tharun Pasupuleti
      </h2>
      <p className="text-xs text-[#a1a1aa] mt-0.5 font-medium">
        Full-Stack Engineer
      </p>
      <div className="flex items-center gap-1 mt-1">
        <IconMapPin size={11} className="text-[#5c5c66]" />
        <p className="text-[10px] text-[#5c5c66] font-medium">
          Indiana, US · Open to relocation
        </p>
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
  { n: "10+", label: "Projects shipped" },
  { n: "3", label: "Apps in production" },
  { n: "1000s", label: "Real users served" },
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
        <p className="kicker mb-4">full-stack engineer · ms cs, purdue northwest</p>
        <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] heading-font">
          Building products
          <br />
          <span className="gradient-text">that ship.</span>
        </h1>
      </motion.div>

      {/* Bio */}
      <motion.div variants={fadeUp} className="max-w-xl space-y-3">
        <p className="text-[#a1a1aa] text-[15px] leading-relaxed">
          I build across the whole stack — React front ends, Node.js and Python
          APIs, mobile apps, and AI-powered systems. Recent{" "}
          <span className="text-[#f4f4f5] font-medium">M.S. Computer Science</span>{" "}
          graduate from Purdue University Northwest, previously Associate
          Software Engineer at Accenture.
        </p>
        <p className="text-[#71717a] text-sm leading-relaxed">
          I've shipped production apps on the Play Store, built a
          government-recognized public utility, and launched AI SaaS platforms
          end to end.
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
        {EXPERIENCES.map((exp, i) => (
          <motion.a
            key={exp.title}
            variants={fadeUp}
            custom={i}
            href={exp.link}
            target="_blank"
            rel="noreferrer"
            className="group card-interactive p-5 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base font-bold text-[#f4f4f5] group-hover:text-[#7ab2ff] transition-colors duration-200 heading-font flex items-center gap-1.5">
                  {exp.title}
                  <IconArrowUpRight size={14} className="text-[#5c5c66] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </h3>
                <p className="text-[#a1a1aa] text-sm">{exp.company}</p>
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
          </motion.a>
        ))}
      </div>

      {/* Leadership */}
      <motion.div variants={fadeUp} className="mt-6">
        <p className="text-[10px] font-mono text-[#5c5c66] uppercase tracking-[0.15em] mb-2 px-5">
          Leadership
        </p>
        <div className="card-static p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="text-base font-bold text-[#f4f4f5] heading-font">
                President
              </h3>
              <p className="text-[#a1a1aa] text-sm">
                Computer Science Engineering Association (CSEA)
              </p>
            </div>
            <span className="text-[#5c5c66] text-xs font-mono shrink-0">
              Aug 2021 – May 2024
            </span>
          </div>
          <p className="text-[#a1a1aa] text-sm leading-relaxed flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-[#2563eb] mt-2 shrink-0" />
            Led initiatives serving 200+ students, organized technical workshops, and coordinated coding competitions
          </p>
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
        <img src={asset(p.image)} alt={`${p.title} preview`} loading="lazy" />
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
          {p.date} · {p.role}
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
        <span className="text-[11px] font-mono text-[#5c5c66] sm:ml-2 whitespace-nowrap">{p.date}</span>
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
            sub="Shipped products first — production apps, live platforms, and the stack behind each."
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
          sub="Organized by layer of the stack. Highlighted skills are the ones I reach for in production."
        >
          Full-stack toolkit
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

      <div className="flex flex-col gap-2">
        {CERTIFICATIONS.map((c, i) => (
          <motion.a
            key={c.title}
            variants={fadeUp}
            custom={i}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="group card-interactive p-5 sm:p-6"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-[#f4f4f5] group-hover:text-[#7ab2ff] transition-colors duration-200 heading-font flex items-center gap-1.5">
                  {c.title}
                  <IconArrowUpRight size={14} className="text-[#5c5c66] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </h3>
                <p className="text-xs text-[#71717a] font-medium mt-0.5">
                  {c.issuer}
                </p>
              </div>
              <span className="text-xs text-[#5c5c66] font-mono shrink-0">
                {c.date}
              </span>
            </div>
            <p className="text-[#a1a1aa] text-sm mt-2 leading-relaxed">
              {c.desc}
            </p>
          </motion.a>
        ))}
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
          sub="Open to full-time software engineering roles. I usually reply within a day."
        >
          Let's build something
        </SectionHeading>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            <p className="text-xs text-[#71717a]">Let's connect</p>
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
            <p className="text-xs text-[#71717a]">Open source work</p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-5 rounded-xl border border-[#1e1e1e] bg-[#111]">
          <div className="w-10 h-10 rounded-lg bg-[#34d399]/10 flex items-center justify-center shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#34d399] status-pulse" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#f4f4f5]">Availability</p>
            <p className="text-xs text-[#34d399]">Open to opportunities</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default MainLayout;
