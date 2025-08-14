import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Industrias = () => {
  const industrias = [
    {
      title: 'Finanzas',
      description: 'Soluciones especializadas para el sector financiero',
      path: '/es/industrias/finanzas',
      icon: '🏦'
    },
    {
      title: 'Salud',
      description: 'Protección de datos sanitarios y cumplimiento normativo',
      path: '/es/industrias/salud',
      icon: '🏥'
    },
    {
      title: 'Industrial OT',
      description: 'Ciberseguridad para tecnologías operacionales',
      path: '/es/industrias/industrial-ot',
      icon: '🏭'
    },
    {
      title: 'Tecnología SaaS',
      description: 'Seguridad para empresas tecnológicas y SaaS',
      path: '/es/industrias/tecnologia-saas',
      icon: '💻'
    },
    {
      title: 'Sector Público',
      description: 'Soluciones adaptadas al sector público',
      path: '/es/industrias/sector-publico',
      icon: '🏛️'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Industrias
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones de ciberseguridad adaptadas a cada sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrias.map((industria, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{industria.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    <Link to={industria.path} className="hover:text-primary transition-colors">
                      {industria.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {industria.description}
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

export default Industrias;