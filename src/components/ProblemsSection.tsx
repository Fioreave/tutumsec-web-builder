
import React from 'react';

const ProblemsSection = () => {
  const problems = [
    {
      title: "Visibilidad cero de riesgos IT/OT",
      description: "Vulnerabilidades ocultas en servidores, PLC, Workspace y Microsoft Office 365."
    },
    {
      title: "Cumplimiento parcial (NIS2, ENS, ISO 27001)",
      description: "Multas de hasta 10 M € y pérdida de contratos."
    },
    {
      title: "Tiempo de respuesta lento",
      description: "Sin SOC ni playbooks, un ransomware se propaga en minutos."
    },
    {
      title: "Costes operativos disparados",
      description: "Procesos manuales y errores humanos que consumen recursos."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-6">
            Los 4 errores que hoy<br />
            ponen en peligro tu continuidad
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-blue-200 relative group hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-4 right-4">
                <svg className="w-12 h-12 text-blue-200" viewBox="0 0 100 100" fill="none">
                  <path d="M20 20 Q50 10 80 20 Q90 50 80 80 Q50 90 20 80 Q10 50 20 20Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pr-16">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
