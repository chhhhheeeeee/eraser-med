import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  
  const menuItems = [
    { label: t('nav.solutions'), href: '/#solutions' },
    { label: t('nav.products'), href: '/#products' },
    { label: t('nav.production'), href: '/production-rd' },
    { label: t('nav.academy'), href: '/academy' },
    { label: t('nav.resources'), href: '/resources' },
    { label: t('nav.corporate'), href: '/corporate' },
    { label: t('nav.blog'), href: '/blog' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };
  
  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = href.substring(2);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">E</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ERASER
              </span>
              <span className="text-xs text-gray-600 font-medium tracking-wider">
                ALL IN SAFE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-emerald-600 font-medium text-sm transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium uppercase">{i18n.language}</span>
            </button>
            <a
              href="https://www.linkedin.com/company/eraser-medikal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;