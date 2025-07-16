  import React, { useState } from 'react';
import logo from "../assets/letter-t.png";
import { BiMenu } from 'react-icons/bi';
export default function Headers() {
  const [isOpen, setIconopen] = useState(false);
  return (
    <header data-aos="fade-down" className="sticky top-0 z-50 bg-white shadow-md w-full">
      <nav className="px-6 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <div className="text-2xl font-bold hover:cursor-pointer hover:text-amber-300">
            Tanzim's Portfolio
          </div>
        </div>
        <div>
        <ul className="flex-wrap space-x-6 pr-2 font-semibold text-gray-800 hidden md:flex">
          <li><a href="#welcome" className="hover:text-amber-300">Home</a></li>
          <li><a href="#projects" className="hover:text-amber-300">Projects</a></li>
          <li><a href="#about" className="hover:text-amber-300">About</a></li>
          <li><a href="#contact" className="hover:text-amber-300">Contact</a></li>
          <li>
            <a
              onClick={() => alert("Resume link is not available yet!")}
              className="hover:text-amber-300 hover:bg-black bg-amber-300 px-4 py-2 rounded-2xl transition-all cursor-pointer"
            >
              Resume
            </a>
          </li>
        </ul>
        <ul className='md:hidden'><li><button className='size-10'><BiMenu></BiMenu></button></li></ul>
        </div>
      </nav>
    </header>
  );
}