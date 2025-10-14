"use client";

import { SparklesIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-8 md:px-20 mt-24 md:mt-40 w-full z-[20] gap-10"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI & IoT Enthusiast | Full Stack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 md:mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Meaningful
            </span>{" "}
            Digital Things.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-4 md:my-5 max-w-[600px]"
        >
          I&apos;m Syahrul, a developer specializing in creating modern and user-friendly applications. Explore my projects to see my skills in action.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link href={LINKS.learnMore}>
            Learn more
          </Link>
        </motion.div>
        <motion.a
          variants={slideInFromLeft(1)}
          href="/CV.pdf"
          download
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center justify-center gap-2"
        >
          CV
          <ArrowDownTrayIcon className="h-5 w-5" />
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full p-1 bg-gradient-to-tr from-purple-500 to-pink-500 animate-pulse-glow overflow-hidden">
          <Image
            src="/fotoku.png"
            alt="work icons"
            height={600}
            width={600}
            draggable={false}
            className="rounded-full object-cover object-center select-none"
          />
        </div>
      </motion.div>

    </motion.div>
  );
};
