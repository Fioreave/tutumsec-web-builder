import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const NewFAQSection = () => {
  const faqs = [
    {
      question: "¿TutumSec ofrece cobertura en toda España?",
      answer: "Sí. Operamos desde Barcelona, Girona y Andorra, y damos servicio a todo el territorio nacional."
    },
    {
      question: "¿Cuánto dura una auditoría completa?",
      answer: "2–4 semanas dependiendo del alcance."
    },
    {
      question: "¿Puedo contratar solo un servicio (por ejemplo, auditoría)?",
      answer: "Sí. Trabajamos con servicios modulares y escalables. Solo pagas por lo que realmente necesitas."
    },
    {
      question: "¿Necesito cambiar mi infraestructura?",
      answer: "No siempre; priorizamos quick-wins."
    },
    {
      question: "¿Cómo cumplo NIS2 antes de la fecha límite?",
      answer: "Roadmap TutumSec Compliance 360."
    }
  ];

  return (
    <section className="py-20 px-6 bg-tutumsec-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
            Preguntas frecuentes
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-gray-200 px-6 hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Schema.org structured data for FAQ */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default NewFAQSection;