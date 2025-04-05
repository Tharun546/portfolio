import React, { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Mobile App");

  const projects = [
    {
      title: "TSRTC Medaram Jathara",
      description:
        "It provides information on TSRTC special buses to public who want to travel to Medaram Jathara from different places of Telangana and neighboring states. It also provides emergency contact information and tourist spots near medaram and the hotels nearby. It navigates people to medaram and provides TSRTC bus and ticket booking facility.",
      date: "Jan 2022 - Feb 2022",
      image: "tsrtc_logo.webp",
      link: "https://play.google.com/store/apps/details?id=com.rtc.medaram",

      builtWith: ["Java", "Php", "Firebase", "Mysql", "Google Cloud"],
      category: "Mobile App",
    },
    {
      title: "Wevento",
      description:
        "This app will help in populating the events around you in that location only and help you in getting updated all the time. The main motto is to show All events details at your finger tips",
      date: "Apr 2022 - Mar 2023",
      image: "wvento_thumbnail.png",
      builtWith: ["Kotlin", "Php", "Mysql", "Firebase"],
      category: "Mobile App",
    },
    {
      title: "Fudoo",
      description:
        "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
      date: "Jun 2023 - Aug 2024",
      image: "fudoo_thumbnail.png",
      link: "https://play.google.com/store/apps/details?id=com.kitsw.canteen",
      builtWith: [
        "React Native",
        "Expo",
        "Firebase",
        "Aws",
        "Node.js",
        "React.js",
      ],
      category: "Mobile App",
    },
    {
      title: "Feedback Flow",
      description:
        "The Web App which enables users to collect feedback from a forms and the feedback collection widget is easy to embed to their landing website.",
      date: "Sep 2024 - Present",
      image: "feedback_flow_logo.png",
      builtWith: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tilwind CSS",
        "JavaScript",
      ],
      category: "Web App",
    },
    {
      title: "ShortLnk",
      description:
        "The Web App which enables users to collect feedback from a forms and the feedback collection widget is easy to embed to their landing website.",
      date: "Aug 2024 - Sep 2024",
      image: "shortLnk.svg",
      builtWith: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tilwind CSS",
        "JavaScript",
      ],
      category: "Web App",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="px-4 md:px-6 lg:px-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl text-center md:text-start lg:text-8xl font-black">
          FEATURED <span className="text-neutral-700">PROJECTS</span>
        </h1>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "Mobile App"
              ? "bg-green-600 text-white"
              : "bg-neutral-700 text-gray-400"
          }`}
          onClick={() => handleCategoryChange("Mobile App")}
        >
          Mobile App
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "Web App"
              ? "bg-green-600 text-white"
              : "bg-neutral-700 text-gray-400"
          }`}
          onClick={() => handleCategoryChange("Web App")}
        >
          Web App
        </button>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            aria-label={project.title}
            target="_blank"
            href={project.link}
            className="p-4 md:p-6 rounded-lg hover:bg-neutral-800 transition duration-300 ease-in-out"
            onClick={() => handleTabClick(project.title)}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg bg-white w-full md:w-[125px] h-auto object-contain"
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
                <p className="text-gray-400 text-sm my-3">{project.date}</p>
                <div className="flex flex-wrap gap-2">
                  {project.builtWith.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
          aria-label="View Full Project Archive"
          href="/portfolio/archive/projects"
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
        </a>
      </div>
    </div>
  );
}
