
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
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              ¿Por qué tu empresa{' '}
              <span className="relative">
                sigue expuesta?
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path d="M5 6 Q150 1 295 6" stroke="#3B82F6" strokeWidth="3" fill="none"/>
                </svg>
              </span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {risks.map((risk, index) => (
              <div key={index} className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  {risk.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
