import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Servicios = () => {
  const servicios = [
    {
      title: 'Consultoría CISO',
      description: 'Gobernanza estratégica de ciberseguridad',
      path: '/es/servicios/consultoria-ciso',
      icon: '🎯'
    },
    {
      title: 'Auditoría & Compliance NIS2',
      description: 'Cumplimiento normativo y auditorías especializadas',
      path: '/es/servicios/auditoria-compliance-nis2',
      icon: '✅'
    },
    {
      title: 'Transformación Digital Estratégica',
      description: 'Transformación digital 360 con enfoque en seguridad',
      path: '/es/servicios/transformacion-digital-estrategica',
      icon: '🚀'
    },
    {
      title: 'Formación y Concienciación',
      description: 'Programa de concienciación en ciberseguridad',
      path: '/es/servicios/formacion-concienciacion',
      icon: '🎓'
    },
    {
      title: 'Respuesta a Incidentes',
      description: 'Respuesta rápida en menos de 15 minutos',
      path: '/es/servicios/respuesta-incidente',
      icon: '🚨'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones integrales de ciberseguridad diseñadas para proteger tu organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Servicios;