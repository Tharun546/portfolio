import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Accenture",
      description:
        "Contributed to the development and maintenance of software Web Apps, collaborating teams to deliver high-quality projects.",
      date: "Feb 2024 - Aug 2024",
      link: "https://www.accenture.com/",
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
