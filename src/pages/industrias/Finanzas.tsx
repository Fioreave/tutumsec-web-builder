import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const beneficios = [
  "Cumple DORA/NIS2 con controles vivos y medibles.",
  "Reduce incidentes y tiempo de resolución.",
  "Evidencias listas para auditores y consejo. ",
];

const Finanzas = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <section className="relative min-h-[500px] mx-35 md:mx-20 overflow-hidden px-6 flex items-center">
          {/* CAPA BASE: azul muy oscuro 
              <div className="absolute inset-0 -z-20 bg-[#0a0f1c]" />*/}

          {/* CAPA LINEAL SUAVE (de arriba izq a abajo der) */}
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/uploads/background/background6.png')",
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

          <div className="mx-20 max-w-4xl text-left relative">
            <h1 className="text-4xl lg:text-5xl font-medium text-white mb-2 leading-tight animate-slide-up pb-2">
              Ciberseguridad para finanzas: resiliencia con DORA y NIS2{" "}
            </h1>
            <h2 className="text-2xl lg:text-2xl text-white mb-6 leading-tight  animate-slide-up pb-2">
              Menos incidentes, menos exposición a terceros y tiempos de
              recuperación medidos. Todo con evidencias para auditoría.
            </h2>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            ></div>
          </div>
        </section>
        {/* === El reto actual – bloque imagen + texto === */}
        <section className="relative py-10 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-10 md:grid-cols-2">
              {/* Imagen */}
              <div className="relative">
                <div>
                  <img
                    src="/uploads/imgs/ciberseguridad.png" // ← cambia la ruta
                    alt="Riesgos cloud y cadena de suministro"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Texto */}
              <div>
                <p className="text-md font-semibold tracking-wide text-primary">
                  El reto actual
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ransomware, interrupciones y riesgo de terceros;
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  Regulaciones que exigen pruebas y reporte; todo bajo presión
                  de costes.{" "}
                </p>

                <div className="mt-8">
                  <a
                    href="#solucion" // ← cambia el destino
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-110 active:brightness-95"
                  >
                    Conoce cómo lo abordamos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* === Nuestra solución – layout 5 columnas con depth === */}
        <section
          id="solucion"
          className=" my-20 relative w-full py-16 sm:py-20"
        >
          {/* Puntitos centrados y desvanecidos */}
          <div
            className="absolute inset-0 -z-10 opacity-80"
            style={{
              // patrón de puntos
              background:
                "radial-gradient(currentColor 1px, transparent 1px) 0 0 / 12px 12px",
              color: "rgb(var(--color-primary-400, 129 140 248))",
              // máscara: fuerte en centro, se desvanece a bordes
              maskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.5) 19%, rgba(0,0,0,0.05) 25%, transparent 22%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.5) 19%, rgba(0,0,0,0.05) 25%, transparent 22%)",
            }}
          />
          {/* glow vertical suave en primary */}
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] " />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
                Nuestra solución
              </h2>
              <p className="mt-4 font-medium text-lg leading-7 text-slate-700">
                (Audit-to-Comply + Operación)
              </p>
            </motion.div>

            {/* GRID 5 columnas con perspectiva */}
            <div
              className="mt-12 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-5 auto-rows-fr"
              style={{ perspective: "1100px" }}
            >
              {[
                {
                  t: "vCISO",
                  d: "gobierno DORA/NIS2, mapa de riesgos TIC y terceros.",
                  href: "/descubrimiento-ot",
                  pos: "left-2",
                },
                {
                  t: "Audit-to-Comply",
                  d: "auditoría ofensiva + plan de controles accionable.",
                  href: "/zonas-y-conductos",
                  pos: "left-1",
                },
                {
                  t: "Pentesting",
                  d: "en canales críticos (web/app, APIs, SSO, pagos).",
                  href: "/deteccion-ot",
                  pos: "center",
                },
                {
                  t: "MDR/SOC 24×7",
                  d: "con casos de uso financieros y reporte regulatorio.",
                  href: "/drp-industrial",
                  pos: "right-1",
                },
                {
                  t: "Recuperación ensayada",
                  d: "(RTO/RPO por servicio) y ejercicios de crisis.",
                  href: "/gobierno-iec-62443",
                  pos: "right-2",
                },
              ].map((card, idx) => {
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
                      // ⬇️ flex column + h-full para pegar el botón abajo
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

                    {/* Botón pegado al borde inferior */}
                    <div className="mt-auto pt-5">
                      <a
                        href={card.href}
                        className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium shadow-sm transition-all
                           bg-primary text-white hover:brightness-110 active:brightness-95"
                      >
                        Explorar <span className="ml-2">→</span>
                      </a>
                    </div>

                    {/* glow inferior */}
                    <div className="pointer-events-none absolute -bottom-4 left-6 right-6 h-8 rounded-full bg-primary/25 blur-xl" />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
        {/* === Qué incluye – 3 cards === */}
        <section className="relative py-16">
          <div className="mx-auto max-w-7xl py-6 px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              ¿Qué incluye?
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <article className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                {/* glow suave */}
                <div
                  className="pointer-events-none absolute -z-10 inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(var(--color-primary-500,59 130 246),.15), transparent 70%)",
                  }}
                />
                <div className="flex items-start gap-4">
                  {/* Icono */}
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {/* ojo/minivisibilidad */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Evaluación DORA/NIS2,
                    </h3>
                    <p className="mt-2 text-slate-600">plan 4–6 semanas</p>
                  </div>
                </div>
              </article>

              {/* Card 2 */}
              <article className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div
                  className="pointer-events-none absolute -z-10 inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(var(--color-primary-500,59 130 246),.15), transparent 70%)",
                  }}
                />
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {/* escudo */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Gestión de terceros
                    </h3>
                    <p className="mt-2 text-slate-600">
                      (requisitos, SLAs, evidencias)
                    </p>
                  </div>
                </div>
              </article>

              {/* Card 3 */}
              <article className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div
                  className="pointer-events-none absolute -z-10 inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(var(--color-primary-500,59 130 246),.15), transparent 70%)",
                  }}
                />
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {/* monitor/report */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="12"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M8 20h8M12 16v4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 12l2-3 2 2 2-4 2 3 2-2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Simulacros y reporting
                    </h3>
                    <p className="mt-2 text-slate-600">
                      para auditoría y comité de riesgos
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="py-20 relative -z-10 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            {/* Columna izquierda: título + subtítulo opcional */}
            <div className="px-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Beneficios Inmediatos
              </h2>
              <p className="mt-6 text-lg text-muted-foreground italic">
                {/* Puedes quitar esta línea si no quieres subtítulo */}
              </p>
            </div>

            {/* Columna derecha: tarjetas gradiente como en tu “Resultados” */}
            <div className="space-y-6">
              {beneficios.map((raw, i) => {
                // Partimos solo para formatear visualmente (NO tocamos el texto)
                const [titlePart, ...rest] = raw.split(":");
                const title = titlePart.trim();
                const desc = rest.join(":").trim(); // puede quedar vacío si no hay ":" (2º paso)
                // Paletas en azul (como tu screenshot)
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
                      {/* Número grande a la izquierda */}
                      <div className="shrink-0">
                        <div className="text-5xl md:text-6xl font-extrabold leading-none opacity-90">
                          {i + 1}
                        </div>
                      </div>

                      {/* Texto a la derecha */}
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

                      {/* Flecha decorativa (como en Resultados) */}
                      <ArrowUpRight className="w-6 h-6 opacity-70 mt-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="pb-20 sm:px-6 pt-20 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent">
          <div className="max-w-screen-xl  mx-auto relative">
            <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
              <div className="max-w-5xl">
                <h2
                  className="
                font-bold text-white mb-10
                text-[clamp(28px,4.2vw,45px)] leading-[1.05]
              "
                >
                  ¿Quieres asesoramiento personalizado?{" "}
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-left mb-4">
                  <Link
                    to="https://calendly.com/ayub-tutumsec/30min"
                    aria-label="asd"
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
                    Reserva consultoría gratuita (15’)
                  </Link>
                  <Link
                    to="https://calendly.com/ayub-tutumsec/30min"
                    aria-label="asd"
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
                    Solicita evaluación DORA/NIS2
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
        </section>{" "}
      </main>
      <Footer />
    </>
  );
};

export default Finanzas;
