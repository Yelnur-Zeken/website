import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-orange-200/20 rounded-lg animate-float-delayed"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            О нашем образовательном центре
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Alem Study — это современный образовательный центр в Астане, который помогает студентам достичь своих академических целей. Мы специализируемся на подготовке к важнейшим экзаменам и поступлению в престижные учебные заведения.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Stats Card */}
          <div className={`relative transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 gap-2 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded animate-pulse" style={{
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '2s'
                    }}></div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { number: '7+', label: 'Лет опыта', icon: <TrendingUp className="h-6 w-6" /> },
                  { number: '15+', label: 'Преподавателей', icon: <Users className="h-6 w-6" /> },
                  { number: '500+', label: 'Выпускников', icon: <Award className="h-6 w-6" /> },
                  { number: '95%', label: 'Успешность', icon: <Target className="h-6 w-6" /> }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center group hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="flex justify-center mb-2 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content with staggered animations */}
          <div className="space-y-8">
            {[
              {
                icon: <Target className="h-6 w-6 text-blue-600" />,
                title: 'Наша миссия',
                description: 'Обеспечить каждому студенту качественное образование и подготовку к поступлению в лучшие университеты мира, раскрывая их потенциал и формируя успешное будущее.',
                bgColor: 'bg-blue-100',
                delay: 'delay-300'
              },
              {
                icon: <Users className="h-6 w-6 text-orange-600" />,
                title: 'Индивидуальный подход',
                description: 'Мы верим, что каждый студент уникален. Поэтому мы разрабатываем персональные программы обучения, учитывающие особенности и цели каждого ученика.',
                bgColor: 'bg-orange-100',
                delay: 'delay-500'
              },
              {
                icon: <Award className="h-6 w-6 text-green-600" />,
                title: 'Гарантия качества',
                description: 'Наши преподаватели — это опытные специалисты с высшим образованием и международными сертификатами. Мы гарантируем высокое качество обучения.',
                bgColor: 'bg-green-100',
                delay: 'delay-700'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 group transform transition-all duration-1000 ${item.delay} ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
              >
                <div className={`${item.bgColor} rounded-lg p-3 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;