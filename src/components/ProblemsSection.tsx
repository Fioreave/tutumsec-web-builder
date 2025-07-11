
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
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-6 animate-slide-up leading-[1.5]">
            Los 4 errores que hoy<br />
            ponen en peligro tu continuidad
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-blue-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards', opacity: 0 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-blue-600 leading-[1.5]">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-[1.5] transition-colors duration-300 group-hover:text-gray-700">
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
