import React, { useEffect, useRef, useState } from 'react';
import { Users, Heart, Trophy, Clock } from 'lucide-react';

const Advantages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animation
          const targets = [500, 95, 7, 15];
          targets.forEach((target, index) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, 50);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Опытные преподаватели',
      description: 'Наша команда состоит из высококвалифицированных преподавателей с многолетним опытом и международными сертификатами.',
      color: 'blue',
      bgImage: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Индивидуальный подход',
      description: 'Мы учитываем особенности каждого студента и адаптируем методы обучения под его потребности и цели.',
      color: 'red',
      bgImage: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Гарантия результата',
      description: 'Мы уверены в качестве нашего обучения и гарантируем достижение поставленных целей при соблюдении всех условий.',
      color: 'yellow',
      bgImage: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Маленькие группы',
      description: 'Занятия проходят в небольших группах до 6 человек, что обеспечивает максимальное внимание каждому студенту.',
      color: 'green',
      bgImage: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500',
      green: 'bg-green-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section ref={sectionRef} id="advantages" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-blue-200/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-orange-200/30 rounded-lg animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-200/30 rounded-full animate-float-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы создали уникальную образовательную среду, которая обеспечивает максимальный результат для каждого студента.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Image on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${advantage.bgImage})` }}
                ></div>
              </div>

              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-white mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${getColorClasses(advantage.color)}`}>
                {advantage.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section with Animated Counters */}
        <div className={`mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 relative overflow-hidden transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="bg-white/10 rounded animate-pulse" style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '3s'
                }}></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white relative z-10">
            {[
              { value: counters[0], suffix: '+', label: 'Успешных выпускников' },
              { value: counters[1], suffix: '%', label: 'Поступили в ВУЗы' },
              { value: counters[2], suffix: '+', label: 'Лет успешной работы' },
              { value: counters[3], suffix: '+', label: 'Опытных преподавателей' }
            ].map((stat, index) => (
              <div key={index} className="group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;