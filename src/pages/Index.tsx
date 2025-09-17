import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import NewHeroSection from "../components/NewHeroSection";
import NewProblemsSection from "../components/NewProblemsSection";
import NewRisksSection from "../components/NewRisksSection";
import ServicesSection from "../components/ServicesSection";
import NewResultsSection from "../components/NewResultsSection";
import NewProcessSection from "../components/NewProcessSection";
//import NewSuccessStoriesSection from "../components/NewSuccessStoriesSection";
import NewFAQSection from "../components/NewFAQSection";
import NewCTASection from "../components/NewCTASection";
import Footer from "../components/Footer";
//import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BeneficiosSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import PartnersSection from "./PartnersSection";

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
        <NewHeroSection />
        <BenefitsSection />
        <NewProblemsSection />
        <NewRisksSection />
        <NewProcessSection />
        <ServicesSection />
        <NewResultsSection />
        <SuccessStoriesSection />
        <NewCTASection />
        <NewFAQSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
