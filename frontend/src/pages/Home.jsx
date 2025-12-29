import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import SolutionsGrid from '../components/SolutionsGrid';
import ProductsShowcase from '../components/ProductsShowcase';
import VideoSection from '../components/VideoSection';
import BlogNews from '../components/BlogNews';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <StatsSection />
      <SolutionsGrid />
      <ProductsShowcase />
      <VideoSection />
      <BlogNews />
    </div>
  );
};

export default Home;
