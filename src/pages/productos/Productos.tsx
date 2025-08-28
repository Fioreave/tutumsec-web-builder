import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Productos = () => {
  const productos = [
    {
      title: 'Detección 24x7',
      description: 'Monitorización y detección de amenazas las 24 horas',
      path: '/es/productos/deteccion-24x7',
      icon: '🔍'
    },
    {
      title: 'Incidente Respuesta Retainer',
      description: 'Respuesta a incidentes en menos de 15 minutos',
      path: '/es/productos/incidente-respuesta-retainer',
      icon: '🚨'
    },
    {
      title: 'Prevención y Recuperación Backup',
      description: 'Upsell - Prevención y recuperación integral',
      path: '/es/productos/prevencion-recuperacion-backup',
      icon: '🛡️'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Nuestros Productos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Productos especializados de ciberseguridad para la protección continua de tu organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((producto, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{producto.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    <Link to={producto.path} className="hover:text-primary transition-colors">
                      {producto.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {producto.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Productos;