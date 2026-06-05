import React from "react";

const Tools = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "Kotlin", "PHP", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "React Native", "Node.js", "Express.js", "FastAPI", "Tailwind CSS", "Framer Motion", "X3D", "X3DOM"],
    },
    {
      title: "Databases & Cloud",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase", "AWS", "Google Cloud"],
    },
    {
      title: "AI & Data Science",
      skills: ["OpenAI", "Gemini AI", "LLMs", "Pandas", "Prompt Engineering"],
    },
    {
      title: "Developer Tooling",
      skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render"],
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-10 max-w-6xl mx-auto py-12">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-4xl md:text-6xl text-center md:text-start lg:text-7xl font-black uppercase tracking-tight">
          My Tech
          <span className="text-neutral-500"> Arsenal</span>
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl text-center md:text-start">
          A curated selection of languages, frameworks, and tools I use to bring
          digital products to life.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/80 transition-all duration-300 ease-in-out transform hover:-translate-y-1 group/card"
          >
            <h2 className="text-xl font-bold text-white mb-4 transition-colors group-hover/card:text-white-200">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-md text-xs font-medium border border-neutral-800 group-hover/card:border-neutral-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action / Footer */}
      <div className="mt-12 flex justify-center md:justify-start">
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200 group"
          aria-label="View my LinkedIn Profile"
          href="https://rebrand.ly/linkedinLnk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-400 motion-reduce:transition-none">
            View my{" "}
          </span>
          <span className="whitespace-nowrap font-semibold ml-1">
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-400 motion-reduce:transition-none">
              LinkedIn Profile
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px text-neutral-400 group-hover:text-teal-400"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Tools;
