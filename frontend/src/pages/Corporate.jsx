import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Corporate = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {lang === 'tr' ? 'Kurumsal' : 'Corporate'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/about" className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-emerald-600 mb-4">
              {lang === 'tr' ? 'Hakkımızda' : 'About Us'}
            </h2>
            <p className="text-gray-700">
              {lang === 'tr'
                ? 'Eraser Medikal hakkında detaylı bilgi edinin.'
                : 'Learn more about Eraser Medical.'}
            </p>
          </Link>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {lang === 'tr' ? 'Markalarımız' : 'Our Brands'}
            </h2>
            <div className="space-y-2 text-gray-700 font-semibold">
              <p>ONCOERA®</p>
              <p>NUTRIERA®</p>
              <p>ERAVERSE</p>
              <p>ONCOMIX</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              {lang === 'tr' ? 'Kalite Yönetim Sistemi' : 'Quality Management System'}
            </h2>
            <p className="text-gray-700">
              ISO 13485 {lang === 'tr' ? 'Sertifikalı' : 'Certified'}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              {lang === 'tr' ? 'Çevresel Sürdürülebilirlik' : 'Environmental Sustainability'}
            </h2>
            <p className="text-gray-700">
              {lang === 'tr'
                ? 'Çevre dostu üretim süreçlerimiz'
                : 'Our environmentally friendly production processes'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
