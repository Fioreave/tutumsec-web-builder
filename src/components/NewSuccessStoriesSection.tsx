import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Heart,
  FlaskConical,
  Zap,
  Mountain,
  Cog,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const NewSuccessStoriesSection = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      title: "CASO DE ÉXITO #1 — Grupo industrial, fabricación y mecánica",
      pain: "cumplimiento regulatorio parcial, «puntos ciegos» en la nube y sin vigilancia continua.",
      action:
        "auditoría técnica + normativa, alineación completa con NIS2, servicio vCISO y MDR/SOC 24×7.",
      result:
        "cumplimiento pleno, reducción del riesgo técnico y detección de incidentes < 30 min; informes ejecutivos mensuales que mejoran la toma de decisiones.",
      icon: Building2,
    },
    {
      title:
        "CASO DE ÉXITO #2 — Grupo multisectorial (retail, sanidad privada y consumo)",
      pain: "TI muy dispersa, comunicaciones sin segmentar, entornos cloud inseguros y backups incoherentes.",
      action:
        "auditoría multicapa, hardening de nube y comunicaciones, nueva política de backups y acceso remoto seguro.",
      result:
        "infraestructura consolidada, alta resiliencia y control unificado de todas las unidades de negocio.",
      icon: Heart,
    },
    {
      title: "CASO DE ÉXITO #3 — Laboratorio farmacéutico y cosmético regulado",
      pain: "cumplimiento parcial NIS2, desconexión entre TI y seguridad, visibilidad limitada de riesgos.",
      action:
        "auditoría normativa, roadmap por fases y acompañamiento en la implantación de controles.",
      result:
        "avance sostenido hacia el cumplimiento, refuerzo técnico y compromiso activo de la dirección.",
      icon: FlaskConical,
    },
    {
      title:
        "CASO DE ÉXITO #4 — Fábrica tecnológica (energía y logística de componentes)",
      pain: "red poco protegida, hardware obsoleto y sin cifrado.",
      action:
        "diagnóstico global, segmentación interna, upgrade de servidores críticos y cifrado integral.",
      result:
        "entorno seguro y modernizado, mayor capacidad de defensa ante amenazas internas y externas.",
      icon: Zap,
    },
    {
      title: "CASO DE ÉXITO #5 — Estaciones de esquí con sistemas OT en remoto",
      pain: "OT expuesto, comunicaciones vulnerables y backups dispersos.",
      action:
        "reingeniería de red, migración a cloud, estrategia de backups resilientes y monitorización OT.",
      result:
        "aumento de la disponibilidad, restauración rápida y ciberseguridad robusta en entornos geográficamente dispersos.",
      icon: Mountain,
    },
    {
      title:
        "CASO DE ÉXITO #6 — Empresa de ingeniería industrial y automatización",
      pain: "TI desactualizado, red sin segmentar, protección perimetral débil y control limitado de usuarios.",
      action:
        "auditoría técnica, firewalls de última generación, EDR en endpoints, refuerzo de Office 365 y segmentación avanzada de red.",
      result:
        "infraestructura modernizada, mayor control de dispositivos/usuarios y resiliencia operativa reforzada.",
      icon: Cog,
    },
  ];

  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState("partners");

  const tabContent = {
    partners: [
      { name: "BlackMDR", logo: "/uploads/blackmdr.png" },
      { name: "Fortinet", logo: "/uploads/fortinet.png" },
      { name: "CrowdStrike", logo: "/uploads/crowdstrike.png" },
      { name: "Bitdefender", logo: "/uploads/bitdefender.png" },
      { name: "Palo Alto Networks", logo: "/uploads/paloalto.png" },
    ],
    certificados: [
      { name: "ISO27001", logo: "/uploads/certificados/ISO27001.png" },
      { name: "Fortinet", logo: "/uploads/certificados/ENS.png" },
      { name: "CrowdStrike", logo: "/uploads/certificados/nis2" },
    ],
    organizaciones: [
      {
        name: "ISO27001",
        logo: "/uploads/c26c5fdf-d2ac-4e75-8261-fc16741b6fe6.png",
      },
      {
        name: "Fortinet",
        logo: "/uploads/dfae3c84-6b3b-463a-8f75-277584e0c595.png",
      },
      {
        name: "CrowdStrike",
        logo: "/uploads/a12d96d0-9d49-42bf-b1ca-274b15c1217a.png",
      },
    ],
  };

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentCase = stories[currentStory];
  const IconComponent = currentCase.icon;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-400 to-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-slide-up leading-relaxed">
            Casos de éxito
          </h2>
        </div>

        <div className="relative">
          <div className="bg-white bg-opacity-10 rounded-3xl p-8 mb-16 backdrop-blur-sm">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-6 leading-tight">
                  {currentCase.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Dolor inicial:
                    </h4>
                    <p className=" text-gray-200 leading-relaxed">
                      {currentCase.pain}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Acción TutumSec:
                    </h4>
                    <p className=" text-gray-200 leading-relaxed">
                      {currentCase.action}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">Resultado:</h4>
                    <p className=" text-gray-200 leading-relaxed">
                      {currentCase.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevStory}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg border flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
            aria-label="Caso anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-200 hover:text-gray-400" />
          </button>

          <button
            onClick={nextStory}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg border  flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
            aria-label="Siguiente caso"
          >
            <ChevronRight className="w-6 h-6 text-gray-200 hover:text-gray-400" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentStory
                    ? "bg-primary"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir al caso ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-xl lg:text-3xl font-bold text-white flex justify-center mt-20 pb-10">
              Confía en un equipo certificado y respaldado por los líderes del
              sector
            </h2>
          </div>
          {/* Tabs Section */}
          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-8 ">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                    selectedTab === tab
                      ? "bg-white bg-opacity-20 text-white hover:bg-white hover:text-blue-600"
                      : "border bg-opacity-20 text-gray-200 hover:bg-white hover:text-blue-600"
                  }`}
                >
                  {t(tab)}
                </button>
              ))}
            </div>

            <div className="flex justify-center items-center gap-8">
              {selectedTab === "partners"
                ? tabContent.partners.map((partner, index) => (
                    <div
                      key={index}
                      className=" rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100"
                      />
                    </div>
                  ))
                : tabContent[selectedTab as keyof typeof tabContent].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="text-white text-lg font-medium opacity-80 hover:opacity-100 transition-opacity"
                      ></div>
                    )
                  )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSuccessStoriesSection;
