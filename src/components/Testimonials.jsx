import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Testimonials() {
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      author: "הרב גלוסקין, גבאי ביהכנ\"ס 'אהל שמשון'",
      text: "\"כגבאי בית כנסת המתזז רבות בין משימות לא נגמרות\nגב' מתן הקפיצה אותי בכמה רמות עם אוטומציה מדהימה החוסכת הרבה זמן, (ובמיוחד בדקות אחרונות לפני שבת, ברכת מזל טוב, במהירות שיא וזמני תפילות אוטומטים וכד').\nפשוט, קל ויעיל\""
    },
    {
      author: "חסי ליטופ, מנהלת תוכניות כפיים",
      text: "\"תודה שהגשמת לי חלום...\nהאוטומציה הזו מהממת\nחוסכת לי זמן והתעסקות\nהכל ברור מסודר ומתקתק!! ...\"",
      image: "https://drive.google.com/uc?id=1wUXLfMec5Rt9je8vp4iiO2nMBdHJsSBd"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">המלצות מלקוחות מרוצים</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-blue-100 to-indigo-100' 
                  : 'bg-gradient-to-br from-purple-100 to-pink-100'
              }`}
            >
              <div className="flex flex-col">
                <p className="text-gray-800 font-bold mb-4">{testimonial.author}</p>
                <p className="text-gray-600 whitespace-pre-line">{testimonial.text}</p>
                {testimonial.image && (
                  <div className="mt-4">
                    <img
                      src={testimonial.image}
                      alt="המלצה"
                      className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setShowModal(true)}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <img
              src={testimonials[1].image}
              alt="המלצה מורחבת"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials;