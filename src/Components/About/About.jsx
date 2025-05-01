import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, ServerIcon, ChartPieIcon } from '@heroicons/react/24/outline';
import Image from "../../assets/Images/Aboutimg3.avif";

const About = () => {
  const skills = [
    {
      icon: <CodeBracketIcon className="w-8 h-8 text-navy-900 dark:text-teal-400" />,
      title: "RTL & Digital Design",
      points: [
        "Verilog & VHDL RTL development",
        "Booth’s multiplier (120 nm CMOS) & RISC-V ALU",
        "Gate optimization for 15% faster processing"
      ]
    },
    {
      icon: <CpuChipIcon className="w-8 h-8 text-navy-900 dark:text-teal-400" />,
      title: "Embedded Systems & IoT",
      points: [
        "RFID-based attendance system (API integration)",
        "ESP32 & STM32 MCU prototyping",
        "PCB design with EAGLE & Proteus"
      ]
    },
    {
      icon: <ServerIcon className="w-8 h-8 text-navy-900 dark:text-teal-400" />,
      title: "VLSI & FPGA Prototyping",
      points: [
        "Xilinx Vivado simulation & validation",
        "CMOS NAND gate IC design at 120 nm",
        "λ‑based VLSI design rule compliance"
      ]
    },
    {
      icon: <ChartPieIcon className="w-8 h-8 text-navy-900 dark:text-teal-400" />,
      title: "Data Acquisition & CANSAT",
      points: [
        "Atmospheric data collection with Raspberry Pi",
        "GPS & RF communication modules",
        "American Astronomical Society competition entry"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-5 md:px-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-900 to-gold-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent mb-12">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gold-500/20 dark:bg-teal-400/20 blur-3xl rounded-full animate-pulse" />
            <img 
              src={Image} 
              alt="Anis Allabaksh Mulla" 
              className="w-full h-auto rounded-2xl border-4 border-navy-900/20 dark:border-teal-400/20 hover:border-navy-900/40 dark:hover:border-teal-400/40 transition-all shadow-2xl"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-navy-900/10 dark:bg-teal-400/10 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.points.map((point, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 text-sm md:text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-navy-900 dark:bg-teal-400 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Innovation Focus</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              As an Electrical Engineering student at Government College of Engineering, Karad, I blend rigorous VLSI and RTL design training with hands-on IoT and embedded systems projects—from an RFID attendance system adopted by 50+ schools to CMOS-based Booth’s multiplier and RISC‑V ALU implementations. My work targets high performance, low power, and secure architectures.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-navy-900/5 dark:bg-teal-400/5 rounded-xl">
                <span className="text-navy-900 dark:text-teal-400 font-bold text-2xl">40%</span>
                <span className="text-gray-600 dark:text-gray-300">Reduction in manual data-entry time</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-navy-900/5 dark:bg-teal-400/5 rounded-xl">
                <span className="text-navy-900 dark:text-teal-400 font-bold text-2xl">25%</span>
                <span className="text-gray-600 dark:text-gray-300">Power waste reduction in PCB design</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;