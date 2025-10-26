import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button only after scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 max-w-max max-h-max p-3 flex items-center justify-center bg-amber-300 text-black rounded-full shadow-lg hover:bg-black hover:text-amber-300 transition-all focus:outline-none"
        aria-label="Back to top"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
}
