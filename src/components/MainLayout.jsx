import { Outlet } from "react-router-dom";
import AboutSection from "./AboutSection";
import { FloatingDock } from "./floating-dock";
import {
  IconHome2,
  IconBriefcase,
  IconFolder,
  IconTool,
  IconTrophy,
} from "@tabler/icons-react";

const MainLayout = () => {
  const links = [
    {
      title: "Home",
      icon: <IconHome2 className="h-full w-full text-neutral-300" />,
      href: "/",
    },
    {
      title: "Experience",
      icon: <IconBriefcase className="h-full w-full text-neutral-300" />,
      href: "/experience",
    },
    {
      title: "Projects",
      icon: <IconFolder className="h-full w-full text-neutral-300" />,
      href: "/projects",
    },
    {
      title: "Tools",
      icon: <IconTool className="h-full w-full text-neutral-300" />,
      href: "/tools",
    },
    {
      title: "Achievements",
      icon: <IconTrophy className="h-full w-full text-neutral-300" />,
      href: "/archive/achievements",
    },
  ];

  return (
    <>
      <div className="bg-neutral-900 text-white pt-40">
        <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>

        <div className="flex flex-col md:flex-row max-w-[1140px] mx-auto h-full">
          <div className="flex-none h-full md:sticky top-24 w-full md:w-1/3">
            <AboutSection />
          </div>
          <div className="flex-1 overflow-y-auto pl-0 md:pl-8 mt-10 md:mt-0">
            <Outlet />
          </div>
        </div>
      </div>
      <footer className="pt-20 mx-10 pb-10 text-white text-center">
        Code with <span className="text-orange-700">Purpose</span>, Create with
        <span className="text-orange-700"> Passion</span>.
      </footer>
    </>
  );
};

export default MainLayout;
