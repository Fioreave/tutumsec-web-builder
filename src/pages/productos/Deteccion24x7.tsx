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
} from "lucide-react";
import PartnersSection from "../PartnersSection";
import { Link } from "react-router-dom";

const Deteccion24x7 = () => {
  const breadcrumbItems = [
    { label: "Productos", href: "/es/productos" },
    { label: "Detección 24x7" },
  ];

  const diferencial = [
    "Recopilación de Datos: Recopilamos logs y eventos de todos los sistemas y dispositivos.",
    "Análisis Inteligente: Analizamos patrones y comportamientos para identificar amenazas.",
    "Respuesta Inmediata: Alertamos y activamos los protocolos de respuesta necesarios.",
  ];

  const reporte = [
    {
      title: "Informe mensual:",
      description: "incidentes, acciones realizadas, recomendaciones.",
    },
    {
      title: "Panel ejecutivo: ",
      description:
        "tendencias, fuentes cubiertas, top TTPs, backlog de hardening.",
    },
    {
      title: "Comité trimestral:",
      description: "con *CISO/OSI para alinear seguridad con negocio.",
    },
  ];

  const caract = [
    "Monitorización 24 horas, 7 días a la semana",
    "Detección de amenazas en tiempo real",
    "Análisis de comportamiento anómalo",
    "Alertas inmediatas ante incidentes",
    "Correlación de eventos de seguridad",
    "Informes detallados de actividad",
  ];
  const faqs = [
    {
      question: "¿En qué se diferencia MDR de EDR?",
      answer:
        "EDR es la tecnología en endpoint; MDR añade equipo humano 24/7 para monitorizar, validar y responder.",
    },
    {
      question: "¿Necesito SIEM?",
      answer:
        "No es obligatorio. Iniciamos con EDR/XDR e identidad/email; si ya usas SIEM, lo integramos.",
    },
    {
      question: "¿Ofrecéis respuesta forense/DFIR?",
      answer:
        "Sí, como servicio aparte (retainer) para análisis profundo y coordinación de crisis.",
    },
    {
      question: "¿Publicáis SLAs?",
      answer:
        "Definimos SLA operativos en contrato (triage, notificación, contención) adaptados a tu entorno.",
    },
    {
      question: "¿Cómo se gestiona la privacidad de datos?",
      answer:
        "Tratamos los datos mínimos imprescindibles, con controles y acuerdos de tratamiento.",
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
        title="Detección 24x7 - Monitorización Continua de Ciberseguridad"
        description="Servicio de detección y monitorización de amenazas 24 horas al día, 7 días a la semana. Protección continua para tu organización."
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
              <div className="max-w-4xl mx-auto">
                <h1 className="text-primary mt-12 font-bold mb-4 text-[clamp(32px,5vw,56px)] leading-[1.05]">
                  BlackMDR 24x7
                </h1>
                <h2 className="text-blue/85 text-[clamp(18px,2.1vw,20px)] leading-relaxed mb-2">
                  Monitorización continua, hunting y contención remota <br />{" "}
                  para frenar amenazas antes de que impacten en el negocio.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2 p-4 backdrop-blur rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-blue/85">
                    Diagnóstico completo en 10 días
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 backdrop-blur rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-blue/85">
                    Roadmap 12-36 meses con ROI &lt; 9 meses
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 backdrop-blur rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-blue/85">
                    Ahorro medio 22 % en costes IT/OT
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={"/es/contacto"}
                  className="bg-primary rounded-full text-white text-medium content-center text-center justify-center px-8"
                >
                  Reserva consultoría gratis 15'
                </Link>
                <Link
                  to={"/es/contacto"}
                  className="bg-white border py-2 border-primary rounded-full text-primary text-medium content-center text-center justify-center px-8"
                >
                  Descarga la ficha técnica BlackMDR{" "}
                </Link>
              </div>
            </div>
          </section>

          {/* PAIN → VISIÓN */}
          <section className=" py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  La avalancha de alertas no es seguridad; la respuesta a
                  tiempo, sí
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>
                  Las PYMEs maduras tienen EDR, correo en M365, firewalls NGFW,
                  redes Meraki… y cientos de alertas. Sin analistas 24/7, los
                  falsos positivos te comen el tiempo y los verdaderos pasan
                  desapercibidos. BlackMDR filtra, confirma y actúa en minutos,
                  con trazabilidad total y foco en impacto de negocio.
                </p>
              </div>
            </div>
          </section>

          {/* === BLOQUE: Vigilancia Continua ===
          <section className="bg-muted/50 pt-20 pb-20  mb-20">
            <div className="container max-w-7xl grid md:grid-cols-12">
              <div className="col-span-4 mr-20">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Vigilancia Continua de Ciberseguridad
                </h2>
                <p className="text-md text-muted-foreground mb-10 max-w-4xl">
                  Nuestro servicio de detección 24x7 proporciona monitorización
                  continua de tu infraestructura, detectando amenazas y
                  anomalías en tiempo real para garantizar la máxima protección
                  de tu organización.
                </p>
              </div>

              <div className="col-span-4">
                <h3 className="text-xl font-semibold mb-4">
                  Características principales:
                </h3>
                <div className="space-y-6">
                  {caract.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

               
              <div className="col-span-4">
                <h3 className="text-xl font-semibold mb-4">Beneficios:</h3>
                <div className="space-y-6">
                  {beneficios.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section> */}

          {/* === PROCESO — timeline con pasos numerados === */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              {/* Columna izquierda: título + subtítulo opcional */}
              <div className="px-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Proceso de Monitorización
                </h2>
              </div>
              <div className="space-y-6">
                {diferencial.map((raw, i) => {
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

          {/* === BLOQUE 3 · QUÉ HACE DIFERENTE A BLACK MDR === */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  Diferenciales que marcan la diferencia
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: 'No "sustituimos" a tu equipo; lo potenciamos',
                    description:
                      "Trabajo hombro a hombro con tu equipo (IT/CISO). Definimos responsabilidades (RACI), compartimos visibilidad y transferimos conocimiento para que tu equipo sea más fuerte cada mes.",
                    icon: Users,
                  },
                  {
                    title:
                      'Nada de "caja negra"; acordamos qué acciones remotas ejecutamos',
                    description:
                      "Runbooks co-firmados que autorizan de antemano las acciones remotas (aislar un endpoint, bloquear IOCs, purgar phishing, revocar sesiones…). Evita cuellos de botella y reduce MTTR con trazabilidad total.",
                    icon: Settings,
                  },
                  {
                    title: "Gobernanza: Seguridad gobernada desde dirección",
                    description:
                      "Comité con CISO/OSI, KPIs claros, priorización por riesgo, evidencias para auditorías y alineación con NIS2/ISO. Menos improvisación, más control.",
                    icon: BarChart3,
                  },
                  {
                    title: "Menos tiempo en alertas, más en decisiones",
                    description:
                      "Enfoque en resultados, no solo en alertas: menos falsos positivos, incidentes contenidos a tiempo, backlog de hardening priorizado y decisiones de inversión con retorno. Informe ejecutivo mensual que entiende negocio.",
                    icon: Zap,
                  },
                  {
                    title: "Aprovechamos lo que ya tienes",
                    description:
                      "EDR/XDR, SIEM, M365, NGFW, Meraki, etc. para acelerar despliegue y ROI, evitando compras innecesarias. Integramos y optimizamos antes de proponer nuevos tools.",
                    icon: RotateCcw,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "forwards",
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 italic">
                  <strong>Nota:</strong> podemos integrar de salida con stacks
                  líderes (p. ej., Microsoft Defender, SentinelOne, CrowdStrike,
                  Fortinet, Palo Alto, Microsoft Sentinel…). Ajustamos el
                  alcance a tu realidad tecnológica.
                </p>
              </div>
            </div>
          </section>

          {/* === BLOQUE 4 · COBERTURA E INTEGRACIONES === */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  Cobertura de extremo a extremo, <br /> integraciones reales
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    category: "Endpoint / EDR/XDR",
                    items:
                      "Microsoft Defender for Endpoint, SentinelOne, CrowdStrike, Sophos, Bitdefender, Malwarebytes, Webroot…",
                    icon: Monitor,
                  },
                  {
                    category: "Identidad & Email",
                    items:
                      "Microsoft 365/Entra, reglas de purga y revocación de sesiones.",
                    icon: Shield,
                  },
                  {
                    category: "Red & Perímetro",
                    items:
                      "Fortinet, SonicWall, WatchGuard, Cisco Meraki (eventos de firewall/telemetría).",
                    icon: Globe,
                  },
                  {
                    category: "Cloud & Workloads",
                    items:
                      "Microsoft Sentinel, Azure/AWS; Elastic SIEM si aplica.",
                    icon: Cloud,
                  },
                  {
                    category: "OT/ICS",
                    items:
                      "Enfoque segmentado y reglas de contención seguras (si procede).",
                    icon: Cog,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-tutumsec-gray-50 p-6 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.category}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {item.items}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 italic">
                  <strong>Nota de transparencia:</strong> mostramos
                  compatibilidad técnica; "compatible" no implica relación de
                  partnership salvo indicación expresa.
                </p>
              </div>
            </div>
          </section>

          {/* === BLOQUE 5 · CÓMO FUNCIONA (Pipeline) === */}
          <section className="py-40 px-6 bg-tutumsec-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-relaxed">
                  Detección y respuesta 24/7
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  {
                    step: "1",
                    title: "Ingesta & Normalización",
                    description:
                      "De telemetría (endpoint, identidad, cloud, red).",
                  },
                  {
                    step: "2",
                    title: "Detección",
                    description:
                      "Detección (reglas, ML y correlación) + hunting proactivo.",
                  },
                  {
                    step: "3",
                    title: "Validación humana",
                    description:
                      "Por analistas para eliminar falsos positivos.",
                  },
                  {
                    step: "4",
                    title: "Respuesta remota",
                    description:
                      "Aislamiento, bloqueo IOC, kill process, revocación de sesión, reset de credenciales, reglas de contención, etc.",
                  },
                  {
                    step: "5",
                    title: "Lecciones aprendidas",
                    description:
                      "Tuning de reglas, hardening y asesoría al equipo IT/CISO.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 relative"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/80 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* === BLOQUE 6 · ONBOARDING ÁGIL === */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  Puesta en marcha rápida, segura y sin "sorpresas"
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    period: "Día 1–3",
                    title: "Arquitectura e inventario",
                    description:
                      "arquitectura, inventario de fuentes e IT-readiness.",
                    gradient: "from-blue-900 to-black",
                  },
                  {
                    period: "Sem 2",
                    title: "Despliegue inicial",
                    description: "agentes/conectores + runbooks co-aprobados.",
                    gradient: "from-blue-950 to-blue-800",
                  },
                  {
                    period: "Día 30",
                    title: "Primer informe",
                    description:
                      "tuning inicial y primer informe (técnico + ejecutivo).",
                    gradient: "from-blue-500 to-blue-950",
                  },
                  {
                    period: "Día 90",
                    title: "Validación completa",
                    description:
                      "simulacro, revisión de KPIs y roadmap de madurez.",
                    gradient: "from-blue-600 to-blue-900",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${item.gradient} p-8 rounded-2xl text-white relative group`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-bold opacity-80 min-w-[6ch]">
                        {item.period}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-white opacity-60">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* === BLOQUE 7 · ALCANCE DE RESPUESTA === */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  De la alerta a la contención
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Aislamiento de endpoint",
                    description: "afectado.",
                    icon: Shield,
                  },
                  {
                    title: "Bloqueo y erradicación",
                    description: "(IOC, procesos, persistencia conocida).",
                    icon: AlertTriangle,
                  },
                  {
                    title: "Medidas en identidad",
                    description:
                      "(deshabilitar sesión, MFA, restablecer contraseñas).",
                    icon: Users,
                  },
                  {
                    title: "Email",
                    description:
                      "(bloqueo, retracto, purga de campañas de phishing).",
                    icon: Network,
                  },
                  {
                    title: "Red/Perímetro",
                    description:
                      "(reglas temporales, segmentación de emergencia).",
                    icon: Globe,
                  },
                  {
                    title: "Recomendaciones de recuperación",
                    description: "y comunicación con tu equipo.",
                    icon: RotateCcw,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-700 font-medium">
                  <strong>DFIR / Retainer:</strong> disponible como servicio
                  aparte para análisis forense profundo y acompañamiento en
                  crisis.
                </p>
              </div>
            </div>
          </section>

          {/* PAIN → VISIÓN */}
          <section className=" py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
              <div className="transform col-span-1 transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  Hunting proactivo sobre <br />
                  TTPs críticos
                </h2>
              </div>
              <div className="border-l-4 col-span-2 ml-20 border-blue-400 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>
                  Búsqueda recurrente de comportamientos (MITRE ATT&CK) centrada
                  en acceso inicial, movimiento lateral, escalado de privilegios
                  y exfiltración. Los hallazgos generan acciones y reglas nuevas
                  para tu entorno.
                </p>
              </div>
            </div>
          </section>

          {/* === BLOQUE 9 · REPORTING & KPIs === */}
          <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 lex-start gap-12 items-center">
                <div>
                  <h2 className="text-4xl lg:text-4xl font-bold mb-2">
                    Reporte semanal y <br />
                    <span className="relative">
                      foco ejecutivo{" "}
                      <svg
                        className="absolute -bottom-4 left-0 w-full h-3"
                        viewBox="0 0 300 12"
                        fill="none"
                      >
                        <path
                          d="M5 6 Q150 1 295 6"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </h2>
                </div>

                <div className="space-y-8">
                  {reporte.map((risk, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-400 pl-6"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-blue-300">
                        {risk.title}
                      </h3>
                      <p className="text-white-700 leading-relaxed">
                        {risk.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* === BLOQUE 11 · CUMPLIMIENTO & NIS2 === 
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-relaxed">
                MDR que ayuda a cumplir NIS2
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Mapeamos el servicio a controles de detección y respuesta,
                  notificación de incidentes y mejora continua. Entregamos
                  evidencias y facilitamos la coordinación con CISO/OSI y
                  Auditoría & Compliance.
                </p>
              </div>
            </div>
          </section>*/}

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
                      Reserva diagnóstico gratuito 15'
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white rounded-full border-white/20 hover:bg-white/20"
                    >
                      Descarga la ficha técnica MDR{" "}
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

export default Deteccion24x7;
