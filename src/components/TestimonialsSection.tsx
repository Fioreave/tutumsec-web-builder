// src/components/TestimonialsSection.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "@/i18n/useTranslations";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  body: string;
  logo?: string;
};

const DOT_CLASSES =
  "h-2 w-2 rounded-full transition-all duration-300 aria-selected:w-5 aria-selected:bg-white/90 bg-white/40 hover:bg-white/70 shadow";

export default function TestimonialsSection({
  slides: slidesProp,
  intervalMs = 3000,
}: {
  slides?: Slide[];
  intervalMs?: number;
}) {
  const { t } = useTranslations(["home"]);

  // Carga las diapositivas desde i18n si no te pasan "slides" por props
  const i18nSlides: Slide[] = useMemo(() => {
    const idxs = [0, 1, 2, 3, 4, 5];
    const s = idxs
      .map((i) => ({
        image: t(`testimonials.slides.${i}.image`, ""),
        title: t(`testimonials.slides.${i}.title`, ""),
        subtitle: t(`testimonials.slides.${i}.subtitle`, ""),
        body: t(`testimonials.slides.${i}.body`, ""),
      }))
      .filter((x) => x.image && x.title);
    return s;
  }, [t]);

  const slides = slidesProp && slidesProp.length ? slidesProp : i18nSlides;

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;
  const idPrefix = useMemo(
    () => `testimonials-${Math.random().toString(36).slice(2, 8)}`,
    []
  );
  const timerRef = useRef<number | null>(null);
  const norm = (n: number) => ((n % total) + total) % total;

  const goTo = (i: number) => setIndex(norm(i));
  const next = () => setIndex((prev) => norm(prev + 1));
  const prev = () => setIndex((prev) => norm(prev - 1));
  // Autoplay (reinicia tras cada cambio o interacción)
  useEffect(() => {
    if (isPaused || total <= 1) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [index, isPaused, intervalMs, total]);

  // Teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Preload imágenes
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

  const current = slides[index];

  return (
    <section
      className="pt-20 pb-20 relative w-full overflow-hidden"
      aria-roledescription="carousel"
      aria-label={t("testimonials.ariaLabel", "Sección de testimonios")}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Encabezado */}
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0b1f36] tracking-tight ">
          {t("testimonials.heading")}
        </h2>
        <p className="mt-3 max-w-4xl text-xl text-[#0b1f36] pt-2 pb-6">
          {t("testimonials.subheading")}
        </p>
      </div>

      {/* Carrusel */}
      <div className="relative mx-auto px-4">
        {/* --- Mobile --- */}
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
                alt={t("testimonials.imageAlt")}
                className="h-full w-full object-cover"
                draggable={false}
                style={{ transform: "translateZ(0)" }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f36]/95 via-[#0b1f36]/80 to-transparent" />

              <figcaption className="absolute inset-0 flex">
                <div className="flex max-w-xl flex-col justify-end gap-2 sm:gap-3 p-6 sm:p-10 text-white">
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
              aria-label={t("testimonials.prev")}
              onClick={prev}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={t("testimonials.next")}
              onClick={next}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={`${idPrefix}-dot-${i}`}
                  aria-label={t("testimonials.goto", { n: i + 1 })}
                  aria-selected={i === index}
                  className={DOT_CLASSES}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- Desktop (3 tarjetas con “peek”) --- */}
        <div className="relative hidden md:block">
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
                    const base =
                      "relative overflow-hidden shadow-2xl ring-1 ring-white/10 select-none";
                    const size =
                      pos === "center" ? "w-[66%]" : "w-[28%] cursor-pointer";
                    const depth =
                      pos === "center"
                        ? "z-20"
                        : "z-10 scale-[0.96] opacity-80";
                    return (
                      <motion.figure
                        key={`${pos}-${idx}`}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className={`${base} ${size} ${depth}`}
                        onClick={onClick}
                      >
                        <img
                          src={slide.image}
                          alt={t("testimonials.imageAlt")}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                        <div
                          className={
                            pos === "center"
                              ? "absolute inset-0 bg-gradient-to-r from-[#0b1f36]/95 via-[#0b1f36]/80 to-transparent"
                              : "absolute inset-0 bg-gradient-to-r from-[#0b1f36]/70 via-[#0b1f36]/70 to-transparent backdrop-blur-[1px]"
                          }
                        />
                        <figcaption className="absolute inset-0 flex">
                          <div
                            className={
                              pos === "center"
                                ? "flex max-w-xl flex-col justify-end gap-2 p-10 text-white"
                                : "flex max-w-sm flex-col justify-end gap-1 p-6 text-white"
                            }
                          >
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
                              <p className="mt-3 text-[13px] text-white/80 line-clamp-3">
                                {slide.body}
                              </p>
                            )}
                          </div>
                        </figcaption>
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

          {/* Controles y dots */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-2 flex items-center justify-between px-4">
            <button
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={t("testimonials.prev")}
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
                    aria-label={t("testimonials.goto", { n: i + 1 })}
                    aria-selected={i === index}
                    className={DOT_CLASSES}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
            <button
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={t("testimonials.next")}
              onClick={next}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
                <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
