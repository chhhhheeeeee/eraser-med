import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductionRD = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {lang === 'tr' ? 'Üretim ve Ar-Ge Merkezi' : 'Production & R&D Center'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://eraser.com.tr/images2/01.jpg" 
              alt="Production Facility"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-emerald-600 mb-4">
                {lang === 'tr' ? 'Üretim Tesisi' : 'Production Facility'}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {lang === 'tr' 
                  ? 'Üretim tesisi, 1.700 m² kapalı alana sahiptir. Tıbbi cihazların üretimi, montajı ve ambalajlanması Class 10.000 sınıfında 2 Temiz Oda ve Class 100.000 sınıfında gerçekleştirilmektedir.'
                  : 'The production facility has 1,700 m² of closed area. The production, assembly and packaging of medical devices is carried out in 2 Clean Rooms of Class 10,000 and Class 100,000.'}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://eraser.com.tr/images2/13.jpg" 
              alt="R&D Center"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-emerald-600 mb-4">
                {lang === 'tr' ? 'Ar-Ge Merkezi' : 'R&D Center'}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {lang === 'tr'
                  ? 'AR-GE merkezi, yazılım ve cihaz donanımı geliştirmek üzere yapılandırılmıştır ve güçlü bir cihaz parkuruna sahiptir.'
                  : 'The R&D center is configured to develop software and device hardware and has a strong device park.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionRD;
