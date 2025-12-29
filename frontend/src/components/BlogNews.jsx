import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts, news } from '../data/mockData';

const BlogNews = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Blog
              </span>
              <h2 className="text-4xl font-bold text-gray-900">
                İçerik ve <span className="text-emerald-600">Makale</span>
              </h2>
            </div>
            <a
              href="#blog-all"
              className="hidden md:flex items-center space-x-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors group"
            >
              <span>Tümünü Gör</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <button className="flex items-center space-x-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors group/btn">
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* News Section */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                Haberler
              </span>
              <h2 className="text-4xl font-bold text-gray-900">
                Güncel <span className="text-emerald-600">Gelişmeler</span>
              </h2>
            </div>
            <a
              href="#news-all"
              className="hidden md:flex items-center space-x-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors group"
            >
              <span>Tümünü Gör</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 6).map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-1 mb-3 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(item.date).toLocaleDateString('tr-TR')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                  <button className="flex items-center space-x-2 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors group/btn">
                    <span>Detaylar</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;