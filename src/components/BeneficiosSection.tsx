import React from "react";

const BeneficiosSection = () => {
  const steps = [
    {
      number: "1",
      description: "Cumplimiento NIS2 / ISO 27001 en menos de 90 días.",
    },
    {
      number: "2",
      description: "Reducción del 30 % de incidentes críticos en 6 meses",
    },
    {
      number: "3",
      description: "Cuadros de mando ejecutivo en tiempo real",
    },
  ];

  return (
    <section className="pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-3xl text-gray-700 font-bold pt-10">
            Beneficios inmediatos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="inline-block mb-8">
                <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold ">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2"
                    style={{ width: "calc(100% - 5rem)" }}
                  ></div>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {/* Curved arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-8">
                  <svg
                    className="w-8 h-12 text-blue-400"
                    viewBox="0 0 24 48"
                    fill="none"
                  >
                    <path
                      d="M12 4 Q20 20 12 44"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
