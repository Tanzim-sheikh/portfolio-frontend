// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiDownload, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
// import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
// import { SiMongodb, SiTailwindcss } from 'react-icons/si';

// export default function Welcome() {
//   const [currentRole, setCurrentRole] = useState(0);
  
//   const roles = [
//     "Full Stack Developer",
//     "React Developer", 
//     "MERN Stack Developer",
//     "Web Developer"
//   ];

//   // Role changer effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const Resume = () => {
//     window.open("https://drive.google.com/file/d/1LMSlTjgXpv4l25beFcL9uPsfVfHSrGLs/view", "_blank");
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//   //  <main id="welcome" className="w-full min-h-screen flex items-center justify-center bg-white px-6 relative overflow-hidden">
//     <main id="welcome" className="w-full min-h-screen flex items-center justify-center bg-white px-6 relative overflow-hidden pt-20 lg:pt-0">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Geometric Shapes */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-60"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}
//         ></div>
//       </div>

//       <div className="max-w-6xl mx-auto w-full relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <motion.div 
//             className="text-center lg:text-left"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {/* Welcome Badge */}
//             <motion.div
//               variants={itemVariants}
//               className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
//             >
//               <FiCode className="text-amber-600" />
//               Welcome to my portfolio
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h1 
//               variants={itemVariants}
//               className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
//             >
//               Hi, I'm <span className="text-amber-300">Tanzim</span>
//               <br />
//               <span className="text-gray-800">Sheikh</span>
//             </motion.h1>

//             {/* Animated Role */}
//             <motion.div
//               variants={itemVariants}
//               className="mb-8"
//             >
//               <div className="flex items-center justify-center lg:justify-start gap-3 text-xl text-gray-600">
//                 <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
//                 <AnimatePresence mode="wait">
//                   <motion.span
//                     key={currentRole}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.5 }}
//                     className="font-semibold text-gray-800"
//                   >
//                     {roles[currentRole]}
//                   </motion.span>
//                 </AnimatePresence>
//               </div>
//             </motion.div>

//             {/* Description */}
//             <motion.p
//               variants={itemVariants}
//               className="text-lg text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0"
//             >
//               I create beautiful, functional, and user-friendly web applications 
//               using modern technologies. Passionate about clean code and 
//               innovative solutions.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
//             >
//               <motion.button
//                 onClick={Resume}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
//               >
//                 <FiDownload className="group-hover:animate-bounce" />
//                 Download Resume
//               </motion.button>
              
//               <motion.a
//                 href="#projects"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-gray-300 hover:border-amber-300 text-gray-700 hover:text-amber-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
//               >
//                 View My Work
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   →
//                 </motion.span>
//               </motion.a>
//             </motion.div>

//             {/* Social Links */}
//             <motion.div
//               variants={itemVariants}
//               className="flex justify-center lg:justify-start gap-6 mb-12"
//             >
//               {[
//                 { icon: FiGithub, href: "#", color: "hover:text-gray-900" },
//                 { icon: FiLinkedin, href: "#", color: "hover:text-blue-600" }
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   whileHover={{ scale: 1.2, y: -2 }}
//                   className="w-12 h-12 bg-gray-100 hover:bg-amber-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300"
//                 >
//                   <social.icon size={20} />
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* Tech Stack */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-wrap justify-center lg:justify-start gap-6"
//             >
//               {[
//                 { icon: FaReact, name: "React", color: "text-blue-500" },
//                 { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
//                 { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
//                 { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-500" }
//               ].map((tech, index) => (
//                 <motion.div
//                   key={tech.name}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 1 + index * 0.1 }}
//                   className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200 group hover:shadow-md transition-all duration-300"
//                 >
//                   <tech.icon className={`${tech.color} group-hover:scale-110 transition-transform`} size={20} />
//                   <span className="text-sm font-medium text-gray-700">{tech.name}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Visual Element */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="relative"
//           >
//             {/* Main Card */}
//             <div className="relative bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 shadow-2xl border border-amber-100">
//               {/* Floating Elements */}
//               <motion.div
//                 animate={{ y: [0, -20, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute -top-4 -left-4 w-20 h-20 bg-amber-300 rounded-2xl flex items-center justify-center shadow-lg"
//               >
//                 <FaReact className="text-white text-2xl" />
//               </motion.div>

//               <motion.div
//                 animate={{ y: [0, 15, 0] }}
//                 transition={{ duration: 3, repeat: Infinity, delay: 1 }}
//                 className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg"
//               >
//                 <FaNodeJs className="text-green-400 text-xl" />
//               </motion.div>

//               {/* Content Box */}
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mt-12 mb-8">
//                 <div className="text-center">
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                     className="w-20 h-20 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
//                   >
//                     <span className="text-2xl font-bold text-white">TS</span>
//                   </motion.div>
                  
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Tanzim Sheikh</h3>
//                   <p className="text-gray-600 mb-4">Full Stack Developer</p>
                  
//                   <div className="w-16 h-1 bg-amber-300 rounded-full mx-auto mb-6"></div>
                  
//                   <p className="text-gray-500 text-sm leading-relaxed">
//                     Passionate about creating digital solutions that make a difference. 
//                     Let's build something amazing together!
//                   </p>
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-4">
//                 {[
//                   { number: "10+", label: "Projects" },
//                   { number: "2+", label: "Years" },
//                   { number: "5+", label: "Techs" }
//                 ].map((stat, index) => (
//                   <motion.div
//                     key={stat.label}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.8 + index * 0.1 }}
//                     className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
//                   >
//                     <div className="text-lg font-bold text-gray-900">{stat.number}</div>
//                     <div className="text-xs text-gray-500">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       {/* <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center text-gray-400"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2 }}
//       >
//         <span className="text-sm mb-2">Scroll to explore</span>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-1 h-3 bg-amber-300 rounded-full mt-2"
//           />
//         </motion.div>
//       </motion.div> */}
//     </main>
//   );
// }

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

export default function Welcome() {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full Stack Developer",
    "React Developer", 
    "MERN Stack Developer",
    "Web Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Resume = () => {
    window.open("https://drive.google.com/file/d/1LMSlTjgXpv4l25beFcL9uPsfVfHSrGLs/view", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <main id="welcome" className="w-full min-h-screen flex items-center justify-center bg-white px-6 relative overflow-hidden pt-20 lg:pt-0"> {/* Added padding top */}
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 py-8 lg:py-0"> {/* Added vertical padding */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-0"> {/* Added horizontal padding for mobile */}
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Welcome Badge - Now visible with proper spacing */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-8 mt-4 lg:mt-0" // Added top margin for mobile
            >
              <FiCode className="text-amber-600" />
              Welcome to my portfolio
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Hi, I'm <span className="text-amber-300">Tanzim</span>
              <br />
              <span className="text-gray-800">Sheikh</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 text-lg sm:text-xl text-gray-600">
                <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="font-semibold text-gray-800"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              I create beautiful, functional, and user-friendly web applications 
              using modern technologies. Passionate about clean code and 
              innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12"
            >
              <motion.button
                onClick={Resume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group text-sm sm:text-base"
              >
                <FiDownload className="group-hover:animate-bounce" />
                Download Resume
              </motion.button>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 hover:border-amber-300 text-gray-700 hover:text-amber-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
              >
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-6 mb-8 sm:mb-12"
            >
              {[
                { icon: FiGithub, href: "#", color: "hover:text-gray-900" },
                { icon: FiLinkedin, href: "#", color: "hover:text-blue-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-amber-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6"
            >
              {[
                { icon: FaReact, name: "React", color: "text-blue-500" },
                { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
                { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
                { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-500" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-sm border border-gray-200 group hover:shadow-md transition-all duration-300 text-sm sm:text-base"
                >
                  <tech.icon className={`${tech.color} group-hover:scale-110 transition-transform`} size={18} />
                  <span className="font-medium text-gray-700">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mt-8 lg:mt-0 px-4 sm:px-0" // Added top margin and horizontal padding for mobile
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-amber-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-100 mx-auto max-w-md lg:max-w-none"> {/* Added max-width and auto margin for mobile */}
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-amber-300 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FaReact className="text-white text-xl sm:text-2xl" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FaNodeJs className="text-green-400 text-lg sm:text-xl" />
              </motion.div>

              {/* Content Box */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mt-10 sm:mt-12 mb-6 sm:mb-8">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg"
                  >
                    <span className="text-xl sm:text-2xl font-bold text-white">TS</span>
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Tanzim Sheikh</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">Full Stack Developer</p>
                  
                  <div className="w-12 h-1 sm:w-16 sm:h-1 bg-amber-300 rounded-full mx-auto mb-4 sm:mb-6"></div>
                  
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Passionate about creating digital solutions that make a difference. 
                    Let's build something amazing together!
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { number: "10+", label: "Projects" },
                  { number: "2+", label: "Years" },
                  { number: "5+", label: "Techs" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-sm sm:text-lg font-bold text-gray-900">{stat.number}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-amber-300 rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
    </main>
  );
}