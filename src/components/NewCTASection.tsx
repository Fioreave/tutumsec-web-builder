import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ContactForm } from './ContactForm';

const NewCTASection = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCalendlyClick = () => {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 animate-slide-up leading-relaxed">
          Protege tu empresa hoy, no mañana.
        </h2>
        
        <p className="text-xl mb-12 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Obtén tu auditoría inicial sin coste* y descubre los quick-wins que puedes implantar este mes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <Button 
            size="lg" 
            onClick={handleCalendlyClick}
            className="px-8 py-4 text-lg rounded-full bg-white text-primary hover:bg-gray-100 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            👉 Agenda tu sesión gratuita ahora → Abrir agenda Ayub en calendly
          </Button>
          
          <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white px-8 py-4 text-lg rounded-full hover:bg-white/10 bg-transparent font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                👉 Descarga la Checklist NIS2→ formulario contacto &gt;&gt; Descargar en PDF
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

export default NewCTASection;