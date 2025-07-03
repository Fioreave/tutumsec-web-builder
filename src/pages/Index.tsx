
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemsSection from '../components/ProblemsSection';
import RisksSection from '../components/RisksSection';
import ServicesSection from '../components/ServicesSection';
import ResultsSection from '../components/ResultsSection';
import ProcessSection from '../components/ProcessSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <RisksSection />
      <ServicesSection />
      <ResultsSection />
      <ProcessSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
