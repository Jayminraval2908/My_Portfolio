import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssLine,
  RiDatabase2Line,
  RiNodejsLine,
  RiGitBranchLine,
  RiGithubFill,
  RiServerLine,
} from "@remixicon/react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "HTML5",
    icon: <RiHtml5Fill className="text-orange-500" />,
    level: "95%",
  },
  {
    name: "CSS3",
    icon: <RiCss3Fill className="text-blue-500" />,
    level: "90%",
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptFill className="text-yellow-400" />,
    level: "88%",
  },
  {
    name: "React.js",
    icon: <RiReactjsLine className="text-cyan-400" />,
    level: "90%",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssLine className="text-teal-400" />,
    level: "92%",
  },
  {
    name: "Node.js",
    icon: <RiNodejsLine className="text-green-500" />,
    level: "85%",
  },
  {
    name: "Express.js",
    icon: <RiServerLine className="text-gray-300" />,
    level: "84%",
  },
  {
    name: "MongoDB",
    icon: <RiDatabase2Line className="text-green-400" />,
    level: "82%",
  },
  {
    name: "Git",
    icon: <RiGitBranchLine className="text-orange-400" />,
    level: "88%",
  },
  {
    name: "GitHub",
    icon: <RiGithubFill className="text-white" />,
    level: "90%",
  },
];

function Skills() {
  const sectionRef = useRef();

 useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.fromTo(
      ".skills-title",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".skill-card",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
        },
      }
    );

  }, sectionRef);

  return () => ctx.revert();

}, []);
  return (
    <section
      ref={sectionRef}
      id="Skills"
      className="relative w-full px-6 md:px-20 py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="skills-title uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
            Expertise
          </p>

          <h2 className="skills-title text-4xl md:text-6xl font-black">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {skills.map((skill, index) => (
            <div
              key={index}
             className="skill-card group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/40 transition duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>

              {/* Content */}
              <div className="relative z-10">
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl">
                    {skill.icon}
                  </div>

                  <span className="text-sm text-cyan-400 font-semibold">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    style={{ width: skill.level }}
                  ></div>
                </div>

                {/* Bottom Text */}
                <p className="text-gray-400 text-sm mt-5 leading-relaxed">
                  Experienced in building modern and scalable web applications using {skill.name}.
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;