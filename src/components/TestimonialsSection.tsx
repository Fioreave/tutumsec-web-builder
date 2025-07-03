
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
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
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Qué dicen nuestros <span className="text-blue-500">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            La confianza de nuestros clientes es el mejor aval de nuestra calidad y compromiso
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <svg className="w-8 h-6 text-blue-400 mb-4" viewBox="0 0 24 18" fill="currentColor">
                  <path d="M0 18h6l3-6V0H0v12h3l-3 6zm15 0h6l3-6V0h-9v12h3l-3 6z"/>
                </svg>
                <p className="text-gray-600 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  CEO
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-blue-500">
            <Star className="w-6 h-6 fill-current" />
            <span className="text-xl font-semibold">4.9/5 valoración media basada en 150+ reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
