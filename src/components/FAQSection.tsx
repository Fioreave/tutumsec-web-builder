
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslation } from '@/hooks/useTranslation';

const FAQSection = () => {
  const { t } = useTranslation();
  
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
          className="w-full h-full object-cover animate-slow-pan"
        />
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-8 h-8 border-2 border-blue-300 rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 right-40 w-6 h-6 border-2 border-purple-300 rounded-full animate-spin-slow animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-10 h-10 border-2 border-pink-300 rounded-full animate-spin-slow animation-delay-2000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            {t('faqTitle')}
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in animation-delay-500">
            {t('faqSubtitle')}
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-400 rounded-2xl px-6 border-none animate-fade-in transition-all duration-500 hover:bg-gray-500 hover:scale-102 hover:shadow-lg group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <AccordionTrigger className="text-left text-lg text-white font-semibold hover:no-underline py-6 group-hover:text-blue-100 transition-colors duration-300 [&[data-state=open]]:text-blue-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 pb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 animate-fade-in">
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
