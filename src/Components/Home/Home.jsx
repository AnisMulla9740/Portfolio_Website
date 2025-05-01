import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
// Removed local Avatar import, using remote URL for face image
// import Avatar from "../../assets/Images/Aboutimg3.avif"; // Updated imported avatar
import ResumePDF from "../../assets/resume.pdf";
import { CodeBracketIcon, CpuChipIcon, ServerIcon } from '@heroicons/react/24/outline';

const BACKGROUND_URL = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80";

export const Home = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getBackgroundStyle = () => {
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;
    return {
      backgroundImage: `url(${BACKGROUND_URL})`,
      transform: `translate3d(${-(cursorPos.x - centerX) / 25}px, ${-(cursorPos.y - centerY) / 25}px, 0) scale(1.1)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <div className="fixed inset-0 z-0 transition-transform duration-700 ease-out opacity-60" style={getBackgroundStyle()} />
      <div className="fixed inset-0 z-1 bg-gradient-to-br from-gray-100/30 via-transparent to-gray-100/30 dark:from-gray-900/50 dark:via-gray-900/30 dark:to-gray-900/50" />

      <div className="relative z-10 bg-gradient-to-br from-gray-100/95 via-gray-50/95 to-gray-100/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95 pt-32 px-5 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-28">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-gold-600 dark:from-teal-400 dark:to-purple-400">
                Embedded Systems Engineer
              </span>
              <br />
              <span className="text-gray-900 dark:text-white mt-4 block">Anis Mulla</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Specializing in digital IC design, RTL development, and embedded IoT solutions for high-performance hardware.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-navy-900 to-gold-600 dark:from-teal-600 dark:to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-navy-900 dark:border-teal-400 text-navy-900 dark:text-teal-400 px-8 py-3 rounded-full hover:bg-navy-900/10 dark:hover:bg-teal-400/10 transition-all"
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Avatar Image */}
          <motion.div
            className="relative group md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gold-500/20 dark:bg-teal-400/20 blur-3xl rounded-full animate-pulse" />
            <img
              src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-df38-61f6-856c-0bc7df1ecd30/raw?se=2025-05-01T21%3A30%3A57Z&sp=r&sv=2024-08-04&sr=b&scid=77db06c6-39e1-560f-9e1a-2f15cef44e98&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-01T09%3A44%3A33Z&ske=2025-05-02T09%3A44%3A33Z&sks=b&skv=2024-08-04&sig=WN/4JYfwnHBjtApccdGdIZf0jzzmeCKROWlxyiwlLlw%3D"
              alt="Anis Allabaksh Mulla"
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-navy-900/20 dark:border-teal-400/20 hover:border-navy-900/40 dark:hover:border-teal-400/40 transition-all shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              icon: <CodeBracketIcon className="w-12 h-12 text-navy-900 dark:text-teal-400" />,
              title: "RTL & Digital Design",
              content: "Verilog/VHDL development • Booth’s multiplier & RISC-V ALU • Gate optimization"
            },
            {
              icon: <CpuChipIcon className="w-12 h-12 text-navy-900 dark:text-teal-400" />,
              title: "Embedded Systems & IoT",
              content: "RFID attendance systems • PCB design (EAGLE, Proteus) • ESP32/STM32 prototyping"
            },
            {
              icon: <ServerIcon className="w-12 h-12 text-navy-900 dark:text-teal-400" />,
              title: "VLSI & FPGA Prototyping",
              content: "Xilinx Vivado simulation • CMOS NAND IC design • λ‑based rule compliance"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:-translate-y-2 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              {item.icon}
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Projects */}
        <div className="text-center mb-28">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Key Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Booth’s Multiplier Implementation",
                description: "120 nm CMOS binary multiplier with transistor‑level simulation and resource optimization",
                tech: ["Verilog", "Microwind", "DSCH"]
              },
              {
                title: "CANSAT Atmospheric Collector",
                description: "Raspberry Pi sensor integration for real‑time atmospheric data collection and RF transmission",
                tech: ["Python", "PCB Design", "GPS & RF"]
              }
            ].map((proj, i) => (
              <motion.div
                key={i}
                className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-navy-900 dark:text-teal-400 text-xl font-bold mb-4">{proj.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {proj.tech.map((t, ti) => (
                    <span key={ti} className="px-3 py-1 bg-navy-900/10 dark:bg-teal-400/10 text-navy-900 dark:text-teal-400 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
