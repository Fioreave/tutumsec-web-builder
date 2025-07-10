
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
        <div className="text-center mb-16 transform transition-all duration-700 hover:translate-y-1">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-6 transition-colors duration-500 hover:text-blue-600">
            ¡Así de fácil protegemos tu negocio!
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center relative transform transition-all duration-500 hover:translate-y-2 opacity-0 animate-slide-up"
              style={{ 
                animationDelay: `${index * 0.2}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              <div className="inline-block mb-8">
                <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2 transition-colors duration-300 hover:bg-blue-300" style={{width: 'calc(100% - 5rem)'}}></div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-blue-600">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 hover:text-gray-500">
                {step.description}
              </p>
              {/* Curved arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-8">
                  <svg className="w-8 h-12 text-blue-400 transition-colors duration-300 hover:text-blue-500" viewBox="0 0 24 48" fill="none">
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
