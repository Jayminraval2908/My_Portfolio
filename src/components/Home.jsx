import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import myimg from "../assets/myimg.jpg";

function Home() {
  const heroRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-text", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    tl.from(
      imageRef.current,
      {
        scale: 0.5,
        opacity: 0,
        rotate: 10,
        duration: 1.2,
        ease: "elastic.out(1,0.5)",
      },
      "-=0.8"
    );

   gsap.to(imageRef.current, {
  y: 12,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "power1.inOut",
});
  }, []);

  return (
    <section
      ref={heroRef}
      id="Home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-16 relative"
    >
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 z-10 mt-14 md:mt-0">
        
        <p className="hero-text text-cyan-400 uppercase tracking-[6px] text-sm mb-4">
          MERN STACK DEVELOPER
        </p>

        <h1 className="hero-text text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
          Building
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Modern Web
          </span>
          Experiences
        </h1>

        <p className="hero-text text-gray-300 text-sm md:text-lg mt-6 leading-relaxed max-w-xl">
          Hi, I'm{" "}
          <span className="text-white font-semibold">
            Jaymin Raval
          </span>
          , a passionate MERN Stack Developer and Computer Engineering student focused on creating responsive, scalable, and interactive full-stack web applications using modern technologies.
        </p>

        {/* BUTTONS */}
        <div className="hero-text flex flex-wrap gap-5 mt-10">
          <button
            onClick={() => {
              document
                .getElementById("Projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
          >
            View Projects
          </button>

          <button
            onClick={() => {
              document
                .getElementById("Footer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition duration-300"
          >
            Contact Me
          </button>
        </div>

        {/* STATS */}
        <div className="hero-text flex gap-10 mt-14 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">10+</h2>
            <p className="text-gray-400 text-sm">Projects Built</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-purple-400">2+</h2>
            <p className="text-gray-400 text-sm">Internships</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-pink-400">MERN</h2>
            <p className="text-gray-400 text-sm">Full Stack</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 flex justify-center relative">
        
        {/* Glow */}
        <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        {/* Image */}
        <div
          ref={imageRef}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

          <img
            src={myimg}
            alt="Jaymin"
            className="relative w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-full border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center">
        <div className="w-[2px] h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>

        <p className="text-xs tracking-[4px] text-gray-400 mt-2 rotate-90">
          SCROLL
        </p>
      </div>
    </section>
  );
}

export default Home;