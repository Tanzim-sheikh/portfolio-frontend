import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUniversity, FaLaptopCode } from 'react-icons/fa';

export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timeline = [
    {
      title: "Bachelor of Computer Science",
      subtitle: "Govt. P.G. College, Barwani",
      duration: "2021 - Present (3rd Year)",
      icon: <FaUniversity className="text-3xl text-amber-500 group-hover:text-white transition-all" />,
      aos: "fade-right",
    },
    {
      title: "Internship - MERN Stack Developer",
      subtitle: "Developers Point, Barwani",
      duration: "Currently Doing",
      icon: <FaLaptopCode className="text-3xl text-amber-500 group-hover:text-white transition-all" />,
      aos: "fade-left",
    },
  ];

  return (
    <section id="education" className="py-20 px-8 bg-white">
      <h1
        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
        data-aos="fade-up"
      >
        <span className="text-amber-400">Education</span> & Internship
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {timeline.map((item, index) => (
          <div
            key={index}
            data-aos={item.aos}
            className="group bg-white text-gray-800 border border-amber-400 rounded-xl shadow-md p-6 flex items-start gap-5 transition-all duration-300 hover:bg-gradient-to-tr hover:from-amber-400 hover:to-yellow-200 hover:text-white hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h2 className="text-xl font-bold group-hover:text-white transition">{item.title}</h2>
              <p className="text-sm mt-1 group-hover:text-white transition">{item.subtitle}</p>
              <p className="text-xs mt-2 text-gray-500 group-hover:text-gray-200 transition">
                {item.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
