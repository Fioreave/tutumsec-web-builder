
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
    <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      {/* Animated connection lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
          <path d="M200 200 Q600 100 1000 200" stroke="#3B82F6" strokeWidth="2" strokeDasharray="10,5" className="animate-dash"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-6 animate-fade-in transform hover:scale-102 transition-all duration-500">
            ¡Así de fácil protegemos tu negocio!
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative animate-fade-in group" style={{ animationDelay: `${index * 400}ms` }}>
              <div className="inline-block mb-8 relative">
                <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 relative z-10 transition-all duration-500 transform group-hover:scale-110 group-hover:bg-blue-600">
                  {step.number}
                  
                  {/* Subtle pulsing ring effect */}
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40 group-hover:opacity-60"></div>
                </div>

                {/* Animated connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 -translate-y-1/2 overflow-hidden" style={{width: 'calc(100% - 5rem)'}}>
                    <div className="h-full w-full bg-gradient-to-r from-blue-400 to-blue-600 transform -translate-x-full animate-slide-right" style={{ animationDelay: `${index * 500 + 1000}ms` }}></div>
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>

              {/* Animated arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-8">
                  <svg className="w-8 h-12 text-blue-400 animate-bounce" viewBox="0 0 24 48" fill="none">
                    <path d="M12 4 Q20 20 12 44" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 40 L12 44 L16 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
