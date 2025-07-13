// import React, { useState, useEffect } from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
// import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

// const skills = [
//   { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-3xl" />, level: 80 },
//   { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-3xl" />, level: 70 },
//   { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" />, level: 70 },
//   { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" />, level: 65 },
//   { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" />, level: 70 },
//   { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-3xl" />, level: 70 },
//   { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-3xl" />, level: 75 },
//   { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-3xl" />, level: 80 },
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
//       const newPercent = Math.min((progress / 1000) * level, level); // 1s animation

//       setPercent(Math.floor(newPercent));
//       if (newPercent < level) {
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
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="w-60 h-36 bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-transparent hover:border-amber-400 relative group"
//     >
//       <div className="mb-2">{icon}</div>
//       <h2 className="font-bold text-gray-800">{name}</h2>

//       {/* Show progress on hover */}
//       {hovered && (
//         <div className="w-full mt-4">
//           <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-amber-400 transition-all duration-100"
//               style={{ width: `${percent}%` }}
//             />
//           </div>
//           <p className="text-right text-sm font-semibold text-gray-600 mt-2">
//             {percent}%
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function Experience() {
//   return (
//     <section className="py-20 px-10 bg-gray-50" id="experience">
//       <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
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



// import React, { useState, useEffect } from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
// import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

// const skills = [
//   { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-3xl" />, level: 80 },
//   { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-3xl" />, level: 70 },
//   { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" />, level: 70 },
//   { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" />, level: 65 },
//   { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" />, level: 70 },
//   { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-3xl" />, level: 70 },
//   { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-3xl" />, level: 75 },
//   { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-3xl" />, level: 80 },
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
//       const newPercent = Math.min((progress / 1000) * level, level); // 1s animation

//       setPercent(Math.floor(newPercent));
//       if (newPercent < level) {
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
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="w-60 h-36 bg-white rounded-xl shadow-md p-4 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-transparent hover:border-amber-400 relative group"
//     >
//       <div className="mb-2">{icon}</div>
//       <h2 className="font-bold text-gray-800">{name}</h2>

//       {/* Show progress on hover */}
//       {hovered && (
//         <div className="w-full mt-4">
//           <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-amber-400 rounded-full transition-[width] duration-[800ms] ease-out"
//               style={{ width: `${percent}%` }}
//             />
//           </div>
//           <p className="text-right text-sm font-semibold text-gray-600 mt-2">
//             {percent}%
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function Experience() {
//   return (
//     <section className="py-20 px-10 bg-gray-50" id="experience">
//       <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
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



// import React, { useState, useEffect } from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
// import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const skills = [
//   { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-3xl" />, level: 80 },
//   { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-3xl" />, level: 70 },
//   { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" />, level: 70 },
//   { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" />, level: 65 },
//   { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" />, level: 70 },
//   { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-3xl" />, level: 70 },
//   { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-3xl" />, level: 75 },
//   { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-3xl" />, level: 80 },
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
//       const eased = Math.min((progress / 800) * level, level); // 0.8s duration
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
//       className="w-60 h-40 bg-white rounded-xl overflow-hidden shadow-xl p-4 flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 group relative border border-transparent hover:border-amber-400"
//     >
//       {/* Dark Blur Hover BG */}
//       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 rounded-xl" />
      
//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center">
//         <div className="mb-2">{icon}</div>
//         <h2 className="font-bold text-gray-800 group-hover:text-white transition">{name}</h2>

//         {/* Progress Bar */}
//         {hovered && (
//           <div className="w-full mt-4">
//             <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-amber-400 rounded-full transition-all duration-[800ms] ease-out"
//                 style={{ width: `${percent}%` }}
//               />
//             </div>
//             <p className="text-right text-sm font-semibold text-white mt-2">{percent}%</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default function Experience() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
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
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 80 },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 70 },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" />, level: 70 },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-4xl" />, level: 65 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" />, level: 70 },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-4xl" />, level: 70 },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" />, level: 75 },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-4xl" />, level: 80 },
];

const SkillCard = ({ icon, name, level }) => {
  const [hovered, setHovered] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let frame;
    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const eased = Math.min((progress / 800) * level, level);
      setPercent(Math.floor(eased));
      if (eased < level) {
        frame = requestAnimationFrame(animate);
      }
    };

    if (hovered) {
      frame = requestAnimationFrame(animate);
    } else {
      setPercent(0);
    }

    return () => cancelAnimationFrame(frame);
  }, [hovered, level]);

  return (
    <div
      data-aos="zoom-in-up"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-72 h-44 bg-white rounded-xl overflow-hidden shadow-xl p-5 flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 group relative border border-transparent hover:border-amber-400"
    >
      {/* Dark Blur on Hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 rounded-xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="mb-2">{icon}</div>
        <h2 className="font-bold text-gray-800 group-hover:text-amber-300 text-lg transition">
          {name}
        </h2>

        {/* Range Bar */}
        {hovered && (
          <div className="w-full mt-4 px-2">
            <div className="w-full h-[6px] bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-[800ms] ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="text-right text-sm font-semibold text-white mt-1 tracking-wide">
              {percent}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-10 bg-gray-50" id="experience">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12" data-aos="fade-up">
        <span className="text-amber-400">My</span> Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill, i) => (
          <SkillCard key={i} icon={skill.icon} name={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
}
