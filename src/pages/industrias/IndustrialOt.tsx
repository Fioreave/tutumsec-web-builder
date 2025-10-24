// IndustrialOt.tsx (con i18n `t`)
// Nota: asumo un hook `useTranslations` como en tus otros componentes.
//       Usa el namespace/clave "industriales" (ajústalo si tu setup difiere).

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslations } from "@/i18n/useTranslations";

const IndustrialOt: React.FC = () => {
  const { t } = useTranslations(["industrial"]);

  const beneficios = [
    t("benefits.items.0"),
    t("benefits.items.1"),
    t("benefits.items.2"),
  ];

  const solutionCards = [
    {
      t: t("solution.cards.0.t"),
      d: t("solution.cards.0.d"),
      href: t("solution.cards.0.href"),
      pos: "left-2",
    },
    {
      t: t("solution.cards.1.t"),
      d: t("solution.cards.1.d"),
      href: t("solution.cards.1.href"),
      pos: "left-1",
    },
    {
      t: t("solution.cards.2.t"),
      d: t("solution.cards.2.d"),
      href: t("solution.cards.2.href"),
      pos: "center",
    },
    {
      t: t("solution.cards.3.t"),
      d: t("solution.cards.3.d"),
      href: t("solution.cards.3.href"),
      pos: "right-1",
    },
    {
      t: t("solution.cards.4.t"),
      d: t("solution.cards.4.d"),
      href: t("solution.cards.4.href"),
      pos: "right-2",
    },
  ] as const;

  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        {/* HERO */}
        <section className="relative overflow-hidden flex items-center pt-20">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/uploads/background/background2.svg')",
            }}
          />
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-3 leading-tight animate-slide-up">
                {t("hero.title")}
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-6 leading-snug animate-slide-up">
                {t("hero.subtitle")}
              </h2>
            </div>
          </div>
        </section>
        {/* RETO ACTUAL */}
        <section className="relative py-10 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2">
              {/* Imagen */}
              <div className="relative">
                <div>
                  <img
                    src="/uploads/imgs/ciberseguridad.png"
                    alt={t(
                      "challenge.imgAlt",
                      "Riesgos cloud y cadena de suministro"
                    )}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Texto */}
              <div>
                <p className="text-md font-semibold tracking-wide text-primary">
                  {t("challenge.badge")}
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {t("challenge.heading")}
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  {t("challenge.text")}
                </p>

                <div className="mt-8">
                  <a
                    href={t("challenge.cta.href")}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-110 active:brightness-95"
                  >
                    {t("challenge.cta.label")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUESTRA SOLUCIÓN */}
        <section id="solucion" className="my-20 relative w-full py-16 sm:py-20">
          <div
            className="absolute inset-0 -z-10 opacity-80"
            style={{
              background:
                "radial-gradient(currentColor 1px, transparent 1px) 0 0 / 12px 12px",
              color: "rgb(var(--color-primary-400, 129 140 248))",
              maskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.5) 19%, rgba(0,0,0,0.05) 25%, transparent 22%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.5) 19%, rgba(0,0,0,0.05) 25%, transparent 22%)",
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
                {t("solution.title")}
              </h2>
              <p className="mt-4 font-medium text-lg leading-7 text-slate-700">
                {t("solution.subtitle")}
              </p>
            </motion.div>

            {/* GRID */}
            <div
              className="mt-12 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-5 auto-rows-fr"
              style={{ perspective: "1100px" }}
            >
              {solutionCards.map((card, idx) => {
                const depth =
                  card.pos === "center"
                    ? {
                        z: 80,
                        scale: 1.0,
                        rotate: 0,
                        shadow: "shadow-2xl",
                        ring: "ring-1 ring-primary/20",
                      }
                    : card.pos === "left-1" || card.pos === "right-1"
                    ? {
                        z: 30,
                        scale: 0.96,
                        rotate: card.pos.includes("left") ? -2 : 2,
                        shadow: "shadow-xl",
                        ring: "ring-1 ring-primary/10",
                      }
                    : {
                        z: 0,
                        scale: 0.92,
                        rotate: card.pos.includes("left") ? -3 : 3,
                        shadow: "shadow-md",
                        ring: "ring-1 ring-primary/10",
                      };

                const dotted =
                  card.pos === "center"
                    ? "md:before:absolute md:before:-left-3 md:before:top-6 md:before:bottom-6 md:before:w-px md:before:bg-[radial-gradient(currentColor,transparent_1px)] md:after:absolute md:after:-right-3 md:after:top-6 md:after:bottom-6 md:after:w-px md:after:bg-[radial-gradient(currentColor,transparent_1px)]"
                    : "";

                return (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      translateZ: depth.z + 20,
                      scale: depth.scale + 0.02,
                      rotateY: card.pos.includes("left")
                        ? 3
                        : card.pos.includes("right")
                        ? -3
                        : 0,
                      boxShadow: "0 20px 40px rgba(0,0,0,.15)",
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      translateZ: `${depth.z}px`,
                      rotateY: `${depth.rotate}deg`,
                      scale: depth.scale,
                    }}
                    className={[
                      "relative flex h-full flex-col rounded-xl border border-slate-200/70 bg-white/90 p-6",
                      "backdrop-blur-sm transition-transform duration-300",
                      depth.shadow,
                      depth.ring,
                      dotted,
                    ].join(" ")}
                  >
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                        {card.t}
                      </h3>
                      <div className="mt-2 h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {card.d}
                      </p>
                    </div>

                    {/*<div className="mt-auto pt-5">
                      <a
                        href={card.href}
                        className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium shadow-sm transition-all bg-primary text-white hover:brightness-110 active:brightness-95"
                      >
                        {t("common.explore", "Explorar")}{" "}
                        <span className="ml-2">→</span>
                      </a>
                    </div>
                    <div className="pointer-events-none absolute -bottom-4 left-6 right-6 h-8 rounded-full bg-primary/25 blur-xl" />*/}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="py-20 px-4 relative -z-10 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div className="px-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                {t("benefits.title")}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground italic" />
            </div>

            <div className="space-y-6">
              {beneficios.map((raw, i) => {
                const [titlePart, ...rest] = raw.split(":");
                const title = titlePart.trim();
                const desc = rest.join(":").trim();
                const gradients = [
                  "from-[#2563eb] via-[#1e3a8a] to-[#0b1220]",
                  "from-[#1f3b8a] via-[#1d3fa7] to-[#1b2b59]",
                  "from-[#3b82f6] via-[#2450b2] to-[#0f1b37]",
                ];
                const g = gradients[i % gradients.length];

                return (
                  <div
                    key={i}
                    className={`relative w-full rounded-2xl p-6 md:p-8 text-white bg-gradient-to-r ${g} shadow-lg`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="shrink-0">
                        <div className="text-5xl md:text-6xl font-extrabold leading-none opacity-90">
                          {i + 1}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="text-lg md:text-xl font-semibold">
                          {title}
                          {desc && ":"}
                        </div>
                        {desc && (
                          <p className="mt-2 text-sm md:text-base text-white/85 leading-relaxed">
                            {desc}
                          </p>
                        )}
                      </div>

                      <ArrowUpRight className="w-6 h-6 opacity-70 mt-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="pb-20 px-4 sm:px-6 pt-20 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent">
          <div className="max-w-screen-xl mx-auto relative">
            <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
              <div className="max-w-5xl">
                <h2
                  className="
                    font-bold text-white mb-10
                    text-[clamp(28px,4.2vw,45px)] leading-[1.05]
                  "
                >
                  {t("cta.banner.title")}
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-left mb-4">
                  <Link
                    to={t("cta.banner.primary.href")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full sm:w-auto
                      rounded-full px-7 sm:px-8 py-4 text-base sm:text-md
                      text-white font-medium
                      shadow-sm transition
                      hover:opacity-95 active:opacity-90
                    "
                    style={{
                      background:
                        "linear-gradient(to bottom, #5eb9f0, #3886f4)",
                    }}
                  >
                    {t("cta.banner.primary.label")}
                  </Link>
                  <Link
                    to={t("cta.banner.secondary.href")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full sm:w-auto
                      rounded-full px-7 sm:px-8 py-4 text-base sm:text-md
                      text-white font-medium
                      shadow-sm transition
                      hover:opacity-95 active:opacity-90
                    "
                    style={{
                      background:
                        "linear-gradient(to bottom, #5eb9f0, #3886f4)",
                    }}
                  >
                    {t("cta.banner.secondary.label")}
                  </Link>
                </div>
              </div>
              <img
                src="/uploads/abstract.png"
                alt=""
                className="absolute -right-8 -bottom-8 w-48 opacity-50"
                aria-hidden
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndustrialOt;
