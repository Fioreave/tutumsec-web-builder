
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-400 to-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-3xl p-12 relative overflow-hidden">
          {/* 3D Glass element */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-sm"></div>
            <div className="absolute inset-4 bg-gradient-to-tl from-blue-200 to-cyan-200 rounded-full blur-xs"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Protege tu empresa HOY, no mañana.
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Obtén tu auditoría inicial sin coste* y descubre<br />
              los quick-wins que puedes implantar este mes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full"
              >
                Reserva tu consultoría gratis →
              </Button>
              <div className="flex items-center space-x-4 text-white">
                <Phone className="w-6 h-6" />
                <div className="w-px h-8 bg-gray-400"></div>
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
