import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-4" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-6 md:pt-16 md:gap-8"
          >
            <div className="sticky flex flex-col md:flex-row z-10 items-center top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-[180px] shrink-0">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-[#2563eb] border border-[#60a5fa] ring-4 ring-[#2563eb]/20 status-pulse" />
              </div>
              <h3 className="hidden md:block text-3xl md:pl-20 md:text-4xl font-bold text-[#71717a] heading-font tracking-tight">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-2 md:pl-0 w-full">
              <h3 className="md:hidden block text-2xl mb-3 text-left font-bold text-[#71717a] heading-font tracking-tight">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        
        {/* Vertical line indicator */}
        <div
          className="absolute md:left-8 left-8 top-0 bottom-0 w-[2px] bg-neutral-800/40 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-[#60a5fa] via-[#2563eb] to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
