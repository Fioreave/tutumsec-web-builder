import React from "react";
import { Search, Map, Settings, TrendingUp } from "lucide-react";

const NewProcessSection = () => {
  const steps = [
    {
      title: "Diagnóstico inicial",
      description: "Auditoría técnica, pentesting y gap analysis NIS2/ISO",
      icon: Search,
    },
    {
      title: "Roadmap estratégico",
      description:
        "Hoja de ruta 12–36 meses con prioridades y retorno de inversión",
      icon: Map,
    },
    {
      title: "Implantación & gobernanza",
      description: "Políticas, procesos y herramientas personalizadas",
      icon: Settings,
    },
    {
      title: "Seguimiento continuo",
      description: "Despliegue, KPIs y revisión trimestral con tu vCISO.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 px-6 bg-tutumsec-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-4xl font-bold text-blue-500 mb-6">
            Una metodología clara;
          </h2>
          <p className="text-xl"> Ejecutiva y orientada a resultados.</p>{" "}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in relative"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300 relative">
                    <IconComponent className="w-8 h-8 text-primary items-center" />
                    {/*<span className="absolute -top-2 -right-2 w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </span>*/}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewProcessSection;
