// import React, { useState, useEffect } from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
// import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const skills = [
//   { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 80 },
//   { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 70 },
//   { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" />, level: 70 },
//   { name: 'React', icon: <FaReact className="text-cyan-400 text-4xl" />, level: 65 },
//   { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" />, level: 70 },
//   { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-4xl" />, level: 70 },
//   { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" />, level: 75 },
//   { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-4xl" />, level: 80 },
// ];

// const SkillCard = ({ icon, name, level }) => {
//   const [hovered, setHovered] = useState(false);
//   const [percent, setPercent] = useState(0);

//   useEffect(() => {
//     let frame;
//     let startTime;

//     const animate = (time) => {
//       if (!startTime) startTime = time;
//       const progress = time - startTime;
//       const eased = Math.min((progress / 800) * level, level);
//       setPercent(Math.floor(eased));
//       if (eased < level) {
//         frame = requestAnimationFrame(animate);
//       }
//     };

//     if (hovered) {
//       frame = requestAnimationFrame(animate);
//     } else {
//       setPercent(0);
//     }

//     return () => cancelAnimationFrame(frame);
//   }, [hovered, level]);

//   return (
//     <div
//       data-aos="zoom-in-up"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="w-72 h-44 bg-white rounded-xl overflow-hidden shadow-xl p-5 flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 group relative border border-transparent hover:border-amber-400"
//     >
//       {/* Dark Blur on Hover */}
//       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 rounded-xl" />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center w-full">
//         <div className="mb-2">{icon}</div>
//         <h2 className="font-bold text-gray-800 group-hover:text-amber-300 text-lg transition">
//           {name}
//         </h2>

//         {/* Range Bar */}
//         {hovered && (
//           <div className="w-full mt-4 px-2">
//             <div className="w-full h-[6px] bg-gray-300 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-amber-400 rounded-full transition-all duration-[800ms] ease-out"
//                 style={{ width: `${percent}%` }}
//               />
//             </div>
//             <p className="text-right text-sm font-semibold text-white mt-1 tracking-wide">
//               {percent}%
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default function Experience() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="py-20 px-10 bg-gray-50" id="experience">
//       <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12" data-aos="fade-up">
//         <span className="text-amber-400">My</span> Skills
//       </h1>

//       <div className="flex flex-wrap justify-center gap-10">
//         {skills.map((skill, i) => (
//           <SkillCard key={i} icon={skill.icon} name={skill.name} level={skill.level} />
//         ))}
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 80 },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 80 },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 80 },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 70 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 70 },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800" />, level: 75 },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 75 },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" />, level: 60 },
];

const SkillCard = ({ icon, name, level, index }) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-amber-300"
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Skill Name */}
      <h3 className="text-center font-bold text-gray-800 text-lg mb-4 group-hover:text-amber-600 transition-colors">
        {name}
      </h3>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-amber-300 to-amber-400 rounded-full relative"
        >
          {/* Shine Effect */}
          <motion.div
            animate={isInView ? { x: ["0%", "100%"] } : { x: "0%" }}
            transition={{ duration: 2, delay: 1 + index * 0.1, repeat: Infinity, repeatDelay: 3 }}
            className="absolute top-0 left-0 w-1/3 h-full bg-white opacity-30 skew-x-12"
          />
        </motion.div>
      </div>

      {/* Percentage */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Skill Level</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
          className="font-bold text-gray-900 text-lg"
        >
          {level}%
        </motion.span>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-300 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="w-full py-20 bg-gray-50 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-amber-300">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              index={index}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm constantly exploring new technologies and improving my skills to stay 
              up-to-date with the latest web development trends and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}