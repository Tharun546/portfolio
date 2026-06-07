import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="p-5 rounded-full bg-neutral-900 border border-neutral-800 mb-8 shadow-sm">
        <Compass className="w-12 h-12 text-teal-400 animate-[spin_4s_linear_infinite]" />
      </div>
      <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-300 mb-6">
        Lost in the Code
      </h2>
      <p className="text-neutral-400 max-w-md mb-10 text-sm md:text-base">
        The page you are looking for doesn't exist, has been moved, or is currently under construction. 
        Let's get you back to familiar territory.
      </p>
      
      <Link 
        to="/"
        className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition duration-300 ease-in-out flex items-center gap-2"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
