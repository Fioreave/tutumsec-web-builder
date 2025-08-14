import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ReservaConsultoria = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Reserva tu Consultoría
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agenda una consultoría gratuita con nuestros expertos en ciberseguridad
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Calendario de Reservas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">
                      ¿Listo para mejorar tu ciberseguridad?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Programa una llamada de 30 minutos con uno de nuestros especialistas
                    </p>
                  </div>
                  
                  {/* Aquí se integrará Calendly u otro sistema de reservas */}
                  <div className="bg-muted p-8 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      Sistema de reservas en construcción
                    </p>
                    <p className="text-sm">
                      Mientras tanto, puedes contactarnos directamente:
                    </p>
                    <div className="mt-4 space-y-2">
                      <p>📞 +34 900 123 456</p>
                      <p>✉️ consultoria@tutorsec.com</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button size="lg" className="px-8">
                      Contactar por Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReservaConsultoria;