import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import Hero from '../components/Hero';
import Maganize from '../components/Maganize';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div className='space-y-10'>
      <Slider />
      <FeaturedProducts type='Yeni' />
      <Hero />
      <FeaturedProducts type='Öne Çıkan' />
      <Maganize />
    </div>
  );
};

export default Home;
