import React from 'react';

const projects = [
  {
    title: 'Weather App',
    description:
      'A simple weather application that fetches real-time weather data using OpenWeather API. Built with HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://weather-o31nggr7o-jayminraval2908s-projects.vercel.app',
  },
  
  {
    title: 'Find My Doctor',    
    description:
      'A React + Tailwind website for finding doctors by city and specialty. Features login/signup and Appwrite integration.',
    tech: ['React', 'Tailwind CSS', 'Appwrite'],
    link: 'https://find-my-doctor-m3ug.vercel.app/',
  },
];

function Projects() {
  return (
    <section id="Projects" className="	bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-10 md:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e] rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#2a2f3d] text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm font-medium text-cyan-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
