
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6" style={{
      background: 'linear-gradient(to bottom, #5eb9f0, #3886f4)'
    }}>
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-4xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transition-colors duration-500 hover:text-blue-200">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-gray-200 mb-8 transition-colors duration-300 hover:text-gray-100">
              {t('ctaSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(to bottom, #5eb9f0, #3886f4)'
                }}
              >
                {t('reserveConsultation')}
              </Button>
              <div className="flex items-center space-x-4 text-white">
                <Phone className="w-6 h-6 transition-all duration-300 hover:scale-110 hover:text-blue-300" />
                <div className="w-px h-8 bg-gray-400 transition-colors duration-300 hover:bg-gray-300"></div>
                <MessageCircle className="w-6 h-6 transition-all duration-300 hover:scale-110 hover:text-blue-300" />
              </div>
            </div>
          </div>
          
          {/* Image positioned exactly on the bottom border and aligned to the right */}
          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-70 transition-all duration-500 hover:opacity-100 hover:scale-105" style={{ transform: 'translateY(50%)' }}>
            <img 
              src="/lovable-uploads/95446ecb-2f3b-4543-a34c-d5d0fb8449e5.png" 
              alt="Graphic element"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
