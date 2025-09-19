import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card as UICard } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Eye,
  GraduationCap,
  Search,
  Settings,
  Map,
  Clock,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "../PartnersSection";

const ciso = [
  {
    description: "Pentesting avanzado con informe ejecutivo ≤ 15 días",
    gradient: "from-blue-500 to-blue-950",
  },
  {
    description: "Cumplimiento NIS2 / ISO 27001 sin fricciones",
    gradient: "from-blue-950 to-blue-800",
  },
  {
    description: "Reducción del –30 % de vulnerabilidades críticas en 6 meses",
    gradient: "from-blue-900 to-black",
  },
  {
    description:
      "Dashboard de riesgos en tiempo real para tu comité de dirección",
    gradient: "from-blue-600 to-black",
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

const handleCalendlyClick = () => {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/ayub-tutumsec/30min";
  window.open(calendlyUrl, "_blank");
};

const AuditoriaCompliance = () => {
  const { t } = useTranslation();
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué cubre exactamente la auditoría NIS 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Infraestructura (redes, servidores, OT), procesos, políticas y gobierno. Incluye pentesting y gap-analysis normativo completo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto dura el diagnóstico inicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre 10 y 15 días hábiles, según el número de activos y la documentación disponible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito auditoría si ya tengo proveedor IT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu MSP mantiene la infraestructura; nosotros garantizamos gobierno, cumplimiento y visibilidad ejecutiva. Ambos servicios se complementan.",
        },
      },
    ],
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auditoría & Compliance NIS2",
    description:
      "Pentesting profundo + Gap-Analysis NIS 2: el camino rápido y seguro hacia el cumplimiento total.",
    provider: {
      "@type": "Organization",
      name: "TutumSec",
    },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
  };

  const Card = ({ item, idx, className = "" }) => {
    const Wrapper = ({ children }) =>
      item.href ? (
        <a
          href={item.href}
          className={`relative rounded-2xl overflow-hidden shadow-lg group min-h-[220px] block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${className}`}
          aria-label={`Ir a ${item.title}`}
        >
          {children}
        </a>
      ) : (
        <div
          className={`relative rounded-2xl overflow-hidden shadow-lg group min-h-[220px] ${className}`}
        >
          {children}
        </div>
      );

    return (
      <Wrapper>
        {/* Fondo con imagen */}

        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 group-hover:from-black/80 transition-colors" />

        {/* Contenido */}
        <div className="relative p-8 text-white flex items-start gap-5 h-full">
          <div className="flex-1">
            <h4 className="text-xl font-semibold leading-relaxed mb-2">
              {item.title}
            </h4>
            <p className="text-white/90 leading-relaxed">{item.benefit}</p>
          </div>
          <div className="ml-auto text-white/80">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Wrapper>
    );
  };

  return (
    <>
      <Helmet>
        <title>Auditoría & Compliance NIS2 para empresas | TutumSec</title>
        <meta
          name="description"
          content="Gap-analysis NIS2 + auditoría técnica y plan de adecuación. Evidencias para auditorías y cadena de suministro."
        />
        <link
          rel="canonical"
          href="https://tutumsec.io/es/servicios/auditoria-compliance-nis2/"
        />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/auditoria-compliance-nis2/"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/ca/serveis/auditoria-compliance-nis2/"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/en/services/nis2-audit-compliance/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/auditoria-compliance-nis2/"
          hrefLang="x-default"
        />
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-20 ">
        <div>
          {/*<Breadcrumbs
            items={[
              { label: "Servicios", href: "/es/servicios" },
              { label: "Consultoría CISO" },
            ]}
          />*/}

          {/* BLOQUE 1 · HERO */}

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
              className="pointer-events-none select-none absolute left-0 top-[-80px] w-[1200px] max-w-none opacity-60 mix-blend-screen z-1"
            />

            <div className="max-w-6xl mx-auto text-center relative">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Auditoría técnica & Compliance NIS2{" "}
              </h1>
              <h2 className="text-xl lg:text-xl text-muted mb-8">
                Pentesting profundo + Gap-Analysis NIS 2: el camino rápido y
                seguro hacia el cumplimiento total.
              </h2>

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
                  Reserva tu consultoría gratuita →
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-4 py-2 text-md rounded-full"
                >
                  Descarga la Checklist "15 Controles Esenciales NIS 2"{" "}
                </Button>
              </div>
            </div>
          </section>

          {/* BLOQUE 4 · PROCESO EN 4 PASOS */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-4xl font-bold text-blue-500 mb-6">
                  Nuestra Metodología
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
                          {/*<span className="absolute -top-2 -right-2 w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </span>*/}
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

          {/* BLOQUE 3 · BENEFICIOS CLAVE */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">
                ¿Por qué somos diferentes?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <UICard>
                  <CardContent className="p-6">
                    <Search className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Pentesting ofensivo 360°
                    </h3>
                    <p className="text-muted-foreground">
                      Simulamos ataques multi-vector para cloud, M365, VPN,
                      OT/ICS y redes WiFi para localizar fallos antes que los
                      atacantes.
                    </p>
                  </CardContent>
                </UICard>

                <UICard>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Gap-Analysis NIS2 & ISO 27001
                    </h3>
                    <p className="text-muted-foreground">
                      Mapeamos controles, políticas y evidencias; señalamos
                      priorizaciones y quick-wins.
                    </p>
                  </CardContent>
                </UICard>

                <UICard>
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Coste predecible y escalable
                    </h3>
                    <p className="text-muted-foreground">
                      Suscripción modular: pagas solo por los activos y
                      servicios que realmente necesitas.
                    </p>
                  </CardContent>
                </UICard>

                <UICard>
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Validación & seguimiento continuo
                    </h3>
                    <p className="text-muted-foreground">
                      Re-test trimestral, KPIs de madurez y asistencia en
                      auditorías externas.
                    </p>
                  </CardContent>
                </UICard>
              </div>
            </div>
          </section>

          <section className="pb-20 pt-20 bg-tutumsec-gray-50">
            <h2 className="container text-5xl lg:text-5xl font-bold text-blue-950 mb-10">
              ¿Cómo lo hacemos?{" "}
            </h2>
            <div className="container grid grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-6 items-stretch">
              {ciso.map((ciso, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r ${ciso.gradient} rounded-2xl text-white relative group shadow-lg p-8 flex`}
                >
                  {/* Columna derecha: descripción */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-lg leading-relaxed">
                      {ciso.description}
                    </p>
                  </div>
                  {/* Flecha estética como en el ejemplo */}
                  <div className="ml-4 self-start text-white/70">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BLOQUE 2 · PAIN → VISIÓN */}
          <section className=" py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-4xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  ¿Auditoría técnica o cumplimiento?{" "}
                </h2>
                <h3 className="text-2xl lg:text-3xl font-bold mb-8 transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  Necesitas ambos… y rápido{" "}
                </h3>
              </div>
              <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>
                  El 43 % de los ciberataques que registra ENISA impacta en
                  PYMEs y solo un 14 % tiene un plan de respuesta. A muchas
                  empresas les sobran herramientas sueltas y les faltan: Una
                  auditoría ofensiva que revele qué puertas están realmente
                  abiertas. Un plan de compliance que traduzca normas en
                  acciones concretas. Con TutumSec conviertes la auditoría en un
                  activo estratégico: identificamos brechas reales –desde
                  firewalls hasta políticas internas–, alineamos tus controles
                  con NIS 2 e ISO 27001 y situamos la seguridad al nivel de
                  negocio. lo tienes todo en un único servicio: Audit-to-Comply.
                </p>
              </div>
            </div>
          </section>
          {/* BLOQUE 5 · TESTIMONIOS & CASOS 
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                Clientes que confían en TutumSec
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      "Pasamos de no cumplir ENS a certificar la ISO 27001 en
                      tres meses. El tablero de KPIs nos sirve cada semana en
                      comité."
                    </p>
                    <div className="text-sm">
                      <strong>— Luis F., COO</strong>
                      <br />
                      <span className="text-muted-foreground">
                        operador logístico (120 empleados)
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      "El primer trimestre ya vimos un 35 % menos de alertas
                      críticas gracias a la segmentación Zero Trust que
                      definieron."
                    </p>
                    <div className="text-sm">
                      <strong>— Clara R., CTO</strong>
                      <br />
                      <span className="text-muted-foreground">
                        cadena hotelera (11 hoteles)
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>*/}

          {/* CTA Final */}
          <section className="py-12 pt-20 pb-20 bg-tutumsec-gray-50">
            <div className="w-full text-center max-w-4xl mx-auto relative">
              <h2 className="text-4xl font-bold mb-10 px-20 ">
                ¿Quieres alinear tu seguridad con NIS 2 antes de la fecha
                límite?
              </h2>
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
            </div>
          </section>

          <PartnersSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AuditoriaCompliance;
