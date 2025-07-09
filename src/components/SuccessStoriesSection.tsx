
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const SuccessStoriesSection = () => {
  const { t } = useTranslation();
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
    partners: [
      { name: 'Microsoft', logo: '/lovable-uploads/c26c5fdf-d2ac-4e75-8261-fc16741b6fe6.png' },
      { name: 'Fortinet', logo: '/lovable-uploads/dfae3c84-6b3b-463a-8f75-277584e0c595.png' },
      { name: 'CrowdStrike', logo: '/lovable-uploads/a12d96d0-9d49-42bf-b1ca-274b15c1217a.png' },
      { name: 'Bitdefender', logo: '/lovable-uploads/56567670-5377-4e97-8720-b19538b0293a.png' },
      { name: 'Palo Alto Networks', logo: '/lovable-uploads/53efb0a5-36c4-4059-b37d-ed75629934d2.png' }
    ],
    certificados: ['ISO 27001', 'ENS', 'NIS2'],
    organizaciones: ['INCIBE', 'Acción', 'ASCICAT']
  };

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            {t('successStoriesTitle')}
            <svg className="inline-block ml-4 w-16 h-8 animate-pulse" viewBox="0 0 64 32" fill="none">
              <path d="M5 16 Q32 8 59 16" stroke="white" strokeWidth="3" fill="none"/>
            </svg>
          </h2>
          <p className="text-xl text-blue-100 transform hover:translate-y-1 transition-transform duration-300">
            {t('successStoriesSubtitle')}
          </p>
        </div>

        {/* Success Stories Slider */}
        <div className="bg-white bg-opacity-10 rounded-3xl p-8 mb-16 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <Button 
              onClick={prevStory}
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white hover:bg-opacity-20 transform hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
                    index === currentStory ? 'bg-white animate-pulse' : 'bg-white bg-opacity-40 hover:bg-opacity-70'
                  }`}
                />
              ))}
            </div>
            <Button 
              onClick={nextStory}
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white hover:bg-opacity-20 transform hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="text-white transform transition-all duration-700 ease-in-out">
            <h3 className="text-2xl font-bold mb-6 animate-fade-in">{stories[currentStory].title}</h3>
            <div className="space-y-4">
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <strong className="text-blue-200">• Dolor inicial:</strong> {stories[currentStory].pain}
              </div>
              <div className="transform hover:translate-x-2 transition-transform duration-300 delay-100">
                <strong className="text-blue-200">• Acción TutumSec:</strong> {stories[currentStory].action}
              </div>
              <div className="transform hover:translate-x-2 transition-transform duration-300 delay-200">
                <strong className="text-blue-200">• Resultado:</strong> {stories[currentStory].result}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8">
            {Object.keys(tabContent).map((tab, index) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                  selectedTab === tab
                    ? 'bg-white text-blue-600 shadow-lg animate-pulse'
                    : 'bg-white bg-opacity-20 text-white hover:bg-white hover:text-blue-600 hover:bg-opacity-100'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {t(tab)}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center items-center gap-12 max-w-5xl mx-auto">
            {selectedTab === 'partners' ? (
              tabContent.partners.map((partner, index) => (
                <div 
                  key={index}
                  className="transform hover:scale-110 transition-all duration-500 hover:-translate-y-2 hover:rotate-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-16 w-auto max-w-[120px] object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))
            ) : (
              tabContent[selectedTab as keyof typeof tabContent].map((item, index) => (
                <div 
                  key={index}
                  className="text-white text-lg font-medium opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
