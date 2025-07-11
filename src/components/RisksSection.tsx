
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
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-700 hover:translate-x-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 transition-colors duration-500 hover:text-blue-300 leading-[1.5]">
              ¿Por qué tu empresa{' '}
              <span className="relative group">
                sigue expuesta?
                <span className="absolute left-0 w-full h-1 bg-blue-400 transition-all duration-500 group-hover:scale-105" style={{ top: '100%', marginTop: '8px' }}></span>
              </span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {risks.map((risk, index) => (
              <div 
                key={index} 
                className="border-l-4 border-blue-400 pl-6 transform transition-all duration-500 hover:translate-x-3 hover:border-blue-300 opacity-0 animate-slide-up"
                style={{ 
                  animationDelay: `${index * 0.2}s`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-300 transition-colors duration-300 hover:text-blue-200 leading-[1.5]">
                  {risk.title}
                </h3>
                <p className="text-gray-300 leading-[1.5] transition-colors duration-300 hover:text-gray-200">
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
