import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const NewsDetail = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/news/${slug}`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNews();
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-xl text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }
  
  if (!news) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('page.notFound')}</h2>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700">
            {lang === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="text-emerald-600 hover:text-emerald-700 mb-8 inline-block">
          ← {lang === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
        </Link>
        
        <img 
          src={news.image} 
          alt={news.title[lang]}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        
        <div className="mb-4">
          <span className="text-sm text-emerald-600 font-semibold">{news.category[lang]}</span>
          <span className="text-sm text-gray-500 mx-2">•</span>
          <span className="text-sm text-gray-500">{news.date}</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {news.title[lang]}
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {news.content[lang].split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
