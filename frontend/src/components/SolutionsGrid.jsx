import React, { useState } from 'react';
import {
  Bot,
  Cpu,
  Settings,
  Droplet,
  Syringe,
  Beaker,
  Package,
  FlaskConical,
  Truck,
  ArrowRight
} from 'lucide-react';
import { solutions } from '../data/mockData';

const iconMap = {
  bot: Bot,
  cpu: Cpu,
  settings: Settings,
  droplet: Droplet,
  syringe: Syringe,
  beaker: Beaker,
  package: Package,
  'flask-conical': FlaskConical,
  truck: Truck
};

const SolutionsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const categories = ['Tümü', 'Onkoloji', 'Beslenme', 'İlaç Hazırlama', 'Paketleme', 'Dağıtım'];

  const filteredSolutions =
    activeCategory === 'Tümü'
      ? solutions
      : solutions.filter((solution) => solution.category === activeCategory);

  return (
    <section id="cozumler" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Çözümlerimiz
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            İlaç Hazırlama ve <span className="text-emerald-600">Uygulama Çözümleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hastane eczaneleri için kapsamlı, güvenli ve modern teknolojilerle donatılmış çözümler
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) => {
            const Icon = iconMap[solution.icon];
            return (
              <div
                key={solution.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                      {solution.category}
                    </span>
                  </div>
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{solution.description}</p>
                  <button className="flex items-center space-x-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors group/btn">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;