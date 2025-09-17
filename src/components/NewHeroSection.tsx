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
      {/* CAPA BASE: azul muy oscuro */}
      <div className="absolute inset-0 -z-20 bg-[#0a0f1c]" />

      {/* CAPA LINEAL SUAVE (de arriba izq a abajo der) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, rgba(14, 24, 46, 0.0) 0%, rgba(89, 116, 189, 0.35) 45%, rgba(182, 185, 193, 0) 100%)",
        }}
      />

      {/* GLOW RADIALES (manchas de luz) */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-3xl -z-10" />

      {/* HILO DECORATIVO */}
      <img
        src="/uploads/hilo.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute left-0 top-[-80px] w-[1200px] max-w-none opacity-60 mix-blend-screen -z-0"
      />

      <div className="max-w-6xl mx-auto text-center relative">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-slide-up pb-2">
          Transformamos la ciberseguridad
          <br />
          en ventaja competitiva
        </h1>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        >
          <Link
            to="https://calendly.com/ayub-tutumsec/30min"
            className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
            style={{
              background: "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)", // blue-400 -> blue-500
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
