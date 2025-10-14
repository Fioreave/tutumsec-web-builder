import React from "react";

const PartnersSection: React.FC = () => {
  const logos = [
    { src: "/uploads/partners/paloalto.svg", alt: "Paloalto" },
    { src: "/uploads/partners/blackmdr.svg", alt: "Blackmdr" },
    { src: "/uploads/partners/Office.svg", alt: "Office365" },
    { src: "/uploads/partners/bitdefender.svg", alt: "Bitdefender" },
    { src: "/uploads/partners/azure.svg", alt: "Azure" },
    { src: "/uploads/partners/crowdstrike.svg", alt: "Crowdstrike" },
    { src: "/uploads/partners/odoo.svg", alt: "Cliente 7" },
    { src: "/uploads/partners/ubiquiti.svg", alt: "Ubiquiti" },
    { src: "/uploads/partners/veeam.svg", alt: "Veeam" },
    { src: "/uploads/partners/fortinet.svg", alt: "Fortinet" },
    { src: "/uploads/partners/proxmox.svg", alt: "Proxmox" },
  ];

  // Duplicamos para el efecto marquee infinito
  const strip = [...logos, ...logos];

  return (
    <section className="relative w-full overflow-hidden py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        <ul
          className="partners-track flex items-center will-change-transform"
          // velocidad por defecto si el CSS no carga
          style={{ animationDuration: "30s" }}
        >
          {strip.map((logo, i) => (
            <li
              key={i}
              // Espaciado responsive (menos en móvil/tablet)
              className="shrink-0 mr-8 sm:mr-10 md:mr-12 lg:mr-16"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                // Altura responsive: móvil más pequeño, tablet mediano, desktop mayor
                className="block h-6 sm:h-7 md:h-8 lg:h-10 xl:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* CSS de animación y ajustes responsive extra */}
      <style>{`
        /* Hace que el UL mida por su contenido para un scroll continuo sin saltos */
        .partners-track {
          width: max-content;
          animation-name: partners-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* Ajuste fino de la velocidad por tamaño de pantalla:
           - En móvil/tablet acelera un poco para que no se sienta pesado */
        @media (max-width: 1024px) {
          .partners-track { animation-duration: 26s; }
        }
        @media (max-width: 768px) {
          .partners-track { animation-duration: 24s; }
        }
        @media (max-width: 480px) {
          .partners-track { animation-duration: 22s; }
        }

        @keyframes partners-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
