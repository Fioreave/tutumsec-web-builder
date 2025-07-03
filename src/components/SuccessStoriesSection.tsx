
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessStoriesSection = () => {
  const [selectedTab, setSelectedTab] = useState('partners');
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      title: "CASO DE ÉXITO #1 — Grupo industrial, fabricación y mecánica",
      pain: "cumplimiento regulatorio parcial, «puntos ciegos» en la nube y sin vigilancia continua.",
      action: "auditoría técnica + normativa, alineación completa con NIS2, servicio vCISO y MDR/SOC 24×7.",
      result: "cumplimiento pleno, reducción del riesgo técnico y detección de incidentes < 30 min; informes ejecutivos mensuales que mejoran la toma de decisiones."
    },
    {
      title: "CASO DE ÉXITO #2 — Grupo multisectorial (retail, sanidad privada y consumo)",
      pain: "TI muy dispersa, comunicaciones sin segmentar, entornos cloud inseguros y backups incoherentes.",
      action: "auditoría multicapa, hardening de nube y comunicaciones, nueva política de backups y acceso remoto seguro.",
      result: "infraestructura consolidada, alta resiliencia y control unificado de todas las unidades de negocio."
    },
    {
      title: "CASO DE ÉXITO #3 — Laboratorio farmacéutico y cosmético regulado",
      pain: "cumplimiento parcial NIS2, desconexión entre TI y seguridad, visibilidad limitada de riesgos.",
      action: "auditoría normativa, roadmap por fases y acompañamiento en la implantación de controles.",
      result: "avance sostenido hacia el cumplimiento, refuerzo técnico y compromiso activo de la dirección."
    }
  ];

  const tabContent = {
    partners: ['BLACKMDR', 'FORTINET', 'CROWDSTRIKE', 'Bitdefender', 'palo alto NETWORKS'],
    certificados: ['ISO 27001', 'ENS', 'NIS2'],
    organizaciones: ['INCIBE', 'Acció', 'ASCICAT']
  };

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-400 to-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Casos de éxito
            <svg className="inline-block ml-4 w-16 h-8" viewBox="0 0 64 32" fill="none">
              <path d="M5 16 Q32 8 59 16" stroke="white" strokeWidth="3" fill="none"/>
            </svg>
          </h2>
          <p className="text-xl text-blue-100">
            Descubre cómo hemos transformado la ciberseguridad de empresas como la tuya
          </p>
        </div>

        {/* Success Stories Slider */}
        <div className="bg-white bg-opacity-10 rounded-3xl p-8 mb-16 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <Button 
              onClick={prevStory}
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white hover:bg-opacity-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentStory ? 'bg-white' : 'bg-white bg-opacity-40'
                  }`}
                />
              ))}
            </div>
            <Button 
              onClick={nextStory}
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white hover:bg-opacity-20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">{stories[currentStory].title}</h3>
            <div className="space-y-4">
              <div>
                <strong className="text-blue-200">• Dolor inicial:</strong> {stories[currentStory].pain}
              </div>
              <div>
                <strong className="text-blue-200">• Acción TutumSec:</strong> {stories[currentStory].action}
              </div>
              <div>
                <strong className="text-blue-200">• Resultado:</strong> {stories[currentStory].result}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                  selectedTab === tab
                    ? 'bg-white text-blue-600'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {tabContent[selectedTab as keyof typeof tabContent].map((item, index) => (
              <div 
                key={index}
                className="text-white text-lg font-medium opacity-80 hover:opacity-100 transition-opacity"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
