import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Shield,
  Clock,
  FileText,
  Users,
  Settings,
} from "lucide-react";

const OficinaSeguridad = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es obligatorio tener una OSI con NIS2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No impone un nombre concreto, pero exige gobernanza, medidas y reporting; una OSI formaliza y prueba el cumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los plazos de notificación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alerta 24 h, notificación 72 h, informe 1 mes (o intermedio si procede).",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sanciones hay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hasta 10 M€ o 2 % (esenciales) y 7 M€ o 1,4 % (importantes).",
        },
      },
    ],
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Oficina de Seguridad de la Información (OSI) – NIS2",
    description:
      "Diseñamos y operamos tu Oficina de Seguridad de la Información para cumplir NIS2: gobernanza, políticas, gestión de riesgos, notificación 24/72 h, formación y auditoría continua.",
    provider: {
      "@type": "Organization",
      name: "TutumSec",
    },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
  };

  return (
    <>
      <Helmet>
        <title>
          Oficina de Seguridad de la Información (OSI) · Cumplimiento NIS2 |
          TutumSec
        </title>
        <meta
          name="description"
          content="Diseñamos y operamos tu Oficina de Seguridad de la Información para cumplir NIS2: gobernanza, políticas, gestión de riesgos, notificación 24/72 h, formación y auditoría continua. Barcelona, Cataluña, Andorra y España."
        />
        <link
          rel="canonical"
          href="https://tutumsec.com/servicios/oficina-seguridad-informacion-nis2"
        />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.com/ca/serveis/oficina-seguretat-informacio-nis2"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/en/services/information-security-office-nis2"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/servicios/oficina-seguridad-informacion-nis2"
          hrefLang="es"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Servicios", href: "/es/servicios" },
              { label: "Oficina de Seguridad de la Información (OSI) – NIS2" },
            ]}
          />

          {/* BLOQUE 1 · HERO */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Oficina de Seguridad de la Información (OSI) para cumplir NIS2
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8">
                Gobernanza, riesgo y cumplimiento activados desde el día uno:
                políticas, métricas y respuesta en 24/72 h.
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Aprobamos con tu dirección el charter OSI y el plan de
                    riesgos.
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Runbooks NIS2 con alerta temprana en 24 h y notificación a
                    72 h.
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Tablero C-Level con KPIs de ciberseguridad y evidencias de
                    cumplimiento.
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Reserva consultoría gratis 15'
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Descarga "Checklist OSI NIS2 (24/72/30)"
                </Button>
              </div>
            </div>
          </section>

          {/* BLOQUE 2 · DOLOR → IMPACTO NEGOCIO */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                ¿Tu empresa podría notificar un incidente en 24 horas hoy?
              </h2>
              <div className="prose prose-lg max-w-none text-center">
                <p>
                  Con NIS2, las entidades deben cumplir medidas técnicas y
                  organizativas y reportar incidentes significativos siguiendo
                  plazos estrictos (24 h/72 h/1 mes). Además, la dirección es
                  responsable de aprobar y supervisar la gestión de riesgos. No
                  llegar a tiempo o carecer de evidencias puede traducirse en
                  sanciones y en pérdida de confianza de clientes y reguladores.
                </p>
              </div>
            </div>
          </section>

          {/* BLOQUE 3 · QUÉ ES UNA OSI */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                La OSI que alinea seguridad con negocio
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Settings className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Gobernanza y políticas
                    </h3>
                    <p className="text-muted-foreground">
                      Definimos el marco de gobierno (roles, RACI, comités),
                      políticas y procedimientos (accesos, cifrado, continuidad,
                      comunicaciones seguras, MFA) alineados con NIS2/ISO
                      27001/ENS.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Gestión de riesgos y cadena de suministro
                    </h3>
                    <p className="text-muted-foreground">
                      Mapa de activos críticos, análisis de riesgos, controles y
                      due diligence a proveedores con cláusulas NIS2 y
                      evidencias de cumplimiento.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Respuesta e informes 24/72/30
                    </h3>
                    <p className="text-muted-foreground">
                      Playbooks para alerta temprana, notificación y reporte
                      final; laboratorio de evidencias para
                      auditorías/regulador.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Cultura y formación continua
                    </h3>
                    <p className="text-muted-foreground">
                      Plan de concienciación por rol (dirección, managers,
                      staff, OT, IT) con simulaciones de phishing y talleres
                      ejecutivos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOQUE 4 · CÓMO TRABAJAMOS */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Metodología en 4 pasos
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Diagnóstico OSI & Gap NIS2",
                    desc: "(políticas, riesgos, cadena de suministro, incident response).",
                  },
                  {
                    step: 2,
                    title: "Hoja de ruta 12-36 meses",
                    desc: "con prioridades/ROI y métricas.",
                  },
                  {
                    step: 3,
                    title: "Implantación",
                    desc: "(políticas aprobadas por dirección, controles y tablero ejecutivo).",
                  },
                  {
                    step: 4,
                    title: "Operación continua",
                    desc: "(comité OSI trimestral, auditoría interna, ejercicios de crisis y mejora continua).",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BLOQUE 5 · ENTREGABLES */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Entregables "listos para inspección"
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Charter OSI + organigrama y RACI.",
                  "Políticas: control de accesos, cifrado, copias y DR, comunicaciones seguras, gestión de incidentes.",
                  "Registro de riesgos + plan de tratamiento y evidencias.",
                  "Runbooks NIS2 (24/72/30) + plantillas de reporte al CSIRT/autoridad.",
                  "Plan de formación & microlearning con simulación de phishing.",
                  "Cuadro de mando (KPIs: MTTR, cumplimiento de controles, % proveedores evaluados).",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BLOQUE 6 · DIFERENCIALES TUTUMSEC */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Por qué nos eligen
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Oficina completa
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    no "solo" CISO: gobernanza + cumplimiento + evidencias
                    listas.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Enfoque humano y ejecutivo
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    formamos a la dirección para la toma de decisiones
                    informadas.
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Alineado con marcos locales
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    ISO 27001, ENS y guías de INCIBE-CERT.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE 7 · CASOS DE ÉXITO */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Industria regulada (NIS2)
                    </h3>
                    <p className="text-muted-foreground">
                      Comité OSI creado, políticas y runbooks 24/72; inspección
                      superada con observaciones menores.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Grupo multisector
                    </h3>
                    <p className="text-muted-foreground">
                      Evaluación de proveedores críticos, cláusulas
                      contractuales NIS2 y tablero de riesgos en dirección.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOQUE 8 · FAQ */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Es obligatorio tener una OSI con NIS2?
                  </AccordionTrigger>
                  <AccordionContent>
                    No impone un nombre concreto, pero exige gobernanza, medidas
                    y reporting; una OSI formaliza y prueba el cumplimiento.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Cuáles son los plazos de notificación?
                  </AccordionTrigger>
                  <AccordionContent>
                    Alerta 24 h, notificación 72 h, informe 1 mes (o intermedio
                    si procede).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Qué sanciones hay?</AccordionTrigger>
                  <AccordionContent>
                    Hasta 10 M€ o 2 % (esenciales) y 7 M€ o 1,4 % (importantes).
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* BLOQUE 9 · CTAs */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button size="lg" className="px-8">
                  Reserva consultoría gratis 15'
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Descarga "Checklist OSI NIS2 (24/72/30)"
                </Button>
              </div>
              <Button variant="link" className="text-sm">
                Solicita ejemplo de "Charter OSI" (PDF)
              </Button>
            </div>
          </section>

          {/* BLOQUE 10 · Enlaces internos */}
          <section className="py-12 bg-muted">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">
                      Consultoría CISO
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      (vCISO / CISO as a Service)
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">
                      Auditoría & Compliance NIS2
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Gap-Analysis completo
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">
                      Transformación Digital Estratégica
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Digitalización segura
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">
                      Detección 24/7
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      (SOC/MDR/XDR)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OficinaSeguridad;
