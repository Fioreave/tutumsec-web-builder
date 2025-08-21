
import React from 'react';
import Navbar from '../components/Navbar';
import NewHeroSection from '../components/NewHeroSection';
import NewProblemsSection from '../components/NewProblemsSection';
import NewRisksSection from '../components/NewRisksSection';
import NewServicesSection from '../components/NewServicesSection';
import NewResultsSection from '../components/NewResultsSection';
import NewProcessSection from '../components/NewProcessSection';
import NewSuccessStoriesSection from '../components/NewSuccessStoriesSection';
import SocialProofSection from '../components/SocialProofSection';
import NewFAQSection from '../components/NewFAQSection';
import NewCTASection from '../components/NewCTASection';
import NewFooter from '../components/NewFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO meta tags */}
      <title>Consultoría Ciberseguridad PYMES | TutumSec - CISO as a Service Barcelona</title>
      <meta 
        name="description" 
        content="Consultoría estratégica en ciberseguridad, CISO as a Service y MDR/XDR 24x7. Cumplimiento NIS2, ISO 27001 en 90 días. Transformación digital segura para PYMEs." 
      />
      <meta name="keywords" content="consultoría ciberseguridad pymes, CISO as a Service Barcelona, auditoría NIS2, ISO 27001 PYMEs, MDR 24x7, pentesting empresas" />
      <link rel="canonical" href="https://tutumsec.com/" />
      
      <Navbar />
      <main className="pt-16">
        <NewHeroSection />
        <NewProblemsSection />
        <NewRisksSection />
        <NewServicesSection />
        <NewResultsSection />
        <NewProcessSection />
        <NewSuccessStoriesSection />
        <SocialProofSection />
        <NewFAQSection />
        <NewCTASection />
      </main>
      <NewFooter />
    </div>
  );
};

export default Index;
