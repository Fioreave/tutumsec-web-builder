import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Shield,
  Clock,
  FileText,
  Users,
  Settings,
  Map,
  Search,
  TrendingUp,
  ArrowUpRight,
  Bug,
  AlarmClock,
  ShieldCheck,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PartnersSection from "../PartnersSection";

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

const faqs = [
  {
    question: "¿Es obligatorio tener una OSI con NIS2?",
    answer:
      "No impone un nombre concreto, pero exige gobernanza, medidas y reporting; una OSI formaliza y prueba el cumplimiento.",
  },
  {
    question: "¿Cuáles son los plazos de notificación?",
    answer:
      "Alerta 24 h, notificación 72 h, informe 1 mes (o intermedio si procede).",
  },
  {
    question: "¿Qué sanciones hay?",
    answer: "Hasta 10 M€ o 2 % (esenciales) y 7 M€ o 1,4 % (importantes).",
  },
];

const methodologySteps = [
  "Oficina completa: No solo CISO, gobernanza + cumplimiento + evidencias listas.",
  "Enfoque humano y ejecutivo: Formamos a la dirección para la toma de decisiones informadas.",
  "Alineado con marcos locales: ISO 27001, ENS y guías de INCIBE-CERT.",
];

const OficinaSeguridad = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es obligatorio tener una OSI con NIS2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No impone un nombre concreto, pero exige gobernanza, medidas y reporting; una OSI formaliza y prueba el cumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los plazos de notificación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alerta 24 h, notificación 72 h, informe 1 mes (o intermedio si procede).",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sanciones hay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hasta 10 M€ o 2 % (esenciales) y 7 M€ o 1,4 % (importantes).",
        },
      },
    ],
  };

  const quickWins = [
    "Aprobamos con tu dirección el charter OSI y el plan de riesgos.",
    "Runbooks NIS2 con alerta temprana en 24 h y notificación a 72 h.",
    "Tablero C-Level con KPIs de ciberseguridad y evidencias de cumplimiento.",
  ];
  const steps = [
    {
      title: "Diagnóstico OSI & Gap NIS2",
      description:
        "(políticas, riesgos, cadena de suministro, incident response).",
      number: "1",
    },
    {
      title: "Hoja de ruta 12-36 meses",
      description: "con prioridades/ROI y métricas.",
      number: "2",
    },
    {
      title: "Implantación",
      description: "Políticas, procesos y herramientas personalizadas",
      number: "3",
    },
    {
      title: "Operación continua",
      description:
        "(comité OSI trimestral, auditoría interna, ejercicios de crisis y mejora continua).",
      number: "4",
    },
  ];

  const servicios = [
    {
      title: "Consultoría CISO",
      description: "(vCISO / CISO as a Service)",
    },
    {
      title: "Auditoría & Compliance NIS2",
      description: "Gap-Analysis completo",
    },
    {
      title: "Transformación Digital Estratégica",
      description: "Digitalización segura",
    },
    {
      title: "Detección 24/7",
      description: "(SOC/MDR/XDR)",
    },
  ];

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Oficina de Seguridad de la Información (OSI) – NIS2",
    description:
      "Diseñamos y operamos tu Oficina de Seguridad de la Información para cumplir NIS2: gobernanza, políticas, gestión de riesgos, notificación 24/72 h, formación y auditoría continua.",
    provider: {
      "@type": "Organization",
      name: "TutumSec",
    },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
  };

  return (
    <>
      <Helmet>
        <title>
          Oficina de Seguridad de la Información (OSI) · Cumplimiento NIS2 |
          TutumSec
        </title>
        <meta
          name="description"
          content="Diseñamos y operamos tu Oficina de Seguridad de la Información para cumplir NIS2: gobernanza, políticas, gestión de riesgos, notificación 24/72 h, formación y auditoría continua. Barcelona, Cataluña, Andorra y España."
        />
        <link
          rel="canonical"
          href="https://tutumsec.com/servicios/oficina-seguridad-informacion-nis2"
        />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.com/ca/serveis/oficina-seguretat-informacio-nis2"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/en/services/information-security-office-nis2"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/servicios/oficina-seguridad-informacion-nis2"
          hrefLang="es"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background">
        <div>
          <section className="relative isolate overflow-hidden mt-6 flex items-center">
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

            {/* contenido centrado */}
            <div
              className="w-full grid place-items-center text-center px-6"
              style={{ minHeight: "calc(100vh - 96px)" }} // ajusta 96px al alto real de tu navbar si es fija
            >
              <div className="relative z-30  ">
                <h1 className="mx-auto max-w-6xl text-4xl md:text-5xl font-bold text-white mb-4">
                  Oficina de Seguridad de la
                  <br /> Información (OSI) para cumplir NIS2
                </h1>

                <h2 className="mx-auto max-w-5xl text-xl md:text-2xl text-white/80 mb-8">
                  Gobernanza, riesgo y cumplimiento activados <br /> desde el
                  día uno: políticas, métricas y respuesta en 24/72 h.
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                    Reserva tu consultoría gratuita →
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg rounded-full px-8 bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Descarga "Checklist OSI NIS2 (24/72/30)"
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

          {/* BLOQUE 3 · QUÉ ES UNA OSI */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                La OSI que alinea seguridad con negocio
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Settings className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Gobernanza y políticas
                    </h3>
                    <p className="text-muted-foreground">
                      Definimos el marco de gobierno (roles, RACI, comités),
                      políticas y procedimientos (accesos, cifrado, continuidad,
                      comunicaciones seguras, MFA) alineados con NIS2/ISO
                      27001/ENS.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Gestión de riesgos y cadena de suministro
                    </h3>
                    <p className="text-muted-foreground">
                      Mapa de activos críticos, análisis de riesgos, controles y
                      due diligence a proveedores con cláusulas NIS2 y
                      evidencias de cumplimiento.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Respuesta e informes 24/72/30
                    </h3>
                    <p className="text-muted-foreground">
                      Playbooks para alerta temprana, notificación y reporte
                      final; laboratorio de evidencias para
                      auditorías/regulador.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Cultura y formación continua
                    </h3>
                    <p className="text-muted-foreground">
                      Plan de concienciación por rol (dirección, managers,
                      staff, OT, IT) con simulaciones de phishing y talleres
                      ejecutivos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOQUE 2 · DOLOR → IMPACTO NEGOCIO */}
          <section className=" py-20 px-6 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-4xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  ¿Tu empresa podría notificar un incidente en 24 horas hoy?
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>
                  Con NIS2, las entidades deben cumplir medidas técnicas y
                  organizativas y reportar incidentes significativos siguiendo
                  plazos estrictos (24 h/72 h/1 mes). Además, la dirección es
                  responsable de aprobar y supervisar la gestión de riesgos. No
                  llegar a tiempo o carecer de evidencias puede traducirse en
                  sanciones y en pérdida de confianza de clientes y reguladores.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-6xl lg:text-4xl font-bold text-blue-500 mb-6">
                  Metodología en 4 pasos
                </h2>
                {/*<p className="text-xl text-gray-600 mb-4">
            4 pasos PDCA + Zero Trust
          </p>
          <p className="text-lg text-gray-500">
            Basado en marcos CIS, ISO 27001, NIST i ENS
          </p>*/}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in relative"
                      style={{
                        animationDelay: `${index * 0.15}s`,
                        animationFillMode: "forwards",
                        opacity: 0,
                      }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300 relative">
                          <span className="w-8 h-8 text-primary text-2xl font-bold items-center">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* BLOQUE 5 · ENTREGABLES */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Entregables "listos para inspección"
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Charter OSI + organigrama y RACI.",
                  "Políticas: control de accesos, cifrado, copias y DR, comunicaciones seguras, gestión de incidentes.",
                  "Registro de riesgos + plan de tratamiento y evidencias.",
                  "Runbooks NIS2 (24/72/30) + plantillas de reporte al CSIRT/autoridad.",
                  "Plan de formación & microlearning con simulación de phishing.",
                  "Cuadro de mando (KPIs: MTTR, cumplimiento de controles, % proveedores evaluados).",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              {/* Columna izquierda: título + subtítulo opcional */}
              <div className="px-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  ¿Por qué nos eligen?
                </h2>
              </div>

              {/* Columna derecha: tarjetas gradiente como en tu “Resultados” */}
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

          {/* BLOQUE 7 · CASOS DE ÉXITO 
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Industria regulada (NIS2)
                    </h3>
                    <p className="text-muted-foreground">
                      Comité OSI creado, políticas y runbooks 24/72; inspección
                      superada con observaciones menores.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Grupo multisector
                    </h3>
                    <p className="text-muted-foreground">
                      Evaluación de proveedores críticos, cláusulas
                      contractuales NIS2 y tablero de riesgos en dirección.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>*/}

          {/* BLOQUE 10 · Enlaces internos */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl text-center font-bold text-blue-600">
                Servicios{" "}
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
                    ¿Empezamos?
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
                      Reserva tu consultoría gratuita →
                    </Link>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white rounded-full border-white/20 hover:bg-white/20"
                    >
                      Solicita ejemplo de "Charter OSI" (PDF)
                    </Button>
                  </div>
                  <Button variant="link" className="text-sm">
                    Solicita ejemplo de "Charter OSI" (PDF)
                  </Button>
                </div>
                {/*<img
                  src="/uploads/abstract.png"
                  alt=""
                  className="absolute -right-8 -bottom-8 w-48 opacity-50"
                  aria-hidden
                />*/}
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

export default OficinaSeguridad;
