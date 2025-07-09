
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
    <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-blue-300 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-purple-300 rounded-full animate-spin-slow animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-6 animate-fade-in transform hover:scale-102 transition-all duration-500">
            Los 4 errores que hoy<br />
            ponen en peligro tu continuidad
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-blue-200 relative group hover:shadow-xl transition-all duration-500 transform hover:scale-102 hover:-translate-y-1 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute top-4 right-4 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
                <svg className="w-12 h-12 text-blue-200 group-hover:text-blue-400 transition-colors duration-300" viewBox="0 0 100 100" fill="none">
                  <path d="M20 20 Q50 10 80 20 Q90 50 80 80 Q50 90 20 80 Q10 50 20 20Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pr-16 group-hover:text-blue-600 transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {problem.description}
              </p>
              
              {/* Subtle hover border animation */}
              <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
