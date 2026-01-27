import React from "react";

const Tools = () => {
  return (
    <div className="px-4 md:px-6 lg:px-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl text-center md:text-start lg:text-7xl font-black uppercase">
          My Tech
          <span className="text-neutral-700"> Arsenal</span>
        </h1>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="p-6 rounded-lg hover:bg-neutral-800 transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold text-white mb-3">
            Programming Languages
          </h2>
          <p className="text-gray-400 text-sm">
            JavaScript (ES6+), TypeScript, Java, HTML5, CSS3
          </p>
        </div>

        <div
          className={`p-6 rounded-lg ${"hover:bg-neutral-800 transition duration-300 ease-in-out"}`}
        >
          <h2 className="text-xl font-bold text-white mb-4 flex justify-between items-center">
            Frameworks & Platforms
          </h2>
          <p className="text-gray-400 text-sm">
            React.js, React Native, Expo, Node.js, Express.js
          </p>
        </div>

        <div
          className={`p-6 rounded-lg ${"hover:bg-neutral-800 transition duration-300 ease-in-out"}`}
        >
          <h2 className="text-xl font-bold text-white mb-3">
            Databases & Cloud
          </h2>
          <p className="text-gray-400 text-sm">
            Firebase, MongoDB, MySQL, Google Cloud, AWS
          </p>
        </div>

        <div
          className={`p-6 rounded-lg ${"hover:bg-neutral-800 transition duration-300 ease-in-out"}`}
        >
          <h2 className="text-xl font-bold text-white mb-3">
            Developer Tooling
          </h2>
          <p className="text-gray-400 text-sm">
            Git, GitHub, Docker, NPM, Yarn, Postman
          </p>
        </div>
      </div>
      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
          aria-label="View Full Project Archive"
          href="/portfolio/resume.pdf"
          target="_blank"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full{" "}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Résumé
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
};

export default Tools;
