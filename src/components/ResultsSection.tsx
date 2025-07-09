
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
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-300 rounded-full animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 transform hover:scale-102 transition-all duration-500">
              Resultados que<br />
              hablan por nosotros
            </h2>
            <p className="text-xl text-gray-600 italic transform hover:scale-102 transition-all duration-300">
              "Reducimos un 30 % los incidentes críticos en menos de seis meses y pasamos todas las auditorías NIS2 sin sanciones."
            </p>
          </div>
          
          <div className="space-y-6">
            {results.map((result, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-r ${result.gradient} p-8 rounded-2xl text-white relative group transition-all duration-500 transform hover:scale-102 hover:-translate-y-1 animate-fade-in cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Subtle animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                    animation: 'pattern-move 10s linear infinite'
                  }}></div>
                </div>

                <div className="flex items-start gap-6 relative z-10">
                  <div className="text-6xl font-bold opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                    {result.number}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                      {result.title}
                    </p>
                  </div>
                  <div className="text-white opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-105">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
