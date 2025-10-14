import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertTriangle,
  Shield,
  Clock,
  TrendingUp,
  ArrowUpRight,
  LineChart,
  ShieldCheck,
  Bug,
  AlarmClock,
  ArrowRight,
} from "lucide-react";
import RoleItinerariesCarousel from "./RoleItinerariesGrid";
import { Link } from "react-router-dom";
import PartnersSection from "../PartnersSection";

const FormacionConcienciacion = () => {
  const breadcrumbItems = [
    { label: "Servicios", href: "/es/servicios" },
    { label: "Formación y Concienciación" },
  ];

  const badges = [
    "ISO 27001",
    "Agència de Ciberseguretat de Catalunya",
    "INCIBE",
    "ASCICAT",
  ];

  const quickWins = [
    "Plan a medida por roles (Dirección, Oficina, OT/Planta, IT/Helpdesk, Comercial)",
    "Campañas de phishing trimestrales o semestrales con métricas claras",
    "Informes de formación listos para auditorías (NIS2/ISO/ENS)",
  ];

  const solucion = [
    {
      title: "Microlearning mensual (10')",
      description:
        "Píldoras breves y accionables, con ejemplos reales del día a día (oficina, campo, planta).",
      icon: AlertTriangle,
    },
    {
      title: "Phishing simulado con corrección guiada",
      description:
        "Campañas periódicas según riesgo del área; informes con métricas y plan de mejora por equipo.",
      icon: Shield,
    },
    {
      title: "Talleres por rol y casos reales",
      description:
        'Sesiones presenciales o por videollamada, con ejercicios prácticos, role-play de incidentes y "qué hacer si…".',
      icon: Clock,
    },
    {
      title: "Coaching de dirección (comité/gerencia)",
      description:
        "Gobernanza, indicadores y decisiones de negocio: cómo priorizar, cómo responder y qué exigir a TI/partners.",
      icon: TrendingUp,
    },
  ];
  const ritm = [
    {
      title: "Frecuencia:",
      description: "microlearning mensual (10').",
    },
    {
      title: "Campañas de phishing:",
      description: "trimestrales y/o semestrales según riesgo.",
    },
    {
      title: "Talleres/coaching:",
      description: "agenda flexible (mañanas 9–14h, tardes 15–17h).",
    },
    {
      title: "Modos:",
      description: "presencial, videollamada y contenidos SaaS.",
    },
    {
      title: "Idiomas:",
      description: "Idiomas: español y catalán.",
    },
    {
      title: "Comunicación:",
      description: "Comunicación: y soporte continuo.",
    },
  ];

  const methodologySteps = [
    "Diagnóstico rápido (1-2 semanas): encuesta, revisión de incidentes y priorización por rol.",
    "Plan por roles: temario, frecuencia y soportes",
    "Despliegue: microlearning mensual + phishing + talleres/coaching.",
    "Medición simple: click-rate, report-rate, completion.",
    "Informe para auditoría: resultados, evidencias y plan de mejora.",
  ];

  const expectedResults = [
    "Menos clics en campañas de phishing y más reportes tempranos",
    "Equipos con criterios claros ante emails, adjuntos y accesos",
    "Dirección con visibilidad y decisiones informadas (NIS2/ISO/ENS)",
  ];

  const faqs = [
    {
      question: "¿La formación es presencial o online?",
      answer:
        "Ambas. Combinamos presencial/videollamada con contenido SaaS. En un futuro próximo integraremos LMS.",
    },
    {
      question: "¿Está adaptado a Barcelona/Girona/Cataluña/Andorra?",
      answer:
        "Sí. Adaptamos lenguaje, ejemplos y calendario. Disponemos de contenidos en ES y opción CA.",
    },
    {
      question: "¿Cuánto tiempo requiere el programa?",
      answer:
        "Las píldoras son de 10 minutos; talleres y simulaciones se planifican para no interrumpir la operación.",
    },
    {
      question: "¿Cada cuánto se hace el phishing simulado?",
      answer: "Trimestral o semestral, según madurez y objetivos.",
    },
    {
      question: "¿En qué idioma está el contenido?",
      answer: "Español por defecto; catalán disponible bajo demanda.",
    },
    {
      question: "¿Ofrecen bonificación FUNDAE?",
      answer:
        "Lo gestionamos externamente. Entregamos informes válidos para auditoría (NIS2/ISO/ENS).",
    },
  ];

  const crossSellServices = [
    {
      title: "Consultoría CISO (vCISO)",
      description: "Gobierno, KPIs y cultura",
      href: "/es/servicios/consultoria-ciso",
      icon: LineChart,
    },
    {
      title: "Auditoría & Compliance NIS2",
      description: "Gap-Analysis + plan de adecuación",
      href: "/es/servicios/auditoria-compliance-nis2",
      icon: ShieldCheck,
    },
    {
      title: "Auditoría técnica & Pentesting",
      description: "Validación ofensiva",
      href: "/es/servicios/auditoria-compliance-nis2",
      icon: Bug,
    },
    {
      title: "SOC / MDR 24×7",
      description: "Vigilancia y respuesta gestionada",
      href: "/es/productos/deteccion-24x7",
      icon: AlarmClock,
    },
  ];

  return (
    <>
      <SEOMetaTags
        title="Formación y Concienciación en Ciberseguridad para PYMEs | Barcelona, Girona y Andorra – TutumSec"
        description="Programa de concienciación NIS2 con microlearning mensual, phishing simulado y coaching directivo. Informes para auditoría y resultados medibles. Diagnóstico gratis."
      />

      <Navbar />
      <main className="min-h-screen bg-background">
        <div>
          {/*<Breadcrumbs items={breadcrumbItems} />

           ====== HERO (idéntico patrón visual a la home) ====== */}
          <section className="relative min-h-screen isolate overflow-hidden mt-6 ">
            {/* base */}
            <div className="absolute inset-0 z-0 bg-[#0a0f1c]" />
            {/* gradiente */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(120deg, rgba(14,24,46,0) 0%, rgba(89,116,189,0.35) 45%, rgba(182,185,193,0) 100%)",
              }}
            />
            {/* glows */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl z-10" />
            <div className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl z-10" />
            {/* hilo */}
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute left-0 -top-12 w-[1200px] max-w-none opacity-60 mix-blend-screen z-20"
            />
            {/* contenido */}
            <div>
              <div className="relative z-30 px-6 pt-12 md:pt-16 text-center mt-20">
                <h1 className="container max-w-6xl text-4xl md:text-5xl font-bold text-white mb-4 mt-20 pt-20">
                  Formación y concienciación <br />
                  en ciberseguridad que cambian hábitos
                </h1>
                <h2 className="container max-w-5xl text-xl md:text-2xl text-white/80 mb-8">
                  De los clics por costumbre a una cultura de seguridad real
                </h2>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {badges.map((badge, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-sm bg-white/10 border-white/20 text-white"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="https://calendly.com/ayub-tutumsec/30min"
                    className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background:
                        "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)", // blue-400 -> blue-500
                    }}
                  >
                    {" "}
                    Reserva diagnóstico gratuito 15'
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg rounded-full px-8 bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Descarga el Kit Anti-Phishing
                  </Button>
                </div>
              </div>

              <div className="absolute bottom-8 left-0 w-full">
                <div className="grid lg:grid-cols-3 gap-12 px-6 py-6 items-center text-left space-y-2">
                  {quickWins.map((win, i) => (
                    <li key={i} className="flex items-start text-white">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{win}</span>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white pb-6 pt-12"></section>

          {/* ====== BLOQUE PROBLEMA ====== */}
          <section className=" py-2 px-6 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-4xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  El factor humano sigue siendo el eslabón más débil
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>
                  La mayoría de incidentes empiezan con un clic impulsivo o una
                  mala práctica: contraseñas reutilizadas, adjuntos abiertos sin
                  validar, uso de USB en planta, sesiones sin bloqueo… En PYMEs
                  y organizaciones reguladas, esto se traduce en riesgos
                  operativos y sanciones potenciales. Sin una formación continua
                  y por rol, el cambio de hábitos no sucede.
                </p>
              </div>
            </div>
          </section>

          {/* ====== SOLUCIÓN (cards limpias como home) ====== */}
          <section className="container py-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-4xl mt-20 font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                Un programa continuo, práctico y medible{" "}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {solucion.map((solucion, index) => {
                const IconComponent = solucion.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationFillMode: "forwards",
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-14 h-14 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                          {solucion.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                          {solucion.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-20 p-5 bg-muted rounded-2xl border border-gray-200 max-w-5xl mx-auto">
              <p className="text-sm">
                <strong>Nota legal/compliance:</strong> Incluimos informe de
                formación apto para evidencias de auditoría (NIS2/ISO 27001).
              </p>
            </div>
          </section>

          {/* ====== METODOLOGÍA (estilo “Resultados”) 
          <section className="py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              <div className="px-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  De la intención al hábito:
                  <br className="hidden md:block" /> método TutumSec
                </h2>
                <p className="mt-6 text-lg text-muted-foreground italic">
                  “Pasos claros, responsables claros y métricas sencillas por
                  rol.”
                </p>
              </div>

              <div className="space-y-6">
                {methodologySteps.map((raw, i) => {
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

                        {/* Flecha decorativa (como en Resultados) 
                        <ArrowUpRight className="w-6 h-6 opacity-70 mt-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>*/}

          <RoleItinerariesCarousel />

          {/* ====== CALENDARIO / FORMATOS ====== */}
          <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="transform transition-all duration-700 hover:translate-x-2">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-8 transition-colors duration-500 hover:text-primary-light leading-relaxed">
                    Ritmo y formatos que no interrumpen
                    <span className="relative group p-2">
                      el negocio
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-3 transition-all duration-500 group-hover:scale-105"
                        viewBox="0 0 300 12"
                        fill="none"
                      >
                        <path
                          d="M5 8 Q150 3 295 8"
                          stroke="hsl(var(--primary))"
                          strokeWidth="3"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead></thead>
                      <tbody>
                        <div className="space-y-8">
                          {ritm.map((ritm, index) => (
                            <div
                              key={index}
                              className="border-l-4 border-blue-400 pl-6"
                            >
                              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                                {ritm.title}
                              </h3>
                              <p className="text-gray-200 leading-relaxed">
                                {ritm.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ====== RESULTADOS (estilo tarjetas gradiente) ====== */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-extrabold text-foreground mb-8">
                Lo que verás en 3-6 meses
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {expectedResults.map((text, i) => {
                  const gradients = [
                    "from-[#3B82F6] to-[#1E3A8A]",
                    "from-[#1E3A8A] to-[#1D4ED8]",
                    "from-[#1E3A8A] to-[#00040B]",
                  ];
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl p-6 md:p-8 text-white bg-gradient-to-r ${
                        gradients[i % gradients.length]
                      } shadow-[0_10px_30px_rgba(2,6,23,0.15)]`}
                    >
                      <div className="flex items-start gap-6">
                        {/* número grande */}
                        <div className="text-5xl md:text-6xl font-extrabold leading-none opacity-95">
                          {i + 1}
                        </div>

                        {/* texto */}
                        <div className="flex-1">
                          <p className="text-lg leading-relaxed">{text}</p>
                        </div>

                        {/* icono flecha */}
                        <ArrowUpRight className="w-6 h-6 opacity-70 mt-1" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-sm text-muted-foreground italic">
                (Las cifras exactas se miden en tu entorno; trabajamos objetivos
                realistas por fase.)
              </p>
            </div>
          </section>

          {/* ====== RECURSOS DESCARGABLES (cards) ====== 
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Empieza hoy a cambiar hábitos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>Kit Anti-Phishing</CardTitle>
                    <CardDescription>
                      Plantillas + política lista para adaptar
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>
                      Checklist "Cultura de Seguridad en 30 días"
                    </CardTitle>
                    <CardDescription>
                      Guía paso a paso para implementar una cultura de seguridad
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg">Solicitar diagnóstico gratuito</Button>
                <Button variant="outline" size="lg">
                  Descargar Kit Anti-Phishing
                </Button>
              </div>
            </div>
          </section>*/}

          {/* ====== CULTURA ====== */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl text-center font-bold text-blue-600">
                La cultura es tu primera línea de defensa
              </h2>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {crossSellServices.map((s, i) => {
                  const Icon = s.icon;
                  const url = s.href ?? "#";
                  return (
                    <Card
                      key={i}
                      className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <CardHeader className="items-center text-center">
                        {/* Icono */}
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                          {Icon ? (
                            <Icon className="h-7 w-7 text-blue-600" />
                          ) : (
                            <svg
                              className="h-7 w-7 text-blue-600"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <path d="m21 21-4.3-4.3" />
                            </svg>
                          )}
                        </div>

                        <CardTitle className="text-xl font-semibold text-slate-900">
                          {s.title}
                        </CardTitle>
                        <CardDescription className="mt-3 text-slate-600 leading-relaxed">
                          {s.description}
                        </CardDescription>
                      </CardHeader>

                      <CardFooter className="mt-auto px-6 pb-6">
                        <Button
                          asChild
                          variant="secondary"
                          className="w-full group"
                          aria-label={`Saber más sobre ${s.title}`}
                        >
                          <Link to={url}>
                            Saber más
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
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

            <div className="max-w-6xl mt-20 mx-auto relative">
              <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
                <div className="relative z-10 max-w-3xl text-center mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    ¿Empezamos con un piloto de 90 días?
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                    <Link
                      to="https://calendly.com/ayub-tutumsec/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                      style={{
                        background:
                          "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)", // blue-400 -> blue-500
                      }}
                    >
                      Reserva tu diagnóstico gratuito →
                    </Link>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white rounded-full border-white/20 hover:bg-white/20"
                    >
                      Descarga el Kit Anti-Phishing
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
          <PartnersSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FormacionConcienciacion;
