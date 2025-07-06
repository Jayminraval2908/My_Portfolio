import React from 'react';
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssLine,
  RiDatabase2Line,
} from '@remixicon/react';

const skills = [
  { name: 'HTML5', icon: <RiHtml5Fill className="text-orange-500" /> },
  { name: 'CSS3', icon: <RiCss3Fill className="text-blue-500" /> },
  { name: 'JavaScript', icon: <RiJavascriptFill className="text-yellow-400" /> },
  { name: 'React', icon: <RiReactjsLine className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssLine className="text-teal-400" /> },
  { name: 'MySQL', icon: <RiDatabase2Line className="text-blue-400" /> },
];

function Skills() {
  return (
    <section id="Skills" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-10 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#1a1f2e] p-5 rounded-xl hover:scale-105 duration-300 shadow-md w-32 md:w-36"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm md:text-base font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

