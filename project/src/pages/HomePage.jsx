import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/sections/HeroSection';
import HowItWorks from '../components/sections/HowItWorks';
import FeaturedEvents from '../components/sections/FeaturedEvents';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ImpactSection from '../components/sections/ImpactSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Helmet>
        <title>After Stars - Fighting Hunger Together</title>
        <meta name="description" content="After Stars connects food donors with those in need, fighting hunger and reducing food waste in communities around the world." />
      </Helmet>
      
      <HeroSection />
      <HowItWorks />
      <ImpactSection />
      <FeaturedEvents />
      <TestimonialsSection />
      <Footer/>
    </>
  );
};

export default HomePage;