import React from 'react';

function About() {
  return (
    <section
      id="About"
      className="h-screen flex items-center justify-center 		bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-10 md:px-20"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

        <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
          Hi! I'm <span className="text-[#4da6ff] font-semibold">Jaymin Raval</span>, a passionate frontend developer focused on crafting beautiful, responsive, and high-performance web applications. I love solving problems with clean and efficient code.
        </p>

        <p className="text-sm md:text-lg text-gray-300 leading-relaxed mt-6">
          I'm proficient in <span className="font-medium text-[#38bdf8]">React</span>, <span className="font-medium text-[#06b6d4]">Tailwind CSS</span>, and <span className="font-medium text-[#facc15]">JavaScript</span>, and I’m continuously learning and exploring new technologies to sharpen my skills.
        </p>

        <p className="text-sm md:text-lg text-gray-300 leading-relaxed mt-6">
          Outside of coding, I enjoy exploring tech trends, watching developer content, and working on side projects that push my creativity and logic.
        </p>
      </div>
    </section>
  );
}

export default About;

