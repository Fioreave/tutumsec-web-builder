import React from 'react';

const NewRisksSection = () => {
  const risks = [
    {
      problem: "Falta de pentesting y auditorías periódicas",
      consequence: "Puntos ciegos que los atacantes explotan en minutos."
    },
    {
      problem: "Cumplimiento parcial de NIS2 / ISO 27001 / ENS",
      consequence: "Riesgo legal y pérdida de contratos con clientes sensibles."
    },
    {
      problem: "Tiempo de respuesta > 1 h",
      consequence: "Daño reputacional y parada operativa."
    },
    {
      problem: "Procesos manuales y dispersos",
      consequence: "Costes operativos +22 % y errores humanos críticos."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-primary/20 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-700 hover:translate-x-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 transition-colors duration-500 hover:text-primary-light leading-relaxed">
              ¿Por qué tu empresa{' '}
              <span className="relative group">
                sigue expuesta?
                <svg className="absolute -bottom-1 left-0 w-full h-3 transition-all duration-500 group-hover:scale-105" viewBox="0 0 300 12" fill="none">
                  <path d="M5 8 Q150 3 295 8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none"/>
                </svg>
              </span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/30">
                    <th className="text-left pb-4 text-primary-light font-semibold">Problema</th>
                    <th className="text-left pb-4 text-primary-light font-semibold">Consecuencia de negocio</th>
                  </tr>
                </thead>
                <tbody>
                  {risks.map((risk, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-gray-700 opacity-0 animate-slide-up hover:bg-white/5 transition-all duration-300"
                      style={{ 
                        animationDelay: `${index * 0.2}s`, 
                        animationFillMode: 'forwards' 
                      }}
                    >
                      <td className="py-4 pr-6 text-gray-300 leading-relaxed">
                        {risk.problem}
                      </td>
                      <td className="py-4 text-gray-400 leading-relaxed">
                        {risk.consequence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRisksSection;