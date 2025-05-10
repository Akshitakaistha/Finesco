import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoBoxesSection from '../components/InfoBoxesSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ProductsSection from '../components/ProductsSection';
import TrainingSection from '../components/TrainingSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <InfoBoxesSection />
      <AboutSection />
      <StatsSection />
      <ProductsSection />
      <TrainingSection />
      <ContactSection />
    </>
  );
};

export default HomePage;