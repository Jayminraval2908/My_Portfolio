import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Web Development Intern",
    company: "Internzvalley",
    duration: "Mar 2025 – May 2025",
    color: "cyan",
    points: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and MERN Stack.",
      "Built REST APIs, CRUD operations, and authentication systems using Node.js and Express.js.",
      "Used Git and GitHub for version control and collaborative development.",
      "Improved debugging, responsive UI development, and problem-solving skills.",
    ],
  },

  {
    role: "MERN Stack Intern",
    company: "Grownited Pvt. Ltd.",
    duration: "Jan 2026 – April 2026",
    color: "purple",
    points: [
      "Working on full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Developing scalable backend APIs and integrating them with responsive frontend interfaces.",
      "Contributing to real-world vehicle marketplace systems with booking and authentication modules.",
      "Collaborating with team members and debugging production-level issues.",
    ],
  },
];

function Experience() {
  const sectionRef = useRef();

useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.from(".experience-title", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    gsap.from(".timeline-card", {
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        start: "top 75%",
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });

    gsap.from(".timeline-line", {
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        start: "top 80%",
      },
      scaleY: 0,
      duration: 1.2,
      transformOrigin: "top",
    });

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      id="Experience"
      className="w-full px-6 md:px-20 py-24 relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-24">
          <p className="experience-title uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
            Career Journey
          </p>

          <h2 className="experience-title text-4xl md:text-6xl font-black">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper relative">
          
          {/* Vertical Line */}
          <div className="timeline-line hidden md:block absolute left-1/2 top-0 w-[3px] h-[90%] bg-gradient-to-b from-cyan-400 to-purple-500 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-20">
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-card flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } gap-10`}
              >
                
                {/* Empty Space */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center relative z-20">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      exp.color === "cyan"
                        ? "bg-cyan-400 shadow-cyan-400/50"
                        : "bg-purple-500 shadow-purple-500/50"
                    } shadow-lg`}
                  ></div>
                </div>

                {/* Card */}
                <div className="w-full md:w-1/2">
                  <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition duration-500 relative overflow-hidden">
                    
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>

                    <div className="relative z-10">
                      
                      <p className="text-cyan-400 text-sm font-semibold tracking-wide mb-2">
                        {exp.duration}
                      </p>

                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {exp.role}
                      </h3>

                      <h4 className="text-lg text-gray-400 mb-6">
                        {exp.company}
                      </h4>

                      <ul className="space-y-4">
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-300 leading-relaxed"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-cyan-400"></span>

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;