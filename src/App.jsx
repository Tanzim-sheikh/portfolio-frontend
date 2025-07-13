import React from 'react'
import Headers from './components/Header.jsx'
import Welcome from './components/Welcome.jsx'
import Project from './components/Project.jsx'
import AboutMe from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,        // animation duration
      once: true,            // animate only once
      offset: 100,           // offset from the original trigger point
      easing: 'ease-in-out', // easing style
    });
  }, []);
  return (
    <>
      <Headers />
      <Welcome/>
      <Project/>
      <AboutMe/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </>
  )
}
export default App 