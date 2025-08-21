import React from 'react';

const SocialProofSection = () => {
  const partners = [
    { name: 'BlackMDR', logo: '/placeholder-logo.png' },
    { name: 'Fortinet', logo: '/placeholder-logo.png' },
    { name: 'CrowdStrike', logo: '/placeholder-logo.png' },
    { name: 'Bitdefender', logo: '/placeholder-logo.png' },
    { name: 'PaloAlto', logo: '/placeholder-logo.png' }
  ];

  const certifications = [
    { name: 'ISO 27001', logo: '/placeholder-logo.png' },
    { name: 'ENS', logo: '/placeholder-logo.png' },
    { name: 'NIS2', logo: '/placeholder-logo.png' }
  ];

  const organizations = [
    { name: 'INCIBE', logo: '/placeholder-logo.png' },
    { name: 'Acció', logo: '/placeholder-logo.png' },
    { name: 'ASCICAT', logo: '/placeholder-logo.png' }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 animate-slide-up leading-relaxed">
            Confía en un equipo certificado y respaldado por los líderes del sector
          </h2>
          
          {/* Testimonial */}
          <div className="bg-tutumsec-gray-50 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
              "Pasamos de la incertidumbre a tener un SOC funcionando en 3 semanas. Hoy dormimos tranquilos."
            </blockquote>
            <cite className="text-gray-600 font-medium">— CEO, compañía industrial (120 empleados)</cite>
          </div>
        </div>

        {/* Partners */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-600 text-center mb-6">Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-600 text-center mb-6">Certificados</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {certifications.map((cert, index) => (
              <div key={index} className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div>
          <h3 className="text-lg font-semibold text-gray-600 text-center mb-6">Organizaciones</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {organizations.map((org, index) => (
              <div key={index} className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;