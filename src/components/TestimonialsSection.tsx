import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * TestimonialsSection
 * - Carrusel de testimonios con autoplay (6s), accesible y responsive
 * - Gradiente azul oscuro sobre las imágenes
 * - Pausa al hacer hover o al enfocarse con el teclado
 *
 * Props opcionales:
 *  - slides: Array<{ image: string; quote: string; author: string; role?: string; logo?: string }>
 *  - intervalMs: number (default 6000)
 * bg-[#0b1f36]
 */

const DEFAULT_SLIDES = [
  {
    image: "/uploads/testimonials/case1.jpg",
    title: "Grupo industrial, fabricación y mecánica",
    subtitle: "Cumplimiento regulatorio pleno y vigilancia continua",
    body: `Dolor inicial: cumplimiento regulatorio parcial, «puntos ciegos» en la nube y sin vigilancia continua.
      Acción TutumSec: auditoría técnica + normativa, alineación completa con NIS2, servicio vCISO y MDR/SOC 24×7.
      Resultado: cumplimiento pleno, reducción del riesgo técnico y detección de incidentes < 30 min; informes ejecutivos mensuales que mejoran la toma de decisiones.`,
  },
  {
    image: "/uploads/testimonials/case2.jpg",
    title: "Grupo multisectorial (retail, sanidad privada y consumo)",
    subtitle: "Resiliencia alta y control unificado",
    body: `Dolor inicial: TI muy dispersa, comunicaciones sin segmentar, entornos cloud inseguros y backups incoherentes.
Acción TutumSec: auditoría multicapa, hardening de nube y comunicaciones, nueva política de backups y acceso remoto seguro.
Resultado: infraestructura consolidada, alta resiliencia y control unificado de todas las unidades de negocio.`,
  },
  {
    image: "/uploads/testimonials/case3.jpg",
    title: "Laboratorio farmacéutico y cosmético regulado",
    subtitle: "Hoja de ruta NIS2 y compromiso directivo",
    body: `Dolor inicial: cumplimiento parcial NIS2, desconexión entre TI y seguridad, visibilidad limitada de riesgos.
Acción TutumSec: auditoría normativa, roadmap por fases y acompañamiento en la implantación de controles.
Resultado: avance sostenido hacia el cumplimiento, refuerzo técnico y compromiso activo de la dirección.`,
  },
  {
    image: "/uploads/testimonials/case4.jpg",
    title: "Fábrica tecnológica (energía y logística de componentes)",
    subtitle: "Segmentación y cifrado integral",
    body: `Dolor inicial: red poco protegida, hardware obsoleto y sin cifrado.
Acción TutumSec: diagnóstico global, segmentación interna, upgrade de servidores críticos y cifrado integral.
Resultado: entorno seguro y modernizado, mayor capacidad de defensa ante amenazas internas y externas.`,
  },
  {
    image: "/uploads/testimonials/case5.jpg",
    title: "Estaciones de esquí con sistemas OT en remoto",
    subtitle: "Disponibilidad y monitorización OT",
    body: `Dolor inicial: OT expuesto, comunicaciones vulnerables y backups dispersos.
Acción TutumSec: reingeniería de red, migración a cloud, estrategia de backups resilientes y monitorización OT.
Resultado: aumento de la disponibilidad, restauración rápida y ciberseguridad robusta en entornos geográficamente dispersos.`,
  },
  {
    image: "/uploads/testimonials/ingenieria.jpg",
    title: "Ingeniería industrial y automatización",
    subtitle: "Modernización y control de usuarios",
    body: `Dolor inicial: TI desactualizado, red sin segmentar, protección perimetral débil y control limitado de usuarios.
Acción TutumSec: auditoría técnica, firewalls de última generación, EDR en endpoints, refuerzo de Office 365 y segmentación avanzada de red.
Resultado: infraestructura modernizada, mayor control de dispositivos/usuarios y resiliencia operativa reforzada.`,
  },
];

const DOT_CLASSES =
  "h-2 w-2 rounded-full transition-all duration-300 aria-selected:w-5 aria-selected:bg-white/90 bg-white/40 hover:bg-white/70 shadow";

export default function TestimonialsSection({
  slides = DEFAULT_SLIDES,
  intervalMs = 5000, // 5s
}: {
  slides?: Array<{
    image: string;
    title: string;
    subtitle: string;
    body: string;
    logo?: string;
  }>;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;
  const idPrefix = useMemo(
    () => `testimonials-${Math.random().toString(36).slice(2, 8)}`,
    []
  );
  const timerRef = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Autoplay (reinicia tras cada cambio o interacción)
  useEffect(() => {
    if (isPaused) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isPaused, intervalMs]);

  // Teclado (← →)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Preload de imágenes (evita flashes al cambiar)
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    slides.forEach((s) => {
      const im = new Image();
      im.src = s.image;
      imgs.push(im);
    });
    return () => {
      imgs.forEach((im) => (im.onload = null));
    };
  }, [slides]);

  // --- Peek layout (desktop) ---
  const PEEK = 120; // píxeles visibles a cada lado (ajusta a gusto)
  const GAP = 24; // coincide con gap-6
  const deskWrapRef = useRef<HTMLDivElement | null>(null);
  const [wrapW, setWrapW] = useState(0);

  useEffect(() => {
    const el = deskWrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWrapW(el.clientWidth));
    ro.observe(el);
    setWrapW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const slideW = Math.max(0, wrapW - PEEK * 2); // ancho real de cada card en desktop

  const current = slides[index];

  return (
    <section
      className="pt-20 pb-20 relative w-full overflow-hidden"
      aria-roledescription="carrusel"
      aria-label="Sección de testimonios"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Encabezado */}
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0b1f36] tracking-tight ">
          Asegurando lo mejor de lo mejor
        </h2>
        <p className="mt-3 max-w-4xl text-xl text-[#0b1f36] pt-2 pb-6">
          En TutumSec, los clientes son lo primero. Los líderes eligen a
          nuestros equipos como su socio de ciberseguridad de confianza.
        </p>
      </div>

      {/* Carrusel */}
      <div className="relative mx-auto px-4">
        {/* --- Vista móvil: 1 tarjeta (igual que antes) --- */}
        {/* --- Mobile: fade suave sin flicker --- */}
        <div className="relative h-[520px] w-full overflow-hidden shadow-2xl ring-1 ring-white/10 md:hidden">
          <AnimatePresence initial={false}>
            <motion.figure
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
              style={{ backfaceVisibility: "hidden", willChange: "opacity" }}
            >
              <img
                src={current.image}
                alt="Testimonio"
                className="h-full w-full object-cover"
                draggable={false}
                style={{ transform: "translateZ(0)" }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f36]/95 via-[#0b1f36]/80 to-transparent" />

              <figcaption className="absolute inset-0 flex">
                <div className="flex max-w-xl flex-col justify-end gap-2 sm:gap-3 p-6 sm:p-10 text-white">
                  {current.logo && (
                    <img
                      src={current.logo}
                      alt="Logo cliente"
                      className="h-6 w-auto mb-2 opacity-90"
                    />
                  )}
                  <h3 className="text-3xl md:text-4xl font-semibold leading-tight drop-shadow">
                    {current.title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                    {current.subtitle}
                  </p>
                  <ul className="mt-4 mb-20 list-disc marker:text-white/50 pl-5 space-y-2 text-sm md:text-base">
                    {current.body
                      .split(/\r?\n/)
                      .map((s) => s.trim())
                      .filter(Boolean)
                      .map((line, i) => {
                        const match = line.match(/^(.*?):\s*(.*)$/);
                        const label = match ? match[1] : "";
                        const text = match ? match[2] : line;
                        return (
                          <li key={i} className="leading-relaxed">
                            <span className="font-semibold text-white/90">
                              {label}
                              {label ? ": " : ""}
                            </span>
                            <span className="text-white/80">{text}</span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Controles */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
            <button
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Anterior"
              onClick={prev}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Siguiente"
              onClick={next}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={`${idPrefix}-dot-${i}`}
                  aria-label={`Ir al slide ${i + 1}`}
                  aria-selected={i === index}
                  className={DOT_CLASSES}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- Vista desktop: 3 tarjetas (peek a los costados) --- */}
        <div className="relative hidden md:block">
          {/* hacemos visible lo que sobresale para que se vean los costados */}
          <div className="relative h-[520px] w-full overflow-visible">
            {(() => {
              const prevIdx = (index - 1 + total) % total;
              const nextIdx = (index + 1) % total;
              const items = [
                { idx: prevIdx, pos: "left" as const, onClick: prev },
                { idx: index, pos: "center" as const, onClick: undefined },
                { idx: nextIdx, pos: "right" as const, onClick: next },
              ];

              return (
                <div className="absolute inset-0 flex items-stretch justify-center gap-6">
                  {items.map(({ idx, pos, onClick }) => {
                    const slide = slides[idx];

                    // estilos por posición
                    const base =
                      "relative overflow-hidden shadow-2xl ring-1 ring-white/10 select-none";
                    const size =
                      pos === "center" ? "w-[66%]" : "w-[28%] cursor-pointer";
                    const depth =
                      pos === "center"
                        ? "z-20"
                        : "z-10 scale-[0.96] opacity-80";
                    const pointer =
                      pos === "center"
                        ? "pointer-events-auto"
                        : "pointer-events-auto";
                    return (
                      <motion.figure
                        key={`${pos}-${idx}`}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className={`${base} ${size} ${depth} ${pointer}`}
                        onClick={onClick}
                      >
                        {/* Imagen */}
                        <img
                          src={slide.image}
                          alt="Testimonio"
                          className="h-full w-full object-cover"
                          draggable={false}
                        />

                        {/* Gradiente: fuerte en centro, tenue en laterales */}
                        <div
                          className={
                            pos === "center"
                              ? "absolute inset-0 bg-gradient-to-r from-[#0b1f36]/95 via-[#0b1f36]/80 to-transparent"
                              : "absolute inset-0 bg-gradient-to-r from-[#0b1f36]/70 via-[#0b1f36]/70 to-transparent backdrop-blur-[1px]"
                          }
                        />

                        {/* Contenido: completo en centro; compacto en laterales */}
                        <figcaption className="absolute inset-0 flex">
                          <div
                            className={
                              pos === "center"
                                ? "flex max-w-xl flex-col justify-end gap-2 p-10 text-white"
                                : "flex max-w-sm flex-col justify-end gap-1 p-6 text-white"
                            }
                          >
                            {slide.logo && (
                              <img
                                src={slide.logo}
                                alt="Logo cliente"
                                className={
                                  pos === "center"
                                    ? "h-6 w-auto mb-2 opacity-90"
                                    : "h-5 w-auto mb-1 opacity-80"
                                }
                              />
                            )}
                            <h3
                              className={
                                pos === "center"
                                  ? "text-4xl font-semibold leading-tight drop-shadow"
                                  : "text-xl font-semibold leading-tight line-clamp-2"
                              }
                            >
                              {slide.title}
                            </h3>
                            <p
                              className={
                                pos === "center"
                                  ? "text-xl text-white/85 leading-relaxed"
                                  : "text-sm text-white/85 leading-snug line-clamp-2"
                              }
                            >
                              {slide.subtitle}
                            </p>

                            {pos === "center" ? (
                              <ul className="mt-4 mb-20 list-disc marker:text-white/50 pl-5 space-y-2 text-base">
                                {slide.body
                                  .split(/\r?\n/)
                                  .map((s) => s.trim())
                                  .filter(Boolean)
                                  .map((line, i) => {
                                    const match = line.match(/^(.*?):\s*(.*)$/);
                                    const label = match ? match[1] : "";
                                    const text = match ? match[2] : line;
                                    return (
                                      <li key={i} className="leading-relaxed">
                                        <span className="font-semibold text-white/90">
                                          {label}
                                          {label ? ": " : ""}
                                        </span>
                                        <span className="text-white/80">
                                          {text}
                                        </span>
                                      </li>
                                    );
                                  })}
                              </ul>
                            ) : (
                              // resumen corto en tarjetas laterales
                              <p className="mt-3 text-[13px] text-white/80 line-clamp-3">
                                {slide.body}
                              </p>
                            )}
                          </div>
                        </figcaption>

                        {/* Sombra al pasar por encima en laterales */}
                        {pos !== "center" && (
                          <div className="absolute inset-0 ring-1 ring-white/10 transition-all duration-300 hover:opacity-90 hover:backdrop-blur-[2px]" />
                        )}
                      </motion.figure>
                    );
                  })}
                </div>
              );
            })()}
          </div>

          {/* Controles (flechas y dots) */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-2 flex items-center justify-between px-4">
            <button
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Anterior"
              onClick={prev}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <div className="pointer-events-auto">
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={`${idPrefix}-dot-${i}`}
                    aria-label={`Ir al slide ${i + 1}`}
                    aria-selected={i === index}
                    className={DOT_CLASSES}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            </div>
            <button
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Siguiente"
              onClick={next}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* CTA opcional (como en la captura) */}
    </section>
  );
}
