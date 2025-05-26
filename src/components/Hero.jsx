import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90"></div>
      </div>

      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-2 h-full w-full transform rotate-12">
            {Array.from({ length: 100 }).map((_, index) => (
              <motion.div
                key={index}
                className="h-8 bg-blue-500/30 rounded"
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating Tech Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-blue-400 rounded-full"
              initial={{
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.5 + 0.5,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
              }}
            />
          ))}
        </motion.div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="text-center w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-bold mb-8 text-white tracking-tight"
          >
            שגר ושכח <br className="hidden sm:block" />
            <span className="text-blue-300">הטכנולוגיה עובדת בשבילך</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto"
          >
            ייעול תהליכים עסקיים באמצעות טכנולוגיה מתקדמת והתאמה מושלמת לצרכי העסק שלך
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#consultation"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg inline-block hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              שיחת ייעוץ ראשונית
            </a>
            <a 
              href="#services"
              className="bg-transparent border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-full font-medium text-lg inline-block hover:bg-blue-300 hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              הפתרונות שלנו
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;