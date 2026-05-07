import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

    gsap.fromTo(
  ".skill-badge",
  {
    scale: 0.8,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".skills-container",
      start: "top 85%",
    },
    scale: 1,
    opacity: 1,
    stagger: 0.05,
    duration: 0.4,
    ease: "back.out(1.7)",
  }
);

    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="About"
      className="w-full px-6 md:px-20 py-24 relative"
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="about-title uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
            Know More
          </p>

          <h2 className="about-title text-4xl md:text-6xl font-black">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}
          <div className="space-y-8">

            <div className="about-card backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                MERN Stack Developer
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Hi, I'm Jaymin Raval, a passionate MERN Stack Developer focused on creating scalable, responsive, and interactive web applications.
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                I love building modern frontend interfaces and powerful backend systems using modern technologies.
              </p>
            </div>

            <div className="about-card backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Experience & Growth
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Currently working as a MERN Stack Intern contributing to real-world applications with APIs, authentication, booking systems, and responsive UI.
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                I continuously improve my skills by exploring GSAP animations, UI/UX design, and full-stack development practices.
              </p>
            </div>

          </div>

          {/* Right */}
          <div className="about-card backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Tech Stack & Skills
            </h3>

            <div className="skills-container flex flex-wrap gap-4 relative z-10">

              {[
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "JavaScript",
                "Tailwind CSS",
                "REST APIs",
                "Git",
                "GitHub",
                "Postman",
                "HTML",
                "CSS",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="skill-badge px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <h2 className="text-4xl font-black text-cyan-400">
                  4+
                </h2>

                <p className="text-gray-400 mt-2">
                  Projects
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <h2 className="text-4xl font-black text-purple-400">
                  2
                </h2>

                <p className="text-gray-400 mt-2">
                  Internships
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;