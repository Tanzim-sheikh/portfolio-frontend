
  import React, { useState } from 'react';
  import logo from "../../src/assets/letter-t.png";
  import { BiMenu, BiX } from 'react-icons/bi';

  export default function Headers() {
    const [isOpen, setIsOpen] = useState(false);
    const Resume = () => {
      window.open("https://drive.google.com/file/d/1LMSlTjgXpv4l25beFcL9uPsfVfHSrGLs/view", "_blank");
    };

    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleClose = () => setIsOpen(false);

    return (
      <header data-aos="fade-down" className="sticky top-0 z-50 bg-white shadow-md w-full">
        <nav className="px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <div className="text-2xl pb-2 font-bold hover:cursor-pointer hover:text-amber-300">
              Tanzim's Portfolio
            </div>
          </div>
          {/* Desktop Menu */}
          <ul className="flex-wrap space-x-6 pr-2 font-semibold text-gray-800 hidden md:flex">
            <li><a href="#welcome" className="hover:text-amber-300">Home</a></li>
            <li><a href="#projects" className="hover:text-amber-300">Projects</a></li>
            <li><a href="#about" className="hover:text-amber-300">About</a></li>
            <li><a href="#contact" className="hover:text-amber-300">Contact</a></li>
            <li>
              <a
                onClick={Resume}
                className="hover:text-amber-300 hover:bg-black bg-amber-300 px-4 py-2 rounded-2xl transition-all cursor-pointer"
              >
                Resume
              </a>
            </li>
          </ul>
          {/* Mobile Toggle Button */}
          <button
            className="md:hidden size-10 flex items-center justify-center focus:outline-none"
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            {isOpen ? <BiX size={32} /> : <BiMenu size={32} />}
          </button>
        </nav>
        {/* Mobile Menu */}
        {isOpen && (
          <div 
            className="md:hidden fixed inset-0 z-50 flex"
            style={{backdropFilter: 'blur(4px)'}} 
            onClick={handleClose}
          >
            {/* White Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-80 transition-opacity duration-300" />
            {/* Slide-in Menu */}
            <div
              className="ml-auto h-full w-4/5 max-w-xs rounded-l-3xl shadow-2xl flex flex-col p-8 space-y-7 relative animate-slide-in-custom border-l border-gray-200 bg-white"
              style={{ minWidth: '260px', background: '#fff' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-amber-400 transition-colors"
                onClick={handleClose}
                aria-label="Close menu"
              >
                <BiX size={32} />
              </button>
              <nav className="flex flex-col gap-4 mt-10 bg-white rounded-xl p-2">
                <a href="#welcome" className="py-3 px-4 text-lg font-semibold text-gray-800 rounded-xl hover:bg-amber-100 hover:text-amber-400 transition-all" onClick={handleClose}>Home</a>
                <a href="#projects" className="py-3 px-4 text-lg font-semibold text-gray-800 rounded-xl hover:bg-amber-100 hover:text-amber-400 transition-all" onClick={handleClose}>Projects</a>
                <a href="#about" className="py-3 px-4 text-lg font-semibold text-gray-800 rounded-xl hover:bg-amber-100 hover:text-amber-400 transition-all" onClick={handleClose}>About</a>
                <a href="#contact" className="py-3 px-4 text-lg font-semibold text-gray-800 rounded-xl hover:bg-amber-100 hover:text-amber-400 transition-all" onClick={handleClose}>Contact</a>
                <a
                  onClick={() => { Resume(); handleClose(); }}
                  className="py-3 px-4 text-lg font-semibold bg-amber-300 rounded-xl hover:bg-black hover:text-amber-300 transition-all cursor-pointer text-center shadow-md mt-2"
                >
                  Resume
                </a>
              </nav>
            </div>
            <style>{`
              @keyframes slide-in-custom {
                0% { transform: translateX(100%); opacity: 0; }
                100% { transform: translateX(0); opacity: 1; }
              }
              .animate-slide-in-custom {
                animation: slide-in-custom 0.35s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </div>
        )}
      </header>
    );
  }