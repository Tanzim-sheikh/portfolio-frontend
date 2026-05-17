import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import streetSpices from "../assets/project1.png";

export default function Project() {
  const allProjects = [
    {
      img: "/evenzap.png",
      title: "Evenza",
      desc: "A Event booking platform with multiple type of users and admin panel functionality built in MERN Technology.",
      tech: ["React", "MongoDB", "Node.js", "Express.js"],
      link: "https://evenzap.netlify.app",
      github: "https://github.com/Tanzim-sheikh/EventPro-Frontend"
    },
    {
      img: "/Nike.PNG",
      title: "Nike Store",
      desc: "A Shoe e-commerce website for Nike products with shopping cart and product filtering built in React.",
      tech: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
      link: "https://nike-taas.netlify.app",
      github: "https://github.com/Tanzim-sheikh/Nike-Frontend"
    },
    {
      img: "/Capture.PNG",
      title: "The Growth",
      desc: "A modern GSAP scrollable website with responsive design and smooth animations built in React.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "GSAP"],
      link: "https://thegrowth2.netlify.app",
      github: "https://github.com/Tanzim-sheikh/The-Growth"
    },
    {
      img: "/PetalPour.PNG",
      title: "Petal Pour Cafe",
      desc: "Cafe Landing page built with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", ],
      link: "https://petal-pour.netlify.app",
      github: "https://github.com/Tanzim-sheikh/Flower-Cafe"
    },
    {
      img: "/instachat2.png",
      title: "Instachat",
      desc: "A modern chat with real-time messaging and group chat application built in MERN stack.",
      tech: ["React", "MongoDB", "Node.js", "Express.js", "Socket.io"],
      link: "https://instachatapp.netlify.app",
      github: "https://github.com/Tanzim-sheikh/InstagramFrontend"
    },
    {
      img: streetSpices,
      title: "Street Spices",
      desc: "A modern food restaurant project UI with booking tables users able to book tables build up with HTML, CSS, JavaScript.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Media Query"],
      link: "https://streetspices.netlify.app",
      github: "https://github.com/Tanzim-sheikh?tab=repositories"
    }
    // you can add more projects here later
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = allProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allProjects.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, allProjects.length));
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
        <AnimatePresence mode="wait">
          <motion.div
            key={visibleCount}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {visibleProjects.map((project, index) => (
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
        </AnimatePresence>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Load More Projects</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                👇
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}