import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left text-sm">
          © 2024 Raval Jaymin. All rights reserved.
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
