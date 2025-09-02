import React from 'react';

const BlackMDRIntegrationsSection = () => {
  const integrations = [
    { name: 'Microsoft Defender', logo: '/uploads/microsoft.png' },
    { name: 'SentinelOne', logo: '/uploads/sentinelone.png' },
    { name: 'CrowdStrike', logo: '/uploads/crowdstrike.png' },
    { name: 'Fortinet', logo: '/uploads/fortinet.png' },
    { name: 'Bitdefender', logo: '/uploads/bitdefender.png' },
    { name: 'WatchGuard', logo: '/uploads/watchguard.png' },
    { name: 'Palo Alto', logo: '/uploads/paloalto.png' },
    { name: 'Sophos', logo: '/uploads/sophos.png' },
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Conectamos con tu tecnología
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compatibles con Microsoft Defender, WatchGuard, Cisco Meraki, Fortinet, WebRoot, 
            Bitdefender, SentinelOne, CrowdStrike, Palo Alto, SOPHOS, Sentinel one, Cylance y 
            otras plataformas. Evaluamos tu entorno y priorizamos lo que ya tienes para acelerar el ROI.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-card border rounded-lg hover:border-primary/20 transition-colors">
              <img 
                src={integration.logo} 
                alt={integration.name}
                className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const nextElement = target.nextElementSibling as HTMLElement;
                  if (nextElement) nextElement.style.display = 'block';
                }}
              />
              <span className="hidden text-sm font-medium text-muted-foreground">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          * Mostramos compatibilidad técnica; "compatible" no implica relación de partnership salvo indicación expresa.
        </p>
      </div>
    </section>
  );
};

export default BlackMDRIntegrationsSection;