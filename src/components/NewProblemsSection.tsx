import React from 'react';
import { AlertTriangle, Shield, Clock, TrendingUp } from 'lucide-react';

const NewProblemsSection = () => {
  const problems = [
    {
      title: "Visibilidad cero de riesgos IT/OT",
      description: "vulnerabilidades ocultas en servidores, PLC, Workspace y Microsoft Office 365.",
      icon: AlertTriangle
    },
    {
      title: "Cumplimiento parcial (NIS2, ENS, ISO 27001)",
      description: "multas de hasta 10 M € y pérdida de contratos.",
      icon: Shield
    },
    {
      title: "Tiempo de respuesta lento",
      description: "sin SOC ni playbooks, un ransomware se propaga en minutos.",
      icon: Clock
    },
    {
      title: "Costes operativos disparados",
      description: "procesos manuales y errores humanos que consumen recursos.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 px-6 bg-tutumsec-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
            Los 4 errores que hoy<br />
            ponen en peligro tu continuidad
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards', opacity: 0 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewProblemsSection;