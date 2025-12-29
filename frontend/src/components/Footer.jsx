import React from 'react';
import { Phone, Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import { siteInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">{siteInfo.companyName}</span>
                <span className="text-xs text-gray-400 font-medium tracking-wider">
                  {siteInfo.tagline}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{siteInfo.description}</p>
            <a
              href={siteInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {[
                { label: 'Çözümler', href: '#cozumler' },
                { label: 'Ürünler', href: '#urunler' },
                { label: 'Üretim ve Ar-Ge', href: '#uretim' },
                { label: 'Kurumsal', href: '#kurumsal' },
                { label: 'Blog', href: '#blog' },
                { label: 'Kariyer', href: '#kariyer' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Markalarımız</h3>
            <ul className="space-y-3">
              {[
                'ONCOERA',
                'NUTRIERA',
                'ERAVERSE',
                'ONCOMIX',
                'i.v.STATION Onco™',
                'MULTIBLIST'
              ].map((brand, index) => (
                <li key={index}>
                  <a
                    href="#urunler"
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span>{brand}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">İletişim Bilgileri</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{siteInfo.contact.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteInfo.contact.phone}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {siteInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteInfo.contact.email}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {siteInfo.contact.email}
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#iletisim"
                className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Teklif Alın
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteInfo.companyName}. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Kullanım Koşulları
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;