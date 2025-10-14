"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdgeState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setAtStart(scrollLeft <= 0);
    setAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateEdgeState();
    const onScroll = () => updateEdgeState();
    el.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => updateEdgeState();
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const page = Math.max(300, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir === "left" ? -page : page, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-14 sm:py-16 md:py-20"
    >
      <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20">
        My Projects
      </h1>
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollByAmount("left")}
          disabled={atStart}
          className={`hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center h-10 w-10 rounded-full bg-black/40 backdrop-blur-md ring-1 ring-white/20 text-white hover:bg-black/60 transition ${atStart ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        {/* Right Arrow */}
        <button
          aria-label="Scroll right"
          onClick={() => scrollByAmount("right")}
          disabled={atEnd}
          className={`hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center h-10 w-10 rounded-full bg-black/40 backdrop-blur-md ring-1 ring-white/20 text-white hover:bg-black/60 transition ${atEnd ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Gradient Fades */}
        <div className="pointer-events-none hidden sm:block absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#030014] to-transparent z-5" />
        <div className="pointer-events-none hidden sm:block absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#030014] to-transparent z-5" />

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="h-full w-full flex flex-row gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 overflow-x-auto scrollbar-hidden snap-x snap-mandatory"
        >
          {PROJECTS.map((project) => (
            <div key={project.title} className="flex-shrink-0 w-[88%] sm:w-[60%] md:w-[450px] snap-start">
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
