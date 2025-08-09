 // // Welcome.jsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import main from "../assets/welcome.png"; // 1st image
// import modernLit from "../assets/welcomemid.png"; // 2nd image (generated one)

// export default function Welcome() {
//   const [showSecond, setShowSecond] = useState(false);

//   const handleThreadPull = () => {
//     setShowSecond(true);
//   };

//   return (
//     <main id="welcome" className="flex justify-center mt-10 relative">
//       <div className="relative h-[450px] w-[900px] rounded-2xl overflow-hidden shadow-2xl">

//         {/* Animated Image Switcher */}
//         <AnimatePresence>
//           {!showSecond ? (
//             <motion.div
//               key="first"
//               initial={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1 }}
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: url(${main}) }}
//             />
//           ) : (
//             <motion.div
//               key="second"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: url(${modernLit}) }}
//             />
//           )}
//         </AnimatePresence>

//         {/* Overlay Text */}
//         <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center p-6">
//           <h1
//             className="text-white text-5xl font-extrabold drop-shadow-[4px_4px_2px_rgba(0,0,0,0.8)]"
//             style={{
//               textShadow: '5px 5px 8px rgba(0, 0, 0, 0.9)',
//               transform: 'translateZ(0)',
//             }}
//           >
//             Tanzim Sheikh
//           </h1>
//           <p className="text-white text-lg font-semibold drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mt-3">
//             Web Developer
//           </p>
//           <button className="mt-6 bg-amber-300 hover:bg-black hover:text-amber-300 text-black font-semibold px-5 py-2 rounded-xl shadow-md transition-all">
//             Projects
//           </button>
//         </div>

//         {/* Thread Puller (Click) */}
//         {!showSecond && (
//           <button
//             onClick={handleThreadPull}
//             className="absolute top-4 right-4 z-20 text-xs font-bold text-black bg-amber-300 px-3 py-1 rounded-full shadow hover:bg-black hover:text-amber-300 transition-all"
//           >
//             Pull Thread
//           </button>
//         )}
//       </div>
//     </main>
//   );
// }


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import main from "../assets/welcome.png";
import logo from "../assets/letter-t.png";
import modernLit from "../assets/welcomemid.png";

export default function Welcome() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [main, modernLit];

  // Automatic image changer every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main id="welcome" className="w-full mt-10 relative">
      {/* Desktop/Large screen */}
      <div className="hidden sm:flex justify-center">
        <div className="relative h-[450px] w-[900px] rounded-2xl overflow-hidden shadow-2xl">
          {/* Automatic Background Image Switcher */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            />
          </AnimatePresence>
          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center p-6">
            <h1
              className="text-white text-5xl font-extrabold"
              style={{
                textShadow: '5px 5px 12px rgba(0,0,0,0.9)',
              }}
            >
              Tanzim Sheikh
            </h1>
            <p
              className="text-white text-lg font-semibold mt-3"
              style={{
                textShadow: '3px 3px 8px rgba(0,0,0,0.8)',
              }}
            >
              Web Developer || Full stack developer || React Developer
            </p>
            <button className="mt-6 bg-amber-300 hover:bg-black hover:text-amber-300 text-black font-semibold px-5 py-2 rounded-xl shadow-md transition-all">
              <a href="#projects">Projects</a>
            </button>
          </div>
          {/* Image Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-amber-300 scale-110' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentImageIndex(index)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-20">
            <motion.div
              className="h-full bg-amber-300"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 5, 
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </div>
      </div>
      {/* Mobile/Small screen */}
      <div className="flex sm:hidden justify-center items-center w-full px-4">
        <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl flex flex-col items-center py-10 px-4 mt-4">
          <img src={logo} alt="logo" className="w-24 h-24 rounded-full object-cover border-4 border-amber-300 shadow mb-4 bg-white p-2" />
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Tanzim Sheikh</h1>
          <p className="text-base text-gray-700 font-semibold mb-4 text-center">Web Developer<br/>Full Stack Developer<br/>React Developer</p>
          <a href="#projects" className="mt-2 bg-amber-300 hover:bg-black hover:text-amber-300 text-black font-semibold px-5 py-2 rounded-xl shadow-md transition-all">Projects</a>
        </div>
      </div>
    </main>
  );
} 