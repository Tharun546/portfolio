import React from "react";

export default function Resume() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900">
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-[600px]">
            <h1 className="text-5xl font-bold text-white mb-6 text-left">
              My Resume
            </h1>
            <iframe
              src=""
              allowfullscreen=""
              width="600"
              height="800"
              title="Tharun's Resumé"
              className=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
