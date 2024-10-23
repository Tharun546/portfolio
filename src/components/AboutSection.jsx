import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col justify-between pb-5 ">
      <div className="flex-grow bg-white p-6 rounded-xl shadow-lg text-center mx-10 md:mx-8">
        <div className="relative bg-neutral-400 rounded-full">
          <img
            src="myself.png"
            alt="Mark Smith"
            className="rounded-lg mx-auto w-full max-w-xs"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl mt-4 font-bold text-black">
          Tharun Pasupuleti
        </h2>
        <div className="text-sm text-gray-600">
          <p>Fullstack, Mobile App Developer &</p>
          <p>content creator</p>
        </div>
        <p className="text-gray-700 my-6">
          I'm currently working with my hands to make magic happen on the web.
        </p>
        <div className="mt-4 flex gap-4 justify-center ">
          <a
            href="https://bit.ly/instagram-lnk"
            className="text-gray-600 hover:text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2xl"></i>
          </a>
          <a
            href="https://bit.ly/github-lnk"
            className="text-gray-600 hover:text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2xl"></i>
          </a>
          <a
            href="https://bit.ly/linkedin-lnk"
            className="text-gray-600 hover:text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2xl"></i>
          </a>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex gap-2 items-center bg-white bg-opacity-20 backdrop-blur-lg text-white border border-white border-opacity-25 py-2 px-8 rounded-full text-xl transition-all hover:bg-opacity-30 hover:shadow-lg"
        >
          Get My Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#01e41c"
            className="w-10 h-10"
          >
            <path d="m356-300 204-204v90h80v-226H414v80h89L300-357l56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
