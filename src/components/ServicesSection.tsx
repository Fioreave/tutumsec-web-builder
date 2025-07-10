
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-6">
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
                className="bg-gray-400 p-8 rounded-2xl text-white relative group hover:bg-gray-500 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-6 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-100 leading-relaxed text-sm">
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
