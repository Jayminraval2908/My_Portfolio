import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMailFill,
  RiPhoneFill,
  RiArrowUpLine,
} from "@remixicon/react";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef();

useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.fromTo(
      ".footer-title",
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
          trigger: footerRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".contact-card",
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
          trigger: ".footer-grid",
          start: "top 90%",
        },
      }
    );

  }, footerRef);

  return () => ctx.revert();

}, []);
  return (
    <footer
      ref={footerRef}
      id="Footer"
      className="relative w-full px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="footer-title uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
            Contact
          </p>

          <h2 className="footer-title text-4xl md:text-6xl font-black">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="footer-title text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Open to internship opportunities, freelance projects, and collaborations.
            Feel free to connect with me through any platform below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="footer-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Phone */}
          <div className="contact-card group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition duration-500">
            
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
              <RiPhoneFill size={30} className="text-cyan-400" />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Phone
            </h3>

            <p className="text-gray-400">
              +91 9925396071
            </p>
          </div>

          {/* Email */}
          <div className="contact-card group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400/30 transition duration-500">
            
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
              <RiMailFill size={30} className="text-purple-400" />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Email
            </h3>

            <a
              href="mailto:ravaljaymin2908@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition duration-300 break-all"
            >
              ravaljaymin2908@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="contact-card group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition duration-500">
            
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
              <RiLinkedinBoxFill size={30} className="text-cyan-400" />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/raval-jaymin-b7baa8294"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300 break-all"
            >
              Connect Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-card group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/30 transition duration-500">
            
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
              <RiGithubFill size={30} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              GitHub
            </h3>

            <a
              href="https://github.com/Jayminraval2908"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 break-all"
            >
              View Repositories
            </a>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Jaymin Raval — MERN Stack Developer
          </p>

          {/* Scroll Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500 hover:border-cyan-500 transition duration-300"
          >
            <span className="text-sm font-medium">
              Back To Top
            </span>

            <RiArrowUpLine className="group-hover:-translate-y-1 transition duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;