import React from "react";

const steps = [
  {
    number: "1",
    description: "Logra el cumplimiento NIS2 e ISO 27001 en menos de 90 días",
    gradient: "from-blue-500 to-blue-950",
  },
  {
    number: "2",
    description: "Reduce un 30 % los incidentes críticos en 6 meses",
    gradient: "from-blue-950 to-blue-800",
  },
  {
    number: "3",
    description: "Decide en tiempo real con cuadros de mando ejecutivos",
    gradient: "from-blue-900 to-black",
  },
];

const BenefitsSection = () => {
  return (
    <section className="pb-6 bg-white mt-20">
      <div className="max-w-6xl mx-auto">
        {/*<div className="mb-10 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Beneficios inmediatos
          </h2>
        </div>*/}

        {/* Tres columnas lado a lado en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch mx-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r ${step.gradient} rounded-2xl text-white relative group shadow-lg p-8 flex`}
            >
              {/* Columna izquierda: número grande */}
              <div className="text-5xl font-bold leading-none opacity-90 w-20 shrink-0 flex items-center justify-center">
                {step.number}
              </div>

              {/* Columna derecha: descripción */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-lg leading-relaxed">{step.description}</p>
              </div>

              {/* Flecha estética como en el ejemplo */}
              <div className="ml-2 self-start text-white/70">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
