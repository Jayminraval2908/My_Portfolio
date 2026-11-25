export const profile = {
  name: "Jaymin Raval",
  role: "MERN Stack Developer",
  email: "ravaljaymin2908@gmail.com",
  phone: "+91 9925396071",
  linkedin: "https://www.linkedin.com/in/raval-jaymin-b7baa8294",
  github: "https://github.com/Jayminraval2908",
  resume: "/MERN_RESUME.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "GSAP"] },
  { title: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST APIs"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman"] },
  { title: "AI Tools", items: ["Claude Code", "Codex", "Gemini", "Cursor", "Antigravity"] },
];
export const experiences = [
  {
    role: "MERN Stack Intern",
    company: "Haronex Technologies Pvt. Ltd.",
    location: "Anand, Gujarat",
    duration: "Present",
    points: [
      "Fixing bugs across MERN stack applications.",
      "Testing features and reporting issues before release.",
      "Debugging frontend and backend code to improve stability.",
      "Working with the team on real-world production code.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "Grownited Pvt. Ltd.",
    duration: "Jan 2026 – Apr 2026",
    points: [
      "Built full-stack apps with MongoDB, Express.js, React.js and Node.js.",
      "Developed scalable backend APIs and connected them to responsive frontends.",
      "Contributed booking and authentication modules to a vehicle marketplace.",
      "Collaborated with the team and debugged production-level issues.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Internzvalley",
    duration: "Mar 2025 – May 2025",
    points: [
      "Developed responsive web apps with HTML, CSS, JavaScript and the MERN stack.",
      "Built REST APIs, CRUD operations and authentication with Node.js and Express.js.",
      "Used Git and GitHub for version control and collaboration.",
      "Sharpened debugging, responsive UI and problem-solving skills.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Powered Smart Notes",
    description: "Full-stack study platform: paste raw notes and AI turns them into bite-sized summaries, smart flashcards and active-recall quizzes in seconds.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "AI API"],
    live: "https://ai-powered-smart-notes-frontend.vercel.app/",
    github: "https://github.com/Jayminraval2908/AI-Powered-Smart-Notes_Frontend",
  },
  {
    title: "Vehicle Vault",
    description: "Full-stack vehicle marketplace: browse listings, negotiate offers, send inquiries and book test drives with secure authentication.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    live: "https://vehicle-vault-frontend-lake.vercel.app/",
    github: "https://github.com/Jayminraval2908/VehicleVault-Frontend",
  },
  {
    title: "Find My Doctor",
    description: "Healthcare platform to find doctors by city and specialty, with authentication and Appwrite integration.",
    tech: ["React", "Tailwind CSS", "Appwrite"],
    live: "https://find-my-doctor-m3ug.vercel.app/",
    github: "https://github.com/Jayminraval2908",
  },
  {
    title: "MovieBase",
    description: "Movie search platform showing ratings, posters, genres and details from a movie API.",
    tech: ["React", "JavaScript", "API", "CSS"],
    live: "https://movie-base-murex.vercel.app/",
    github: "https://github.com/Jayminraval2908/MovieBase",
  },
  {
    title: "AI PPE Detection",
    description: "Group project: AI-based industrial safety and surveillance system using computer vision to improve workplace compliance.",
    tech: ["Python", "YOLOv8", "Streamlit", "NumPy", "Pandas"],
    live: "https://ai-ppe-detection-dp.streamlit.app/",
    github: "https://github.com/Jayminraval2908/AI-PPE-Detection",
  },
];