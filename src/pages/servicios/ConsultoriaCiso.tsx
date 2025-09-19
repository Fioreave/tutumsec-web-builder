import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";

const ciso = [
  {
    number: "1",
    description: "Cumplimiento NIS2 / ISO 27001 en menos de 90 días.",
    gradient: "from-blue-500 to-blue-950",
  },
  {
    number: "2",
    description: "Reducción del 30 % de incidentes críticos en 6 meses",
    gradient: "from-blue-950 to-blue-800",
  },
  {
    number: "3",
    description: "Cuadros de mando ejecutivo en tiempo real",
    gradient: "from-blue-900 to-black",
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

const ConsultoriaCiso = () => {
  const { t } = useTranslation();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultoría CISO as a Service",
    description:
      "Servicio CISO externo premium para PYMEs de Cataluña, Andorra y España. Cumple NIS 2/ISO 27001 en < 90 días y reduce incidentes críticos un 30 %.",
    provider: {
      "@type": "Organization",
      name: "TutumSec",
      url: "https://tutumsec.com",
    },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
    serviceType: "Consultoría CISO estratégica",
  };

  const ventajas = [
    {
      title: "Visión de negocio",
      benefit:
        "Traducimos ciber-riesgo a impacto financiero para priorizar inversiones.",
    },
    {
      title: "Cumplimiento normativo sin fricciones",
      benefit:
        "Metodología Compliance 360 ° para NIS 2, ISO 27001, ENS y RGPD.",
      icon: Shield,
    },
    {
      title: "Respuesta 24/7",
      benefit:
        "Integración directa con nuestro SOC: detección y contención en < 15 min.",
      icon: CheckCircle,
    },
    {
      title: "Coste optimizado",
      benefit:
        "Modelo as-a-Service: sin cargas sociales ni largos procesos de contratación.",
      icon: Eye,
    },
    {
      title: "Escalabilidad flexible",
      benefit: "Añade módulos MDR, formación o Red Team a medida que creces.",
      icon: GraduationCap,
    },
  ];

  const images = [
    "/uploads/fusion-05.jpeg",
    "/uploads/dispersion-04.jpeg",
    "/uploads/dispersion-02.jpeg",
  ];

  const getImage = (i: number) => images[i % images.length];

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
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${getImage(idx)})` }}
        />
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
        <title>Consultoría CISO (vCISO) para PYMEs | TutumSec</title>
        <meta
          name="description"
          content="Liderazgo CISO externo, KPIs y roadmap 12–36 meses. Gobierno de seguridad alineado al negocio. Agenda una consultoría gratis."
        />
        <link
          rel="canonical"
          href="https://tutumsec.io/es/servicios/consultoria-ciso/"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/consultoria-ciso/"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/ca/serveis/consultoria-ciso/"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/en/services/ciso-advisory/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/consultoria-ciso/"
          hrefLang="x-default"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background">
        <div>
          {/* BLOQUE 1 · HERO */}

          <section className="relative min-h-screen overflow-hidden px-6 flex items-center">
            {/* CAPA BASE: azul muy oscuro */}
            <div className="absolute inset-0 z-0 bg-[#0a0f1c]" />

            {/* CAPA LINEAL SUAVE (de arriba izq a abajo der) */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(120deg, rgba(14, 24, 46, 0.0) 0%, rgba(89, 116, 189, 0.35) 45%, rgba(182, 185, 193, 0) 100%)",
              }}
            />

            {/* GLOW RADIALES (manchas de luz) */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-3xl z-5" />
            <div className="pointer-events-none absolute -right-40 top-10 w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-3xl z-10" />
            <div className="pointer-events-none absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-3xl z-5" />

            {/* HILO DECORATIVO */}
            <img
              src="/uploads/hilo.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute left-0 top-[-80px] w-[1200px] max-w-none opacity-60 mix-blend-screen z-1"
            />

            <div className="max-w-4xl mx-auto text-center relative">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {t("cisoConsultancyTitle")}
              </h1>
              <h2 className="text-xl lg:text-xl text-muted mb-8">
                {t("cisoConsultancySubtitle")}
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
                  className="px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background:
                      "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)", // blue-400 -> blue-500
                  }}
                >
                  {t("reserveConsultation")}
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-4 py-2 text-md rounded-full"
                >
                  Descarga la Guia
                </Button>
              </div>
            </div>
          </section>
          <section className="pt-20 pb-20">
            <div className="container max-w-7xl grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6 items-stretch">
              {ciso.map((ciso, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r ${ciso.gradient} rounded-2xl text-white relative group shadow-lg p-8 flex`}
                >
                  {/* Columna izquierda: número grande */}
                  <div className="text-5xl font-extrabold leading-none mr-6 opacity-90 w-12 shrink-0 flex items-center justify-center">
                    {ciso.number}
                  </div>

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

          {/* BLOQUE 3 · BENEFICIOS CLAVE */}

          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto max-w-6xl mx-auto relative">
              <div className="text-left mb-10">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
                  Haz crecer tu negocio
                </h3>
              </div>

              {/* FILA 1: 2 columnas asimétricas (1 col y 2 cols) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
                <Card item={ventajas[0]} idx={0} className="md:col-span-1" />
                <Card item={ventajas[1]} idx={1} className="md:col-span-2" />
              </div>

              {/* FILA 2: 3 columnas iguales */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                <Card item={ventajas[2]} idx={2} />
                <Card item={ventajas[3]} idx={3} />
                <Card item={ventajas[4]} idx={4} />
              </div>
            </div>
          </section>

          {/* BLOQUE 2 · PAIN → VISIÓN */}
          <section className=" py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-4xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  Da un paso adelante:
                </h2>
                <h3 className="text-2xl lg:text-3xl font-bold mb-8 transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  de la preocupación constante a la confianza digital
                </h3>
              </div>
              <div className="border-l-4 border-blue-400 pl-6 prose prose-lg max-w-none text-left">
                <p>
                  Cada día se detectan más de 1.200 incidentes contra empresas
                  españolas (INCIBE). La mayoría de las PYMEs actúa después del
                  ataque. Con TutumSec adelantas a los atacantes: evaluamos,
                  priorizamos y ejecutamos una estrategia de seguridad alineada
                  con tu visión de negocio.
                </p>
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
          <section className="min-h-[38vh] justify-center py-12 pt-20 pb-20 bg-gradient-to-r from-black via-blue-900 to-blue-800 text-white">
            <div className="w-full text-center max-w-6xl mt-10 mx-auto relative">
              <h2 className="text-4xl font-bold mb-10 px-20 ">
                ¿Listo para impulsar tu ciberseguridad?
              </h2>
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
                Reserva tu sesión estratégica gratuita →
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ConsultoriaCiso;
