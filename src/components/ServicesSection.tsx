
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
    <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 mb-6 animate-fade-in transform hover:scale-105 transition-all duration-500">
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
                className="bg-gray-400 p-8 rounded-2xl text-white relative group hover:bg-gray-500 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 hover:rotate-2 animate-fade-in cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg mb-6 flex items-center justify-center group-hover:bg-white group-hover:text-blue-500 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-white group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform skew-x-12 group-hover:animate-shine"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
