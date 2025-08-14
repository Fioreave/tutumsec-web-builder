import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Retainer = () => {
  const servicios = [
    {
      title: 'Formación y Concienciación',
      description: 'Educación especializada y programas de awareness',
      path: '/es/retainer/formacion-concienciacion',
      icon: '📚'
    },
    {
      title: 'Prevención y Recuperación Backup',
      description: 'Soluciones completas de prevención y recuperación',
      path: '/es/retainer/prevencion-recuperacion-backup',
      icon: '💾'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Retainer - Bolsa de Horas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crédito prepago con SLA garantizado para servicios especializados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicios.map((servicio, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{servicio.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    <Link to={servicio.path} className="hover:text-primary transition-colors">
                      {servicio.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {servicio.description}
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

export default Retainer;