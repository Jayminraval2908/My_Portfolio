import React from 'react';
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMailFill,
  RiPhoneFill
} from '@remixicon/react';

function Footer() {
  return (
    <footer id="Footer" className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20 py-6 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="flex items-center gap-2">
              <RiPhoneFill className="text-cyan-400" size={16} />
              +91 9925396071
            </li>
            <li className="flex items-center gap-2">
              <RiMailFill className="text-cyan-400" size={16} />
              ravaljaymin2908@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <RiLinkedinBoxFill className="text-cyan-400" size={16} />
              <a
                href="https://linkedin.com/in/raval-jaymin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/raval-jaymin
              </a>
            </li>
            <li className="flex items-center gap-2">
              <RiGithubFill className="text-cyan-400" size={16} />
              <a
                href="https://github.com/Jayminraval2908"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/Jayminraval2908
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-xs md:text-sm text-center md:text-right">
          © {new Date().getFullYear()} Jaymin Raval. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

