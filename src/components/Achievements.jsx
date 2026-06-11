import { Link } from "react-router-dom";
import { Timeline } from "./timeline";

const Achievements = () => {
  const data = [
    {
      title: "2026",
      content: (
        <div className="card-static p-5 sm:p-6 hover:border-[#2563eb]/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <h4 className="text-[#f4f4f5] text-base md:text-lg font-bold heading-font">
              M.S. in Computer Science — Purdue Northwest (PNW)
            </h4>
            <span className="text-xs font-mono text-[#5c5c66] shrink-0">Aug 2024 – May 2026</span>
          </div>
          <p className="text-[#a1a1aa] text-xs md:text-sm font-normal mb-5 leading-relaxed">
            Specialized in advanced software engineering, AI/ML systems, and interactive 3D visualizations. During my master's, I independently designed and launched FeedbackFlow and ShortLnk (MERN-based SaaS tools).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg border border-[#1e1e1e] hover:border-[#2e2e2e] transition-colors duration-200">
              <img
                src="https://applymarket.com/wp-content/uploads/2024/11/Purdue-University-Northwest-3.jpg"
                alt="Purdue University Northwest Campus"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-[#1e1e1e] hover:border-[#2e2e2e] transition-colors duration-200">
              <img
                src={import.meta.env.BASE_URL + `achievements/tharun_pnw_graduated.png`}
                alt="Purdue PNW Graduation"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="card-static p-5 sm:p-6 hover:border-[#2563eb]/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <h4 className="text-[#f4f4f5] text-base md:text-lg font-bold heading-font">
              Associate Software Engineer — Accenture
            </h4>
            <span className="text-xs font-mono text-[#5c5c66] shrink-0">Feb 2024 – Aug 2024</span>
          </div>
          <p className="text-[#a1a1aa] text-xs md:text-sm font-normal mb-5 leading-relaxed">
            Engineered full-stack enterprise features using React and Node.js on Agile delivery teams, optimizing web experiences for enterprise business clients before transitioning to pursue my Master's degree.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg border border-[#1e1e1e] hover:border-[#2e2e2e] transition-colors duration-200 max-w-sm">
              <img
                src="https://a.mktgcdn.com/p/ay2U5iINUpUf_XFYXetVkdpHkt-tYWAo7yLSK-zrkFo/384x384.jpg"
                alt="Accenture Enterprise Work"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="card-static p-5 sm:p-6 hover:border-[#2563eb]/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <h4 className="text-[#f4f4f5] text-base md:text-lg font-bold heading-font">
              Fudoo — Production Co-Founder Launch
            </h4>
            <span className="text-xs font-mono text-[#5c5c66] shrink-0">Jun 2023 – Aug 2024</span>
          </div>
          <p className="text-[#a1a1aa] text-xs md:text-sm font-normal mb-5 leading-relaxed">
            Co-founded and built Fudoo, a real-time, multi-vendor food ordering app on the Google Play Store. Used React Native, Firebase Realtime Sync, Node.js, and AWS, improving ordering latency by 30%. Also developed Wevento, an event location mobile app.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg border border-[#1e1e1e] hover:border-[#2e2e2e] transition-colors duration-200 max-w-sm">
              <img
                src={import.meta.env.BASE_URL + "fudoo_thumbnail.png"}
                alt="Fudoo mobile application"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="card-static p-5 sm:p-6 hover:border-[#2563eb]/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <h4 className="text-[#f4f4f5] text-base md:text-lg font-bold heading-font">
              TSRTC Medaram Jathara App — Government Recognized
            </h4>
            <span className="text-xs font-mono text-[#5c5c66] shrink-0">Jan – Feb 2022</span>
          </div>
          <p className="text-[#a1a1aa] text-xs md:text-sm font-normal mb-5 leading-relaxed">
            Awarded by the government for rapid development and contribution to the "Medaram with TSRTC" navigation and bus tracking mobile app serving over 15,000+ public commuters.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg border border-[#1e1e1e] hover:border-[#2e2e2e] transition-colors duration-200">
              <img
                src={
                  import.meta.env.BASE_URL +
                  `achievements/vc_sajjanar_app_annoucement.png`
                }
                alt="Award ceremony"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-[#1e1e1e] hover:border-[#2e2e2e] transition-colors duration-200">
              <img
                src={
                  import.meta.env.BASE_URL +
                  `achievements/medaram_team_grp_photo.jpg`
                }
                alt="Group photo"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="px-2 sm:px-4">
      <div className="py-12">
        <Link
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-[#7ab2ff] hover:text-[#2563eb] transition-colors text-sm"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1.5 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back to Portfolio
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-[#f4f4f5] sm:text-4xl heading-font mt-2">
          Milestones & Journey
        </h1>
        <p className="text-sm text-[#a1a1aa] mt-2 font-mono">
          A visual timeline of key career achievements, launches, and academic milestones.
        </p>
        <div className="mt-10">
          <Timeline data={data} />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
