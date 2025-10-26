// import React from 'react';
// import profile from "../assets/profile.jpg"
// export default function AboutMe() {
//   return (
//     <section id="about" className="w-full px-10 py-20 bg-white pt-30">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
//         {/* 🟨 Image with Overlay */}          
//         <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center">
//           <div className="relative w-72 h-72 rounded-2xl overflow-hidden group shadow-xl">
//             <img                                                                                                                                                                                
//               src={profile}
//               alt="Tanzim Sheikh"
//               className="w-full h-full object-cover group-hover:blur-[2px] transition duration-300"
//             />
            
//             {/* Overlay Text on Hover */}
//             <div className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4">
//               <h1 className="text-xl font-bold text-amber-300 mb-1">Tanzim Sheikh</h1>
//               <p className="text-sm text-center">Full Stack Developer</p>
//             </div>

//             {/* Yellow Border on Hover */}
//             <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-amber-300 transition duration-300"></div>
//           </div>
//         </div>

//         {/* 🟩 Text Section */}
//         <div data-aos="fade-right" className="w-full md:w-1/2 text-center md:text-left">
//           <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
//             About <span className="text-amber-300">Me</span>
//           </h2>
//           <p className="text-gray-600 leading-relaxed text-lg">
//             Hi! I'm <span className="text-black font-bold">Tanzim Sheikh</span>, a passionate full-stack web developer with strong skills in React, Node.js, MongoDB, and Tailwind CSS. I love building clean, responsive, and user-friendly websites.
//           </p>
//           <p className="mt-4 text-gray-600 leading-relaxed text-lg">
//             Whether it's a sleek portfolio, a scalable web app, or a powerful backend API — I focus on writing clean code and building meaningful experiences.
//           </p>
          
//           <div className="mt-6">
//             <a
//               href="#projects"
//               className="bg-amber-300 hover:bg-black hover:text-amber-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
//             >
//               View My Projects
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiHeart, FiAward } from 'react-icons/fi';
import profile from "../assets/profile.jpg";

export default function AboutMe() {
  const stats = [
    { icon: FiCode, number: "10+", label: "Projects Completed" },
    { icon: FiCoffee, number: "500+", label: "Cups of Coffee" },
    { icon: FiHeart, number: "2+", label: "Years Experience" },
    { icon: FiAward, number: "5+", label: "Technologies" }
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
    <section id="about" className="w-full py-20 bg-white px-6">
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
            About <span className="text-amber-300">Me</span>
          </h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get to know more about my journey and passion for web development
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Image Section - Centered */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end w-full lg:w-1/2"
          >
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-300 to-amber-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl border border-gray-200">
                <motion.img
                  src={profile}
                  alt="Tanzim Sheikh"
                  className="w-150 h-200 rounded-2xl object-cover shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-amber-300 text-gray-900 px-6 py-3 rounded-xl shadow-lg border border-amber-400"
                >
                  <div className="text-center">
                    <div className="font-bold text-lg">2+ Years</div>
                    <div className="text-sm font-medium">Experience</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section - Centered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Introduction */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Crafting Digital Experiences That <span className="text-amber-300">Matter</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Hi! I'm <span className="text-gray-900 font-semibold">Tanzim Sheikh</span>, a passionate full-stack developer specializing in modern web technologies. With expertise in <span className="text-amber-500 font-medium">React, Node.js, MongoDB, and Tailwind CSS</span>, I build scalable, responsive, and user-centric applications.
                </p>
                
                <p className="text-lg">
                  I believe in writing clean, maintainable code and creating intuitive user experiences that solve real-world problems. From dynamic front-end interfaces to robust back-end systems, I ensure every project meets the highest standards of quality and performance.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-amber-300 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                View My Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 hover:border-amber-300 text-gray-700 hover:text-amber-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}