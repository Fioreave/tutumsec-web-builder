
import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      text: "Pasamos de la incertidumbre a tener un SOC funcionando en 3 semanas. Hoy dormimos tranquilos.",
      author: "CEO",
      position: "Compañía industrial (120 empleados)"
    },
    {
      text: "Pasamos de la incertidumbre a tener un SOC funcionando en 3 semanas. Hoy dormimos tranquilos.",
      author: "CEO", 
      position: "Compañía industrial (120 empleados)"
    },
    {
      text: "Pasamos de la incertidumbre a tener un SOC funcionando en 3 semanas. Hoy dormimos tranquilos.",
      author: "CEO",
      position: "Compañía industrial (120 empleados)"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5 transition-opacity duration-500 hover:opacity-10">
        <img 
          src="/lovable-uploads/107bbe83-fc13-4220-af8c-9118a198c33e.png" 
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 transform transition-all duration-700 hover:translate-y-1">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-colors duration-500 hover:text-gray-700">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-xl text-gray-600 transition-colors duration-300 hover:text-gray-500">
            {t('testimonialsSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:translate-y-2 opacity-0 animate-slide-up"
              style={{ 
                animationDelay: `${index * 0.15}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110" />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <svg className="w-8 h-6 text-blue-400 mb-4 transition-colors duration-300 hover:text-blue-500" viewBox="0 0 24 18" fill="currentColor">
                  <path d="M0 18h6l3-6V0H0v12h3l-3 6zm15 0h6l3-6V0h-9v12h3l-3 6z"/>
                </svg>
                <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-300 hover:text-gray-500">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 transition-all duration-300 hover:bg-blue-400 hover:scale-105">
                  CEO
                </div>
                <div>
                  <div className="font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm transition-colors duration-300 hover:text-gray-400">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center transform transition-all duration-500 hover:translate-y-1">
          <div className="flex items-center justify-center space-x-2 text-blue-500 transition-colors duration-300 hover:text-blue-600">
            <Star className="w-6 h-6 fill-current transition-transform duration-300 hover:scale-110" />
            <span className="text-xl font-semibold">4.9/5 valoración media basada en 150+ reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
