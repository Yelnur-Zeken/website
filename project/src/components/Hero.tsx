import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Star, Users, Trophy } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-ping"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="bg-white/10 rounded animate-pulse" style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}></div>
            ))}
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <BookOpen className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float-delayed">
          <Star className="h-6 w-6 text-orange-400/30" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float-slow">
          <Trophy className="h-10 w-10 text-white/15" />
        </div>
      </div>

      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Icon */}
          <div className={`mb-8 flex justify-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 animate-pulse hover:scale-110 transition-transform duration-300">
              <BookOpen className="h-12 w-12 text-white animate-bounce" />
            </div>
          </div>

          {/* Main Heading with staggered animation */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="inline-block animate-fade-in-up">Твой путь к успеху</span>
            <br />
            <span className="text-orange-400 inline-block animate-fade-in-up animation-delay-300">начинается здесь</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Подготовка к ЕНТ, IELTS, НИШ/БИЛ/РФМШ в образовательном центре Alem Study
          </p>

          {/* Animated Features */}
          <div className={`flex flex-wrap justify-center gap-4 mb-10 text-blue-100 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              { icon: <Users className="h-4 w-4" />, text: 'Опытные преподаватели' },
              { icon: <Star className="h-4 w-4" />, text: 'Индивидуальный подход' },
              { icon: <Trophy className="h-4 w-4" />, text: 'Гарантия результата' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-orange-400">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button with enhanced animation */}
          <div className={`transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 mx-auto relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Записаться на консультацию</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Animated Stats */}
          <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              { number: '500+', label: 'Выпускников' },
              { number: '95%', label: 'Поступили в ВУЗы' },
              { number: '7+', label: 'Лет опыта' }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300 cursor-pointer">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;