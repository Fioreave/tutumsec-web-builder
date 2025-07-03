
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico gratuito",
      description: "Escaneo Fast-Risk 10 y llamada estratégica."
    },
    {
      number: "2", 
      title: "Plan de acción",
      description: "Roadmap priorizado + presupuesto cerrado."
    },
    {
      number: "3",
      title: "Protección continua", 
      description: "Despliegue, KPIs y revisión trimestral con tu vCISO"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-6">
            ¡Así de fácil protegemos tu negocio!
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="inline-block mb-8">
                <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2" style={{width: 'calc(100% - 5rem)'}}></div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {/* Curved arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-8">
                  <svg className="w-8 h-12 text-blue-400" viewBox="0 0 24 48" fill="none">
                    <path d="M12 4 Q20 20 12 44" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
