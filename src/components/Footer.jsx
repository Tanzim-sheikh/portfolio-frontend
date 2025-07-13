import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Name and Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-amber-300">Tanzim Sheikh</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#about" className="hover:text-amber-300 transition">About</a>
          <a href="#projects" className="hover:text-amber-300 transition">Projects</a>
          <a href="#contact" className="hover:text-amber-300 transition">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a href="https://github.com/Tanzim-sheikh" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tanzim-sheikh-a42159328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition">
            <FaLinkedin />
          </a>
          <a href="https://mail.google.com/mail/u/0/#search/tanzimsheikh68%40gmail.com" className="hover:text-amber-300 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
