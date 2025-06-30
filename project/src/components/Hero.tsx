import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Star, Trophy, BookOpen } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: 500, label: 'Выпускников' },
  { number: 95, label: 'Поступили в ВУЗы', isPercent: true },
  { number: 7, label: 'Лет опыта' },
];

const features = [
  { icon: <Users className="h-6 w-6" />, text: 'Опытные преподаватели' },
  { icon: <Star className="h-6 w-6" />, text: 'Индивидуальный подход' },
  { icon: <Trophy className="h-6 w-6" />, text: 'Гарантия результата' },
];

function AnimatedCounter({ to, isPercent = false }: { to: number; isPercent?: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1200;
      const step = Math.ceil(to / (duration / 16));
      const interval = setInterval(() => {
        start += step;
        if (start >= to) {
          setValue(to);
          clearInterval(interval);
        } else {
          setValue(start);
        }
      }, 16);
      return () => clearInterval(interval);
    }
  }, [inView, to]);
  return (
    <span ref={ref}>
      {value}
      {isPercent ? '%' : '+'}
    </span>
  );
}

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-alemBlue overflow-hidden px-4"
    >
      {/* Фоновое фото с градиентом */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1500&q=80)',
            opacity: 0.22,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-alemBlue/90 via-alemBlue/80 to-alemOrange/60" />
      </div>

      {/* Контент */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Иконка */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          className="mb-8 flex justify-center"
        >
          <div className="bg-white/20 backdrop-blur-md rounded-full p-6 shadow-xl hover:scale-110 transition-transform duration-300">
            <BookOpen className="h-14 w-14 text-white" />
          </div>
        </motion.div>

        {/* Заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl"
        >
          Твой путь к успеху
          <br />
          <span className="text-alemOrange bg-white/10 px-4 rounded-xl inline-block mt-2 shadow-lg">
            начинается здесь
          </span>
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto"
        >
          Подготовка к ЕНТ, IELTS, НИШ/БИЛ/РФМШ в образовательном центре Alem Study
        </motion.p>

        {/* Фичи */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
              className="flex items-center space-x-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <span className="text-alemOrange">{feature.icon}</span>
              <span className="text-white text-lg font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Кнопка */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <button
            onClick={scrollToContact}
            className="group relative bg-gradient-to-r from-alemOrange to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-5 rounded-xl text-lg shadow-xl overflow-hidden flex items-center gap-3 transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <span className="relative z-10">Записаться на консультацию</span>
            <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute left-0 top-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </motion.div>

        {/* Анимированные счетчики */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + i * 0.2, duration: 0.7 }}
              className="text-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 group-hover:text-alemOrange transition-colors duration-300">
                <AnimatedCounter to={stat.number} isPercent={stat.isPercent} />
              </div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;