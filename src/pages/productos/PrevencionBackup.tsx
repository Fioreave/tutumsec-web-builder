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

const PrevencionBackup = () => {
  const breadcrumbItems = [
    { label: "Productos", href: "/es/productos" },
    { label: "Prevención Backup" },
  ];

  const caract1 = [
    "Calendario de actualizaciones al día.",
    "Copias de seguridad adecuadas a tu tamaño (política y revisiones básicas).",
    "Políticas internas sencillas (accesos, parches, copias, uso aceptable).",
    "Formación continua para toda la plantilla.",
    "Informe para dirección y lista priorizada de tareas.",
  ];

  const caract2 = [
    "Cortafuegos y filtros bien configurados. ",
    "Revisión de exposición desde Internet (dominio, servicios visibles y avisos). ",
    "Reglas de acceso simples: “solo lo necesario” y verificación en dos pasos. ",
    "Contraseñas seguras y cifrado donde corresponde. ",
    "Configuraciones seguras en sistemas y nube (listas de verificación claras).",
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
        title="Prevención en ciberseguridad para empresas | TutumSec"
        description="Evalúa tu riesgo, corrige fallos y reduce la exposición. Diagnóstico gratuito (15’) y plan claro para finanzas, salud, industria y sector público."
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
                <h1 className="text-primary mt-12 font-bold mb-4 text-[clamp(32px,5vw,46px)] leading-[1.05]">
                  Prevención en ciberseguridad: <br /> reduce el riesgo antes de
                  que duela
                </h1>
                <h2 className="text-blue/85 text-[clamp(18px,2.1vw,20px)] leading-relaxed mb-2">
                  Diagnóstico rápido, prioridades claras y mejoras visibles en
                  semanas. <br /> Sin jerga técnica. Con resultados.
                </h2>
              </div>
              <div className="container max-w-6xl mt-6 grid md:grid-cols-3 gap-6 mb-8">
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
                <Link
                  to={"/es/contacto"}
                  className="bg-white border py-2 border-primary rounded-full text-primary text-medium content-center text-center justify-center px-8"
                >
                  Descarga la ficha técnica{" "}
                </Link>
              </div>
            </div>
          </section>

          {/* PAIN → VISIÓN */}
          <section className=" py-20 px-6 bg-gray-500/5 text-blue">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="text-3xl lg:text-3xl mb-2 font-bold transition-colors duration-500 hover:text-primary-light leading-relaxed">
                  El problema real
                </h2>
              </div>
              <div className="border-l-4 border-blue-400 col-span-2 text-sm pl-6 prose prose-lg max-w-none text-left">
                <p>
                  Muchas empresas tienen herramientas, pero no prioridades
                  claras. <br />
                  Faltan normas simples, revisiones periódicas y una lista corta
                  de acciones que reduzcan el riesgo del día a día.
                </p>
              </div>
            </div>
          </section>

          {/* === PROCESO — timeline con pasos numerados === */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              {/* Columna izquierda: título + subtítulo opcional */}
              <div className="px-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  ¿Para quién es?
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
                ¿Por qué ahora?
              </h1>
              <h2 className="text-xl max-w-4xl lg:text-xl text-white/80 mb-8">
                Muchas empresas tienen herramientas, pero no prioridades claras.
                Faltan normas simples, revisiones periódicas y una lista corta
                de acciones que de verdad reduzcan el riesgo del día a día.
              </h2>
            </div>
          </section>

          {/* === BLOQUE 3 · QUÉ HACE DIFERENTE A BLACK MDR === */}
          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  Lo que vas a conseguir
                </h2>
              </div>

              <div className="grid grid-cols-3">
                {[
                  {
                    title: "Menos exposición a ataques:",
                    description: "Solo los accesos necesarios.",
                    icon: Users,
                  },
                  {
                    title: "Sistemas más resistentes:",
                    description: "configuraciones seguras y actualizadas.",
                    icon: Settings,
                  },
                  {
                    title: "Datos protegidos:",
                    description:
                      "confidencialidad, integridad y disponibilidad.",
                    icon: BarChart3,
                  },
                  {
                    title: "Equipos preparados:",
                    description: "personas formadas para detectar engaños.",
                    icon: Zap,
                  },
                  {
                    title: "Evidencias para auditoría:",
                    description: "informes sencillos para dirección.",
                    icon: RotateCcw,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="m-6 bg-white p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in"
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
            </div>
          </section>

          {/* === BLOQUE: Vigilancia Continua ===*/}
          <section className="bg-muted/50 pt-20 pb-20">
            <div className="container max-w-7xl grid md:grid-cols-11">
              <div className="col-span-3 mr-20">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  ¿Qué incluye?
                </h2>
                <p className="text-xl text-gray-500">(paquete base)</p>
              </div>

              <div className="col-span-4">
                <div className="space-y-6">
                  {caract1.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-4">
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

          {/* === BLOQUE 4 · COBERTURA E INTEGRACIONES ===*/}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  Nuestra solución{" "}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 m-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    category: "Diagnóstico de prevención",
                    items:
                      "Revisamos tu exposición desde Internet y los 5 básicos: accesos, actualizaciones, configuraciones, copias de seguridad y personas. ",
                    icon: Monitor,
                  },
                  {
                    category: "Plan de acción por impacto",
                    items:
                      "Lista priorizada para 4–6 semanas. Pocas tareas, muy claras, con responsables y fechas.",
                    icon: Shield,
                  },
                  {
                    category: "Implantación guiada",
                    items:
                      "Ajustes en accesos, contraseñas seguras, verificación en dos pasos, cifrado, configuraciones seguras en servidores, equipos y nube; cortafuegos y filtros bien definidos.",
                    icon: Globe,
                  },
                  {
                    category: "Personas y hábitos",
                    items:
                      "Formación breve y continua, simulaciones de engaños, recordatorios y políticas internas fáciles de cumplir.",
                    icon: Cloud,
                  },
                  {
                    category: "Seguimiento y evidencias",
                    items:
                      "Resumen mensual para dirección con avances, riesgos y próximos pasos.",
                    icon: Monitor,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-tutumsec-gray-50 p-2 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="p-2 items-center justify-center text-center min-h-[25vh] max-h-[30vh]">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.category}
                      </h3>
                      <p className="text-gray-600 text-md leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
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

          <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 lex-start gap-12 items-center">
                <div className="col-span-2">
                  <h2 className="text-4xl lg:text-4xl font-bold mb-2">
                    Diferencias de TutumSec
                  </h2>
                  <h3 className="font-medium text-2xl">
                    <span className="relative">
                      ¿Por qué nos eligen?
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
                  </h3>
                </div>

                <div className="col-span-3 space-y-8">
                  {diferencias.map((risk, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-400 pl-6"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-blue-300">
                        {risk.title}
                      </h3>
                    </div>
                  ))}
                </div>
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

export default PrevencionBackup;
