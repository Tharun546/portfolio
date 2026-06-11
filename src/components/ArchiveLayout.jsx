import { Outlet, Link, NavLink } from "react-router-dom";
import { IconArrowLeft, IconArchive, IconTrophy } from "@tabler/icons-react";

const ArchiveLayout = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-end items-end">
          <div className="flex items-center gap-3">
            <NavLink
              to="/archive/projects"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
                  isActive
                    ? "bg-[#2563eb]/10 text-[#7ab2ff] border border-[#2563eb]/20"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent"
                }`
              }
            >
              <IconArchive className="w-4 h-4" />
              Projects
            </NavLink>
            <NavLink
              to="/archive/achievements"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
                  isActive
                    ? "bg-[#2563eb]/10 text-[#7ab2ff] border border-[#2563eb]/20"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent"
                }`
              }
            >
              <IconTrophy className="w-4 h-4" />
              Achievements
            </NavLink>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto pt-20 px-6 pb-12">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-neutral-500 text-sm text-center">
            © {new Date().getFullYear()} Tharun Pasupuleti
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArchiveLayout;
