import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemsSection from "../components/ProblemsSection";
import RisksSection from "../components/RisksSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import BenefitsSection from "@/components/BeneficiosSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import PartnersSection from "./PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResultsSection from "../components/ResultsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Consultoría CISO y Auditoría NIS2 para PYMEs | TutumSec</title>
        <meta
          name="description"
          content="Gobernanza, detección 24/7, respuesta y formación con enfoque NIS2. Reserva consultoría gratis y acelera tu seguridad."
        />
        <link rel="canonical" href="https://tutumsec.io/es/" />
        <link rel="alternate" href="https://tutumsec.io/es/" hrefLang="es" />
        <link rel="alternate" href="https://tutumsec.io/ca/" hrefLang="ca" />
        <link rel="alternate" href="https://tutumsec.io/en/" hrefLang="en" />
        <link
          rel="alternate"
          href="https://tutumsec.io/es/"
          hrefLang="x-default"
        />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <BenefitsSection />
        <ProblemsSection />
        <RisksSection />
        <ResultsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
