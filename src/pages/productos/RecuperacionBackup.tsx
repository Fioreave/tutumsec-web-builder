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
  Euro,
  TrendingUp,
  AlertCircleIcon,
  AlertTriangleIcon,
} from "lucide-react";
import PartnersSection from "../PartnersSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const RecuperacionBackup = () => {
  const breadcrumbItems = [
    { label: "Productos", href: "/es/productos" },
    { label: "Prevención Backup" },
  ];

  const diferencial = [
    "Evaluación de recuperación: Revisamos tus copias, exposición y prioridades. Detectamos huecos y oportunidades rápidas.",
    "Diseño de copias seguras: Aplicamos 3-2-1-1-0 con copias inmutables y cifrado. Accesos con doble verificación y custodia de llaves (preferencia: en tu empresa).",
    "Plan de recuperación por servicios: Qué restaurar primero, con qué orden y en qué tiempos. Todo por escrito.",
    "Pruebas mensuales y mejoras: Ensayos controlados, tiempos reales y lista breve de mejoras.",
    "Evidencias para dirección y auditoría: Resumen trimestral o semestral, incidencias y certificados/evidencias listas para NIS2, ISO 27001 y ENS.",
  ];

  const caract2 = [
    "Copias seguras que no se puedan modificar (inmutables).",
    "Pruebas de restauración mensuales con resultados claros.",
    "Plan de recuperación por servicios críticos, con prioridades.",
    "Evidencias para NIS2, ISO 27001 y ENS. ",
    "Menos dependencia: todo documentado, sin “héroes” imprescindibles. ",
  ];

  const diferencias = [
    {
      title: "Lenguaje claro y plan accionable en 4–6 semanas.",
    },
    {
      title: 'Pruebas reales con informe: nada de “suponemos"',
    },
    {
      title: "Sin cambiar tu tecnología: optimizamos lo que ya tienes.",
    },
    {
      title: "Cercanía: responsable asignado y revisión periódica.",
    },
    {
      title: "No pago de rescates: recuperamos, coordinamos y documentamos.",
    },
  ];
  const faqs = [
    {
      question: "¿Si ya tengo copias, por qué necesito esta evaluación?",
      answer:
        "Porque muchas copias no se pueden restaurar cuando hace falta. Lo comprobamos con pruebas reales y te damos un plan breve.",
    },
    {
      question: "¿Tengo que cambiar de herramienta o proveedor?",
      answer:
        "No necesariamente. Empezamos por optimizar lo que ya usas y solo cambiamos lo que impida recuperarte a tiempo.",
    },
    {
      question: "¿Podemos fijar tiempos exactos?",
      answer:
        "Definimos objetivos y los ensayamos. Tras las pruebas, tendrás tiempos reales por servicio.",
    },
    {
      question: "¿Incluye investigación forense o respuesta al ataque?",
      answer:
        "Coordinamos con especialistas cuando hace falta. Esta página se centra en recuperarte y en que las copias funcionen.",
    },
    {
      question: "¿Y si trabajamos en industria con OT/IoT?",
      answer:
        "Incluimos plan de recuperación específico para equipos y sistemas industriales, con prioridades por seguridad y producción.",
    },
  ];

  const cubrimos = [
    {
      title: "Plataformas",
      description:
        "Microsoft 365 (correo, OneDrive/SharePoint), Servidores Windows y Linux, Máquinas virtuales (VMware/Hyper-V), Bases de datos (SQL y similares), NAS/SAN y puestos de trabajo (portátiles/PC), Nube (Azure y otras).IoT/OT/SCADA: históricos, recetas, planos y parámetros de producción.",
      icon: TrendingUp,
    },
    {
      title: "Datos críticos",
      description:
        "Correo, archivos compartidos, ERP/CRM, bases de datos, historia clínica, planos/producción y expedientes.",
      icon: AlertTriangleIcon,
    },
  ];

  const problems = [
    {
      title: "Política 3-2-1-1-0 “sin letra pequeña”",
      description:
        "3 copias, 2 soportes distintos, 1 fuera de la sede, 1 copia aislada y 0 errores en verificaciones.",
      icon: AlertTriangle,
    },
    {
      title: "Copias inmutables y aisladas",
      description:
        "Protegidas frente a borrados y cambios no deseados. Accesos con doble verificación y registro de acciones.",
      icon: Shield,
    },
    {
      title: "Plan de Recuperación ante Desastres (DRP)",
      description:
        "Cuándo activar la recuperación, quién hace qué y cómo avisar. Alineado con tus tiempos y pérdida de datos.",
      icon: Clock,
    },
    {
      title: "Guías de actuación",
      description:
        "Pasos claros para cada caso: quién hace qué, contacto, tiempos, checklist y aprobación final.",
      icon: TrendingUp,
    },

    {
      title: "Cumplimiento sin complicaciones",
      description:
        "Evidencias y trazas listas para auditoría (NIS2, ISO 27001, ENS), en lenguaje entendible.",
      icon: TrendingUp,
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
      <Helmet>
        <title>Recuperación y copias para empresas | TutumSec</title>
        <meta
          name="description"
          content="Asegura tus copias y vuelve a operar rápido. Evaluación de recuperación, política 3-2-1-1-0, pruebas mensuales y plan claro. Reserva consultoría gratuita (15’)."
        />
        <link
          rel="canonical"
          href="https://tutumsec.com/es/productos/recuperacion-backup"
        />
      </Helmet>

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
                  Recuperación y copias: <br />
                  vuelve a operar sin pagar rescates{" "}
                </h1>
                <h2 className="text-dark-600 mb-6 text-[clamp(18px,2.1vw,20px)] leading-relaxed mb-2">
                  Diagnóstico de recuperación, copias seguras y pruebas
                  periódicas. <br />
                  Lenguaje claro, resultados medibles.
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={"/es/contacto"}
                  className="bg-primary rounded-full text-white text-medium content-center text-center justify-center px-8"
                >
                  Necesito ayuda ahora{" "}
                </Link>
                <Link
                  to={"/es/contacto"}
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

          {/* === BLOQUE 4 · COBERTURA E INTEGRACIONES === */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  ¿Para quién es?{" "}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    category: "Finanzas",
                    items: "operaciones y datos sensibles siempre disponibles.",
                    icon: Euro,
                  },
                  {
                    category: "Salud",
                    items:
                      "historia clínica y sistemas críticos sin interrupciones.",
                    icon: Shield,
                  },
                  {
                    category: "Industria (IoT/OT)",
                    items:
                      "fábricas, equipos conectados y controles industriales sin paradas.",
                    icon: Globe,
                  },
                  {
                    category: "PYMES",
                    items:
                      "plan práctico y sostenible sin cambiar toda tu tecnología.",
                    icon: Cloud,
                  },
                  {
                    category: "Sector público",
                    items:
                      "continuidad de servicio y evidencias para auditoría.",
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
                ¿Por qué ahora?{" "}
              </h1>
              <h2 className="text-xl max-w-3xl lg:text-xl text-white/80 mb-8">
                Los ataques ya no solo cifran equipos: buscan parar tu negocio.
                La diferencia está en cómo te recuperas: copias que no se puedan
                alterar, pruebas reales y un plan sencillo para volver a la
                normalidad en el menor tiempo posible.
              </h2>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
              {/* Columna izquierda: título + subtítulo opcional */}
              <div className="px-2 col-span-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  ¿Cómo trabajamos?
                </h2>
              </div>
              <div className="col-span-2 space-y-6">
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

          {/* === BLOQUE 4 · COBERTURA E INTEGRACIONES === */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                  El problema real{" "}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "“Tenemos copias… pero no sabemos si funcionan.” ",
                    step: "1",
                  },
                  {
                    title: "Paradas que el negocio no puede asumir. ",
                    step: "2",
                  },
                  {
                    title:
                      "Riesgo de sanciones por no poder demostrar evidencias. ",
                    step: "3",
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* === BLOQUE: Vigilancia Continua ===*/}
          <section className="bg-muted/50 pt-20  pb-20">
            <div className="pb-6 flex justify-center content-center container max-w-6xl grid md:grid-cols-2">
              <div className="m-2 mr-20">
                <h2 className="text-4xl font-bold text-foreground mb-2">
                  Lo que vas a conseguir:
                </h2>
              </div>

              <div className="ml-24">
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

          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  ¿Qué incluye?{" "}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {problems.map((problem, index) => {
                  const IconComponent = problem.icon;
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
                            {problem.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                            {problem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* DIFERENCIAL */}
          <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 lex-start gap-12">
                <div className="col-span-2">
                  <h2 className="text-4xl lg:text-4xl font-bold mb-2">
                    Diferencial de TutumSec
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
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Entregables y evidencias para dirección{" "}
              </h1>
              <div className="flex items-start mb-2">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-white text-lg">
                  Resumen de incidencias y acciones realizadas.{" "}
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-white text-lg">
                  Certificados/evidencias de copias y restauraciones para
                  auditoría (NIS2, ENS, ISO 27001).{" "}
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 px-6 bg-tutumsec-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                  ¿Qué incluye?{" "}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {cubrimos.map((problem, index) => {
                  const IconComponent = problem.icon;
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
                            {problem.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                            {problem.description}
                          </p>
                        </div>
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

export default RecuperacionBackup;
