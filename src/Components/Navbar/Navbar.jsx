import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Squash as Hamburger } from 'hamburger-react';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress((latest / totalHeight) * 100);
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  const navItems = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-navy-900 to-gold-500 dark:from-teal-400 dark:to-purple-600 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
      />
      
      <nav className='fixed w-full z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-800/30 shadow-sm dark:shadow-xl dark:shadow-gray-900/20'>
        <div className='container mx-auto flex justify-between items-center px-6 py-4 md:px-20'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { type: 'spring', stiffness: 120, damping: 10 }
            }}
          >
            <a 
              href="#"
              className='relative text-3xl md:text-4xl font-extrabold font-montserrat group'
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-navy-900 to-gold-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Anis Mulla
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-navy-900/20 to-gold-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 dark:from-teal-400/20 dark:to-purple-500/20" />
              </span>
              <motion.span 
                className="ml-1 text-gold-600 dark:text-teal-400"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 1.8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                .
              </motion.span>
            </a>
          </motion.div>

          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-3 py-1.5 text-lg ${
                  activeSection === item.toLowerCase() 
                    ? 'text-navy-900 dark:text-teal-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-navy-700 dark:hover:text-teal-300'
                } transition-colors font-medium group`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.15 + 0.3,
                    type: 'spring', 
                    stiffness: 150 
                  }
                }}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-navy-100 to-gold-100/50 dark:from-teal-900/30 dark:to-purple-900/20 rounded-lg"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <motion.span 
                  className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-gradient-to-r from-navy-900 to-gold-500 dark:from-teal-400 dark:to-purple-400 group-hover:w-full transition-all duration-400"
                  initial={{ x: '-50%' }}
                />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-navy-900 dark:bg-teal-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow hover:bg-navy-800 dark:hover:bg-teal-500"
            >
              Download CV
            </motion.button>
          </div>

          <div className='flex items-center gap-4 md:hidden'>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-sm"
            >
              {isDarkMode ? (
                <SunIcon className="w-7 h-7 text-gold-500" />
              ) : (
                <MoonIcon className="w-7 h-7 text-navy-900" />
              )}
            </motion.button>
            <Hamburger 
              toggled={isMenuOpen} 
              toggle={setIsMenuOpen}
              size={28}
              duration={0.4}
              color={isDarkMode ? '#ffffff' : '#1a365d'}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="px-6 py-4">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-xl text-gray-700 dark:text-gray-200 hover:text-navy-900 dark:hover:text-teal-400 border-b border-gray-100 dark:border-gray-800"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  transition={{ type: 'spring' }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="w-full mt-4 py-3 bg-navy-900 dark:bg-teal-600 text-white rounded-lg font-medium shadow-md hover:bg-navy-800 dark:hover:bg-teal-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;