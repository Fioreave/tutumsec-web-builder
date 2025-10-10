import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";
import { Link } from "react-router-dom";

/**
 * NEW HERO SECTION
 * - Fondo elegante en degradado azul oscuro (combinación de lineal + radiales)
 * - Hilo decorativo desde /uploads/hilo.png (absoluto, no interfiere con clicks)
 * - Texto en blanco para alto contraste
 * - Mantiene tu CTA
 */
const NewHeroSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCalendlyClick = () => {
    const calendlyUrl =
      process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/ayub-tutumsec/30min";
    window.open(calendlyUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-6 flex items-center">
      {/* CAPA BASE: azul muy oscuro 
      <div className="absolute inset-0 -z-20 bg-[#0a0f1c]" />*/}

      {/* CAPA LINEAL SUAVE (de arriba izq a abajo der) */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/uploads/background/background1.png')",
        }}
      />
      {/*style={{
          background:
            "linear-gradient(120deg, rgba(14, 24, 46, 0.0) 0%, rgba(89, 116, 189, 0.35) 45%, rgba(182, 185, 193, 0) 100%)",
        }}*/}
      {/* GLOW RADIALES (manchas de luz) 
      <div className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-3xl -z-10" />
*/}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* HILO DECORATIVO 
      <img
        src="/uploads/hilo.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute left-0 top-[-80px] w-[1200px] max-w-none opacity-60 mix-blend-screen -z-0"
      />*/}

      <div className="max-w-5xl mx-auto text-center relative">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-slide-up pb-2">
          Convierte la ciberseguridad <br />
          en tu mejor ventaja competitiva
        </h1>
        <h2 className="text-lg lg:text-xl font-medium text-white mb-8 leading-tight animate-slide-up pb-2">
          Usamos las mejores estrategias de ciberseguridad para hacer crecer tu
          negocio y evitar incidentes críticos: consultoría que impulsa
          resultados, diseño y ejecución 360º para bajar incidentes críticos y
          centrarte en lo esencial.
        </h2>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        >
          <Link
            to="https://calendly.com/ayub-tutumsec/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
            style={{
              background:
                "linear-gradient(250deg, #1a34c8ff 0%, #0062ffff 100%)", // blue-400 -> blue-500
            }}
          >
            Reserva tu consultoría gratuita →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
