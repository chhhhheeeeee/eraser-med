import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfUse = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {lang === 'tr' ? 'Kullanım Koşulları' : 'Terms of Use'}
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            {lang === 'tr'
              ? 'Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş olursunuz.'
              : 'By using this website, you agree to the following terms of use.'}
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {lang === 'tr' ? 'Genel Koşullar' : 'General Terms'}
          </h2>
          <p className="mb-6">
            {lang === 'tr'
              ? 'Web sitemizdeki içerikler bilgilendirme amaçlıdır ve önceden haber verilmeksizin değiştirilebilir.'
              : 'The content on our website is for informational purposes and may be changed without prior notice.'}
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {lang === 'tr' ? 'Fikri Mülkiyet' : 'Intellectual Property'}
          </h2>
          <p className="mb-6">
            {lang === 'tr'
              ? 'Web sitesindeki tüm içerik, logolar ve markalar Eraser Medikal\'in mülkiyetindedir.'
              : 'All content, logos and trademarks on the website are the property of Eraser Medical.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
