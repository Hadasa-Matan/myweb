import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsTelephone, BsEnvelope, BsClock, BsChatDots } from 'react-icons/bs';

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const emailSubject = encodeURIComponent("הגעתי דרך האתר שלך");
  const emailBody = encodeURIComponent("שלום וברכה,\n\nאשמח ל...");
  const mailtoLink = `mailto:hadasamatan@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">צור קשר</h2>
          <p className="text-xl text-gray-600">נשמח לשמוע ממך ולעזור לך להצליח</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto mb-16"
        >
          <iframe
            id="JotFormIFrame-251296577428469"
            title="צור קשר"
            src="https://form.jotform.com/251296577428469"
            style={{
              minWidth: '100%',
              height: '539px',
              border: 'none'
            }}
            scrolling="no"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">דרכים נוספות ליצירת קשר:</h3>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 gap-8">
              {/* פרטי התקשרות */}
              <div className="space-y-4">
                <a href="tel:0504133408" className="flex items-center justify-center gap-3 text-lg text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                  <BsTelephone className="text-indigo-500 w-5 h-5" />
                  <span className="font-medium">050-413-3408</span>
                </a>
                <a href={mailtoLink} className="flex items-center justify-center gap-3 text-lg text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                  <BsEnvelope className="text-indigo-500 w-5 h-5" />
                  <span className="font-medium">hadasamatan@gmail.com</span>
                </a>
              </div>

              {/* שעות פעילות */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <BsClock className="text-indigo-500 w-5 h-5" />
                  <h4 className="text-lg font-medium text-gray-900">שעות פעילות</h4>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>א'-ה': 10:00-16:00, 20:00-23:00</p>
                  <p>ו': 09:00-12:00</p>
                </div>
              </div>

              {/* צ'אטבוט */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <BsChatDots className="text-indigo-500 w-5 h-5" />
                  <h4 className="text-lg font-medium text-gray-900">צ'אטבוט 24 שעות ביממה</h4>
                </div>
                <p className="text-gray-600">זמין לכל שאלה ובכל עת :)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;