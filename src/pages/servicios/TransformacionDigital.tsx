import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Cpu,
  Search,
  Map,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import PartnersSection from "../PartnersSection";

/* === DATA (sin tocar tu contenido) === */
const faqs = [
  {
    question: "¿Cuánto dura un proyecto de transformación digital estratégica?",
    answer: "3-6 meses según alcance.",
  },
  {
    question: "¿Necesito cambiar toda mi infraestructura?",
    answer:
      "Solo las piezas que no aportan valor; priorizamos quick-wins y reaprovechamos.",
  },
  {
    question: "¿Puedo empezar con un piloto low-cost?",
    answer: "Sí, módulo Fast-Track con presupuesto cerrado.",
  },
];

const steps = [
  {
    title: "Diagnóstico inicial",
    description: "Auditoría técnica, pentesting y gap analysis NIS2/ISO",
    icon: Search,
  },
  {
    title: "Roadmap estratégico",
    description:
      "Hoja de ruta 12–36 meses con prioridades y retorno de inversión",
    icon: Map,
  },
  {
    title: "Implantación & gobernanza",
    description: "Políticas, procesos y herramientas personalizadas",
    icon: Settings,
  },
  {
    title: "Seguimiento continuo",
    description: "Despliegue, KPIs y revisión trimestral con tu vCISO.",
    icon: TrendingUp,
  },
];

const TransformacionDigital = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto dura un proyecto de transformación digital estratégica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "~3-6 meses según alcance.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito cambiar toda mi infraestructura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Solo las piezas que no aportan valor; priorizamos quick-wins y reaprovechamos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo empezar con un piloto low-cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, módulo Fast-Track con presupuesto cerrado.",
        },
      },
    ],
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Transformación Digital Estratégica",
    description:
      "Consultoría estratégica en transformación digital y ciberseguridad que impulsa la productividad y la competitividad de tu PYME.",
    provider: { "@type": "Organization", name: "TutumSec" },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
  };

  return (
    <>
      <Helmet>
        <title>
          Transformación Digital Estratégica para PYMEs en Barcelona, Girona,
          Cataluña y Andorra
        </title>
        <meta
          name="description"
          content="Consultoría estratégica en transformación digital y ciberseguridad que impulsa la productividad y la competitividad de tu PYME. Diagnóstico gratuito, roadmap 360 y acompañamiento humano en Barcelona, Girona, Cataluña y Andorra."
        />
        <link
          rel="canonical"
          href="https://tutumsec.com/servicios/transformacion-digital"
        />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.com/ca/serveis/transformacio-digital"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/en/services/digital-transformation"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/servicios/transformacion-digital"
          hrefLang="es"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background">
        <div>
          {/*<Breadcrumbs
            items={[
              { label: "Servicios", href: "/es/servicios" },
              { label: "Transformación Digital Estratégica" },
            ]}
          />*/}

          {/* === BLOQUE 1 · HERO (mismo diseño que la home: capas + glows) === */}
          {/* patrón de fondo/stacking basado en el hero de la home */}
          <section className="relative isolate min-h-[72vh] md:min-h-screen overflow-hidden px-6 flex items-center">
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
                ¿Tu empresa está preparada para la próxima ola digital?
              </h1>
              <h2 className="text-xl lg:text-2xl text-white/80 mb-8">
                Convertimos la transformación digital estratégica en resultados
                medibles
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2 p-4 backdrop-blur rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-white">
                    Diagnóstico completo en 10 días
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 backdrop-blur rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-white">
                    Roadmap 12-36 meses con ROI &lt; 9 meses
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 backdrop-blur rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-white">
                    Ahorro medio 22 % en costes IT/OT
                  </span>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
                style={{
                  animationDelay: "0.9s",
                  animationFillMode: "forwards",
                }}
              >
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
                  Reserva diagnóstico gratuito 30'
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-4 py-2 text-md rounded-full"
                >
                  Descarga Checklist de Digitalización 2025
                </Button>
              </div>
            </div>
          </section>

          {/* BLOQUE 2 · PAIN → VISIÓN */}
          <section className=" py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  De procesos manuales y silos de datos a una empresa ágil y
                  segura
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>
                  El 67 % de las PYMEs españolas todavía opera con sistemas
                  fragmentados, lo que eleva sus costes un 30 % y multiplica el
                  riesgo de sanciones NIS2. Con TutumSec obtienes consultoría
                  estratégica en transformación digital Barcelona – Girona
                  -Andorra que alinea tecnología, personas y ciberseguridad.
                </p>
              </div>
            </div>
          </section>

          {/* === BLOQUE 3 · BENEFICIOS CLAVE (cards limpias como en la home) === */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                ¿Qué ganas con nuestra transformación digital?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Cpu className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Productividad & Automatización IA/RPA
                    </h3>
                    <p className="text-muted-foreground">
                      KPIs operativos en tiempo real y workflows sin papel.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Seguridad integrada by design
                    </h3>
                    <p className="text-muted-foreground">
                      Zero Trust, encriptado y monitorización MDR 24×7.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <CheckCircle className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Cumplimiento normativo garantizado
                    </h3>
                    <p className="text-muted-foreground">
                      Metodología Compliance 360º (NIS2, RGPD, ISO 27001, ENS).
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Escalabilidad sin sobresaltos de CAPEX
                    </h3>
                    <p className="text-muted-foreground">
                      Modelo de suscripción y partners locales para soporte
                      inmediato.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          {/* inspirado en la sección de beneficios de la home. :contentReference[oaicite:7]{index=7} */}

          {/* === BLOQUE 5 · PROOF (manteniendo tu copy) ===
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                Empresas que ya han dado el salto
              </h3>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    "Automatizamos la gestión de pedidos y ahorramos 1
                    día/semana por persona —sin comprometer la seguridad."
                  </p>
                  <div className="text-sm">
                    <strong>— Carlos M., CEO</strong>
                    <br />
                    <span className="text-muted-foreground">
                      logística (120 empleados)
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>*/}

          {/* === BLOQUE 6 · DIFERENCIAL === */}
          <section className="py-12 bg-gray-500/5 pt-20 pb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-20">
                Personalización y cercanía:
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Consultores <br />
                    senior in-house
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    (No subcontratamos análisis crítico).
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Acompañamiento <br /> humano
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Un único interlocutor que habla tu idioma.
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Integración nativa con ciberseguridad
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Combina vCISO, SOC/MDR y roadmap digital.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* === BLOQUE 4 · PROCESO (idéntico patrón visual al de la home) === */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-4xl font-bold text-blue-500 mb-6">
                  Nuestra Metodología
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
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
                          <IconComponent className="w-8 h-8 text-primary items-center" />
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

          {/* === BLOQUE 8 · CROSS-SELL (grid tipo mosaico inspirado en la home) === 
          <section className="py-12 bg-muted">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                Completa tu estrategia
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Consultoría vCISO
                    </h3>
                    <p className="text-muted-foreground">Gobierno & KPIs</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Auditoría NIS2
                    </h3>
                    <p className="text-muted-foreground">técnica + normativa</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      SOC / MDR 24×7
                    </h3>
                    <p className="text-muted-foreground">
                      Detección y respuesta en &lt; 15 min
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>*/}
          {/* patrón de mosaico y overlays tomado de tu sección de servicios en home. :contentReference[oaicite:9]{index=9} */}

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
                      <div className="text-gray-600 leading-relaxed pb-6">
                        {faq.answer}
                      </div>
                    </details>
                  </div>
                ))}
              </div>

              {/* structured data (sin cambios) */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: { "@type": "Answer", text: faq.answer },
                    })),
                  }),
                }}
              />
            </div>
          </section>
          {/* mismo patrón que NewFAQSection. :contentReference[oaicite:10]{index=10} */}

          {/* === BLOQUE 10 · CTA FINAL (igual estética que la home) === */}
          <section className="py-20 px-6 bg-gray-200">
            <div className="max-w-6xl mx-auto relative">
              <div className="bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[2rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
                <div className="relative z-10 max-w-3xl text-center mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Empieza hoy tu transformación digital con garantías
                  </h2>
                  <div className="space-y-4">
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
                      Reserva tu sesión gratis
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 right-14 w-48 h-48 opacity-70">
                <img
                  src="/uploads/abstract.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </section>
          {/* mismo patrón que NewCTASection. :contentReference[oaicite:11]{index=11} */}
        </div>
      </main>
      <PartnersSection />
      <Footer />
    </>
  );
};

export default TransformacionDigital;
