import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Alem Study</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Образовательный центр в Астане, который помогает студентам достичь своих академических целей и поступить в лучшие университеты.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Программы
                </a>
              </li>
              <li>
                <a href="#advantages" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">+7 (707) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">info@alemstudy.kz</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  ул. Абая, 150/230<br />
                  Астана, Казахстан
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/alemstudy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/77071234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Часы работы</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб: 10:00 - 18:00</div>
                <div>Вс: Выходной</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Alem Study. Все права защищены.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;