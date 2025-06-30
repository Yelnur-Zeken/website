import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Trophy, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const advantages = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Опытные преподаватели',
    description: 'Наша команда состоит из высококвалифицированных преподавателей с многолетним опытом и международными сертификатами.',
    color: 'bg-alemBlue',
    bgImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Индивидуальный подход',
    description: 'Мы учитываем особенности каждого студента и адаптируем методы обучения под его потребности и цели.',
    color: 'bg-alemOrange',
    bgImage: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: 'Гарантия результата',
    description: 'Мы уверены в качестве нашего обучения и гарантируем достижение поставленных целей при соблюдении всех условий.',
    color: 'bg-yellow-400',
    bgImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Маленькие группы',
    description: 'Занятия проходят в небольших группах до 6 человек, что обеспечивает максимальное внимание каждому студенту.',
    color: 'bg-green-500',
    bgImage: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
  },
];

const stats = [
  { number: 500, suffix: '+', label: 'Успешных выпускников' },
  { number: 95, suffix: '%', label: 'Поступили в ВУЗы' },
  { number: 7, suffix: '+', label: 'Лет успешной работы' },
  { number: 15, suffix: '+', label: 'Опытных преподавателей' },
];

function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
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
    <span ref={ref}>{value}{suffix}</span>
  );
}

const Advantages = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} id="advantages" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Фоновое фото с градиентом */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80)',
            opacity: 0.10,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-alemBlue/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Мы создали уникальную образовательную среду, которая обеспечивает максимальный результат для каждого студента.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
              className="group text-center p-8 bg-white/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
            >
              {/* Background Image on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${adv.bgImage})` }}
                ></div>
              </div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-white mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${adv.color}`}>
                {adv.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-alemBlue transition-colors duration-300">
                {adv.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {adv.description}
              </p>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-alemBlue/5 to-alemOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-20 bg-gradient-to-r from-alemBlue to-blue-800 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white relative z-10">
            {stats.map((stat, i) => (
              <div key={i} className="group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-alemOrange transition-colors duration-300">
                  <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;