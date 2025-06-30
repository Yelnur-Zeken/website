import React, { useEffect, useRef, useState } from 'react';
import { FileText, Globe, GraduationCap, Calculator, BookOpen, Languages } from 'lucide-react';

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const programs = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Подготовка к ЕНТ',
      description: 'Комплексная подготовка к Единому национальному тестированию по всем предметам',
      features: ['Математика', 'Казахский/Русский язык', 'История Казахстана', 'Профильные предметы'],
      color: 'blue',
      bgImage: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'IELTS подготовка',
      description: 'Интенсивный курс для получения высокого балла IELTS',
      features: ['Speaking', 'Writing', 'Reading', 'Listening'],
      color: 'green',
      bgImage: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'НИШ/БИЛ/РФМШ',
      description: 'Специализированная подготовка к поступлению в элитные школы',
      features: ['Математика', 'Логика', 'Английский язык', 'Казахский язык'],
      color: 'purple',
      bgImage: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Languages className="h-8 w-8" />,
      title: 'Английский язык',
      description: 'Изучение английского языка с нуля до продвинутого уровня',
      features: ['Базовый уровень', 'Разговорный английский', 'Бизнес английский', 'Подготовка к TOEFL'],
      color: 'orange',
      bgImage: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: 'Математика',
      description: 'Углубленное изучение математики для школьников и абитуриентов',
      features: ['Алгебра', 'Геометрия', 'Тригонометрия', 'Математический анализ'],
      color: 'red',
      bgImage: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Репетиторство',
      description: 'Индивидуальные занятия по всем школьным предметам',
      features: ['1-на-1 занятия', 'Гибкий график', 'Персональная программа', 'Все классы'],
      color: 'indigo',
      bgImage: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section ref={sectionRef} id="programs" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-200 rounded-lg animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-200 rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Наши программы обучения
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите программу, которая подходит именно вам. Мы предлагаем курсы для всех уровней подготовки и целей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden relative transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${program.bgImage})` }}
                ></div>
              </div>

              <div className="p-8 relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-all duration-500 transform ${
                  hoveredCard === index ? 'scale-110 rotate-6' : ''
                } ${getColorClasses(program.color)}`}>
                  {program.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-gray-700 hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group/btn">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative z-10">Узнать подробнее</span>
                </button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;