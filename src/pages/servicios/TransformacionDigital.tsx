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
import { CheckCircle, Zap, Shield, TrendingUp, Users, Cpu } from "lucide-react";

const TransformacionDigital = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto dura un proyecto de transformación digital estratégica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "~3-6 meses según alcance.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito cambiar toda mi infraestructura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Solo las piezas que no aportan valor; priorizamos quick-wins y reaprovechamos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo empezar con un piloto low-cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, módulo Fast-Track con presupuesto cerrado.",
        },
      },
    ],
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Transformación Digital Estratégica",
    description:
      "Consultoría estratégica en transformación digital y ciberseguridad que impulsa la productividad y la competitividad de tu PYME.",
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
          Transformación Digital Estratégica para PYMEs en Barcelona, Girona,
          Cataluña y Andorra
        </title>
        <meta
          name="description"
          content="Consultoría estratégica en transformación digital y ciberseguridad que impulsa la productividad y la competitividad de tu PYME. Diagnóstico gratuito, roadmap 360 y acompañamiento humano en Barcelona, Girona, Cataluña y Andorra."
        />
        <link
          rel="canonical"
          href="https://tutumsec.com/servicios/transformacion-digital"
        />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.com/ca/serveis/transformacio-digital"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/en/services/digital-transformation"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.com/servicios/transformacion-digital"
          hrefLang="es"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Servicios", href: "/es/servicios" },
              { label: "Transformación Digital Estratégica" },
            ]}
          />

          {/* BLOQUE 1 · HERO */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                ¿Tu empresa está preparada para la próxima ola digital?
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8">
                Convertimos la transformación digital estratégica en resultados
                medibles: +22 % de eficiencia y 0 sorpresas en ciberseguridad.
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Diagnóstico completo en 10 días
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Roadmap 12-36 meses con ROI &lt; 9 meses
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Ahorro medio 22 % en costes IT/OT
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8">
                  Reserva diagnóstico gratuito 30'
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Descarga Checklist de Digitalización 2025
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Respuesta media &lt; 4 h · Equipo senior local
              </p>
            </div>
          </section>

          {/* BLOQUE 2 · PAIN → VISIÓN */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                De procesos manuales y silos de datos a una empresa ágil y
                segura
              </h2>
              <div className="prose prose-lg max-w-none text-center">
                <p>
                  El 67 % de las PYMEs españolas todavía opera con sistemas
                  fragmentados, lo que eleva sus costes un 30 % y multiplica el
                  riesgo de sanciones NIS2. Con TutumSec obtienes consultoría
                  estratégica en transformación digital Barcelona – Girona
                  -Andorra que alinea tecnología, personas y ciberseguridad.
                </p>
              </div>
            </div>
          </section>

          {/* BLOQUE 3 · BENEFICIOS CLAVE */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                ¿Qué ganas con nuestra transformación digital?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Cpu className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Productividad & Automatización IA/RPA
                    </h3>
                    <p className="text-muted-foreground">
                      KPIs operativos en tiempo real y workflows sin papel.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Seguridad integrada by design
                    </h3>
                    <p className="text-muted-foreground">
                      Zero Trust, encriptado y monitorización MDR 24×7.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <CheckCircle className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Cumplimiento normativo garantizado
                    </h3>
                    <p className="text-muted-foreground">
                      Metodología Compliance 360º (NIS2, RGPD, ISO 27001, ENS).
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Escalabilidad sin sobresaltos de CAPEX
                    </h3>
                    <p className="text-muted-foreground">
                      Modelo de suscripción y partners locales para soporte
                      inmediato.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOQUE 4 · PROCESO EN 4 PASOS */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                PDCA + Zero Trust en 4 pasos
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-4 text-left">Paso</th>
                      <th className="p-4 text-left">Acción</th>
                      <th className="p-4 text-left">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Diagnóstico 360º</td>
                      <td className="p-4">
                        Pentest + análisis de procesos + encuesta cultural
                      </td>
                      <td className="p-4">Informe "Quick-Wins 30 días"</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Roadmap & ROI</td>
                      <td className="p-4">
                        Hoja de ruta 12-36 m (prioridades, budget, responsable)
                      </td>
                      <td className="p-4">Aprobación Board en 1 sesión</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Ejecución ágil</td>
                      <td className="p-4">
                        Sprints de 2 semanas, automatización IA/RPA, formación
                      </td>
                      <td className="p-4">Time-to-value continuado</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Gobernanza & Mejora</td>
                      <td className="p-4">
                        vCISO + OKR trimestral + KPIs productivos
                      </td>
                      <td className="p-4">
                        Evolución continua y auditorías superadas
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* BLOQUE 5 · PROOF & CASOS */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                Empresas que ya han dado el salto
              </h3>

              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    "Automatizamos la gestión de pedidos y ahorramos 1
                    día/semana por persona —sin comprometer la seguridad."
                  </p>
                  <div className="text-sm">
                    <strong>— Carlos M., CEO</strong>
                    <br />
                    <span className="text-muted-foreground">
                      logística (120 empleados)
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* BLOQUE 6 · DIFERENCIAL TUTUMSEC */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Personalización y cercanía: nuestra ventaja competitiva
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Consultores senior in-house
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    (no subcontratamos análisis crítico).
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Acompañamiento humano
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    un único interlocutor que habla tu idioma.
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Integración nativa con ciberseguridad
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    ninguna otra consultora local combina vCISO, SOC/MDR y
                    roadmap digital.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE 7 · LEAD MAGNET & CTA */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Descubre tu potencial digital en 15 minutos
              </h2>

              <div className="bg-muted p-8 rounded-lg mb-8">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Recibirás gratis 👉 Checklist de Digitalización (PDF) +
                    Whitepaper «IA práctica en PYMEs».
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8">
                      Agendar diagnóstico
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE 8 · CROSS-SELL */}
          <section className="py-12 bg-muted">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                Completa tu estrategia
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Consultoría vCISO
                    </h3>
                    <p className="text-muted-foreground">Gobierno & KPIs</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Auditoría NIS2
                    </h3>
                    <p className="text-muted-foreground">técnica + normativa</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      SOC / MDR 24×7
                    </h3>
                    <p className="text-muted-foreground">
                      Detección y respuesta en &lt; 15 min
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOQUE 9 · FAQ */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Cuánto dura un proyecto de transformación digital
                    estratégica?
                  </AccordionTrigger>
                  <AccordionContent>~3-6 meses según alcance.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Necesito cambiar toda mi infraestructura?
                  </AccordionTrigger>
                  <AccordionContent>
                    Solo las piezas que no aportan valor; priorizamos quick-wins
                    y reaprovechamos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Puedo empezar con un piloto low-cost?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sí, módulo Fast-Track con presupuesto cerrado.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* BLOQUE 10 · CTA FINAL */}
          <section className="py-12 bg-primary text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Empieza hoy tu transformación digital con garantías
              </h2>
              <div className="space-y-4">
                <Button size="lg" variant="secondary" className="px-8">
                  Reserva tu sesión gratis
                </Button>
                <p className="text-sm">
                  Sin compromiso · Respuesta en &lt; 4 h · Equipo local
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TransformacionDigital;
