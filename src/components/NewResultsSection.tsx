import React from "react";
import { TrendingDown, Clock, DollarSign, Award } from "lucide-react";

const NewResultsSection = () => {
  const results = [
    {
      number: "98%",
      title: "De alertas gestionadas",
      subtitle: "dentro del SLA del SOC 24×7.",
      icon: TrendingDown,
      gradient: "from-blue-900 to-black",
    },
    {
      number: "22%",
      title: "Ahorro medio en costes IT",
      subtitle: "gracias a la automatización IA/RPA",
      icon: DollarSign,
      gradient: "from-blue-950 to-blue-800",
    },

    {
      number: "+10",
      title: "Sectores regulados",
      subtitle: "auditados con éxito.",
      icon: Clock,
      gradient: "from-blue-500 to-blue-950",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Resultados que
              <br />
              hablan por nosotros
            </h2>
            <p className="text-xl text-gray-600 italic">
              "Reducimos un 30 % los incidentes críticos en menos de seis meses
              y pasamos todas las auditorías NIS2 sin sanciones."
            </p>
          </div>

          <div className="space-y-6">
            {results.map((result, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${result.gradient} p-8 rounded-2xl text-white relative group`}
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold opacity-80">
                    {result.number}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed">{result.title}</p>

                    <p className="text-lG text-gray-200">{result.subtitle}</p>
                  </div>
                  <div className="text-white opacity-60">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewResultsSection;
