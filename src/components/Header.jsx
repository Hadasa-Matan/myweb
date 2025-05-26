import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img 
            src="https://drive.google.com/uc?export=view&id=1gIiVE3W3RadSRn3BSRCCnOtFB1_4zR53" 
            alt="Logo" 
            className="h-12 w-auto"
          />
        </motion.div>
        <div className="flex space-x-8 space-x-reverse">
          {['פתרונות חכמים', 'אודות', 'צור קשר'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item === 'פתרונות חכמים' ? 'services' : item === 'אודות' ? 'about' : 'contact'}`}
              className={`${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-indigo-600 transition-all duration-300 text-lg font-medium`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;