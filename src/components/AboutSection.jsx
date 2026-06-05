import React from "react";

const AboutSection = () => {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="flex-grow bg-white p-6 rounded-xl shadow-lg text-center mx-10 md:mx-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative w-64 h-64 bg-neutral-400 rounded-full">
            <img
              src="tharun.png"
              alt="Tharun Pasupuleti"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-black">Tharun Pasupuleti</h2>
            <p className="text-sm text-gray-600">
              Full Stack Engineer
            </p>
            <p className="text-xs text-gray-600 mt-1">
              AI-Powered Applications • SaaS Products • Interactive Learning Platforms
            </p>
          </div>

          <p className="text-sm text-gray-700 max-w-xs mt-2">
            Full Stack Engineer who has built enterprise software, AI-powered products, production mobile applications, educational platforms, and browser-based 3D experiences.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://rebrand.ly/adpth"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 hover:text-gray-700"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>

            <a
              href="https://rebrand.ly/linkedinLnk"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-gray-700"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
