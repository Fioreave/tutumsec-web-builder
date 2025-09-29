import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Book,
  BookHeadphones,
  Building,
  CheckCircle,
  Clock,
  Cloud,
  Cog,
  Globe,
  Headphones,
  MapPin,
  Monitor,
  Phone,
  Search,
  SearchIcon,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import ServicesSection from "@/components/ServicesSection";

const risks = [
  {
    title: "Misión",
    description:
      "Ayudar a las organizaciones a prevenir y recuperar con planes sencillos, prioridades por impacto y evidencias que cualquiera pueda entender.",
  },
  {
    title: "Visión",
    description:
      "Ser el referente cercano para empresas que buscan seguridad clara, medible y humana, sin burocracia ni jerga.",
  },
];

const steps = [
  {
    number: "1",
    description: "Dirección y coordinación (vCISO / OSI).",
    gradient: "from-blue-500 to-blue-950",
  },
  {
    number: "2",
    description: "Auditoría y cumplimiento (NIS2, ISO 27001, ENS, RGPD).",
    gradient: "from-blue-950 to-blue-800",
  },
  {
    number: "3",
    description: "Pentesting y evaluación técnica.",
    gradient: "from-blue-900 to-black",
  },
  {
    number: "4",
    description: "Operación gestionada 24/7 (detección y respuesta).",
    gradient: "from-blue-900 to-black",
  },

  {
    number: "5",
    description: "Formación y concienciación para toda la plantilla. ",
    gradient: "from-blue-900 to-black",
  },
];
const caract2 = [
  "Claridad: Explicamos opciones y riesgos en lenguaje simple y dejamos próximos pasos por escrito. ",
  "Cercanía: Asignamos un responsable que conoce tu contexto y responde rápido.",
  "Excelencia útil: Entregables cortos y accionables; lo que proponemos, lo implantamos. ",
  "Responsabilidad: No pagamos rescates. Priorizamos recuperación, trazabilidad y comunicación honesta.",
  "Mejora continua Revisiones periódicas con métricas y una lista breve de mejoras. ",
];

