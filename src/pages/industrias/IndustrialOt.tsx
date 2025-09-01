import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const IndustrialOt = () => {
  return (
    <>
      <Helmet>
        <title>Ciberseguridad para industria y OT | TutumSec</title>
        <meta name="description" content="Gobernanza y detección 24/7 en entornos OT/ICS. Auditoría NIS2 y respuesta a incidentes." />
        <link rel="canonical" href="https://tutumsec.io/es/industrias/industrial-ot/" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/industrial-ot/" hrefLang="es" />
        <link rel="alternate" href="https://tutumsec.io/ca/industries/industrial-ot/" hrefLang="ca" />
        <link rel="alternate" href="https://tutumsec.io/en/industries/industrial-ot/" hrefLang="en" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/industrial-ot/" hrefLang="x-default" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Industrial OT
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ciberseguridad para tecnologías operacionales
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

export default IndustrialOt;