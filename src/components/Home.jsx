import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Tools from "./Tools";
import {
  IconGitBranch,
  IconFolder,
  IconCertificate,
} from "@tabler/icons-react";
import Internships from "./Internships";

const Home = () => {
  const stats = [
    {
      icon: <IconFolder className="h-12 w-12 text-blue-500" />,
      number: "20+",
      description: "Completed Projects",
    },
    {
      icon: <IconCertificate className="h-12 w-12 text-yellow-500" />,
      number: "10+",
      description: "Certifications",
    },
    {
      icon: <IconGitBranch className="h-12 w-12 text-green-500" />,
      number: "1000+",
      description: "Mentored Students",
    },
  ];
  return (
    <>
      <div className="px-6 md:px-10 mb-24">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl sm:mt-10 font-black">
            FULLSTACK <span className="text-neutral-700">DEVELOPER</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-lg text-start">
            With a deep love for open-source development and building meaningful
            digital experiences. With a strong background in{" "}
            <span className="text-white">Fullstack development</span>,
            particularly with the MERN stack, I thrive in both front-end and
            back-end environments.
          </p>
          <p className="text-neutral-400 text-base md:text-lg text-start">
            In addition to my technical skills, I am a{" "}
            <span className="text-white">content creator</span>, using my
            platform to share knowledge, build community, and inspire others in
            the tech space.
          </p>
          <p className="text-neutral-400 text-base md:text-lg text-start">
            I’ve led and contributed to various{" "}
            <span className="text-white">web </span> and{" "}
            <span className="text-white">mobile application </span>
            projects, focusing on user-centric designs and optimized
            functionality. I continuously explore new technologies and
            frameworks to create dynamic, innovative solutions that make a
            difference.
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
        <Internships />
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
