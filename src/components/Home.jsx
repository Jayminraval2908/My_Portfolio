import React from 'react';
import Footer from './Footer';
import myimg from '../assets/myimg.jpg';

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 sm:px-10 md:px-20 py-16">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-2/4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-normal tracking-tight mb-4">
            Hello, I'm Jaymin
          </h1>
          <p className="text-sm sm:text-base md:text-lg tracking-tight">
            I'm a passionate frontend developer and Computer Engineering student, focused on building clean, responsive, and user-friendly web applications using modern technologies like React and Tailwind CSS.
          </p>

          <button
            onClick={() => {
              document.getElementById('Footer')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-6 sm:mt-8 text-white py-2 px-5 sm:px-6 text-sm sm:text-base md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 duration-300 hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
         <img
  src={jaymin}
  alt="Jaymin"
  className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-white"
/>

        </div>
      </div>
    </div>
  );
}

export default Home;

