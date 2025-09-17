import React from "react";

/**
 * SocialProofSection
 * Carrusel continuo de logos (tipo marquee) sólo con CSS.
 * Usa el mismo logo en todas las posiciones: "/uploads/fortinet.png".
 * Copia este archivo y úsalo directamente.
 */
const SocialProofSection = ({ speed = "30s", height = 40, count = 12 }) => {
  // Genera N copias del logo
  const logos = Array.from({ length: count }, () => ({
    src: "/uploads/fortinet.png",
    alt: "Fortinet",
  }));
  const strip = [...logos, ...logos]; // duplicado para bucle perfecto

  return (
    <section className="relative w-full py-8 overflow-hidden bg-white">
      {/* Fades laterales elegantes */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="marquee relative">
        <ul className="marquee-track flex items-center gap-16">
          {strip.map((logo, i) => (
            <li key={i} className="shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: height, width: "auto" }}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Estilos del marquee */}
      <style>{`
        .marquee { mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
        .marquee-track { width: max-content; animation: marquee var(--marquee-duration, 30s) linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
};

export default SocialProofSection;
