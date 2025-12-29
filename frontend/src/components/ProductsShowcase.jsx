import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { products } from '../data/mockData';

const ProductsShowcase = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredProducts = products.filter((p) => p.featured);
  const allCategories = ['Tümü', ...new Set(products.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const displayProducts =
    activeTab === 'featured'
      ? featuredProducts
      : selectedCategory === 'Tümü'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="urunler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Ürünlerimiz
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Yenilikçi <span className="text-emerald-600">Medikal Cihazlar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ONCOERA, NUTRIERA ve ERAVERSE markalarıyla geniş ürün yelpazesi
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeTab === 'featured'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Star className="w-5 h-5" />
            <span>Öne Çıkanlar</span>
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tüm Ürünler
          </button>
        </div>

        {/* Category Filter for All Products */}
        {activeTab === 'all' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {product.featured && (
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <button className="flex items-center space-x-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors group/btn">
                  <span>İncele</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Tüm Ürün Kataloğunu Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;