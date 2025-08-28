import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrevencionRecuperacionBackup = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Prevención y Recuperación Backup
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Soluciones completas de prevención y recuperación
          </p>
          <div className="prose max-w-none">
            <p>Solución integral que combina prevención proactiva y recuperación rápida mediante sistemas de backup avanzados.</p>
            
            <h2>Servicios incluidos:</h2>
            <ul>
              <li>Backup automático y programado</li>
              <li>Monitorización continua de sistemas</li>
              <li>Recuperación ante desastres</li>
              <li>Pruebas de recuperación regulares</li>
              <li>Planes de continuidad de negocio</li>
              <li>Replicación de datos en tiempo real</li>
            </ul>
            
            <h2>Beneficios del servicio:</h2>
            <ul>
              <li>Protección integral de datos críticos</li>
              <li>Minimización del tiempo de inactividad</li>
              <li>Cumplimiento de normativas de backup</li>
              <li>Tranquilidad operacional</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrevencionRecuperacionBackup;