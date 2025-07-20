
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import HeroSection from '@/components/home/HeroSection';
import FeaturedWorkouts from '@/components/home/FeaturedWorkouts';
import SellingPoints from '@/components/home/SellingPoints';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SearchBar />
      <HeroSection />
      <FeaturedWorkouts />
      <SellingPoints />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
