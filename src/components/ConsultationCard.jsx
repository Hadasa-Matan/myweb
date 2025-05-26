import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsClipboardCheck, BsCalendarCheck, BsGear, BsCheckCircle } from 'react-icons/bs';

function ConsultationCard() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const steps = [
    {
      icon: <BsClipboardCheck className="w-6 h-6" />,
      title: "מילוי טופס קצר",
      description: "צעד ראשון פשוט להבנת הצרכים העסקיים שלך והאפשרויות לאוטומציה."
    },
    {
      icon: <BsCalendarCheck className="w-6 h-6" />,
      title: "תיאום פגישה",
      description: "נקבע זמן נוח לשיחת ייעוץ מעמיקה לבחינת הפתרונות המתאימים לעסק שלך."
    },
    {
      icon: <BsGear className="w-6 h-6" />,
      title: "פיתוח פתרון מותאם אישית",
      description: "יחד נגבש תכנית פעולה המותאמת במדויק לצרכים ולמטרות העסק שלך."
    },
    {
      icon: <BsCheckCircle className="w-6 h-6" />,
      title: "יישום והטמעה מוצלחת",
      description: "נלווה אותך לאורך כל הדרך ונוודא שהפתרון האוטומטי משתלב בצורה חלקה בעסק."
    }
  ];

  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            הצעד הראשון להצלחת העסק שלך
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-indigo-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="https://www.jotform.com/form/251371057931455"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              אני רוצה למלא טופס קצרצר
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ConsultationCard;