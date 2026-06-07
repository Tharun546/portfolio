import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bot, BarChart3 } from "lucide-react";

export default function Projects() {
  const featuredProjects = [
    {
      title: "TaskPilot AI",
      oneLiner:
        "AI SaaS Platform for dynamic scheduling and task decomposition.",
      problem:
        "Users needed intelligent scheduling to manage cognitive workloads effectively.",
      action:
        "Built a full-stack AI platform integrating calendar workflows and dynamic scheduling using LLMs.",
      result:
        "Production-ready system demonstrating modern AI architecture and productivity optimization.",
      date: "Apr 2026 - Present",
      image: "taskpilot_thumbnail.png",
      link: "https://github.com/adpth/TaskPilot-AI",
      signals: ["AI SaaS Platform", "Production-ready"],
      builtWith: [
        "Next.js",
        "React 19",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
        "Gemini AI",
        "TypeScript",
      ],
    },
    {
      title: "X3D-VR for Engineering & Aerospace",
      oneLiner:
        "Browser-based 3D educational platform for engineering students.",
      problem:
        "Lack of accessible, interactive 3D visualizations for complex aerospace engineering concepts.",
      action:
        "Developed a responsive platform integrating X3D, X3DOM, and GLB for interactive learning modules.",
      result:
        "Live educational platform directly supporting university engineering curricula.",
      date: "Oct 2025 - Jan 2026",
      image: "aerospace_thumbnail_final.png",
      link: "https://xreal-xperienz.org/x3d/beta/index.html",
      signals: ["Educational Technology", "Live Platform", "Browser 3D"],
      builtWith: ["X3D", "X3DOM", "GLB", "React"],
    },
    {
      title: "Fudoo",
      oneLiner:
        "Built a real-time, multi-vendor food ordering mobile application used in production.",
      problem:
        "Local food vendors lacked a centralized platform for digital menu management and real-time ordering.",
      action:
        "Designed and built a React Native app with Firebase real-time sync and Node.js backend deployed on AWS.",
      result:
        "Released on Play Store, reducing order update latency by ~30% and enabling multiple vendors to onboard digitally.",
      date: "Jun 2023 – Aug 2024",
      image: "fudoo_thumbnail.png",
      link: "https://play.google.com/store/apps/details?id=com.kitsw.canteen",
      signals: ["Production App", "Real-world Deployment"],
      builtWith: ["React Native", "Firebase", "Node.js", "AWS"],
    },
    {
      title: "TSRTC Medaram Jathara",
      oneLiner:
        "Government-backed mobile app providing transport and navigation info for a large public event.",
      problem:
        "Pilgrims lacked reliable, centralized information for special buses and travel during Medaram Jathara.",
      action:
        "Built an Android app integrating transport data, navigation, and emergency contacts using cloud-backed services.",
      result:
        "Enabled real-time access to transport information for thousands of users during the event.",
      date: "Jan 2022 – Feb 2022",
      image: "tsrtc_logo.webp",
      link: "https://rebrand.ly/fphf08l",
      signals: [
        "Government Collaboration",
        "Public Utility",
        "Production Deployment",
      ],
      builtWith: ["Java", "Firebase", "MySQL", "Google Cloud"],
    },
    {
      title: "FeedbackFlow",
      oneLiner:
        "Web platform enabling teams to collect and embed user feedback with minimal setup.",
      problem:
        "Teams needed a lightweight way to collect structured feedback without building custom forms.",
      action:
        "Built a full-stack web app with embeddable widgets and backend APIs for feedback collection.",
      result:
        "Customer feedback management system. Reduced feedback collection setup time from hours to minutes.",
      date: "Sep 2024 – Dec 2024",
      image: "feedback_flow_logo.png",
      link: "",
      signals: ["SaaS Platform", "Needs GitHub Publication"],
      builtWith: ["React.js", "Node.js", "MongoDB"],
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl text-center md:text-start lg:text-7xl font-black">
          FEATURED <span className="text-neutral-700">PROJECTS</span>
        </h1>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {featuredProjects.map((project, index) => (
          <a
            key={index}
            aria-label={project.title}
            target={project.link ? "_blank" : undefined}
            href={project.link || undefined}
            rel={project.link ? "noreferrer" : undefined}
            className={`p-4 md:p-6 rounded-lg transition duration-300 ease-in-out hover:bg-neutral-800 ${
              project.link ? "cursor-pointer" : "cursor-default"
            }`}
            onClick={(e) => {
              if (!project.link) {
                e.preventDefault();
              }
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg bg-white w-full md:w-[140px] object-contain"
              />

              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h2 className="text-xl lg:text-2xl font-bold text-white">
                      {project.title}
                    </h2>
                    {project.date && (
                      <span className="text-sm font-medium text-neutral-400 mt-1">
                        {project.date}
                      </span>
                    )}
                  </div>

                  <span className="text-2xl ml-2 -rotate-45 transition duration-300 ease-in-out text-orange-700">
                    &rarr;
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-gray-300 text-sm">
                    <span className="font-semibold text-white">Impact:</span>{" "}
                    {project.oneLiner}
                  </p>

                  <p className="text-gray-400 text-sm">
                    <span className="font-semibold text-gray-300">
                      Problem:
                    </span>{" "}
                    {project.problem}
                  </p>

                  <p className="text-gray-400 text-sm">
                    <span className="font-semibold text-gray-300">Result:</span>{" "}
                    {project.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.signals?.map((signal, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-400"
                    >
                      {signal}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.builtWith.slice(0, 4).map((tech, idx) => (
                    <div
                      key={idx}
                      className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300"
                    >
                      {tech}
                    </div>
                  ))}
                  {project.builtWith.length > 4 && (
                    <span className="text-xs text-teal-300">
                      +{project.builtWith.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-16">
        <h1 className="text-4xl md:text-6xl text-center md:text-start lg:text-7xl font-black">
          CURRENTLY <span className="text-neutral-700">BUILDING</span>
        </h1>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {[
          {
            title: "AI Sales Outreach Assistant",
            oneLiner: "Automated lead research and outreach workflows.",
            problem:
              "Sales teams spend too much time manually researching leads and drafting emails.",
            action:
              "Building an automated workflow for lead generation and personalized outreach using LLMs.",
            result: "Currently in development.",
            date: "In Progress",
            icon: <Bot className="h-10 w-10 text-amber-400" />,
            link: "",
            signals: ["AI Agent", "Workflow Automation"],
            builtWith: ["Node.js", "Python", "LLMs"],
          },

          {
            title: "LLM-Powered Data Analyst",
            oneLiner: "AI-powered data analysis platform.",
            problem:
              "Data analysis requires complex queries and manual data manipulation.",
            action:
              "Building an AI assistant to analyze data, run queries, and generate reports.",
            result: "Currently in development.",
            date: "In Progress",
            icon: <BarChart3 className="h-10 w-10 text-teal-400" />,
            link: "",
            signals: [
              "AI Engineering",
              "Microservices",
              "Data Analysis Workflows",
            ],
            builtWith: [
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "FastAPI",
              "Pandas",
              "OpenAI",
            ],
          },
        ].map((project, index) => (
          <a
            key={index}
            aria-label={project.title}
            target={project.link ? "_blank" : undefined}
            href={project.link || undefined}
            className={`p-4 md:p-6 rounded-lg transition duration-300 ease-in-out hover:bg-neutral-800 ${
              project.link ? "cursor-pointer" : "cursor-default"
            }`}
            onClick={(e) => {
              if (!project.link) {
                e.preventDefault();
              }
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {project.icon ? (
                <div className="rounded-lg bg-neutral-900 border border-neutral-800 w-full md:w-[140px] h-[93px] flex items-center justify-center shrink-0">
                  {project.icon}
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg bg-white w-full md:w-[140px] object-contain shrink-0"
                />
              )}

              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h2 className="text-xl lg:text-2xl font-bold text-white">
                      {project.title}
                    </h2>
                    {project.date && (
                      <span className="text-sm font-medium text-neutral-400 mt-1">
                        {project.date}
                      </span>
                    )}
                  </div>

                  <span className="text-2xl ml-2 -rotate-45 transition duration-300 ease-in-out text-orange-700">
                    &rarr;
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-gray-300 text-sm">
                    <span className="font-semibold text-white">Purpose:</span>{" "}
                    {project.oneLiner}
                  </p>
                  <p className="text-gray-400 text-sm">
                    <span className="font-semibold text-gray-300">Status:</span>{" "}
                    {project.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.signals?.map((signal, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-400"
                    >
                      {signal}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.builtWith.slice(0, 4).map((tech, idx) => (
                    <div
                      key={idx}
                      className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300"
                    >
                      {tech}
                    </div>
                  ))}
                  {project.builtWith.length > 4 && (
                    <span className="text-xs text-teal-300">
                      +{project.builtWith.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12">
        <Link
          className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
          to="/archive/projects"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Project{" "}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Archive
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
