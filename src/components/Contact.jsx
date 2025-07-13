// import React from 'react';

// export default function Contact() {
//   return (
//     <section id="contact" className="w-full px-10 py-20 bg-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
//           Contact <span className="text-amber-300">Me</span>
//         </h2>
//         <p className="text-gray-600 text-lg mb-12">
//           Have a question or want to work together? Just drop a message!
//         </p>

//         {/* Contact Form */}
//         <form className="flex flex-col gap-6">
//           <input
//           data-aos="zoom-in"
//     data-aos-delay="100"
//             type="text"
//             placeholder="Your Name"
//             className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
//           />
//           <input
//           data-aos="zoom-in"
//     data-aos-delay="200"
//             type="email"
//             placeholder="Your Email"
//             className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
//           />
//           <textarea
//            data-aos="zoom-in"
//     data-aos-delay="300"
//             placeholder="Your Message"
//             rows="5"
//             className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
//           ></textarea>
//           <button
//            data-aos="zoom-in"
//     data-aos-delay="400"
//             type="submit"
//             className="bg-amber-300 hover:bg-black hover:text-amber-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all w-fit mx-auto"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// } 


import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await axios.post('https://porfolio-phi-nine.vercel.app/api/message', formData); // 👈 Change this URL to your backend endpoint

      if (res.status === 200) {
        setStatus({ loading: false, success: 'Message sent successfully!', error: null });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="w-full px-10 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Contact <span className="text-amber-300">Me</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Have a question or want to work together? Just drop a message!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            data-aos="zoom-in"
            data-aos-delay="100"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
          />
          <input
            data-aos="zoom-in"
            data-aos-delay="200"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
          />
          <textarea
            data-aos="zoom-in"
            data-aos-delay="300"
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
          ></textarea>
          <button
            data-aos="zoom-in"
            data-aos-delay="400"
            type="submit"
            disabled={status.loading}
            className="bg-amber-300 hover:bg-black hover:text-amber-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all w-fit mx-auto"
          >
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Message */}
          {status.success && <p className="text-green-600 mt-2">{status.success}</p>}
          {status.error && <p className="text-red-600 mt-2">{status.error}</p>}
        </form>
      </div>
    </section>
  );
}
