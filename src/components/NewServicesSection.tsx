import React from "react";
import { Users, Shield, CheckCircle, Eye, GraduationCap } from "lucide-react";

const NewServicesSection = () => {
  const services = [
    {
      title:
        "Consultoría estratégica en Ciberseguridad y transformación digital",
      benefit: "Diagnóstico integral + roadmap con quick-wins.",
      icon: Users,
    },
    {
      title: "vCISO (CISO as a Service)",
      benefit:
        "Gobernanza estratégica, cuadros de mando, control presupuestario y decisiones basadas en datos.",
      icon: Shield,
    },
    {
      title: "Auditoría Técnica + Compliance (NIS2, ENS, ISO 27001)",
      benefit:
        "Evaluamos tu estado real y definimos un plan de mejora. Evita sanciones y fortalece tu reputación. Pentesting para la visibilidad real de riesgos IT-OT.",
      icon: CheckCircle,
    },
    {
      title: "SOC / MDR 24×7",
      benefit:
        "Detección y respuesta en tiempo real con SLA ≤ 15 minutos. Cobertura total sin ampliar plantilla.",
      icon: Eye,
    },
    {
      title: "Formación & Awareness",
      benefit: "Simulaciones de phishing y micro-learning gamificado.",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
            Consultoría CISO, auditoría y detección 24/7 para proteger y hacer
            crecer tu negocio
          </h2>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-tutumsec-gray-50 p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                      {service.benefit}
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

export default NewServicesSection;
