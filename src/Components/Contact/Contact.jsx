import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const formRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_n71x1qo',
      'template_eso39ko',
      formRef.current,
      'pC0KMGH7YQazUWLFh'
    )
    .then((result) => {
      console.log('Feedback sent successfully:', result.text);
      setFormData({ name: '', email: '', message: '' });
      e.target.reset();
    }, (error) => {
      console.error('Feedback sending failed:', error.text);
    });
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-20 px-5 md:px-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, 
            rgba(29, 78, 216, 0.15) 0%, 
            transparent 80%)`
        }}
      />

      {/* Animated connection lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-navy-900/20 to-gold-600/20 dark:from-teal-400/20 dark:to-purple-400/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360
            }}
            animate={{
              x: [null, cursorPos.x + (Math.random() - 0.5) * 200],
              y: [null, cursorPos.y + (Math.random() - 0.5) * 200],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-navy-900 to-gold-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent mb-12 text-center"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl border border-navy-900/20 dark:border-teal-400/20 shadow-xl hover:shadow-2xl transition-all"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full bg-white/90 dark:bg-gray-900/60 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-teal-400 transition-all"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  className="w-full bg-white/90 dark:bg-gray-900/60 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-teal-400 transition-all"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full bg-white/90 dark:bg-gray-900/60 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-teal-400 transition-all"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-navy-900 to-gold-600 dark:from-teal-500 dark:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>

          {/* Contact Info Section */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl border border-navy-900/20 dark:border-teal-400/20 shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 hover:bg-navy-900/5 dark:hover:bg-teal-400/5 rounded-xl transition-colors">
                  <EnvelopeIcon className="w-8 h-8 text-navy-900 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    mulla.anis.allabaksh@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 hover:bg-navy-900/5 dark:hover:bg-teal-400/5 rounded-xl transition-colors">
                  <PhoneIcon className="w-8 h-8 text-navy-900 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    +91 9579585265
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 hover:bg-navy-900/5 dark:hover:bg-teal-400/5 rounded-xl transition-colors">
                  <MapPinIcon className="w-8 h-8 text-navy-900 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Karad, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl border border-navy-900/20 dark:border-teal-400/20 shadow-xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Social Profiles
              </h3>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://github.com/AnisMulla9740"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/90 dark:bg-gray-900/60 rounded-lg hover:bg-navy-900/10 dark:hover:bg-teal-400/10 transition-colors"
                >
                  <FaGithub className="w-8 h-8 text-navy-900 dark:text-teal-400" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/anis-mulla-94461625a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/90 dark:bg-gray-900/60 rounded-lg hover:bg-navy-900/10 dark:hover:bg-teal-400/10 transition-colors"
                >
                  <FaLinkedin className="w-8 h-8 text-navy-900 dark:text-teal-400" />
                </motion.a>
                <motion.a
                  href="https://github.com/AnisMulla9740"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/90 dark:bg-gray-900/60 rounded-lg hover:bg-navy-900/10 dark:hover:bg-teal-400/10 transition-colors"
                >
                  <FaCode className="w-8 h-8 text-navy-900 dark:text-teal-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;