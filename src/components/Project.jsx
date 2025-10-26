//  import React from 'react';
// import cat from "../assets/cat.png";
// import project3 from "../assets/project3.png";
// import project4 from "../assets/project4.png";

// export default function Project() {
//   const projects = [
//     {
//       img: cat,
//       title: "Street Spices",
//       desc1: "A food delivery project and booking",
//       desc2: "tables with HTML, CSS, JavaScript.",
//       aos: "fade-right",
//       link: "https://streetspices.netlify.app"
//     },
//     {
//       img: project3,
//       title: "Site name",
//       desc1: "A landing page of food using HTML,",
//       desc2: "CSS.",
//       aos: "fade-up",
//       link: "https://your-site-name-link.netlify.app"
//     },
//     {
//       img: project4,
//       title: "Prazor",
//       desc1: "A static page of a prazor company",
//       desc2: "using React.",
//       aos: "fade-left",
//       link: "https://prazor-page.netlify.app"
//     }
//   ];

//   return (
//     <div id='projects' className="mt-24 px-10">
//         <h2 className="flex justify-center text-4xl font-extrabold text-gray-800 mb-10">
//             Featured <span  className="text-amber-300 ml-1">Projects</span>
//           </h2>

//       <div className="flex justify-center gap-10 flex-wrap">
//         {projects.map((proj, index) => (
//           <a
//             key={index}
//             href={proj.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             data-aos={proj.aos}
//             data-aos-delay={index * 100}
//             className="relative w-70 h-80 rounded-xl overflow-hidden group shadow-xl cursor-pointer"
//           >
//             {/* Image */}
//             <img
//               src={proj.img}
//               alt={proj.title}
//               className="w-full h-full object-cover group-hover:blur-[2px] transition duration-300"
//             />

//             {/* Overlay Text */}
//             <div className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4">
//               <h1 className="text-xl font-bold text-amber-300 mb-1">{proj.title}</h1>
//               <p className="text-sm text-center">{proj.desc1}</p>
//               <p className="text-sm text-center">{proj.desc2}</p>
//             </div>

//             {/* Border on hover */}
//             <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-amber-300 transition duration-300"></div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// } 

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import evenza from "../assets/Evenzap.png";
import Instachat from "../assets/InstaChat2.png"
import streetSpices from "../assets/project1.png"

export default function Project() {
  const projects = [
    {
      img: evenza,
      title: "Evenza",
      desc: "A Event booking platform with multiple type of users and admin panel functionality built in MERN Technology.",
      tech: ["React", "MongoDB", "Node.js", "Express.js"],
      aos: "fade-right",
      link: "https://evenzap.netlify.app",
      github: "https://github.com/Tanzim-sheikh?tab=repositories"
    },
    {
      img: Instachat,
      title: "Instachat",
      desc: "A modern chat with real-time messaging and group chat application built in MERN stack.",
      tech: ["React", "MongoDB", "Node.js", "Express.js", "Socket.io"],
      aos: "fade-up",
      link: "https://instachatapp.netlify.app",
      github: "https://github.com/Tanzim-sheikh?tab=repositories"
    },
    {
      img: streetSpices,
      title: "Street Spices",
      desc: "A modern food restaurant project UI with booking tables users able to book tables build up with HTML, CSS, JavaScript.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Media Query"],
      aos: "fade-left",
      link: "https://streetspices.netlify.app",
      github: "https://github.com/Tanzim-sheikh?tab=repositories"
    }
  ];

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='projects' className="w-full py-20 bg-gray-50 px-6">
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
            Featured <span className="text-amber-300">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development 
            and problem-solving abilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-amber-300 transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-amber-300 transition-colors"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full border border-amber-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border-2 border-gray-300 hover:border-amber-300 text-gray-700 hover:text-amber-600 font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiGithub size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Want to see more?</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              👇
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}