import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/8KBbiFZVLIE"
                title="Eraser Corporate Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Kurumsal Tanıtım
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Eraser Medikal’i <span className="text-emerald-600">Keşfedin</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              2007 yılından bu yana İzmir’de, kemoterapi ve TPN karışımlarının hazırlanması ve
              uygulanması alanlarında hizmet veriyoruz. Uzman kadromuzun yıllarıca elde ettiği
              deneyim ve bilgi birikimiyle sektörde öncü konumdayız.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">ISO 13485 sertifikalı</span> üretim tesisi ve
                  temiz oda standartları
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">ONCOERA, NUTRIERA, ERAVERSE</span> markalarıyla
                  geniş ürün yelpazesi
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">4 kıtaya ihracat</span> yapan ulusal ve
                  uluslararası başarılı referanslar
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#kurumsal"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Hakkımızda
              </a>
              <a
                href="#iletisim"
                className="px-8 py-4 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 transform hover:-translate-y-0.5"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;