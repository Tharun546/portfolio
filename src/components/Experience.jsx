import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Purdue University Northwest",
      description:
        "Graduate Research Assistant. Designed and built the Aerospace/X3D educational platform independently. Created frontend architecture, implemented responsive learning experiences, integrated X3D and X3DOM workflows, and developed reusable educational components. Worked directly with faculty and delivered deployment-ready software.",
      date: "Aug 2024 - May 2026",
      link: "https://www.pnw.edu/",
    },
    {
      title: "Accenture",
      description:
        "Associate Software Engineer. Developed React and Node.js enterprise applications. Reduced UI latency by 20% and API response times by 30%. Worked within Agile teams, participated in CI/CD deployment workflows, and resolved production issues.",
      date: "Feb 2024 - Aug 2024",
      link: "https://www.accenture.com/",
    },
    {
      title: "Computer Science Engineering Association (CSEA)",
      description:
        "President. Led initiatives serving 200+ students, organised technical workshops, coordinated coding competitions, managed student teams, and facilitated industry speaker sessions.",
      date: "Aug 2021 - May 2024",
      link: "#",
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl text-center md:text-start lg:text-7xl font-black">
          WORKING <span className="text-neutral-700">EXPERIENCE</span>
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {experiences.map((experience, index) => (
          <a
            key={index}
            aria-label={experience.title}
            target="_blank"
            href={experience.link}
            className="p-4 md:p-6 rounded-lg hover:bg-neutral-800 transition duration-300 ease-in-out"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex justify-between items-center">
              {experience.title}
              <span className="ml-2 -rotate-45 transition duration-300 ease-in-out text-orange-700">
                &rarr;
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              {experience.description}
            </p>
            <p className="text-gray-400 text-sm mt-2">{experience.date}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
