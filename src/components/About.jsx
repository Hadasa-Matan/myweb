import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12">אודות</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/business-analytics.jpg"
                  alt="Business Analytics"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-1/2 bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90"
            >
              <motion.p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong className="text-gray-800">נעים להכיר, אני הדסה מתן.</strong><br />
                מתמחה בבניית פתרונות טכנולוגיים חדשניים לעסקים ולעצמאים.
                בס"ד אני כאן כדי לסייע לך לחסוך זמן יקר, להפחית הוצאות ולייעל את התהליכים בעסק שלך בצורה יוצאת דופן.
              </motion.p>
              <motion.p className="text-lg text-gray-600 leading-relaxed">
                בנוסף, אני בעלת ניסיון רב כמהנדסת בדיקות, מה שמבטיח שהפתרונות שאני מציעה עומדים בסטנדרטים הגבוהים ביותר של איכות ואמינות.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;