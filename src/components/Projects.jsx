import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  RiGithubFill,
  RiExternalLinkLine,
} from "@remixicon/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Vehicle Vault",
    description:
      "A full-stack vehicle marketplace platform where users can explore vehicle listings, negotiate offers, send inquiries, and book test drives with secure authentication features.",

    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],

    live: "https://vehicle-vault-frontend-lake.vercel.app/",

    github: "https://github.com/Jayminraval2908/VehicleVault-Frontend",
  },

  {
    title: "Weather App",

    description:
      "A modern weather application that fetches real-time weather data using OpenWeather API with responsive UI and dynamic weather updates.",

    tech: ["HTML", "CSS", "JavaScript"],

    live:
      "https://weather-app-zeta-sand-27.vercel.app/",

    github:
      "https://github.com/Jayminraval2908/Weather_App",
  },

  {
    title: "Find My Doctor",

    description:
      "A React + Tailwind healthcare platform for finding doctors by city and specialty with authentication and Appwrite integration.",

    tech: ["React", "Tailwind CSS", "Appwrite"],

    live: "https://find-my-doctor-m3ug.vercel.app/",

    github:
      "https://github.com/Jayminraval2908",
  },

  {
    title: "MovieBase",

    description:
      "A movie search platform that displays movie ratings, posters, genres, and details using a movie API with modern responsive design.",

    tech: ["React", "JavaScript", "API", "CSS"],

    live: "https://movie-base-murex.vercel.app/",

    github:
      "https://github.com/Jayminraval2908/MovieBase",
  },
];

function Projects() {
  const sectionRef = useRef();

useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.fromTo(
      ".project-title",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".project-card",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
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
      id="Projects"
      className="relative w-full px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Background Glow */}
     <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="project-title uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
            Portfolio
          </p>

          <h2 className="project-title text-4xl md:text-6xl font-black">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 xl:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>

              <div className="relative z-10">

                {/* Project Number */}
                <p className="text-gray-500 text-sm mb-4">
                  0{index + 1}
                </p>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">

                  {/* Live Link */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
                  >
                    <RiExternalLinkLine size={18} />
                    Live Demo
                  </a>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 transition duration-300"
                  >
                    <RiGithubFill size={18} />
                    GitHub
                  </a>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;