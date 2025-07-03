
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto dura una auditoría completa?",
      answer: "2-4 semanas dependiendo del alcance."
    },
    {
      question: "¿Puedo empezar con un pack básico MDR y ampliarlo?",
      answer: "Sí, ofrecemos servicios escalables que pueden crecer con tu empresa. Puedes comenzar con servicios básicos y añadir funcionalidades adicionales según tus necesidades."
    },
    {
      question: "¿Necesito cambiar mi infraestructura?",
      answer: "No necesariamente. Evaluamos tu infraestructura actual y te recomendamos cambios solo cuando son estrictamente necesarios para mejorar tu seguridad."
    },
    {
      question: "¿Cómo cumplo NIS2 antes de la fecha límite?",
      answer: "Te ayudamos con un roadmap personalizado y fases de implementación que aseguran el cumplimiento antes de los plazos establecidos."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/e4fb4fee-7f3a-4129-a2c1-d08c44887324.png" 
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos tus dudas sobre ciberseguridad
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-400 rounded-2xl px-6 border-none"
            >
              <AccordionTrigger className="text-left text-lg text-white font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
