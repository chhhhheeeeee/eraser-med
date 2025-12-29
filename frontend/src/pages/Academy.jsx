import React from 'react';
import { useTranslation } from 'react-i18next';

const Academy = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {lang === 'tr' ? 'Eraser Akademi' : 'Eraser Academy'}
        </h1>
        
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {lang === 'tr'
              ? 'Eraser Akademi, 2021 yılında Eraser ünite çalışanlarına uluslararası standartlarda eğitim sağlayabilmek amacıyla kuruldu. Tüm çalışanların aynı standartta eğitim alması ve tüm ünitelerin aynı kalite standartlarını sağlayarak hizmet vermesi hedeflendi.'
              : 'Eraser Academy was established in 2021 to provide international standards training to Eraser unit employees. The aim is for all employees to receive training at the same standard and for all units to provide services by ensuring the same quality standards.'}
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-emerald-600 mb-4">
              {lang === 'tr' ? 'Eğitim Programları' : 'Training Programs'}
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>{lang === 'tr' ? 'Oryantasyon Eğitimi' : 'Orientation Training'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>{lang === 'tr' ? 'Teknik Eğitimler' : 'Technical Training'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>{lang === 'tr' ? 'Kalite Yönetim Sistemi' : 'Quality Management System'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>{lang === 'tr' ? 'İş Sağlığı ve Güvenliği' : 'Occupational Health and Safety'}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            {lang === 'tr'
              ? 'Eğitimlerimizden yararlanmak için: '
              : 'To benefit from our training: '}
            <a href="mailto:info@eraser.com.tr" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              info@eraser.com.tr
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Academy;
