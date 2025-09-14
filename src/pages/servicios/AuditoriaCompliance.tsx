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
import { CheckCircle, Shield, Search, TrendingUp, Clock } from "lucide-react";

const AuditoriaCompliance = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué cubre exactamente la auditoría NIS 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Infraestructura (redes, servidores, OT), procesos, políticas y gobierno. Incluye pentesting y gap-analysis normativo completo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto dura el diagnóstico inicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre 10 y 15 días hábiles, según el número de activos y la documentación disponible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito auditoría si ya tengo proveedor IT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu MSP mantiene la infraestructura; nosotros garantizamos gobierno, cumplimiento y visibilidad ejecutiva. Ambos servicios se complementan.",
        },
      },
    ],
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auditoría & Compliance NIS2",
    description:
      "Pentesting profundo + Gap-Analysis NIS 2: el camino rápido y seguro hacia el cumplimiento total.",
    provider: {
      "@type": "Organization",
      name: "TutumSec",
    },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
  };

  return (
    <>
      <Helmet>
        <title>Auditoría & Compliance NIS2 para empresas | TutumSec</title>
        <meta
          name="description"
          content="Gap-analysis NIS2 + auditoría técnica y plan de adecuación. Evidencias para auditorías y cadena de suministro."
        />
        <link
          rel="canonical"
          href="https://tutumsec.io/es/servicios/auditoria-compliance-nis2/"
        />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/auditoria-compliance-nis2/"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/ca/serveis/auditoria-compliance-nis2/"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/en/services/nis2-audit-compliance/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/auditoria-compliance-nis2/"
          hrefLang="x-default"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Servicios", href: "/es/servicios" },
              { label: "Auditoría & Compliance NIS2" },
            ]}
          />

          {/* BLOQUE 1 · HERO */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Auditoría técnica + Compliance NIS2 para blindar tu empresa en
                Barcelona, Girona, Cataluña y Andorra
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8">
                Pentesting profundo + Gap-Analysis NIS 2: el camino rápido y
                seguro hacia el cumplimiento total.
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Pentesting avanzado con informe ejecutivo ≤ 15 días
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Cumplimiento NIS2 / ISO 27001 sin fricciones
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Reducción del –30 % de vulnerabilidades críticas en 6 meses
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Dashboard de riesgos en tiempo real para tu comité de
                    dirección
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Reserva sesión de diagnóstico gratis 15'
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Descarga la Checklist "15 Controles Esenciales NIS 2"
                </Button>
              </div>
            </div>
          </section>

          {/* BLOQUE 2 · PAIN → VISIÓN */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                ¿Auditoría técnica o cumplimiento? Necesitas ambos… y rápido
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-center mb-6">
                  El 43 % de los ciberataques que registra ENISA impacta en
                  PYMEs y solo un 14 % tiene un plan de respuesta. A muchas
                  empresas les sobran herramientas sueltas y les faltan:
                </p>
                <ul className="text-center space-y-2 mb-6">
                  <li>
                    Una auditoría ofensiva que revele qué puertas están
                    realmente abiertas.
                  </li>
                  <li>
                    Un plan de compliance que traduzca normas en acciones
                    concretas.
                  </li>
                </ul>
                <p className="text-center">
                  Con TutumSec conviertes la auditoría en un activo estratégico:
                  identificamos brechas reales –desde firewalls hasta políticas
                  internas–, alineamos tus controles con NIS 2 e ISO 27001 y
                  situamos la seguridad al nivel de negocio. lo tienes todo en
                  un único servicio: Audit-to-Comply.
                </p>
              </div>
            </div>
          </section>

          {/* BLOQUE 3 · BENEFICIOS CLAVE */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                ¿Por qué nuestra Auditoría & Compliance NIS 2 es diferente?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Search className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Pentesting ofensivo 360°
                    </h3>
                    <p className="text-muted-foreground">
                      Simulamos ataques multi-vector para cloud, M365, VPN,
                      OT/ICS y redes WiFi para localizar fallos antes que los
                      atacantes.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Gap-Analysis NIS2 & ISO 27001
                    </h3>
                    <p className="text-muted-foreground">
                      Mapeamos controles, políticas y evidencias; señalamos
                      priorizaciones y quick-wins.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Coste predecible y escalable
                    </h3>
                    <p className="text-muted-foreground">
                      Suscripción modular: pagas solo por los activos y
                      servicios que realmente necesitas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Validación & seguimiento continuo
                    </h3>
                    <p className="text-muted-foreground">
                      Re-test trimestral, KPIs de madurez y asistencia en
                      auditorías externas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOQUE 4 · METODOLOGÍA EN 4 PASOS */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                PDCA + Zero Trust en solo cuatro fases
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-4 text-left">Paso</th>
                      <th className="p-4 text-left">Qué hacemos</th>
                      <th className="p-4 text-left">Entregable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Diagnóstico</td>
                      <td className="p-4">Pentest + Gap-Analysis integral</td>
                      <td className="p-4">Informe técnico + ejecutivo</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Roadmap</td>
                      <td className="p-4">
                        Hoja de ruta 12-36 meses (ROI y prioridades)
                      </td>
                      <td className="p-4">Plan de inversiones</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Gobernanza</td>
                      <td className="p-4">
                        Políticas, roles y cuadros de mando
                      </td>
                      <td className="p-4">SGSI listo para auditoría</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Seguimiento</td>
                      <td className="p-4">
                        Revisiones trimestrales, recertificación
                      </td>
                      <td className="p-4">KPI dashboard 24/7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* BLOQUE 5 · CASOS DE ÉXITO */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                Casos de éxito recientes
              </h3>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Casos reales: de "riesgo alto" a "compliant" en tres meses
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      "Pasamos de desconocer nuestros puntos débiles a cumplir
                      con la normativa NIS2. TutumSec nos acompañó de principio
                      a fin."
                    </p>
                    <div className="text-sm">
                      <strong>— Laura R., COO</strong>
                      <br />
                      <span className="text-muted-foreground">
                        empresa logística (120 empleados)
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOQUE 6 · CERTIFICACIONES & PARTNERS */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-8">
                Garantía de rigor y tecnología puntera
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Organizaciones</h4>
                  <p className="text-muted-foreground">
                    ISO 27001 · Agencia de Ciberseguridad de Cataluña · INCIBE ·
                    ASCICAT
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Partners</h4>
                  <p className="text-muted-foreground">
                    BlackMDR· Fortinet · Cisco Secure · SentinelOne ·
                    CrowdStrike
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE 7 · PREGUNTAS FRECUENTES */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Preguntas frecuentes
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Qué cubre exactamente la auditoría NIS 2?
                  </AccordionTrigger>
                  <AccordionContent>
                    Infraestructura (redes, servidores, OT), procesos, políticas
                    y gobierno. Incluye pentesting y gap-analysis normativo
                    completo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Cuánto dura el diagnóstico inicial?
                  </AccordionTrigger>
                  <AccordionContent>
                    Entre 10 y 15 días hábiles, según el número de activos y la
                    documentación disponible.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Necesito auditoría si ya tengo proveedor IT?
                  </AccordionTrigger>
                  <AccordionContent>
                    Tu MSP mantiene la infraestructura; nosotros garantizamos
                    gobierno, cumplimiento y visibilidad ejecutiva. Ambos
                    servicios se complementan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿La Directiva NIS2 me afecta realmente?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sí, si operas infraestructuras críticas, servicios
                    esenciales o dependes de la cadena de suministro de sectores
                    regulados.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    ¿Necesito otra herramienta de seguridad para aprobar NIS2?
                  </AccordionTrigger>
                  <AccordionContent>
                    No siempre. Primero analizamos lo que ya tienes; luego
                    proponemos sólo lo imprescindible.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* BLOQUE 8 · CTA FINAL */}
          <section className="py-12 bg-primary text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Quieres alinear tu seguridad con NIS 2 antes de la fecha
                límite?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Reserva tu diagnóstico gratuito ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 text-white border-white hover:bg-white hover:text-primary"
                >
                  Descarga la Checklist "15 Controles Esenciales NIS 2"
                </Button>
              </div>
            </div>
          </section>

          {/* BLOQUE 9 · CROSS-SELL */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Consultoría CISO Estratégica
                    </h3>
                    <p className="text-muted-foreground">
                      vCISO para PYMEs y medianas empresas
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Transformación Digital Segura
                    </h3>
                    <p className="text-muted-foreground">
                      automatización & IA alineada al negocio
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      SOC / MDR 24×7
                    </h3>
                    <p className="text-muted-foreground">
                      detección y respuesta gestionada con SLA ≤ 15 min
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

export default AuditoriaCompliance;
