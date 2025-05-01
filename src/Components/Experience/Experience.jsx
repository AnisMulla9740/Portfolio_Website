import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const internships = [
  {
    title: 'Subject Matter IoT Expert • Wirecraft Labs, Prayagraj Sub-District',
    date: 'Nov 2024 – Jan 2025',
    points: [
      'Developed RFID-based attendance system with API integration & SD card storage, reducing manual logging time by 40%',
      'Designed PCB layouts for IoT models (line-follower car) using EAGLE & Proteus',
      'Authored lab manual covering design-to-implementation workflows, adopted by 1000+ students'
    ]
  },
  {
    title: 'Student Intern • Electro-India Industries, Sangli',
    date: 'Jun 2024 – Jul 2024',
    points: [
      'Built 12V auto-cutoff PCB for weighing machines, improving safety and reducing component failure by 25%',
      'Automated weight logging using SD card storage (CSV format), enabling real-time data access for 100+ users'
    ]
  },
  {
    title: 'Student Intern • Apsis Solutions Pvt. Ltd., Virtual',
    date: 'Nov 2023 – Dec 2023',
    points: [
      'Designed RTL architectures for traffic light controllers and RISC-V-based ALU, reducing logic delay by 15%',
      'Optimized digital systems using Xilinx Vivado, achieving 90% simulation accuracy'
    ]
  }
];

const Experience = () => {
  useEffect(() => {
    // Placeholder for potential side effects or analytics
  }, []);

  return (
    <section
      id="internships"
      className="relative min-h-screen py-20 px-5 md:px-24 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-navy-900 to-gold-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent mb-16"
      >
        Work Experience
      </motion.h1>

      <motion.div className="space-y-12">
        {internships.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, delay: idx * 0.15 }}
            className="relative pl-12 border-l-2 border-navy-900/20 dark:border-teal-400/20 group"
          >
            <div className="absolute w-6 h-6 bg-gradient-to-br from-navy-900 to-gold-500 dark:from-teal-400 dark:to-purple-400 rounded-full -left-3 top-1.5 shadow-lg" />
            <div className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
              <p className="text-navy-900/80 dark:text-teal-400/90 mb-4 font-medium">{exp.date}</p>
              <ul className="space-y-3">
                {exp.points.map((pt, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <span className="block mt-1.5 w-2 h-2 bg-navy-900 dark:bg-teal-400 rounded-full flex-shrink-0" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;