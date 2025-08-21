import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ContactForm } from './ContactForm';

const NewHeroSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCalendlyClick = () => {
    // Open Calendly in new tab
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-tutumsec-gray-50 to-white px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight animate-slide-up">
          ¿Y si mañana un{' '}
          <span className="text-primary relative group">
            ciberataque
            <svg className="absolute -bottom-2 left-0 w-full h-3 transition-all duration-500 group-hover:scale-110" viewBox="0 0 300 12" fill="none">
              <path d="M5 6 Q150 1 295 6" stroke="hsl(var(--primary))" strokeWidth="3" fill="none"/>
            </svg>
          </span>
          <br />
          paraliza tu empresa?
        </h1>
        
        <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          El 60 % de las PYMEs que sufren un incidente crítico cierran en menos de 6 meses.
          <br />
          Riesgo reputacional, sanciones NIS2 y pérdida de clientes… pero no tiene por qué pasarte a ti.
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-5xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          En TutumSec convertimos la ciberseguridad en un motor de crecimiento: consultoría estratégica 360º, CISO as a Service y vigilancia MDR/XDR 24×7 que te permiten dormir tranquilo y centrarte en el negocio.
        </p>

        {/* Beneficios inmediatos */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-100 shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios inmediatos</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Cumplimiento NIS2 / ISO 27001 en menos de 90 días</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Reducción del 30 % de incidentes críticos en 6 meses</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Cuadros de mando ejecutivos en tiempo real</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 font-medium">Impulsa tu transformación digital estratégica con seguridad y control</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <Button 
            size="lg" 
            onClick={handleCalendlyClick}
            className="px-8 py-4 text-lg rounded-full bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Reserva tu consultoría gratuita → Abrir agenda Ayub en calendly
          </Button>
          
          <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary px-8 py-4 text-lg rounded-full hover:bg-primary/10 bg-transparent font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Descarga el checklist NIS2→ formulario contacto &gt;&gt; Descargar en PDF
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Descargar Checklist NIS2</DialogTitle>
              </DialogHeader>
              <ContactForm onSuccess={() => setShowContactForm(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;