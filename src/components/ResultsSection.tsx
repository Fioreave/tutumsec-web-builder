
import React from 'react';

const ResultsSection = () => {
  const results = [
    {
      number: "01",
      title: "98 % de alertas gestionadas dentro del SLA del SOC 24×7",
      gradient: "from-blue-900 to-blue-700"
    },
    {
      number: "02", 
      title: "22% de ahorro medio en costes IT gracias a la automatización IA/RPA.",
      gradient: "from-blue-800 to-blue-600"
    },
    {
      number: "03",
      title: "+15 sectores regulados auditados con éxito.",
      gradient: "from-blue-900 to-black"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="transform transition-all duration-700 hover:translate-x-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 transition-colors duration-500 hover:text-gray-700">
              Resultados que<br />
              hablan por nosotros
            </h2>
            <p className="text-xl text-gray-600 italic transition-all duration-500 hover:text-gray-500 hover:translate-x-1">
              "Reducimos un 30 % los incidentes críticos en menos de seis meses y pasamos todas las auditorías NIS2 sin sanciones."
            </p>
          </div>
          
          <div className="space-y-6">
            {results.map((result, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-r ${result.gradient} p-8 rounded-2xl text-white relative group transition-all duration-500 hover:shadow-lg hover:translate-x-2 opacity-0 animate-slide-up`}
                style={{ 
                  animationDelay: `${index * 0.2}s`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                    {result.number}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed transition-colors duration-300 group-hover:text-blue-100">
                      {result.title}
                    </p>
                  </div>
                  <div className="text-white opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
