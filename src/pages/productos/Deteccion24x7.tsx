import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import PartnersSection from "../PartnersSection";

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
                <Button size="lg" className="px-8">
                  Reserva consultoría gratis 15'
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 bg-primary/10 text-blue/85 border-blue/20 hover:bg-white/20"
                >
                  Descarga la ficha técnica BlackMDR{" "}
                </Button>
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

          {/* === BLOQUE: Vigilancia Continua === */}
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

              {/* Características */}
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

              {/* Beneficios */}
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
          </section>

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
          {/* === CTA final — tarjeta con gradiente === 
          <section className="mt-16 mb-20">
            <div className="max-w-4xl mt-6 mb-10 mx-auto relative">
              <div className="h-[27vh] bg-gradient-to-r from-black via-blue-900 to-blue-800 rounded-[5rem] p-12 relative overflow-hidden mx-auto max-w-5xl">
                <div className="relative z-10 max-w-3xl text-center mx-auto">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                      ¿Necesitas protección continua?
                    </h2>
                    <p className="text-lg text-white/85 mb-6">
                      Contacta con nosotros para implementar nuestro servicio de
                      detección 24x7
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pb-20 justify-center">
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                      {" "}
                      Solicitar Información{" "}
                    </button>{" "}
                    <button className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition-colors">
                      {" "}
                      Ver Demo{" "}
                    </button>
                  </div>
                  {/*<img
                  src="/uploads/abstract.png"
                  alt=""
                  className="absolute -right-8 -bottom-8 w-48 opacity-50"
                  aria-hidden
                />
                </div>
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
