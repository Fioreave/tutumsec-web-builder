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
    <section className="relative w-full overflow-hidden py-7 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        <ul
          className="partners-track flex items-center will-change-transform"
          style={{ animationDuration: "30s" }}
        >
          {strip.map((logo, i) => {
            // Verificamos si el logo debe ser más pequeño
            const isSmall = ["Fortinet", "Veeam", "Bitdefender"].includes(
              logo.alt
            );

            return (
              <li key={i} className="shrink-0 mr-8 sm:mr-10 md:mr-12 lg:mr-16">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className={`block w-auto opacity-80 hover:opacity-100 transition-opacity ${
                    isSmall
                      ? "h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8" // más pequeños
                      : "h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9" // tamaño normal
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .partners-track {
          width: max-content;
          animation-name: partners-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

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
