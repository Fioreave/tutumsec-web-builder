import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Finanzas = () => {
  return (
    <>
      <Helmet>
        <title>Ciberseguridad para finanzas | TutumSec</title>
        <meta name="description" content="Gobierno, cumplimiento y detección avanzada para entidades financieras. Enfoque NIS2/ISO y respuesta ágil." />
        <link rel="canonical" href="https://tutumsec.io/es/industrias/finanzas/" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/finanzas/" hrefLang="es" />
        <link rel="alternate" href="https://tutumsec.io/ca/industries/finances/" hrefLang="ca" />
        <link rel="alternate" href="https://tutumsec.io/en/industries/financial-services/" hrefLang="en" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/finanzas/" hrefLang="x-default" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Sector Financiero
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Soluciones especializadas para el sector financiero
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

export default Finanzas;