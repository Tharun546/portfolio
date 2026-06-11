import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center bg-[#0a0a0a]">
      <div className="p-5 rounded-full bg-[#111] border border-[#1e1e1e] mb-8">
        <Compass className="w-12 h-12 text-[#7ab2ff] animate-[spin_4s_linear_infinite]" />
      </div>
      <p className="kicker mb-3">404 — not found</p>
      <h1 className="text-7xl md:text-9xl font-bold text-[#f4f4f5] mb-4 tracking-tighter heading-font">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-[#a1a1aa] mb-6 heading-font">
        Lost in the code
      </h2>
      <p className="text-[#71717a] max-w-md mb-10 text-sm md:text-base">
        This page doesn't exist or has been moved. Head back home to find what
        you're looking for.
      </p>
      <Link to="/" className="btn-primary">
        Return home
      </Link>
    </div>
  );
};

export default NotFound;
