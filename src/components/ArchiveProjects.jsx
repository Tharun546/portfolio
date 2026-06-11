import { Link } from "react-router-dom";

const projects = [
  {
    year: "2026",
    project: {
      name: "TaskPilot AI",
      link: "https://github.com/adpth/TaskPilot-AI",
      shortName: "TaskPilot AI",
    },
    signal: "AI SaaS Platform • Production-ready",
    builtWith: ["Next.js", "React 19", "FastAPI", "PostgreSQL", "Supabase", "Gemini AI", "TypeScript"],
    link: "https://github.com/adpth/TaskPilot-AI",
  },
  {
    year: "2026",
    project: {
      name: "AI Sales Outreach Assistant",
      link: "https://github.com/adpth/ai-sales-outreach",
      shortName: "AI Sales Assistant",
    },
    signal: "Workflow Automation • AI Agent",
    builtWith: ["Node.js", "Python", "LLMs"],
    link: "https://github.com/adpth/ai-sales-outreach",
  },
  {
    year: "2026",
    project: {
      name: "LLM-Powered Data Analyst",
      link: "https://github.com/adpth/llm-data-analyst",
      shortName: "LLM Data Analyst",
    },
    signal: "AI Engineering • Data Analysis",
    builtWith: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "Pandas", "OpenAI"],
    link: "https://github.com/adpth/llm-data-analyst",
  },
  {
    year: "2025",
    project: {
      name: "X3D-VR for Engineering & Aerospace",
      link: "https://xreal-xperienz.org/x3d/beta/index.html",
      shortName: "X3D-VR",
    },
    signal: "Educational Technology • Live",
    builtWith: ["X3D", "X3DOM", "GLB", "React"],
    link: "https://xreal-xperienz.org/x3d/beta/index.html",
  },
  {
    year: "2024",
    project: {
      name: "FeedbackFlow",
      link: "https://github.com/adpth/FeedbackFlow",
      shortName: "FeedbackFlow",
    },
    signal: "Full-stack • SaaS-style system",
    builtWith: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/adpth/FeedbackFlow",
  },
  {
    year: "2024",
    project: {
      name: "ShortLnk",
      link: "https://github.com/adpth/ShortLnk",
      shortName: "ShortLnk",
    },
    signal: "Working - Production-ready",
    builtWith: ["Node.js", "MongoDB", "React.js", "Express.js"],
    link: "https://github.com/adpth/ShortLnk",
  },
  {
    year: "2023",
    project: {
      name: "Fudoo",
      link: "https://play.google.com/store/apps/details?id=com.kitsw.canteen",
      shortName: "Fudoo",
    },
    signal: "Production • Real-time • Multi-vendor",
    builtWith: ["React Native", "Firebase", "Node.js", "AWS"],
    link: "https://play.google.com/store/apps/details?id=com.kitsw.canteen",
  },
  {
    year: "2023",
    project: {
      name: "Wevento",
      link: "https://github.com/adpth/Wevento",
      shortName: "Wevento",
    },
    signal: "Location - Events based mobile app",
    builtWith: ["Kotlin", "Firebase", "PHP", "MySQL"],
    link: "https://github.com/adpth/Wevento",
  },
  {
    year: "2022",
    project: {
      name: "TSRTC Medaram Jathara",
      link: "https://rebrand.ly/fphf08l",
      shortName: "TSRTC Medaram Jathara",
    },
    signal: "Government-backed • High-traffic",
    builtWith: ["Java", "Firebase", "MySQL", "Google Cloud"],
    link: "https://rebrand.ly/fphf08l",
  },
  {
    year: "2020",
    project: {
      name: "Corona Case Tracker",
      link: "https://github.com/adpth/COVID-19",
      shortName: "Covid 19 Tracker",
    },
    signal: "Learning project • API integration",
    builtWith: ["Java", "rapid-api"],
    link: "https://github.com/adpth/COVID-19",
  },
];

const ProjectRow = ({ project }) => {
  return (
    <tr className="border-b border-[#1e1e1e]/60 last:border-none group hover:bg-[#111]/30 transition-colors duration-150">
      <td className="py-4 px-6 text-sm font-mono text-[#5c5c66]">
        <div className="translate-y-px">{project.year}</div>
      </td>
      <td className="py-4 pr-4 font-semibold text-[#f4f4f5] heading-font text-[15px]">
        <div>
          <div className="block sm:hidden">
            {project.link ? (
              <a
                className="inline-flex items-baseline font-medium leading-tight text-[#f4f4f5] hover:text-[#7ab2ff] focus-visible:text-[#7ab2ff] text-base transition-colors"
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.project.name} (opens in a new tab)`}
              >
                <span>
                  {project.project.name.split(" ")[0]}{" "}
                  <span className="inline-block">
                    {project.project.name.split(" ").slice(1).join(" ")}
                  </span>
                </span>
              </a>
            ) : (
              <span>{project.project.name}</span>
            )}
          </div>
          <div className="hidden sm:block">
            {project.project.shortName}
          </div>
        </div>
      </td>
      <td className="hidden py-4 pr-4 text-xs text-[#a1a1aa] lg:table-cell">
        <div className="translate-y-px">
          {project.signal}
        </div>
      </td>
      <td className="hidden py-4 pr-4 lg:table-cell max-w-[320px]">
        <div className="flex flex-wrap gap-1">
          {project.builtWith.map((tech, idx) => (
            <span
              key={idx}
              className="tag tag-neutral text-[10px] font-mono whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </td>
      <td className="hidden py-4 sm:table-cell">
        {project.link && (
          <a
            className="border-b border-transparent pb-px transition group-hover:border-[#7ab2ff] inline-flex items-center font-medium leading-tight text-[#5c5c66] hover:text-[#7ab2ff] focus-visible:text-[#7ab2ff] text-xs max-w-[240px] truncate"
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${project.link} (opens in a new tab)`}
          >
            <span className="truncate">{project.link.replace("https://", "").replace("www.", "")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        )}
      </td>
    </tr>
  );
};

export default function ArchiveProjects() {
  return (
    <div className="px-2 sm:px-4">
      <div className="py-12">
        <Link
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-[#7ab2ff] hover:text-[#2563eb] transition-colors text-sm"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1.5 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back to Portfolio
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-[#f4f4f5] sm:text-4xl heading-font mt-2">
          All Projects
        </h1>
        <p className="text-sm text-[#a1a1aa] mt-2 font-mono">
          Full catalog of applications, automation scripts, and academic labs.
        </p>
        <div className="overflow-x-auto mt-8 border border-[#1e1e1e] rounded-xl bg-[#0e0e0e]/50 backdrop-blur-sm">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#1e1e1e] bg-[#111]/80">
                <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-[#5c5c66]">
                  Year
                </th>
                <th className="py-4 pr-8 text-xs font-mono uppercase tracking-wider text-[#5c5c66]">
                  Project
                </th>
                <th className="hidden py-4 pr-8 text-xs font-mono uppercase tracking-wider text-[#5c5c66] lg:table-cell">
                  Signal
                </th>
                <th className="hidden py-4 pr-8 text-xs font-mono uppercase tracking-wider text-[#5c5c66] lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-xs font-mono uppercase tracking-wider text-[#5c5c66] sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <ProjectRow key={index} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
