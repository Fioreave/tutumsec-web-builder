
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-20 flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in">
          ¿Y si mañana un{' '}
          <span className="text-blue-500 relative">
            ciberataque
            <svg className="absolute -bottom-2 left-0 w-full h-3 animate-draw" viewBox="0 0 300 12" fill="none">
              <path d="M5 6 Q150 1 295 6" stroke="#3B82F6" strokeWidth="3" fill="none" strokeDasharray="300" strokeDashoffset="300"/>
            </svg>
          </span>
          <br />
          paraliza tu empresa?
        </h1>
        
        <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto animate-fade-in animation-delay-500 transform hover:scale-102 transition-all duration-500">
          {t('heroSubtitle')}
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-5xl mx-auto animate-fade-in animation-delay-1000 transform hover:scale-102 transition-all duration-500">
          {t('heroDescription')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-1500">
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(to bottom, #5eb9f0, #3886f4)'
            }}
          >
            {t('reserveConsultation')}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-500 text-blue-500 px-8 py-4 text-lg rounded-full hover:bg-blue-50 bg-transparent font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:border-blue-600 hover:text-blue-600"
          >
            {t('requestAudit')}
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-pink-400 rounded-full animate-float animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
