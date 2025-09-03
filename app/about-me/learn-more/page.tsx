import React from "react";

export default function LearnMorePage() {
  return (
    <main className="h-full w-full">
      <section
        id="learn-more"
        className="flex flex-col items-center justify-center py-24 px-4"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 relative inline-block">
          About Me
          <span className="block h-1 w-16 mx-auto mt-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
        </h1>

        {/* Description */}
        <div className="mt-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-300 text-justify bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            Hello! I&apos;m <span className="font-semibold text-white">Syahrul</span>, 
            a graduate of <span className="font-semibold text-white">Computer Engineering at ITS </span> 
            with a strong enthusiasm for building meaningful technology. 
            My journey into the world of tech began with a conscious choice 
            to delve into complex challenges. 
            <br /><br />
            I focus on <span className="text-purple-400 font-medium">Full-stack development</span>, 
            covering both front-end and back-end for web and software applications, 
            with a particular interest in integrating 
            <span className="text-cyan-400 font-medium"> AI and Machine Learning </span> 
            to create innovative solutions.
            <br /><br />
            Beyond academics, I actively honed my leadership and communication 
            skills through various roles, such as Project Officer and Head of HR in 
            campus organizations. These experiences taught me that great 
            applications are not only built with code but also with effective 
            collaboration.
            <br /><br />
            I am always eager to apply my blend of technical and interpersonal 
            skills to create digital solutions that are modern, user-friendly, 
            and make a positive impact.
          </p>
        </div>
      </section>
    </main>
  );
}
