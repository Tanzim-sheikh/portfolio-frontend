// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { FaUniversity, FaLaptopCode } from 'react-icons/fa';

// export default function Education() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const timeline = [
//     {
//       title: "Bachelor of Computer Science",
//       subtitle: "Govt. P.G. College, Barwani",
//       duration: "2021 - Present (3rd Year)",
//       icon: <FaUniversity className="text-3xl text-amber-500 group-hover:text-white transition-all" />,
//       aos: "fade-right",
//     },
//     {
//       title: "Internship - MERN Stack Developer",
//       subtitle: "Developers Point, Barwani",
//       duration: "Currently Doing",
//       icon: <FaLaptopCode className="text-3xl text-amber-500 group-hover:text-white transition-all" />,
//       aos: "fade-left",
//     },
//   ];

//   return (
//     <section id="education" className="py-20 px-8 bg-white">
//       <h1
//         className="text-4xl font-extrabold text-center mb-12 text-gray-800"
//         data-aos="fade-up"
//       >
//         <span className="text-amber-400">Education</span> & Internship
//       </h1>

//       <div className="max-w-4xl mx-auto flex flex-col gap-10">
//         {timeline.map((item, index) => (
//           <div
//             key={index}
//             data-aos={item.aos}
//             className="group bg-white text-gray-800 border border-amber-400 rounded-xl shadow-md p-6 flex items-start gap-5 transition-all duration-300 hover:bg-gradient-to-tr hover:from-amber-400 hover:to-yellow-200 hover:text-white hover:shadow-xl hover:scale-[1.02]"
//           >
//             <div className="mt-1">{item.icon}</div>
//             <div>
//               <h2 className="text-xl font-bold group-hover:text-white transition">{item.title}</h2>
//               <p className="text-sm mt-1 group-hover:text-white transition">{item.subtitle}</p>
//               <p className="text-xs mt-2 text-gray-500 group-hover:text-gray-200 transition">
//                 {item.duration}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaLaptopCode } from 'react-icons/fa';

export default function Education() {
  const timeline = [
    {
      title: "Bachelor of Computer Science",
      subtitle: "Govt. P.G. College, Barwani",
      duration: "2021 - Present (3rd Year)",
      icon: <FaUniversity className="text-2xl" />,
    },
    {
      title: "Internship - MERN Stack Developer",
      subtitle: "Developers Point, Barwani",
      duration: "Currently Doing",
      icon: <FaLaptopCode className="text-2xl" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
            Education & <span className="text-amber-300">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My academic journey and professional growth in the tech industry
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex gap-8 mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-14 w-0.5 h-full bg-gray-300 -z-10"></div>
              
              {/* Icon Container */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-300 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-sm text-amber-500 font-semibold bg-amber-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {item.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-2 font-medium">
                  {item.subtitle}
                </p>
                
                {/* Progress Indicator */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: index === 0 ? "75%" : "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-2 bg-gradient-to-r from-amber-300 to-amber-400 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {index === 0 ? "75%" : "Current"}
                  </span>
                </div>
              </motion.div>
            </motion.div>
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
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I believe in the power of continuous education and hands-on experience. 
              Combining formal education with practical internships helps me stay 
              updated with the latest technologies and industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}