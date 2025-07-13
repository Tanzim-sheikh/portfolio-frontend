 import React from 'react';
import cat from "../assets/cat.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export default function Project() {
  const projects = [
    {
      img: cat,
      title: "Street Spices",
      desc1: "A food delivery project and booking",
      desc2: "tables with HTML, CSS, JavaScript.",
      aos: "fade-right",
      link: "https://streetspices.netlify.app"
    },
    {
      img: project3,
      title: "Site name",
      desc1: "A landing page of food using HTML,",
      desc2: "CSS.",
      aos: "fade-up",
      link: "https://your-site-name-link.netlify.app"
    },
    {
      img: project4,
      title: "Prazor",
      desc1: "A static page of a prazor company",
      desc2: "using React.",
      aos: "fade-left",
      link: "https://prazor-page.netlify.app"
    }
  ];

  return (
    <div id='projects' className="mt-24 px-10">
      <h1 className="font-bold text-3xl text-gray-800 mb-10" data-aos="fade-down">
        Featured Projects
      </h1>

      <div className="flex justify-center gap-10 flex-wrap">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos={proj.aos}
            data-aos-delay={index * 100}
            className="relative w-70 h-80 rounded-xl overflow-hidden group shadow-xl cursor-pointer"
          >
            {/* Image */}
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-full object-cover group-hover:blur-[2px] transition duration-300"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4">
              <h1 className="text-xl font-bold text-amber-300 mb-1">{proj.title}</h1>
              <p className="text-sm text-center">{proj.desc1}</p>
              <p className="text-sm text-center">{proj.desc2}</p>
            </div>

            {/* Border on hover */}
            <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-amber-300 transition duration-300"></div>
          </a>
        ))}
      </div>
    </div>
  );
} 