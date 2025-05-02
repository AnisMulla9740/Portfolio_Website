import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

// Embedded Systems Projects Data
const embeddedProjects = [
  {
    title: 'RFID Smart Attendance System',
    date: 'Jan 2025',
    description: 'Real-time attendance logging with ESP32 and SD card. Reduced errors by 30%.',
    tech: ['ESP32', 'Embedded C', 'JSON', 'SD Card'],
    github: 'https://github.com/AnisMulla9740',
    link: '#',
    image: 'https://img.freepik.com/premium-photo/radio-card-hands_175935-82.jpg?w=1380',
    objectPosition: 'center'
  },
  {
    title: 'Automatic Floor Cleaning Robot',
    date: 'Sep 2024 – Oct 2024',
    description: 'Autonomous robot with PID control and OpenCV. 95% collision-free navigation.',
    tech: ['Ultrasonic Sensors', 'PID Control', 'OpenCV', '3D Printing'],
    github: 'https://github.com/AnisMulla9740',
    link: '#',
    image: 'https://img.freepik.com/free-photo/close-upon-robot-vacuum-cleaner-indoors_23-2150829985.jpg?ga=GA1.1.79815786.1724618873&semt=ais_hybrid&w=740',
    objectPosition: 'center'
  },
  {
    title: 'Offline Weighing System',
    date: 'Jul 2024 – Sep 2024',
    description: 'Microcontroller-based weight tracking for children with SPI SD storage.',
    tech: ['Arduino IDE', 'SPI Protocol', 'MCU', 'SD Card'],
    github: 'https://github.com/AnisMulla9740/-Microcontroller-Driven-Offline-Weighing-System-for-Storing-Children-s-Weight-Data',
    link: '#',
    image: 'https://img.freepik.com/free-photo/woman-bathroom-scale-ai-generated-image_268835-6823.jpg?ga=GA1.1.79815786.1724618873&semt=ais_hybrid&w=740',
    objectPosition: 'center'
  },
  {
    title: 'Atmospheric Data Collector Satellite (CANSAT)',
    date: 'Feb 2025 – Present',
    description: 'CANSAT prototype with sensor telemetry and 95% accuracy in atmospheric readings.',
    tech: ['Raspberry Pi', 'Sensors', 'RF Communication', 'PCB Design'],
    github: 'https://github.com/AnisMulla9740',
    link: '#',
    image: 'https://img.freepik.com/premium-photo/artists-rendering-satellite-satellite-system-orbit-generative-ai_955884-55255.jpg?ga=GA1.1.79815786.1724618873&w=740',
    objectPosition: 'center'
  }
];

// VLSI Projects Data
const vlsiProjects = [
  {
    title: "Booth’s Multiplier Implementation",
    date: '2024',
    description: 'CMOS Booth’s multiplier (120nm) with transistor-level simulation and resource optimization.',
    tech: ['Verilog', 'Vivado', 'Microwind 3.9', 'DSCH'],
    github: 'https://github.com/AnisMulla9740/8_Bit_Booth_Multiplier_using_120nm_scale_technology',
    link: '#',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzM5Fh7VCZd2XaDoS-6_h6Op0cxsPbY3wGw&s',
    objectPosition: 'center'
  },
  {
    title: 'RISC-V RTL Design',
    date: 'Jul 2024',
    description: '32-bit ALU in Verilog with 100% accuracy through optimized simulation in Xilinx Vivado.',
    tech: ['Xilinx Vivado', 'RTL', 'Verilog'],
    github: 'https://github.com/AnisMulla9740/RISC_V',
    link: '#',
    image: 'https://img.freepik.com/free-photo/chip-circuit-board-abstract-technology-background_1387-1013.jpg?t=st=1745046984~exp=1745050584~hmac=1bda0705767daef4ecd75558e3e2a4445e63d11c74cc7ed90f28f88ef0893fb3&w=996',
    objectPosition: 'center'
  },
  {
    title: '7400 NAND Gate IC Design',
    date: '2024',
    description: 'CMOS NAND gate using Microwind and SPICE, optimized for power and delay under 120nm node.',
    tech: ['Microwind 3.9', 'DSCH', 'SPICE'],
    github: 'https://github.com/AnisMulla9740',
    link: '#',
    image: 'https://img.freepik.com/free-photo/motherboard-background_23-2151733823.jpg?ga=GA1.1.79815786.1724618873&semt=ais_hybrid&w=740',
    objectPosition: 'center'
  }
];

const Project = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderProjectSection = (title, projects) => (
    <div className="mb-24">
      <motion.h3 
        className="text-3xl font-bold text-center text-navy-900 dark:text-teal-400 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-navy-900/10 dark:border-teal-400/10 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="relative h-48 bg-gray-100 dark:bg-gray-900 rounded-t-2xl overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: project.objectPosition }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 dark:from-teal-400/40 to-transparent" />
            </div>
            
            <div className="pt-6 pb-6 px-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
              <p className="text-sm text-navy-900/80 dark:text-teal-400/90 mb-4">{project.date}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
              
              <div className="flex justify-center gap-4 mb-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 bg-white/90 dark:bg-gray-900/60 rounded-full hover:bg-navy-900/10 dark:hover:bg-teal-400/10 transition-colors"
                >
                  <FaGithub className="w-6 h-6 text-navy-900 dark:text-teal-400" />
                </motion.a>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 bg-white/90 dark:bg-gray-900/60 rounded-full hover:bg-navy-900/10 dark:hover:bg-teal-400/10 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 text-navy-900 dark:text-teal-400" />
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {project.tech.map(tech => (
                  <motion.span
                    key={tech}
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    className="px-4 py-1.5 text-sm font-medium bg-navy-900/10 dark:bg-teal-400/10 text-navy-900 dark:text-teal-400 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="projects"
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

      {/* Animated particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-navy-900/20 dark:bg-teal-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: cursorPos.x + (Math.random() - 0.5) * 100,
            y: cursorPos.y + (Math.random() - 0.5) * 100,
            scale: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-navy-900 to-gold-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent mb-12 text-center"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        {renderProjectSection('Embedded Systems Projects', embeddedProjects)}
        {renderProjectSection('VLSI Projects', vlsiProjects)}
      </motion.div>
    </section>
  );
};

export default Project;
