import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('nav.about')}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {lang === 'tr'
              ? 'Eraser Medikal Ltd. Şti. 2007 yılında İzmir\'de kuruldu. Uzman kadrosunun sektörde uzun yıllar sonucu kazandığı tecrübe ve birikimiyle kemoterapi ve TPN karışımlarının hazırlanması ve uygulanması alanlarında hizmetlerine başladı.'
              : 'Eraser Medical LLC was founded in 2007 in Izmir. It started its services in the fields of preparation and administration of chemotherapy and TPN mixtures with the experience and knowledge gained by its expert staff as a result of many years in the sector.'}
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {lang === 'tr'
              ? 'Edinmiş olduğu tecrübeleri, 2014 yılı itibariyle üretimini gerçekleştirdiği ONCOERA® markası ile tescilledi. Günümüzde Eraser Medikal, ONCOERA®, NUTRIERA®, ONCOMIX ve ERAVERSE ürünlerinin üreticisi, yetkili satıcısı ve ihracatçısıdır.'
              : 'The company registered its experience with the ONCOERA® brand, which it has been producing since 2014. Today, Eraser Medical is the manufacturer, authorized dealer and exporter of ONCOERA®, NUTRIERA®, ONCOMIX and ERAVERSE branded products.'}
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {lang === 'tr'
              ? 'Tek kullanımlık steril ve non-steril tıbbi cihaz ve tıbbi malzeme üretimi gerçekleştiren Eraser Medikal, ayrıca güçlü AR-GE altyapısı sayesinde, Kemoterapi, TPN, Aseptik İlaç Hazırlama Cihazları ve yazılımları üretimi yapmaktadır.'
              : 'Eraser Medical, which produces disposable sterile and non-sterile medical devices and medical supplies, also produces Chemotherapy, TPN, Aseptic Drug Preparation Devices and software thanks to its strong R&D infrastructure.'}
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            {lang === 'tr'
              ? 'Eraser Medikal, tıbbi cihaz alanında yerli üretimin öneminin bilincinde olarak, bilimsel temele dayalı ve müşteri odaklı bir üretim ve satış politikasını benimsemiştir. Uluslararası kalitede üretimleri ile 4 kıtaya ihracat gerçekleştirmektedir.'
              : 'Eraser Medical has adopted a scientific-based and customer-oriented production and sales policy, being aware of the importance of domestic production in the field of medical devices. It exports to 4 continents with its international quality productions.'}
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://eraser.com.tr/images2/_DSC7429.jpg',
            'https://eraser.com.tr/images2/_DSC7899.jpg',
            'https://eraser.com.tr/images2/_DSC7657.jpg',
            'https://eraser.com.tr/images2/_DSC7624.jpg',
          ].map((img, index) => (
            <img key={index} src={img} alt={`Eraser ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
