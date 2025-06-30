import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: 7, label: 'Лет опыта', icon: <TrendingUp className="h-7 w-7" /> },
  { number: 15, label: 'Преподавателей', icon: <Users className="h-7 w-7" /> },
  { number: 500, label: 'Выпускников', icon: <Award className="h-7 w-7" /> },
  { number: 95, label: 'Успешность', icon: <Target className="h-7 w-7" />, isPercent: true },
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
    <span ref={ref} className="inline-block">
      {value}
      {isPercent ? '%' : '+'}
    </span>
  );
}

const aboutFeatures = [
  {
    icon: <Target className="h-7 w-7 text-alemBlue" />,
    title: 'Наша миссия',
    description:
      'Обеспечить каждому студенту качественное образование и подготовку к поступлению в лучшие университеты мира, раскрывая их потенциал и формируя успешное будущее.',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Users className="h-7 w-7 text-alemOrange" />,
    title: 'Индивидуальный подход',
    description:
      'Мы верим, что каждый студент уникален. Поэтому мы разрабатываем персональные программы обучения, учитывающие особенности и цели каждого ученика.',
    bgColor: 'bg-orange-50',
  },
  {
    icon: <Award className="h-7 w-7 text-green-600" />,
    title: 'Гарантия качества',
    description:
      'Наши преподаватели — это опытные специалисты с высшим образованием и международными сертификатами. Мы гарантируем высокое качество обучения.',
    bgColor: 'bg-green-50',
  },
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 bg-gray-50 relative overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch"
    >
      {/* Фоновое фото с градиентом */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80)',
            opacity: 0.13,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-alemBlue/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-16">
        {/* Фото сбоку */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
            alt="Alem Study students"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </motion.div>

        {/* Контент */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl mx-auto text-center lg:text-left mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              О нашем образовательном центре
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Alem Study — это современный образовательный центр в Астане, который помогает студентам достичь своих академических целей. Мы специализируемся на подготовке к важнейшим экзаменам и поступлению в престижные учебные заведения.
            </p>
          </motion.div>

          {/* Статистика */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="bg-white/80 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="mb-2 text-alemOrange group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1 group-hover:text-alemOrange transition-colors duration-300">
                  <AnimatedCounter to={stat.number} isPercent={stat.isPercent} />
                </div>
                <div className="text-gray-700 text-sm font-medium text-center">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Фичи */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
            className="space-y-8"
          >
            {aboutFeatures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.18, duration: 0.7 }}
                className={`flex items-start space-x-5 group bg-white/70 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 ${item.bgColor}`}
              >
                <div className="rounded-lg p-3 bg-white shadow group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-alemBlue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;