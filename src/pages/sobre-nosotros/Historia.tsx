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
  Clock,
  Cloud,
  Cog,
  Globe,
  Headphones,
  MapPin,
  Monitor,
  Phone,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import ServicesSection from "@/components/ServicesSection";

const steps = [
  {
    number: "1",
    description: "Experiencia y know-how acumulado.",
    gradient: "from-blue-500 to-blue-950",
  },
  {
    number: "2",
    description: "Infraestructura y procesos contrastados.",
    gradient: "from-blue-950 to-blue-800",
  },
  {
    number: "3",
    description: "Equipo senior de referencia cuando hace falta.",
    gradient: "from-blue-900 to-black",
  },
];
const locations = [
  {
    name: "Andorra",
    address1: "Passeig de l'Arnaldaeta de Caboet, 11, 2n 2a",
    address2: "AD700 Escaldes Engordany",
    phone: "+376 862 762",
    mapSrc:
      "https://www.google.com/maps?q=Passeig%20de%20l'Arnaldaeta%20de%20Caboet%2011%20Escaldes%20Engordany&output=embed",
  },
  {
    name: "Barcelona",
    address1: "Carrer de l'Aprestadora, 12, entlo 1",
    address2: "08902 L'Hospitalet de Llobregat — Barcelona",
    phone: "+34 93 296 48 02",
    mapSrc:
      "https://www.google.com/maps?q=Carrer%20de%20l'Aprestadora%2012%20L'Hospitalet%20de%20Llobregat&output=embed",
  },
  {
    name: "Girona",
    address1: "Carrer Pic de Peguera, 11",
    address2: "17003 — Girona",
    phone: "+34 972 462 999",
    mapSrc:
      "https://www.google.com/maps?q=Carrer%20Pic%20de%20Peguera%2011%20Girona&output=embed",
  },
];

const Historia = () => {
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
      title: "Enfoque premium y claro, orientado a negocio.",
      icon: Star,
    },
    {
      title: "Equipo especializado en seguridad.",
      icon: Shield,
    },
    {
      title: "Proximidad y acompañamiento: responsables asignados. ",
      icon: Users,
    },
    {
      title: "Resultados medibles y entregables sencillos para dirección.",
      icon: TrendingUp,
    },
  ];

  return (
    <>
      <SEOMetaTags
        title="Historia de TutumSec | De la experiencia a la claridad"
        description="TutumSec nace como spin-off premium de BDR Group. Convertimos experiencia de más de 25 años en seguridad clara y útil: vCISO, auditorias, compliance, pentesting, SOC 24/7 y formación, con trato cercano."
        canonical="https://tutumsec.io/sobre-nosotros/historia/"
      />

      <Navbar />
      <main className="min-h-screen ">
        <section className="relative flex items-center min-h-screen p-20 px-6 bg-gray-100 relative overflow-hidden bg-[url('/uploads/background/bg-security.png')] bg-cover w-full bg-center">
          <div className="justify-center container text-left">
            <div>
              <h1 className="animate-slide-up text-7xl mb-6 font-bold text-white mx-auto bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Historia de Tutumsec
              </h1>
              <p className="mt-2 animate-slide-up max-w-3xl text-white text-medium text-2xl m-2">
                TutumSec nace como spin-off premium de BDR Group, con un
                objetivo sencillo: Transformar casi tres décadas de trabajo en
                TIC y software en servicios de ciberseguridad especializados que
                se entienden a la primera y aportan resultados.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-6 bg-white mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Lo que heredamos{" "}
              </h2>
            </div>

            {/* Tres columnas lado a lado en desktop */}
            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6 items-stretch">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r ${step.gradient} rounded-2xl text-white relative group shadow-lg p-8 flex`}
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
        </section>

        <section className="py-20 px-6 bg-tutumsec-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6 animate-slide-up leading-relaxed">
                Lo que aportamos como marca propia{" "}
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
          <div className="max-w-5xl mx-auto text-center relative z-30">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Hoy{" "}
            </h1>
            <h2 className="text-xl max-w-3xl lg:text-xl text-white/80 mb-8">
              Seguimos creciendo con empresas que valoran la claridad, la
              proximidad y los resultados medibles. Nuestra historia continúa en
              cada proyecto que ayuda a un negocio a estar mejor protegido sin
              frenar su actividad.
            </h2>
          </div>
        </section>

        {/* === BLOQUE 4 · COBERTURA E INTEGRACIONES ===*/}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
                Nuestros Servicios{" "}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 m-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "vCISO / Dirección de seguridad.",
                  icon: Shield,
                  href: "/servicios/consultoria-ciso",
                },
                {
                  category: "Auditoría & Compliance",
                  icon: Search,
                  href: "/servicios/auditoria-compliance-nis2",
                },
                {
                  category: "Pentesting & Evaluación técnica.",
                  icon: Monitor,
                },
                {
                  category: "Transformación digital estratégica.",
                  icon: Cog,
                  href: "/servicios/transformacion-digital-estrategica",
                },
                {
                  category: "Oficina Técnica / OSI.",
                  icon: Building,
                  href: "/servicios/oficina-seguridad-informacion-nis2",
                },
                {
                  category: "MDR / SOC 24/7.",
                  icon: Headphones,
                },
                {
                  category: "Formación & Concienciación.",
                  icon: Book,
                  href: "/servicios/formacion-concienciacion",
                },
              ].map((item, index) => {
                const CardContent = (
                  <div className="p-6 bg-tutumsec-gray-50 p-2 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                    <div className="p-2 items-center justify-center text-center max-h-[30vh]">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-primary leading-tight">
                        {item.category}
                      </h3>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {CardContent}
                  </a>
                ) : (
                  <div key={index}>{CardContent}</div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mb-20 container">
          <div className="text-left mt-20 ">
            <h3 className="text-5xl font-bold text-center mb-20 text-primary">
              Nuestras sedes
            </h3>
          </div>
          {/* Ubicaciones en 3 columnas */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20 gap-6">
            {locations.map((loc) => (
              <Card key={loc.name} className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-foreground">{loc.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Mapa pequeño y en blanco y negro */}
                  <div className="overflow-hidden border ">
                    <iframe
                      src={loc.mapSrc}
                      title={`Mapa ${loc.name}`}
                      loading="lazy"
                      className="w-full h-[120px] filter grayscale contrast-110 brightness-95"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Dirección + Teléfono (sin email) */}
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 mt-0.5" />
                      <span>
                        {loc.address1}
                        <br />
                        {loc.address2}
                      </span>
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <a
                        href={`tel:${loc.phone.replace(/\s|\+/g, "")}`}
                        className="hover:underline"
                      >
                        {loc.phone}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center py-12 pb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Seguridad clara, sin rodeos y con resultados medibles.
          </h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Historia;
