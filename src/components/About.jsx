import React from 'react';
import profile from "../assets/profile.jpg"
export default function AboutMe() {
  return (
    <section id="about" className="w-full px-10 py-20 bg-white pt-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* 🟨 Image with Overlay */}          
        <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden group shadow-xl">
            <img                                                                                                                                                                                
              src={profile}
              alt="Tanzim Sheikh"
              className="w-full h-full object-cover group-hover:blur-[2px] transition duration-300"
            />
            
            {/* Overlay Text on Hover */}
            <div className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4">
              <h1 className="text-xl font-bold text-amber-300 mb-1">Tanzim Sheikh</h1>
              <p className="text-sm text-center">Full Stack Developer</p>
            </div>

            {/* Yellow Border on Hover */}
            <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-amber-300 transition duration-300"></div>
          </div>
        </div>

        {/* 🟩 Text Section */}
        <div data-aos="fade-right" className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            About <span className="text-amber-300">Me</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Hi! I'm <span className="text-black font-bold">Tanzim Sheikh</span>, a passionate full-stack web developer with strong skills in React, Node.js, MongoDB, and Tailwind CSS. I love building clean, responsive, and user-friendly websites.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            Whether it's a sleek portfolio, a scalable web app, or a powerful backend API — I focus on writing clean code and building meaningful experiences.
          </p>
          
          <div className="mt-6">
            <a
              href="#projects"
              className="bg-amber-300 hover:bg-black hover:text-amber-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}