import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Whitepapers = () => {
  const whitepapers = [
    {
      title: 'Checklist NIS2',
      description: 'Guía completa de cumplimiento NIS2 para tu organización',
      downloadUrl: '/checklist-nis2.pdf'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Whitepapers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Documentos técnicos y guías especializadas para profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitepapers.map((whitepaper, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{whitepaper.title}</CardTitle>
                  <CardDescription>{whitepaper.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Descargar PDF</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Whitepapers;