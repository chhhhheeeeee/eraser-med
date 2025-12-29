import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {lang === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            {lang === 'tr'
              ? 'Eraser Medikal olarak kişisel verilerinizin güvenliği bizim için önemlidir. Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde toplanan bilgilerin nasıl kullanıldığını açıklar.'
              : 'As Eraser Medical, the security of your personal data is important to us. This privacy policy explains how the information collected when you visit our website is used.'}
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {lang === 'tr' ? 'Toplanan Bilgiler' : 'Information Collected'}
          </h2>
          <p className="mb-6">
            {lang === 'tr'
              ? 'Web sitemizi ziyaret ettiğinizde, ad, e-posta adresi, telefon numarası ve şirket bilgisi gibi kişisel bilgilerinizi toplayabiliriz.'
              : 'When you visit our website, we may collect personal information such as name, email address, phone number and company information.'}
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {lang === 'tr' ? 'Bilgilerin Kullanımı' : 'Use of Information'}
          </h2>
          <p className="mb-6">
            {lang === 'tr'
              ? 'Topladığımız bilgiler, sizinle iletişim kurmak, taleplerinize yanıt vermek ve hizmetlerimizi iyileştirmek için kullanılır.'
              : 'The information we collect is used to communicate with you, respond to your requests and improve our services.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
