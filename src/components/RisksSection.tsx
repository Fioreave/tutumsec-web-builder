
import React from 'react';

const RisksSection = () => {
  const risks = [
    {
      title: "Falta de pentesting y auditorías periódicas",
      description: "Puntos ciegos que los atacantes explotan en minutos."
    },
    {
      title: "Cumplimiento parcial de NIS2 / ISO 27001 / ENS",
      description: "Riesgo legal y pérdida de contratos con clientes sensibles."
    },
    {
      title: "Tiempo de respuesta > 1 h",
      description: "Tiempo de respuesta > 1 h Daño reputacional y parada operativa."
    },
    {
      title: "Procesos manuales y dispersos",
      description: "Costes operativos +22 % y errores humanos críticos."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 transform hover:scale-105 transition-all duration-500">
              ¿Por qué tu empresa{' '}
              <span className="relative">
                sigue expuesta?
                <svg className="absolute -bottom-2 left-0 w-full h-3 animate-draw" viewBox="0 0 300 12" fill="none">
                  <path d="M5 6 Q150 1 295 6" stroke="#3B82F6" strokeWidth="3" fill="none" strokeDasharray="300" strokeDashoffset="300"/>
                </svg>
              </span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {risks.map((risk, index) => (
              <div 
                key={index} 
                className="border-l-4 border-blue-400 pl-6 animate-fade-in transform hover:translate-x-4 transition-all duration-500 hover:bg-white hover:bg-opacity-5 hover:rounded-r-lg hover:py-4 hover:pr-4 cursor-pointer group"
                style={{ animationDelay: `${(index + 1) * 300}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                  {risk.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
