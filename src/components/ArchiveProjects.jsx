import React from "react";

const projects = [
  {
    year: 2023,
    project: {
      name: "TSRTC Medaram Jathara",
      link: "https://play.google.com/store/apps/details?id=com.rtc.medaram",
      shortName: "TSRTC Medaram Jathara",
    },
    madeAt: "TSRTC",
    builtWith: ["Java", "Php", "Firebase", "Mysql", "Google Cloud"],
    link: "https://bit.ly/tsrtc-applink",
  },
  {
    year: 2023,
    project: {
      name: "Wevento",
      link: "",
      shortName: "Wevento",
    },
    madeAt: "",
    builtWith: ["Kotlin", "Firebase", "Php", "Mysql"],
    link: "",
  },
  {
    year: 2024,
    project: {
      name: "Fudoo",
      link: "https://play.google.com/store/apps/details?id=com.kitsw.canteen",
      shortName: "Fudoo",
    },
    madeAt: "Fudoo",
    builtWith: [
      "React Native",
      "Expo",
      "Firebase",
      "Aws",
      "Node.js",
      "React.js",
    ],
    link: "https://www.fudoo.in/",
  },
  {
    year: 2024,
    project: {
      name: "FeedbackFlow",
      link: "",
      shortName: "FeedbackFlow",
    },
    madeAt: "",
    builtWith: ["React.js", "Node.js", "MongoDB", "Tilwind CSS", "JavaScript"],
    link: "",
  },
  {
    year: 2020,
    project: {
      name: "Corona Case Tracker",
      link: "https://github.com/adpth/COVID-19",
      shortName: "Covid 19 Tracker",
    },
    madeAt: "",
    builtWith: ["Java", "rapid-api"],
    link: "https://github.com/adpth/COVID-19",
  },
  {
    year: 2024,
    project: {
      name: "Farm Fusion",
      link: "",
      shortName: "Farm Fusion",
    },
    madeAt: "",
    builtWith: ["Kotlin", "AWS", "Firebase"],
    link: "",
  },
];

export default function ArchiveProjects() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="py-24">
        <a
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Tharun Rao
        </a>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <div className="overflow-x-auto mt-12">
          <table className="min-w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-800/75 px-6 py-5 backdrop-blur">
              <tr>
                <th className="py-4 px-8 text-sm font-semibold text-slate-200">
                  Year
                </th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Project
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Made for
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-300/10 last:border-none"
                >
                  <td className="py-4 px-8 text-sm">
                    <div className="translate-y-px">{project.year}</div>
                  </td>
                  <td className="py-4 pr-4 font-semibold text-slate-200">
                    <div>
                      <div className="block sm:hidden">
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
                          href={project.project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.project.name} (opens in a new tab)`}
                        >
                          <span>
                            {project.project.name.split(" ")[0]}{" "}
                            <span className="inline-block">
                              {project.project.name
                                .split(" ")
                                .slice(1)
                                .join(" ")}
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="hidden sm:block">
                        {project.project.shortName}
                      </div>
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 text-sm lg:table-cell">
                    <div className="translate-y-px whitespace-nowrap">
                      {project.madeAt}
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 lg:table-cell">
                    <ul className="flex flex-wrap gap-1">
                      {project.builtWith.map((tech, idx) => (
                        <li key={idx}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 sm:table-cell">
                    {project.link && (
                      <a
                        className="border-b border-transparent pb-px transition group-hover:border-teal-300 inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 text-sm whitespace-nowrap"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.link} (opens in a new tab)`}
                      >
                        {project.link}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
