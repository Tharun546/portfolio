import React from "react";

export default function Certifications() {
  const experiences = [
    {
      title: "Android Basics in Kotlin",
      description:
        "Google-supported program covering Android fundamentals, UI components, and app architecture basics using Kotlin.",
      issued: "Oct 2022",
      link: "https://smartinternz.com/internships/google_stu_certificates/7515989d1c2f94c0cf8c5e4aefd3d12b",
    },
    {
      title: "Google Cloud Big Data and ML Fundamentals",
      description:
        "Introduction to data pipelines, cloud-based analytics, and ML workflows using Google Cloud and Vertex AI.",
      issued: "Aug 2022",
      link: "https://www.coursera.org/account/accomplishments/verify/A8HQQ6Z5L6R9",
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl text-center md:text-start lg:text-7xl font-black uppercase">
          Licenses &<span className="text-neutral-700"> certifications</span>
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
            <p className="text-gray-400 text-sm mt-2 underline">
              Issued: {experience.issued}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
