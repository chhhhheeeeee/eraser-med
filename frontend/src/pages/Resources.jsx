import React from 'react';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  
  const resources = [
    { title: lang === 'tr' ? 'Kurumsal Tanıtım Filmi' : 'Corporate Video', type: 'video' },
    { title: lang === 'tr' ? 'Broşür & Katalog' : 'Brochures & Catalogs', type: 'document' },
    { title: lang === 'tr' ? 'Kullanım Kılavuzları' : 'User Manuals', type: 'document' },
    { title: lang === 'tr' ? 'Klinik Çalışmalarımız' : 'Clinical Studies', type: 'document' },
    { title: lang === 'tr' ? 'Ulusal Mevzuatlar' : 'National Regulations', type: 'document' },
    { title: lang === 'tr' ? 'Uluslararası Rehberler' : 'International Guidelines', type: 'document' },
  ];
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {lang === 'tr' ? 'Kaynaklar' : 'Resources'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-emerald-500 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  {resource.type === 'video' ? '🎥' : '📄'}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
