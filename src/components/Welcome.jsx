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


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import main from "../assets/welcome.png";
import modernLit from "../assets/welcomemid.png";

export default function Welcome() {
  const [showSecond, setShowSecond] = useState(false);

  const handleThreadPull = () => {
    setShowSecond(prev => !prev);
  };

  return (
    <main id="welcome" className="flex justify-center mt-10 relative">
      <div className="relative h-[450px] w-[900px] rounded-2xl overflow-hidden shadow-2xl">

        {/* Background Image Switcher */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showSecond ? 'second' : 'first'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${showSecond ? modernLit : main})` }}
          />
        </AnimatePresence>

       
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
            Web Developer
          </p>
          <button className="mt-6 bg-amber-300 hover:bg-black hover:text-amber-300 text-black font-semibold px-5 py-2 rounded-xl shadow-md transition-all">
           <a href="#projects">Projects</a>
          </button>
        </div>

        {/* Realistic Thread Button (Pull) */}
        <div className="absolute top-6 right-[440px] flex flex-col items-center z-30">
          {/* Thread */}
          <motion.div
            animate={{
              y: [0, 2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-[2px] h-24 bg-gray-700"
          />

          {/* Pull Knob */}
          <motion.div
            whileTap={{ y: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleThreadPull}
            className="w-6 h-6 bg-yellow-400 border-2 border-gray-800 rounded-full shadow-lg cursor-pointer hover:scale-110 transition"
            title="Pull Thread"
          />
        </div>
      </div>
    </main>
  );
} 