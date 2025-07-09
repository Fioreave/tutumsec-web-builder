
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
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/lovable-uploads/107bbe83-fc13-4220-af8c-9118a198c33e.png" 
          alt="Background pattern"
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-blue-300 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in animation-delay-500">
            {t('testimonialsSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 animate-fade-in group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-all duration-300 transform group-hover:scale-110" 
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <svg className="w-8 h-6 text-blue-400 mb-4 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-110" viewBox="0 0 24 18" fill="currentColor">
                    <path d="M0 18h6l3-6V0H0v12h3l-3 6zm15 0h6l3-6V0h-9v12h3l-3 6z"/>
                  </svg>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:bg-blue-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    CEO
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">{testimonial.position}</div>
                  </div>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform skew-x-12 group-hover:animate-shine"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in animation-delay-1000">
          <div className="flex items-center justify-center space-x-2 text-blue-500 transform hover:scale-105 transition-all duration-300">
            <Star className="w-6 h-6 fill-current animate-pulse" />
            <span className="text-xl font-semibold">4.9/5 valoración media basada en 150+ reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
