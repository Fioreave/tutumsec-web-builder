import React from 'react';
import { TrendingDown, Clock, DollarSign, Award } from 'lucide-react';

const NewResultsSection = () => {
  const results = [
    {
      number: "30%",
      title: "Reducción de incidentes críticos",
      subtitle: "en menos de 6 meses",
      icon: TrendingDown,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      number: "98%",
      title: "Alertas gestionadas",
      subtitle: "dentro del SLA del SOC 24×7",
      icon: Clock,
      gradient: "from-blue-500 to-primary"
    },
    {
      number: "22%",
      title: "Ahorro medio en costes IT",
      subtitle: "gracias a la automatización IA/RPA",
      icon: DollarSign,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      number: "+10",
      title: "Sectores regulados",
      subtitle: "auditados con éxito",
      icon: Award,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-700 hover:translate-x-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 transition-colors duration-500 hover:text-primary leading-relaxed">
              Resultados que hablan por nosotros
            </h2>
            <blockquote className="text-xl text-gray-600 italic leading-relaxed border-l-4 border-primary pl-6 transition-all duration-300 hover:border-primary-light hover:pl-8">
              "Reducimos un 30 % los incidentes críticos en menos de seis meses y pasamos todas las auditorías NIS2 sin sanciones."
            </blockquote>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <div 
                  key={index}
                  className="bg-tutumsec-gray-50 p-6 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards', opacity: 0 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${result.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent mb-2`}>
                    {result.number}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
                    {result.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {result.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewResultsSection;