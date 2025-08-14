import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Recursos = () => {
  const recursos = [
    {
      title: 'Blog',
      description: 'Artículos especializados sobre ciberseguridad',
      path: '/blog',
      icon: '📝'
    },
    {
      title: 'Whitepapers',
      description: 'Documentos técnicos y guías especializadas',
      path: '/es/recursos/whitepapers',
      icon: '📄'
    },
    {
      title: 'Casos de Éxito',
      description: 'Historias de éxito de nuestros clientes',
      path: '/es/recursos/casos-exito',
      icon: '🏆'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Recursos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contenido especializado para mantenerte actualizado en ciberseguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recursos.map((recurso, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{recurso.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    <Link to={recurso.path} className="hover:text-primary transition-colors">
                      {recurso.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {recurso.description}
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

export default Recursos;