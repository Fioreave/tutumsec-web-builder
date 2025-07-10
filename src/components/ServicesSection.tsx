
import React from 'react';
import { Shield, Users, FileCheck, Eye } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Audit & Pentest 360°",
      description: "Visibilidad real de riesgos IT-OT.",
      icon: Shield
    },
    {
      title: "vCISO",
      description: "Estrategia y reporting ejecutivo sin contratar un C-level interno. Micro-copy dentro de cada card: beneficio + keyword principal.",
      icon: Users
    },
    {
      title: "Compliance NIS2 / ISO 27001 / ENS",
      description: "Gap-analysis, implantación y auditoría.",
      icon: FileCheck
    },
    {
      title: "MDR 24/7 + SOCaaS",
      description: "Detección y contención en < 15 min.",
      icon: Eye
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 transform transition-all duration-700 hover:translate-y-1">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-6 transition-colors duration-500 hover:text-blue-600">
            Ciberseguridad premium<br />
            que crece contigo
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-gray-400 p-8 rounded-2xl text-white relative group hover:bg-gray-500 transition-all duration-500 transform hover:translate-y-2 hover:shadow-lg opacity-0 animate-slide-up"
                style={{ 
                  animationDelay: `${index * 0.15}s`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-400">
                  <IconComponent className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-3" />
                </div>
                <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-blue-100">
                  {service.title}
                </h3>
                <p className="text-gray-100 leading-relaxed text-sm transition-colors duration-300 group-hover:text-gray-50">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
