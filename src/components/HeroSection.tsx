
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          ¿Y si mañana un{' '}
          <span className="text-blue-500 relative">
            ciberataque
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
              <path d="M5 6 Q150 1 295 6" stroke="#3B82F6" strokeWidth="3" fill="none"/>
            </svg>
          </span>
          <br />
          paraliza tu empresa?
        </h1>
        
        <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto">
          {t('heroSubtitle')}
        </p>
        
        <p className="text-lg text-gray-600 mb-12 max-w-5xl mx-auto">
          {t('heroDescription')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg rounded-full text-white font-medium transition-colors"
            style={{
              background: 'linear-gradient(to bottom, #5eb9f0, #3886f4)'
            }}
          >
            {t('reserveConsultation')}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-500 text-blue-500 px-8 py-4 text-lg rounded-full hover:bg-blue-50 bg-transparent font-medium transition-colors"
          >
            {t('requestAudit')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
