import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CheckCircle,
  Users,
  Settings,
  BarChart3,
  Zap,
  RotateCcw,
  Monitor,
  Shield,
  Globe,
  Cloud,
  Cog,
  Network,
  Eye,
  Target,
  FileText,
  AlertTriangle,
  Database,
  Search,
  ChevronRight,
  FileCheck,
  Clock,
} from "lucide-react";
import PartnersSection from "../PartnersSection";
import { Link } from "react-router-dom";

const PrevencionBackup = () => {
  const breadcrumbItems = [
    { label: "Productos", href: "/es/productos" },
    { label: "Prevención Backup" },
  ];

  const caract1 = [
    "Resumen ejecutivo en 1 página (impacto, decisiones, próximos pasos).",
    "Informe técnico con evidencias.",
    "Reunión de cierre y plan de mejora alineado a negocio.",
  ];

  const caract2 = [
    "Canal directo y reglas claras desde el inicio.",
    "Decisiones co-firmadas contigo (nada de “caja negra”).",
    "Asesoría legal coordinada para custodia de evidencias y notificaciones cuando aplique.",
    "Cierre con lecciones aprendidas y hoja de ruta de mejoras. ",
    "Informe técnico con evidencias.",
    "Reunión de cierre y plan de mejora alineado a negocio.",
  ];

  const diferencias = [
    {
      title: "Hablamos claro y entregamos un plan corto y accionable.",
    },
    {
      title: "Foco en negocio: priorizamos lo que evita paradas y sanciones.",
    },
    {
      title: "Acompañamiento cercano: responsable asignado y revisión mensual.",
    },
    {
      title: "Sin dependencia de marcas: trabajamos con tu tecnología actual.",
    },
    {
      title: "Avances medibles: evidencias y resultados para comité directivo.",
    },
  ];
  const faqs = [
    {
      question: "¿Trabajáis casos de ransomware?",
      answer:
        "Sí, pero con una postura clara: no negociamos con atacantes. Priorizamos contención y recuperación y orientamos la notificación a las autoridades competentes cuando corresponda. Coordinamos todo con tu equipo y con asesoría legal.",
    },
    {
      question: "¿Ofrecéis servicio de forense digital?",
      answer:
        "Sí. Contamos con equipo forense externo especializado (bajo presupuesto y alcance definidos) para recogida de evidencias con cadena de custodia, análisis técnico y documentación válida para auditorías o procedimientos legales.",
    },
    {
      question: "¿Cómo se inicia un caso urgente?",
      answer:
        "Muy simple: abrimos un canal directo (teléfono y mensajería segura), confirmamos alcance y prioridades y empezamos a contener. Te indicamos los siguientes pasos y la documentación mínima que necesitamos.",
    },
    {
      question: "¿Apoyáis la comunicación y las notificaciones regulatorias?",
      answer:
        "Sí. Acompañamos en la preparación de avisos a autoridades (p. ej., NIS2/AEPD) y comunicaciones internas/externas, coordinados con asesoría legal y, si procede, con tu equipo de comunicación.",
    },
    {
      question: "¿Podéis trabajar con mi ciberseguro?",
      answer:
        "Sí. Coordinamos requisitos del seguro (contactos, reporting, evidencias) para agilizar autorizaciones y evitar fricciones durante la gestión del incidente.",
    },
  ];

  const beneficios = [
    "Reducción del tiempo de detección de amenazas",
    "Minimización del impacto de incidentes",
    "Cumplimiento normativo continuo",
    "Visibilidad completa de la infraestructura",
    "Respuesta proactiva ante amenazas",
    "Tranquilidad operacional",
  ];

  return (
    <>
      <SEOMetaTags
        title="Respuesta a Incidentes de Ciberseguridad | TutumSec"
        description="Actuamos con rapidez y claridad para contener, recuperar y aprender del incidente. Canal directo, coordinación ejecutiva y soporte legal. Barcelona, Girona, Catalunya y Andorra."
      />

      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto">
          {/* === HERO (full-bleed dentro del container) === */}
          <section className="relative isolate overflow-hidden mt-4">
            {/* Hilo */}
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute left-80 top-12 w-[1200px] w-full opacity-60 mix-blend-screen z-20"
            />

            {/* Contenido hero (centrado) */}
            <div className="relative min-h-[50vh] z-30 px-6 left- py-16 md:py-20 mt-20 mb-20 text-center">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-primary leading-tight mt-12 font-bold mb-4 text-[clamp(32px,5vw,46px)] leading-[1.05]">
                  Respuesta a incidentes, sin ruido <br /> y con método
                </h1>
                <h2 className="text-blue/85 mb-6 text-[clamp(18px,2.1vw,20px)] leading-relaxed mb-2">
                  Canal directo, contención rápida y acompañamiento hasta el
                  cierre
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={"/contacto"}
                  className="bg-primary rounded-full text-white text-medium content-center text-center justify-center px-8"
                >
                  Necesito ayuda ahora{" "}
                </Link>
                <Link
                  to={"/contacto"}
                  className="bg-white border py-2 border-primary rounded-full text-primary text-medium content-center text-center justify-center px-8"
                >
                  Hablar con un experto{" "}
                </Link>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 italic">
                  Detección 24x7 vía SOC/MDR; el resto de servicios se atienden
                  con prioridad alta en horario laboral.
                </p>
              </div>
            </div>
          </section>

          {/* PAIN → VISIÓN */}
          <section className=" py-20 px-6 bg-gray-500/5 text-blue ">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  Cuando pasa algo, necesitas decisiones, no alarmas{" "}
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 col-span-2 text-md pl-6 prose prose-lg max-w-none text-left">
                <p>
                  Activamos un canal de comunicación inmediato, evaluamos el
                  alcance real y priorizamos acciones para contener rápido,
                  recuperar con criterio y documentar lo importante. Sin
                  tecnicismos innecesarios: te explicamos qué ocurre, qué
                  hacemos y por qué.
                </p>
              </div>
            </div>
          </section>

          {/* === Qué haremos por ti (paso a paso)  === */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  ¿Qué haremos por ti?
                </h2>
              </div>

              <div className="grid grid-cols-3">
                {[
                  {
                    title: "Primeras horas",
                    description: `Canal directo con analistas senior (teléfono y mensajería segura).
Contención inicial y visibilidad rápida sobre equipos y cuentas afectadas.
Recomendación de activar EDR compatible (p. ej., Microsoft Defender, Bitdefender, Sophos, etc) para acelerar la investigación.`,
                    icon: Clock,
                  },
                  {
                    title: "Primer día",
                    description: `Aislamiento donde haga falta y restauración segura cuando sea posible. 
Coordinación con tu equipo (IT/dirección) y—si lo solicitas—acompañamiento ejecutivo tipo vCISO.`,
                    icon: Settings,
                  },
                  {
                    title: "Siguientes días",
                    description: `Análisis técnico y cronología del incidente (forense bajo estudio/priorización del caso). 
Recomendaciones priorizadas por riesgo y soporte en avisos regulatorios si correspondiera.`,
                    icon: BarChart3,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="m-2 bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "forwards",
                      opacity: 0,
                    }}
                  >
                    <div className="m-2">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="pt-2 text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                          {item.title}
                        </h3>
                        {item.description ? (
                          <ul className="list-disc pl-5 space-y-2">
                            {item.description.split("\n").map((p, i) => (
                              <li
                                key={i}
                                className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700"
                              >
                                {p}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10  flex justify-center items-center">
              <Link
                to="/contacto"
                className="flex items-center-!important justify-center px-8 py-4 bg-primary text-white rounded-full"
              >
                Solicitar propuesta personalizada
              </Link>
            </div>
          </section>

          {/* === BLOQUE: Vigilancia Continua ===*/}
          <section className="bg-muted/50 pt-20  pb-20">
            <div className="pb-6 flex justify-center content-center container max-w-6xl grid md:grid-cols-6">
              <div className="col-span-2 mr-20">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Co-gestión real y gobierno activo{" "}
                </h2>
              </div>

              <div className="ml-24 col-span-4">
                <div className="space-y-6">
                  {caract2.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative isolate overflow-hidden px-6 flex items-center pt-20 pb-20">
            {/* Capa base */}
            <div className="absolute inset-0 z-0 bg-[#0a0f1c]" />
            {/* Gradiente lineal */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(120deg, rgba(14,24,46,0) 0%, rgba(89,116,189,0.35) 45%, rgba(182,185,193,0) 100%)",
              }}
            />
            {/* Glows */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl z-10" />
            <div className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl z-10" />
            <div className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-3xl z-10" />
            {/* Hilo decorativo */}
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute left-0 -top-20 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
            />

            {/* Contenido (solo texto original) */}
            <div className="max-w-5xl mx-auto text-center relative z-30">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Dónde intervenimos?{" "}
              </h1>
              <h2 className="text-xl max-w-4xl lg:text-xl text-white/80 mb-8">
                Barcelona, Girona, resto de Catalunya y Andorra. Soporte remoto
                a nivel nacional.
              </h2>
            </div>
          </section>

          {/* === Lo que recibes  === */}

          <section className="mt-20 py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              {/* Columna izquierda: título + subtítulo opcional */}
              <div className="px-2">
                <h2 className="leading-tight text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Entregables pensados <br />
                  para dirección y TI{" "}
                </h2>
              </div>
              <div className="space-y-6">
                {caract1.map((raw, i) => {
                  // Partimos solo para formatear visualmente (NO tocamos el texto)
                  const [titlePart, ...rest] = raw.split(":");
                  const title = titlePart.trim();
                  const desc = rest.join(":").trim(); // puede quedar vacío si no hay ":" (2º paso)
                  // Paletas en azul (como tu screenshot)
                  const gradients = [
                    "from-[#2563eb] via-[#1e3a8a] to-[#0b1220]",
                    "from-[#1f3b8a] via-[#1d3fa7] to-[#1b2b59]",
                    "from-[#3b82f6] via-[#2450b2] to-[#0f1b37]",
                    "from-[#1e40af] via-[#1d4ed8] to-[#0b1220]",
                    "from-[#2563eb] via-[#1e3a8a] to-[#0b1220]",
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

          {/* === BLOQUE 9 · FAQ (mismo patrón visual que la home) === */}
          <section className="py-20 px-6 bg-gray-100 relative overflow-hidden bg-[url('/uploads/background.png')] bg-cover bg-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  Preguntas frecuentes
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-200/80 rounded-2xl border border-gray-300 px-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <details>
                      <summary className="cursor-pointer py-6 font-semibold text-gray-800 hover:text-primary">
                        {faq.question}
                      </summary>
                      <div className="cursor-pointer py-6 font-semibold text-gray-800 hover:text-primary">
                        {faq.answer}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mt-20 mx-auto relative">
              <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
                <div className="relative z-10 max-w-3xl text-center mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Paremos las amenazas antes <br /> de que paren tu negocio{" "}
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                    <Button className="rounded-full" size="lg">
                      Necesito ayuda ahora{" "}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white rounded-full border-white/20 hover:bg-white/20"
                    >
                      Hablar con un experto{" "}
                    </Button>
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
        </div>
      </main>
      <PartnersSection />

      <Footer />
    </>
  );
};

export default PrevencionBackup;
