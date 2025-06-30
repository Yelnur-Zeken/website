import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-blue-200/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-orange-200/20 rounded-lg animate-float-delayed"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готовы начать свой путь к успеху? Оставьте заявку, и мы свяжемся с вами для бесплатной консультации.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Наши контакты
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="h-6 w-6 text-blue-600" />,
                    title: 'Телефон',
                    content: '+7 (707) 123-45-67',
                    bgColor: 'bg-blue-100',
                    delay: 'delay-300'
                  },
                  {
                    icon: <Mail className="h-6 w-6 text-orange-600" />,
                    title: 'Email',
                    content: 'info@alemstudy.kz',
                    bgColor: 'bg-orange-100',
                    delay: 'delay-400'
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-green-600" />,
                    title: 'Адрес',
                    content: 'ул. Абая, 150/230\nАстана, Казахстан',
                    bgColor: 'bg-green-100',
                    delay: 'delay-500'
                  }
                ].map((contact, index) => (
                  <div key={index} className={`flex items-start space-x-4 group hover:scale-105 transition-transform duration-300 ${contact.delay}`}>
                    <div className={`${contact.bgColor} rounded-lg p-3 group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {contact.title}
                      </div>
                      <div className="text-gray-600 whitespace-pre-line">
                        {contact.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-900">
                  Часы работы
                </h4>
              </div>
              
              <div className="space-y-2">
                {[
                  { days: 'Понедельник - Пятница', hours: '9:00 - 20:00' },
                  { days: 'Суббота', hours: '10:00 - 18:00' },
                  { days: 'Воскресенье', hours: 'Выходной' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                    <span className="text-gray-600">{schedule.days}</span>
                    <span className="text-gray-900 font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          } delay-400`}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Оставить заявку
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-2 animate-fade-in">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-700">Спасибо! Мы свяжемся с вами в ближайшее время.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', type: 'text', label: 'Имя *', placeholder: 'Введите ваше имя', required: true },
                { name: 'phone', type: 'tel', label: 'Телефон *', placeholder: '+7 (___) ___-__-__', required: true },
                { name: 'email', type: 'email', label: 'Email', placeholder: 'example@email.com', required: false }
              ].map((field, index) => (
                <div key={field.name} className={`transform transition-all duration-300 delay-${600 + index * 100}`}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div className="transform transition-all duration-300 delay-900">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none hover:border-blue-300"
                  placeholder="Расскажите о ваших целях и интересующих программах"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Отправляем...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Отправить заявку</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;