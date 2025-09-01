import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SectorPublico = () => {
  return (
    <>
      <Helmet>
        <title>Ciberseguridad para sector público | TutumSec</title>
        <meta name="description" content="Alineado con ENS y NIS2: gobierno, continuidad y respuesta a incidentes con equipos expertos." />
        <link rel="canonical" href="https://tutumsec.io/es/industrias/sector-publico/" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/sector-publico/" hrefLang="es" />
        <link rel="alternate" href="https://tutumsec.io/ca/industries/sector-public/" hrefLang="ca" />
        <link rel="alternate" href="https://tutumsec.io/en/industries/public-sector/" hrefLang="en" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/sector-publico/" hrefLang="x-default" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Sector Público
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Soluciones adaptadas al sector público
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

export default SectorPublico;