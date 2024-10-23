import { Outlet } from "react-router-dom";

import { FloatingDock } from "./floating-dock";
import { IconHome2, IconArchive, IconTrophy } from "@tabler/icons-react";

const ArchiveLayout = () => {
  const links = [
    {
      title: "Home",
      icon: <IconHome2 className="h-full w-full text-neutral-300" />,
      href: "/",
    },
    {
      title: "All Projects",
      icon: <IconArchive className="h-full w-full text-neutral-300" />,
      href: "/archive/projects",
    },
    {
      title: "Achievements",
      icon: <IconTrophy className="h-full w-full text-neutral-300" />,
      href: "/archive/achievements",
    },
  ];

  return (
    <div className="bg-neutral-900 text-white">
      <div className="max-w-[1140px] mx-auto h-full">
        <div className="w-full text-center mb-10">
          <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
            <FloatingDock mobileClassName="translate-y-20" items={links} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ArchiveLayout;
