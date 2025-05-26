import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsGear, BsLightning, BsRobot, BsChatDots } from 'react-icons/bs';

function Services() {
  const services = [
    {
      icon: <BsGear className="w-8 h-8" />,
      title: 'מערכות ניהול מידע',
      description: 'בנייה והטמעת מערכת ניהול מידע מותאמת אישית לעסק שלך - לייעול תהליכים, חיסכון בזמן והגדלת הרווחיות. אנו מנתחים את צרכי העסק שלך, מאפיינים פתרונות חכמים, ומיישמים מערכת שתעזור לך לנהל את העסק בצורה חלקה ואפקטיבית יותר.',
      link: 'https://drive.google.com/file/d/1SJEK5zrWtqaRAP-3JGDAHiTnlmSxYa0X/view?usp=drive_link'
    },
    {
      icon: <BsLightning className="w-8 h-8" />,
      title: 'פתרונות דיגיטליים',
      description: 'פיתוח והטמעת פתרונות דיגיטליים מותאמים אישית, כמו טפסים חכמים אינטראקטיביי וקטלוגים דיגיטליים מתקדמים ועוד',
      link: 'https://drive.google.com/file/d/1eZ3d7-rxxk9KfZNyrd_gYxPFPb_rtJlJ/view?usp=drive_link'
    },
    {
      icon: <BsRobot className="w-8 h-8" />,
      title: 'פתרונות באמצעות בינה מלאכותית',
      description: 'שילוב טכנולוגיות AI מתקדמות לייעול תהליכים עסקיים כמו תמלול וסיכום אוטומטי של פגישות ושיחות (טלפון/זום), שליחת הצעות מחיר אוטומטיות, ניהול חשבוניות אוטומטי ועוד והכל ללא התערבות ידנית.',
      link: 'https://drive.google.com/file/d/1nsEMxi8_btHp6ZFlQW2lWwn4VUukrkSV/view?usp=sharing'
    },
    {
      icon: <BsChatDots className="w-8 h-8" />,
      title: "צ'אטבוטים חכמים",
      description: 'פתרון שירות לקוחות אוטומטי מתקדם: בוט חכם הפועל 24/7 לניהול מקיף של חווית הלקוח. מטפל במגוון רחב של פניות - ממכירות ועד תמיכה טכנית, מספק מענה מיידי, מנתב שיחות ביעילות מודד שביעות רצון לקוחות ועוד. התוצאה: חיסכון משמעותי בעלויות, שירות זמין ומהיר, והגדלת שביעות רצון הלקוחות עם זמני המתנה מינימליים.',
      link: 'https://drive.google.com/file/d/1j40VZjj1TLtvokKUPsXepMadL6beAmQR/view?usp=sharing'
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4">הפתרונות החכמים שלנו</h2>
          <p className="text-xl text-gray-300">פתרונות מקצועיים להצלחת העסק שלך</p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/30 flex flex-col"
            >
              <div className="text-blue-400 mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                {service.description}
              </p>
              <div className="mt-auto">
                <button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  צפה בדוגמא
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;