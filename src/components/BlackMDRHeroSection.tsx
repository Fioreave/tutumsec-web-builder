import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, Calendar, Download, MessageCircle } from 'lucide-react';
import { ContactForm } from './ContactForm';

const BlackMDRHeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/ayub-tutumsec/15min', '_blank');
  };

  const quickWins = [
    'Visibilidad unificada de endpoint, identidad, email, cloud y red.',
    'Validación humana y acciones de contención remota.',
    'Reporte mensual con KPIs y recomendaciones de hardening.'
  ];

  return (
    <section className="pt-24 pb-16 px-6" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-tutumsec-gray-900 mb-6 leading-tight">
            BlackMDR 24x7 — Detección y respuesta gestionada que habla el idioma del{' '}
            <span className="text-tutumsec-blue">negocio</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Monitorización continua, hunting y contención remota para frenar amenazas antes de que impacten en el negocio.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickWins.map((win, index) => (
            <div key={index} className="flex items-start gap-3 p-6 bg-tutumsec-gray-50 border border-tutumsec-blue/20 rounded-lg shadow-lg">
              <CheckCircle className="w-6 h-6 text-tutumsec-blue mt-1 flex-shrink-0" />
              <p className="text-tutumsec-gray-900">{win}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={handleCalendlyClick}
            className="px-8 py-4 text-lg bg-tutumsec-blue hover:bg-tutumsec-blue-dark text-white"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Reserva consultoría gratis (15')
          </Button>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-tutumsec-blue text-tutumsec-blue hover:bg-tutumsec-blue hover:text-white">
                <Download className="w-5 h-5 mr-2" />
                Descarga la ficha técnica BlackMDR
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Descarga la ficha técnica</DialogTitle>
              </DialogHeader>
              <ContactForm 
                onSuccess={() => setIsDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-tutumsec-blue text-tutumsec-blue hover:bg-tutumsec-blue hover:text-white">
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicita presupuesto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlackMDRHeroSection;