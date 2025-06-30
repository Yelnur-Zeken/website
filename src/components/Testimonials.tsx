import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: 'Айгерим Нурланова',
      program: 'Подготовка к ЕНТ',
      rating: 5,
      text: 'Благодаря Alem Study я смогла поступить в КазНУ на бюджет! Преподаватели действительно профессионалы своего дела. Особенно хочу отметить индивидуальный подход и постоянную поддержку.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      university: 'КазНУ им. аль-Фараби'
    },
    {
      name: 'Данияр Қасымов',
      program: 'IELTS подготовка',
      rating: 5,
      text: 'Получил 7.5 баллов на IELTS после 3 месяцев обучения! Методика преподавания очень эффективная, а атмосфера в центре мотивирует на успех. Рекомендую всем, кто хочет получить высокие баллы.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      university: 'University of Toronto'
    },
    {
      name: 'Алия Сейдахметова',
      program: 'НИШ подготовка',
      rating: 5,
      text: 'Поступила в НИШ с первого раза! Преподаватели не только дают знания, но и учат мыслить логически. Очень благодарна всей команде Alem Study за профессиональную подготовку.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      university: 'НИШ ФМН Астана'
    }
  ];

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

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
      </div>

      {/* Floating Quote Icons */}
      <div className="absolute top-20 left-20 text-blue-200/30 animate-float">
        <Quote className="h-16 w-16" />
      </div>
      <div className="absolute bottom-20 right-20 text-orange-200/30 animate-float-delayed">
        <Quote className="h-12 w-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Отзывы наших студентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят о нас наши выпускники, которые достигли своих целей благодаря обучению в Alem Study.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 relative z-10">
              {/* Profile Image */}
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full animate-pulse"></div>
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-lg relative z-10 transform hover:scale-110 transition-transform duration-300"
                />
                {/* Achievement Badge */}
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1">
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-blue-300 mb-4 mx-auto md:mx-0" />

                {/* Text */}
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Name and Program */}
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentSlide].program}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {testimonials[currentSlide].university}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-blue-50 text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white hover:bg-blue-50 text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-600 to-orange-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;