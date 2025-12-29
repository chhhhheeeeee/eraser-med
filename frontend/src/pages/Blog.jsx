import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Blog = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/blog`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-xl text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {lang === 'tr' ? 'Blog' : 'Blog'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={post.image} 
                alt={post.title[lang]}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-emerald-600 font-semibold mb-2">
                  {post.category[lang]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title[lang]}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt[lang]}
                </p>
                <div className="text-sm text-gray-500">
                  {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
