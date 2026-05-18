import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaCode, FaLaptopCode } from 'react-icons/fa';

export default function Education() {
  const timelineData = [
    {
      title: "B.Sc. Computer Science",
      institution: "Devi Ahilya Vishwavidyalaya, Indore",
      duration: "2023 - 2026",
      description:
        "Focus on core algorithms, database management systems, and computational logic.",
      icon: <FaUniversity className="text-xl" />,
      side: "left",
      progress: 100,
    },
    {
      title: "MERN Full Stack Development",
      institution: "Industrial Specialization Course",
      duration: "2025",
      description:
        "Intensive training in MongoDB, Express, React, and Node.js with architecture-first approach.",
      icon: <FaCode className="text-xl" />,
      side: "right",
      progress: 100,
    },
    {
      title: "MERN Stack Developer Intern",
      institution: "Developer's Point, Barwani",
      duration: "3 Months",
      description:
        "Built and delivered 5+ full-stack projects, focusing on scalable architecture, API integration, and responsive design.",
      icon: <FaLaptopCode className="text-xl" />,
      side: "left",
      progress: 100,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="w-full py-20 bg-gray-50 px-6">
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
            Academic <span className="text-amber-300">Blueprint</span>
          </h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My academic journey and professional growth in the tech industry
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Central vertical line with yellow gradient & glow */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-300 via-amber-400 to-transparent -translate-x-1/2 opacity-80 shadow-[0_0_8px_#fbbf24]"></div>

          {/* Timeline items */}
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center last:mb-0`}
            >
              {/* Left side card */}
              {item.side === "left" && (
                <div className="md:text-right md:pr-12">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-amber-100/30 transition-all duration-300 border-2 border-amber-300/80 hover:border-amber-400 group relative overflow-hidden"
                  >
                    {/* Glowing border effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="flex md:flex-row-reverse items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-amber-200/50">
                        {item.icon}
                      </div>
                      <span className="text-sm font-mono bg-amber-100 text-amber-700 px-3 py-1 rounded-md font-semibold border border-amber-200">
                        {item.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-medium mb-3">
                      {item.institution}
                    </p>
                    <p className="text-gray-500 text-sm italic leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {/* Progress bar in yellow */}
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-amber-300 to-amber-400 rounded-full shadow-[0_0_4px_#fbbf24]"
                      />
                    </div>
                    <div className="flex justify-end mt-1">
                      <span className="text-xs text-amber-600 font-medium">{item.progress}% Complete</span>
                    </div>
                  </motion.div>
                </div>
              )}
              {item.side === "left" && <div className="hidden md:block"></div>}

              {/* Right side card */}
              {item.side === "right" && (
                <>
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-amber-100/30 transition-all duration-300 border-2 border-amber-300/80 hover:border-amber-400 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-amber-200/50">
                          {item.icon}
                        </div>
                        <span className="text-sm font-mono bg-amber-100 text-amber-700 px-3 py-1 rounded-md font-semibold border border-amber-200">
                          {item.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-medium mb-3">
                        {item.institution}
                      </p>
                      <p className="text-gray-500 text-sm italic leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-amber-300 to-amber-400 rounded-full shadow-[0_0_4px_#fbbf24]"
                        />
                      </div>
                      <div className="flex justify-end mt-1">
                        <span className="text-xs text-amber-600 font-medium">{item.progress}% Complete</span>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}

              {/* Central Dot - glowing yellow */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-amber-300 shadow-[0_0_12px_#fbbf24] border-[3px] border-white animate-pulse"></div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Additional Learning Journey Block with yellow border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-amber-300/60 hover:border-amber-400 transition-all duration-300 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-0.5 bg-amber-300 rounded-full"></span>
              Continuous Learning Journey
              <span className="w-8 h-0.5 bg-amber-400 rounded-full"></span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I believe in the power of continuous education and hands-on
              experience. Combining formal education with practical internships
              helps me stay updated with the latest technologies and industry
              trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}