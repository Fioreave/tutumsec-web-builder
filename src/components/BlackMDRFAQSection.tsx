import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BlackMDRFAQSection = () => {
  const faqs = [
    {
      question: "¿En qué se diferencia MDR de EDR?",
      answer: "EDR es la tecnología en endpoint; MDR añade equipo humano 24/7 para monitorizar, validar y responder."
    },
    {
      question: "¿Necesito SIEM?",
      answer: "No es obligatorio. Iniciamos con EDR/XDR e identidad/email; si ya usas SIEM, lo integramos."
    },
    {
      question: "¿Ofrecéis respuesta forense/DFIR?",
      answer: "Sí, como servicio aparte (retainer) para análisis profundo y coordinación de crisis."
    },
    {
      question: "¿Publicáis SLAs?",
      answer: "Definimos SLA operativos en contrato (triage, notificación, contención) adaptados a tu entorno."
    },
    {
      question: "¿Cómo se gestiona la privacidad de datos?",
      answer: "Tratamos los datos mínimos imprescindibles, con controles y acuerdos de tratamiento."
    }
  ];

  const structuredData = {
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
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Preguntas frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
    </section>
  );
};

export default BlackMDRFAQSection;