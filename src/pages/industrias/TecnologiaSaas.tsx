import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TecnologiaSaas = () => {
  return (
    <>
      <Helmet>
        <title>Ciberseguridad para empresas tecnológicas (SaaS/Tech) | TutumSec</title>
        <meta name="description" content="Seguridad by design, hardening cloud y evidencias para auditorías. SOC/MDR y vCISO." />
        <link rel="canonical" href="https://tutumsec.io/es/industrias/tecnologia/" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/tecnologia/" hrefLang="es" />
        <link rel="alternate" href="https://tutumsec.io/ca/industries/tecnologia/" hrefLang="ca" />
        <link rel="alternate" href="https://tutumsec.io/en/industries/technology/" hrefLang="en" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/tecnologia/" hrefLang="x-default" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Tecnología SaaS
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Seguridad para empresas tecnológicas y SaaS
          </p>
          <div className="prose max-w-none">
            <p>Contenido pendiente de completar...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TecnologiaSaas;