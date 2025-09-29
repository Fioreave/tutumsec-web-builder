import React from "react";

const PartnersSection: React.FC = () => {
  const logos = [
    //{ src: "/uploads/fortinet.png", alt: "Cliente 1" },
    { src: "/uploads/partners/paloalto.png", alt: "Paloalto" },
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

  const strip = [...logos, ...logos];

  const trackStyle: React.CSSProperties = {
    animationName: "partners-marquee",
    animationDuration: "30s", // más chico = más rápido (ej: "20s")
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    willChange: "transform",
  };
  return (
    <section className="relative w-full overflow-hidden py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
      {/* Fades laterales (opcional) 
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent" />
*/}
      <div className="relative">
        <ul className="flex items-center" style={trackStyle}>
          {strip.map((logo, i) => (
            <li key={i} className="shrink-0 mr-16">
              <img
                src={logo.src}
                alt={logo.alt}
                className="block opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: 40, width: "auto" }} // ajusta altura si quieres
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* CSS de animación */}
      <style>{`
        /* Asegura que el UL mida por contenido para el scroll infinito */
        section > div > ul { width: 24; 
        align: center;}
        @keyframes partners-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          section > div > ul { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
