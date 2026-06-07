import React from "react";

import { Timeline } from "./timeline";

const Achievements = () => {
  const data = [
    {
      title: "2026",
      content: (
        <div>
          <h4 className="text-white text-base md:text-lg font-bold mb-2">
            M.S. in Computer Science — Purdue University Northwest (PNW)
          </h4>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Aug 18, 2024 — May 2026. Specialized in advanced software engineering, AI/ML systems, and interactive 3D visualizations. During my master's, I independently designed and launched FeedbackFlow and ShortLnk (MERN-based SaaS tools).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://applymarket.com/wp-content/uploads/2024/11/Purdue-University-Northwest-3.jpg"
              alt="Purdue University Northwest"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <img
              src={import.meta.env.BASE_URL + `achievements/tharun_pnw_graduated.png`}
              alt="Purdue University Northwest"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="text-white text-base md:text-lg font-bold mb-2">
            Associate Software Engineer — Accenture
          </h4>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Engineered full-stack enterprise solutions at Accenture (Feb 2024 — Aug 2024) using the MERN stack before transitioning to pursue my Master's degree.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://a.mktgcdn.com/p/ay2U5iINUpUf_XFYXetVkdpHkt-tYWAo7yLSK-zrkFo/384x384.jpg"
              alt="Accenture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-white text-base md:text-lg font-bold mb-2">
            Fudoo — Production Launch
          </h4>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Co-founded and built Fudoo, a real-time, multi-vendor food ordering app on the Google Play Store. Used React Native, Firebase Realtime Sync, Node.js, and AWS, improving ordering latency by 30%. Also developed Wevento, an event location mobile app.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={import.meta.env.BASE_URL + "fudoo_thumbnail.png"}
              alt="Fudoo mobile application"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="text-white text-base md:text-lg font-bold mb-2">
            TSRTC Medaram Jathara App
          </h4>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Awarded by the government for rapid development and contribution to the "Medaram with TSRTC" navigation and bus tracking mobile app serving thousands of public commuters.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={
                import.meta.env.BASE_URL +
                `achievements/vc_sajjanar_app_annoucement.png`
              }
              alt="Award ceremony"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <img
              src={
                import.meta.env.BASE_URL +
                `achievements/medaram_team_grp_photo.jpg`
              }
              alt="Group photo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full pb-10">
      <Timeline data={data} />
    </div>
  );
};

export default Achievements;
