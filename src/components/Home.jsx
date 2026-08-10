import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Tools from "./Tools";
import {
  IconGitBranch,
  IconFolder,
  IconCertificate,
} from "@tabler/icons-react";
import Certifications from "./Certifications";

const Home = () => {
  const stats = [
    {
      icon: <IconFolder className="h-12 w-12 text-blue-500" />,
      number: "10+",
      description: "Production & Academic Projects",
    },
    {
      icon: <IconGitBranch className="h-12 w-12 text-green-500" />,
      number: "3+",
      description: "Production Deployed Systems",
    },
    {
      icon: <IconCertificate className="h-12 w-12 text-yellow-500" />,
      number: "10+",
      description: "Technical Certifications",
    },
  ];

  return (
    <>
      <div className="px-6 md:px-10 mb-24">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl sm:mt-10 font-black">
            SOFTWARE{" "}
            <span className="text-neutral-700">DEVELOPMENT ENGINEER</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-lg text-start">
            I’m a Software Development Engineer with <span className="text-white font-medium">3+ years of hands-on experience</span>
            building and shipping{" "}
            <span className="text-white">
              production-grade web and mobile applications.{" "}
            </span>
            I’ve worked across the stack - from frontend interfaces to backend
            APIs and cloud deployments - focusing on reliability, performance,
            and real-world usability.
          </p>
          <p className="text-neutral-400 text-base md:text-lg text-start">
            I’ve contributed to and led projects used by real users, including
            public-facing and government-backed systems, and I enjoy taking
            ownership from problem definition to deployment.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 my-10 justify-center md:justify-start">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 w-40 h-40 md:w-48 md:h-48 bg-neutral-800 rounded-lg flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div>{stat.icon}</div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-4">
                {stat.number}
              </h2>
              <p className="text-gray-400 text-center text-xs md:text-sm mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-20">
        <Experience />
      </div>

      <div className="mb-20">
        <Certifications />
      </div>

      <div className="mb-20">
        <Projects />
      </div>

      <div className="mb-5">
        <Tools />
      </div>
    </>
  );
};

export default Home;
