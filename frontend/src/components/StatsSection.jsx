import React from 'react';
import { Building, Globe, Award, Package } from 'lucide-react';
import { siteInfo } from '../data/mockData';

const iconMap = {
  building: Building,
  globe: Globe,
  award: Award,
  package: Package
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Eraser ile Herşey <span className="text-emerald-600">Güvende!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2007’den beri medikal cihaz üretiminde öncü, güvenilir ve yenilikçi çözümler sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteInfo.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <p className="text-gray-600 font-medium leading-tight">{stat.label}</p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;