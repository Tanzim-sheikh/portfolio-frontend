// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [status, setStatus] = useState({
//     loading: false,
//     success: null,
//     error: null
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, success: null, error: null });

//     try {
//       const res = await axios.post('https://porfolio-phi-nine.vercel.app/api/message', formData); // 👈 Change this URL to your backend endpoint

//       if (res.status === 200) {
//         setStatus({ loading: false, success: 'Message sent successfully!', error: null });
//         setFormData({ name: '', email: '', message: '' });
//       }
//     } catch (err) {
//       setStatus({ loading: false, success: null, error: 'Something went wrong. Please try again.' });
//     }
//   };

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
//         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//           <input
//             data-aos="zoom-in"
//             data-aos-delay="100"
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
//             required
//           />
//           <input
//             data-aos="zoom-in"
//             data-aos-delay="200"
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
//             required
//           />
//           <textarea
//             data-aos="zoom-in"
//             data-aos-delay="300"
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
//             required
//           ></textarea>
//           <button
//             data-aos="zoom-in"
//             data-aos-delay="400"
//             type="submit"
//             disabled={status.loading}
//             className="bg-amber-300 hover:bg-black hover:text-amber-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all w-fit mx-auto"
//           >
//             {status.loading ? 'Sending...' : 'Send Message'}
//           </button>

//           {/* Status Message */}
//           {status.success && <p className="text-green-600 mt-2">{status.success}</p>}
//           {status.error && <p className="text-red-600 mt-2">{status.error}</p>}
//         </form>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await axios.post('https://porfolio-phi-nine.vercel.app/api/message', formData);

      if (res.status === 200) {
        setStatus({ loading: false, success: 'Message sent successfully!', error: null });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Something went wrong. Please try again.' });
    }
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Location",
      value: "Barwani, Madhya Pradesh",
      color: "text-red-500"
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      value: "+91 9876543210",
      color: "text-green-500"
    },
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      value: "tanzim@example.com",
      color: "text-blue-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="text-xl" />,
      href: "#",
      label: "GitHub",
      color: "hover:text-gray-900"
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-600"
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
    hidden: { y: 30, opacity: 0 },
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
    <section id="contact" className="w-full py-20 bg-white px-6">
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
            Get In <span className="text-amber-300">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life. I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                If you have a project that you want to get started, think you need my help 
                with something, or just fancy saying hello, then get in touch.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-amber-300 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm ${info.color}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-4">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-100 hover:bg-amber-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <FiUser className="text-amber-500" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 bg-white"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <FiMail className="text-amber-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 bg-white"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <FiMessageSquare className="text-amber-500" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows="5"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-300 bg-white resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status.loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 text-green-700 rounded-xl border border-green-200 text-center"
                >
                  {status.success}
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 text-red-700 rounded-xl border border-red-200 text-center"
                >
                  {status.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}