const EquipoValores = () => {
  const servicios = [
    {
      nombre: "vCISO / Dirección de seguridad",
      path: "/es/servicios/consultoria-ciso",
    },
    {
      nombre: "Auditoría & Compliance (NIS2, ISO 27001, ENS, RGPD)",
      path: "/es/servicios/auditoria-compliance",
    },
    {
      nombre: "Transformación digital estratégica",
      path: "/es/servicios/transformacion-digital",
    },
    {
      nombre: "Oficina Técnica / OSI",
      path: "/es/servicios/oficina-seguridad",
    },
    { nombre: "MDR / SOC 24/7", path: "/es/productos/deteccion-24x7" },
    {
      nombre: "Formación & Concienciación",
      path: "/es/servicios/formacion-concienciacion",
    },
  ];

  const problems = [
    {
      title: "Diagnóstico claro",
      desc: "Evaluamos exposición y prioridades sin llenar de siglas.",
      step: "1",
    },
    {
      title: "Plan accionable (4–6 semanas)",
      desc: "Pocas tareas, responsables y fechas. Impacto primero. ",
      step: "2",
    },

    {
      title: "Implantación guiada",
      desc: "Mejoramos con lo que ya tienes y añadimos solo lo imprescindible.",
      step: "3",
    },
    {
      title: "Formación breve y hábitos",
      desc: "Mensajes cortos, simulaciones sencillas y recordatorios.",
      step: "4",
    },
    {
      title: "Evidencias para dirección",
      desc: "Informes claros con avances, riesgos y próximos pasos.",
      step: "5",
    },

    {
      title: "Revisión periódica",
      desc: "Mensual o trimestral, para mantener y mejorar sin fricción. ",
      step: "6",
    },
    {
      title: "Cercanía y respuesta ágil",
      desc: "Un responsable asignado que resuelve y coordina.",
      step: "7",
    },
  ];

  return (
    <>
      <SEOMetaTags
        title="Equipo y valores | TutumSec"
        description="Personas cercanas, expertas y claras. Conoce al equipo multidisciplinar de TutumSec, nuestra misión, visión y valores, y cómo trabajamos para convertir la seguridad en resultados medibles. "
        canonical="https://tutumsec.io/sobre-nosotros/equipo-valores/"
      />

      <Navbar />
      <main className="min-h-screen ">
        <section className="relative flex items-center min-h-screen py-20 px-6 bg-gray-100 relative overflow-hidden bg-[url('/uploads/background/bg-security.png')] bg-cover w-full bg-center">
          <div className="justify-center container max-w-5xl text-center ">
            <h1 className="animate-slide-up text-5xl mb-6 font-bold text-white mx-auto bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              ¿Quiénes somos?{" "}
            </h1>
            <p className="mt-6 animate-slide-up text-white font-medium text-xl m-2">
              Personas cercanas y expertas que hablan claro, actúan rápido y
              acompañan de verdad. <br /> Nuestro objetivo: que la
              ciberseguridad se entienda en minutos y se note en semanas.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
              style={{
                animationDelay: "0.9s",
                animationFillMode: "forwards",
              }}
            >
              <Link
                to="https://calendly.com/ayub-tutumsec/30min"
                className="mt-6 px-6 py-2 rounded-full text-lg text-white font-medium transition-transform whitespace-nowrap hover:scale-[1.03] shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                style={{
                  background:
                    "linear-gradient(320deg, #082343ff 0%, #1d52a8ff 100%)", // blue-400 -> blue-500
                }}
              >
                Reserva tu consultoría gratuita →
              </Link>
            </div>{" "}
          </div>
        </section>

        <section className="pb-6 bg-white mt-20">
          <div className="grid grid-cols-2 max-w-6xl mx-auto">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Nuestro equipo{" "}
              </h2>
            </div>

            {/* Tres columnas lado a lado en desktop */}
            <div className="items-stretch">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`mb-6 bg-gradient-to-r ${step.gradient} rounded-2xl text-white relative group shadow-lg p-8 flex`}
                >
                  {/* Columna izquierda: número grande */}
                  <div className="text-5xl font-extrabold leading-none mr-6 opacity-90 w-20 shrink-0 flex items-center justify-center">
                    {step.number}
                  </div>

                  {/* Columna derecha: descripción */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-lg leading-relaxed">
                      {step.description}
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
          </div>
          <div className="p-5 text-center text-gray-600 font-itallic max-w-5xl mx-auto">
            <p className="text-sm">
              +10 años de media, experiencia multisectorial.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-tutumsec-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                ¿Cómo trabajamos?{" "}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => {
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
                      <div className="w-10 h-10 font-medium text-xl bg-primary/10 rounded-full text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        {problem.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                          {problem.title}
                        </h3>
                        <h2 className="text-md text-gray-600 mb-3 transition-colors duration-300 group-hover:text-primary leading-relaxed">
                          {problem.desc}
                        </h2>
                      </div>
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
          <div className="max-w-4xl mx-auto text-center relative z-30">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Propósito
            </h1>
            <h2 className="text-white/80 text-center pb-6 font-medium">
              Hacer que la seguridad sume al negocio: menos paradas, menos
              riesgos y decisiones claras para dirección.{" "}
            </h2>

            <div className="container pt-6 max-w-3xl space-y-8">
              {risks.map((risk, index) => (
                <div key={index} className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl text-left font-semibold mb-2 text-blue-300">
                    {risk.title}
                  </h3>
                  <p className="text-white  text-left leading-relaxed">
                    {risk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === BLOQUE: Vigilancia Continua ===*/}
        <section className="bg-muted/50 pt-20  pb-20">
          <div className="pb-6 flex justify-center content-center container max-w-6xl grid md:grid-cols-6">
            <div className="col-span-2 mr-20">
              <h2 className="text-3xl font-bold text-primary mb-2">
                Nuestros valores{" "}
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

        <div className="bg-muted/50 text-center py-12 pb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Seguridad clara, sin rodeos y con resultados que se ven.
          </h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EquipoValores;
