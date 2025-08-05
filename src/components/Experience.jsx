import React from 'react';

function Experience() {
  return (
    <section
      id="Experience"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 sm:px-10 md:px-20 py-16"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          Experience
        </h2>

        <div className="bg-[#1a1f2e] p-5 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">
            Frontend Developer Intern
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mt-1">
            Internzvalley · Jan 2025 – Mar 2025
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base text-gray-300">
            <li>
              Built responsive UIs using <span className="text-cyan-400">React.js</span> and{' '}
              <span className="text-teal-400">Tailwind CSS</span>.
            </li>
            <li>
              Developed mini projects like a weather app and a to-do app to strengthen frontend concepts.
            </li>
            <li>
              Collaborated with mentors to improve code readability, logic, and debugging skills.
            </li>
            <li>
              Learned GitHub version control, issue tracking, and deployed apps on Vercel.
            </li>
          </ul>
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-400 mt-6">
          * More experience updates coming as I grow in the industry.
        </p>
      </div>
    </section>
  );
}

export default Experience;
