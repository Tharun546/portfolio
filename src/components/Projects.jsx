import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const featuredProjects = [
    {
      title: "Fudoo",
      oneLiner:
        "Built a real-time, multi-vendor food ordering mobile application used in production.",
      problem:
        "Local food vendors lacked a centralized platform for digital menu management and real-time ordering.",
      action:
        "Designed and built a React Native app with Firebase real-time sync and Node.js backend deployed on AWS.",
      result:
        "Reduced order update latency by ~30% and enabled multiple vendors to onboard digitally.",
      date: "Jun 2023 – Aug 2024",
      image: "fudoo_thumbnail.png",
      link: "https://play.google.com/store/apps/details?id=com.kitsw.canteen",
      signals: ["Production App", "Real-time System", "Multi-vendor Platform"],
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
      link: "https://play.google.com/store/apps/details?id=com.rtc.medaram",
      signals: ["Government Deployment", "High Traffic", "Public Utility"],
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
      result: "Reduced feedback collection setup time from hours to minutes.",
      date: "Sep 2024 – Present",
      image: "feedback_flow_logo.png",
      signals: ["Full-stack System", "Embeddable Widget"],
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
            target="_blank"
            href={project.link}
            rel="noreferrer"
            className="p-4 md:p-6 rounded-lg hover:bg-neutral-800 transition duration-300 ease-in-out"
            onClick={() => handleTabClick(project.title)}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg bg-white w-full md:w-[140px] object-contain"
              />

              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl lg:text-2xl font-bold text-white">
                    {project.title}
                  </h2>

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
