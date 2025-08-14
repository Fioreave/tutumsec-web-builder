import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CasosExito = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Casos de Éxito
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Historias de éxito de nuestros clientes
            </p>
          </div>
          <div className="prose max-w-none">
            <p>Contenido pendiente de completar...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CasosExito;