import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl lg:text-2xl font-bold text-gray-900">Alem Study</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Программы
            </button>
            <button
              onClick={() => scrollToSection('advantages')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Преимущества
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Контакты
            </button>
          </nav>

          {/* Instagram Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://instagram.com/alemstudy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="px-4 py-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                Программы
              </button>
              <button
                onClick={() => scrollToSection('advantages')}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                Преимущества
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 border-b border-gray-100"
              >
                Контакты
              </button>
              <a
                href="https://instagram.com/alemstudy"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left py-3 text-orange-500 hover:text-orange-600 flex items-center space-x-2"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;