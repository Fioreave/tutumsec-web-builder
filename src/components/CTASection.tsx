
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #5eb9f0, #3886f4)'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-white opacity-10 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white opacity-10 rounded-full animate-float animation-delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden ml-auto max-w-4xl transform hover:scale-102 transition-all duration-500 group">
          {/* Subtle animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px',
              animation: 'pattern-slide 15s linear infinite'
            }}></div>
          </div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in group-hover:text-blue-100 transition-colors duration-500">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in animation-delay-500 group-hover:text-gray-100 transition-colors duration-500">
              {t('ctaSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in animation-delay-1000">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg rounded-full text-white font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(to bottom, #5eb9f0, #3886f4)'
                }}
              >
                {t('reserveConsultation')}
              </Button>
              <div className="flex items-center space-x-4 text-white">
                <Phone className="w-6 h-6 animate-bounce" />
                <div className="w-px h-8 bg-gray-400 animate-pulse"></div>
                <MessageCircle className="w-6 h-6 animate-bounce animation-delay-500" />
              </div>
            </div>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
        </div>
        
        {/* Graphic element positioned below and to the right, moved up 10px */}
        <div className="absolute -bottom-10 right-0 w-48 h-48 opacity-70 animate-float">
          <img 
            src="/lovable-uploads/95446ecb-2f3b-4543-a34c-d5d0fb8449e5.png" 
            alt="Graphic element"
            className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
