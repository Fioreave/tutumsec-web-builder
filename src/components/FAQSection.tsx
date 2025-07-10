
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
      <div className="absolute inset-0 opacity-5 transition-opacity duration-500 hover:opacity-10">
        <img 
          src="/lovable-uploads/e4fb4fee-7f3a-4129-a2c1-d08c44887324.png" 
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16 transform transition-all duration-700 hover:translate-y-1">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-colors duration-500 hover:text-gray-700">
            {t('faqTitle')}
          </h2>
          <p className="text-xl text-gray-600 transition-colors duration-300 hover:text-gray-500">
            {t('faqSubtitle')}
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-400 rounded-2xl px-6 border-none transition-all duration-500 hover:bg-gray-500 hover:shadow-md transform hover:translate-x-1 opacity-0 animate-slide-up"
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              <AccordionTrigger className="text-left text-lg text-white font-semibold hover:no-underline py-6 transition-colors duration-300 hover:text-blue-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 pb-6 leading-relaxed transition-colors duration-300 hover:text-gray-100">
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
