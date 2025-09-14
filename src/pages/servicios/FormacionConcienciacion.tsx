import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  Monitor,
  Factory,
  Wrench,
  Smartphone,
  Compass,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOMetaTags from "@/components/SEOMetaTags";

const FormacionConcienciacion = () => {
  const breadcrumbItems = [
    { label: "Servicios", href: "/es/servicios" },
    { label: "Formación y Concienciación" },
  ];

  const badges = [
    "ISO 27001",
    "Agència de Ciberseguretat de Catalunya",
    "INCIBE",
    "ASCICAT",
  ];

  const quickWins = [
    "Plan a medida por roles (Dirección, Managers, Oficina, OT/Planta, IT/Helpdesk, Comercial)",
    "Campañas de phishing trimestrales o semestrales con métricas claras",
    "Informes de formación listos para auditorías (NIS2/ISO/ENS)",
  ];

  const solutionCards = [
    {
      title: "Microlearning mensual (10')",
      description:
        "Píldoras breves y accionables, con ejemplos reales del día a día (oficina, campo, planta).",
      deliverables:
        'vídeos/carruseles, mini-quizzes, guía "1 página" por tema.',
    },
    {
      title: "Phishing simulado con corrección guiada",
      description:
        "Campañas periódicas según riesgo del área; informes con métricas y plan de mejora por equipo.",
      deliverables:
        "informe ejecutivo, métricas (tasa de clics, reportes), recomendaciones.",
    },
    {
      title: "Talleres por rol y casos reales",
      description:
        'Sesiones presenciales o por videollamada, con ejercicios prácticos, role-play de incidentes y "qué hacer si…".',
      deliverables:
        "material de apoyo, pósters/infografías, checklist de buenas prácticas.",
    },
    {
      title: "Coaching de dirección (comité/gerencia)",
      description:
        "Gobernanza, indicadores y decisiones de negocio: cómo priorizar, cómo responder y qué exigir a TI/partners.",
      deliverables:
        "briefing trimestral, guía de decisiones, hoja de ruta de cultura.",
    },
  ];

  const roleItineraries = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Dirección / Comité",
      objective: "Tomar decisiones y medir avance.",
      contents: [
        "Riesgo y negocio: impacto, apetito de riesgo, prioridades.",
        "Requisitos mínimos NIS2/ISO 27001 y evidencias de cultura.",
        "Gestión de crisis y reputación (mensajes, stakeholders).",
      ],
      deliverables:
        "Guía de decisiones (1 pág.), dashboard de cultura, briefing trimestral.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Managers / Mandos intermedios",
      objective: "Bajar políticas a procesos y equipos.",
      contents: [
        "Políticas prácticas (accesos, datos, terceros) y reporting.",
        "Seguridad en procesos y trabajo híbrido.",
        "Cómo liderar la cultura (refuerzo positivo, hábitos).",
      ],
      deliverables:
        "Fichas de proceso, checklist de equipo, plantilla de reporte.",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Staff de oficina",
      objective: "Reducir clics de riesgo y fugas de información.",
      contents: [
        "Phishing real vs. simulado: señales y reacción.",
        "Contraseñas y MFA; compartición segura.",
        "Datos personales y documentos: lo que sí y lo que no.",
      ],
      deliverables: "Píldoras + cartelera de buenas prácticas, mini-quiz.",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "OT / Planta",
      objective: "Minimizar fallos humanos en sistemas industriales.",
      contents: [
        "Uso de USB y mantenimiento; principio de mínimo privilegio.",
        "Red segregada y protocolos en planta.",
        "Qué hacer ante comportamientos anómalos.",
      ],
      deliverables: "Taller in situ, pósters por zona, checklist de turno.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "IT / Helpdesk",
      objective: "Convertir IT en motor de cultura.",
      contents: [
        "Hardening básico de usuario y dispositivos.",
        "Onboarding/Offboarding seguro y JML.",
        "Playbooks de respuesta de primer nivel.",
      ],
      deliverables: "Guías operativas, playbooks L1, lista de verificación.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Comercial / Campo",
      objective: "Cierre seguro sin fricciones.",
      contents: [
        "Email y movilidad segura; redes públicas.",
        "Compartición con terceros y NDAs.",
        "Protección de información sensible en visitas.",
      ],
      deliverables: "Kit móvil (checklist + tips), micro-training itinerante.",
    },
  ];

  const methodologySteps = [
    "Diagnóstico rápido (1-2 semanas): encuesta, revisión de incidentes y priorización por rol.",
    "Plan por roles: temario, frecuencia y soportes",
    "Despliegue: microlearning mensual + phishing + talleres/coaching.",
    "Medición simple: click-rate, report-rate, completion.",
    "Informe para auditoría: resultados, evidencias y plan de mejora.",
  ];

  const expectedResults = [
    "Menos clics en campañas de phishing y más reportes tempranos",
    "Equipos con criterios claros ante emails, adjuntos y accesos",
    "Dirección con visibilidad y decisiones informadas (NIS2/ISO/ENS)",
  ];

  const faqs = [
    {
      question: "¿La formación es presencial o online?",
      answer:
        "Ambas. Combinamos presencial/videollamada con contenido SaaS. En un futuro próximo integraremos LMS.",
    },
    {
      question: "¿Está adaptado a Barcelona/Girona/Cataluña/Andorra?",
      answer:
        "Sí. Adaptamos lenguaje, ejemplos y calendario. Disponemos de contenidos en ES y opción CA.",
    },
    {
      question: "¿Cuánto tiempo requiere el programa?",
      answer:
        "Las píldoras son de 10 minutos; talleres y simulaciones se planifican para no interrumpir la operación.",
    },
    {
      question: "¿Cada cuánto se hace el phishing simulado?",
      answer: "Trimestral o semestral, según madurez y objetivos.",
    },
    {
      question: "¿En qué idioma está el contenido?",
      answer: "Español por defecto; catalán disponible bajo demanda.",
    },
    {
      question: "¿Ofrecen bonificación FUNDAE?",
      answer:
        "Lo gestionamos externamente. Entregamos informes válidos para auditoría (NIS2/ISO/ENS).",
    },
  ];

  const crossSellServices = [
    {
      title: "Consultoría CISO (vCISO)",
      description: "Gobierno, KPIs y cultura",
      path: "/es/servicios/consultoria-ciso",
    },
    {
      title: "Auditoría & Compliance NIS2",
      description: "Gap-Analysis + plan de adecuación",
      path: "/es/servicios/auditoria-compliance-nis2",
    },
    {
      title: "Auditoría técnica & Pentesting",
      description: "Validación ofensiva",
      path: "/es/servicios/auditoria-compliance-nis2",
    },
    {
      title: "SOC / MDR 24×7",
      description: "Vigilancia y respuesta gestionada",
      path: "/es/servicios/respuesta-incidente",
    },
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Formación y Concienciación en Ciberseguridad",
    serviceType:
      "Programa de formación y concienciación en ciberseguridad (awareness NIS2)",
    provider: {
      "@type": "Organization",
      name: "TutumSec",
    },
    areaServed: ["ES-CT", "ES-GI", "AD"],
    description:
      "Programa de concienciación NIS2 con microlearning mensual, phishing simulado y coaching directivo. Informes para auditoría y resultados medibles.",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: "/es/servicios",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Formación y Concienciación",
      },
    ],
  };

  return (
    <>
      <SEOMetaTags
        title="Formación y Concienciación en Ciberseguridad para PYMEs | Barcelona, Girona y Andorra – TutumSec"
        description="Programa de concienciación NIS2 con microlearning mensual, phishing simulado y coaching directivo. Informes para auditoría y resultados medibles. Diagnóstico gratis."
      />

      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* BLOQUE 1 · HERO */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Formación y concienciación en ciberseguridad que cambian hábitos
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                De los clics por costumbre a una cultura de seguridad real:
                microlearning mensual, phishing simulado y talleres por rol con
                reportes para auditorías.
              </h2>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {badge}
                  </Badge>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Quick-wins:</h3>
                <ul className="text-left max-w-4xl mx-auto space-y-2">
                  {quickWins.map((win, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{win}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg">
                  Reserva diagnóstico gratuito 15'
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Descarga el Kit Anti-Phishing
                </Button>
              </div>
            </div>
          </section>

          {/* BLOQUE 2 · PAIN → PROBLEM */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              El factor humano sigue siendo el eslabón más débil
            </h2>
            <p className="text-lg text-muted-foreground">
              La mayoría de incidentes empiezan con un clic impulsivo o una mala
              práctica: contraseñas reutilizadas, adjuntos abiertos sin validar,
              uso de USB en planta, sesiones sin bloqueo… En PYMEs y
              organizaciones reguladas, esto se traduce en riesgos operativos y
              sanciones potenciales. Sin una formación continua y por rol, el
              cambio de hábitos no sucede.
            </p>
          </section>

          {/* BLOQUE 3 · LA SOLUCIÓN TUTUMSEC */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Un programa continuo, práctico y medible
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {solutionCards.map((card, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {card.description}
                    </CardDescription>
                    <div className="text-sm">
                      <strong>Entregables:</strong> {card.deliverables}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Nota legal/compliance:</strong> Incluimos informe de
                formación apto para evidencias de auditoría (NIS2/ISO 27001).
              </p>
            </div>
          </section>

          {/* BLOQUE 4 · ITINERARIOS POR ROL */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              El contenido adecuado para cada persona
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-0"
            >
              {roleItineraries.map((role, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      {role.icon}
                      <span className="ml-3 text-lg font-semibold">
                        {role.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-9">
                      <p className="mb-4">
                        <strong>Objetivo:</strong> {role.objective}
                      </p>
                      <div className="mb-4">
                        <strong>Contenidos clave:</strong>
                        <ul className="mt-2 space-y-1">
                          {role.contents.map((content, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{content}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        <strong>Entregables:</strong> {role.deliverables}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* BLOQUE 5 · CALENDARIO, FORMATOS Y LENGUAS */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ritmo y formatos que no interrumpen el negocio
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  <li>
                    <strong>Frecuencia:</strong> microlearning mensual (10').
                  </li>
                  <li>
                    <strong>Campañas de phishing:</strong> trimestrales y/o
                    semestrales según riesgo.
                  </li>
                  <li>
                    <strong>Talleres/coaching:</strong> agenda flexible (mañanas
                    9–14h, tardes 15–17h).
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li>
                    <strong>Modos:</strong> presencial, videollamada y
                    contenidos SaaS.
                  </li>
                  <li>
                    <strong>Idiomas:</strong> español y catalán
                  </li>
                  <li>
                    <strong>Comunicación:</strong> y soporte continuo.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* BLOQUE 6 · METODOLOGÍA EN 5 PASOS */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              De la intención al hábito: método TutumSec
            </h2>
            <div className="space-y-4">
              {methodologySteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BLOQUE 7 · RESULTADOS ESPERADOS */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Lo que verás en 3-6 meses
            </h2>
            <ul className="space-y-3">
              {expectedResults.map((result, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{result}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground">
              (Las cifras exactas se miden en tu entorno; trabajamos objetivos
              realistas por fase.)
            </p>
          </section>

          {/* BLOQUE 8 · RECURSOS DESCARGABLES */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Empieza hoy a cambiar hábitos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kit Anti-Phishing</CardTitle>
                  <CardDescription>
                    Plantillas + política lista para adaptar
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Checklist "Cultura de Seguridad en 30 días"
                  </CardTitle>
                  <CardDescription>
                    Guía paso a paso para implementar una cultura de seguridad
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg">Solicitar diagnóstico gratuito</Button>
              <Button variant="outline" size="lg">
                Descargar Kit Anti-Phishing
              </Button>
            </div>
          </section>

          {/* BLOQUE 9 · CTA + LEAD MAGNET */}
          <section className="mb-16 bg-muted p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Empezamos con un piloto de 90 días?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button size="lg">Reserva diagnóstico gratuito 15'</Button>
              <Button variant="outline" size="lg">
                Descarga el Kit Anti-Phishing
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Nota:</strong> Solicita presupuesto
            </p>
          </section>

          {/* BLOQUE 10 · FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Preguntas frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* BLOQUE 11 · CROSS-SELL */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              La cultura es tu primera línea de defensa
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg">Solicitar diagnóstico gratuito</Button>
              <Button variant="outline" size="lg">
                Solicitar presupuesto
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {crossSellServices.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FormacionConcienciacion;
