import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Salud = () => {
  return (
    <>
      <Helmet>
        <title>Ciberseguridad para salud | TutumSec</title>
        <meta name="description" content="Protección de datos y continuidad asistencial. Auditoría NIS2/ISO, SOC/MDR y cultura de seguridad." />
        <link rel="canonical" href="https://tutumsec.io/es/industrias/salud/" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/salud/" hrefLang="es" />
        <link rel="alternate" href="https://tutumsec.io/ca/industries/salut/" hrefLang="ca" />
        <link rel="alternate" href="https://tutumsec.io/en/industries/healthcare/" hrefLang="en" />
        <link rel="alternate" href="https://tutumsec.io/es/industrias/salud/" hrefLang="x-default" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Sector Salud
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Protección de datos sanitarios y cumplimiento normativo
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

export default Salud;