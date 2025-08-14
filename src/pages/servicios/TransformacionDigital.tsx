import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TransformacionDigital = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Transformación Digital Estratégica
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transformación digital 360 con enfoque en seguridad
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

export default TransformacionDigital;