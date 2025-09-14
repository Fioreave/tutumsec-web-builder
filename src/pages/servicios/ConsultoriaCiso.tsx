import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp, Shield, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ConsultoriaCiso = () => {
  const { t } = useTranslation();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultoría CISO as a Service",
    description:
      "Servicio CISO externo premium para PYMEs de Cataluña, Andorra y España. Cumple NIS 2/ISO 27001 en < 90 días y reduce incidentes críticos un 30 %.",
    provider: {
      "@type": "Organization",
      name: "TutumSec",
      url: "https://tutumsec.com",
    },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
    serviceType: "Consultoría CISO estratégica",
  };

  return (
    <>
      <Helmet>
        <title>Consultoría CISO (vCISO) para PYMEs | TutumSec</title>
        <meta
          name="description"
          content="Liderazgo CISO externo, KPIs y roadmap 12–36 meses. Gobierno de seguridad alineado al negocio. Agenda una consultoría gratis."
        />
        <link
          rel="canonical"
          href="https://tutumsec.io/es/servicios/consultoria-ciso/"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/consultoria-ciso/"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/ca/serveis/consultoria-ciso/"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/en/services/ciso-advisory/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/consultoria-ciso/"
          hrefLang="x-default"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Servicios", href: "/es/servicios" },
              { label: "Consultoría CISO" },
            ]}
          />

          {/* BLOQUE 1 · HERO */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t("cisoConsultancyTitle")}
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8">
                {t("cisoConsultancySubtitle")}
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Cumplimiento NIS 2 / ISO 27001 en menos de 90 días
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Hasta -30 % de incidentes críticos en el primer semestre*
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Cuadros de mando ejecutivos en tiempo real
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-8">
                *Resultados medios en clientes TutumSec 2024 (sector industrial
                y servicios).
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  {t("bookFreeConsultation")}
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  {t("downloadGuide")}
                </Button>
              </div>
            </div>
          </section>

          {/* BLOQUE 2 · PAIN → VISIÓN */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Da un paso adelante: de la preocupación constante a la confianza
                digital
              </h2>
              <div className="prose prose-lg max-w-none text-center">
                <p>
                  Cada día se detectan más de 1.200 incidentes contra empresas
                  españolas (INCIBE). La mayoría de las PYMEs actúa después del
                  ataque. Con TutumSec adelantas a los atacantes: evaluamos,
                  priorizamos y ejecutamos una estrategia de seguridad alineada
                  con tu visión de negocio.
                </p>
              </div>
            </div>
          </section>

          {/* BLOQUE 3 · BENEFICIOS CLAVE */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Cinco ventajas decisivas para tu comité de dirección
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Visión de negocio
                    </h3>
                    <p className="text-muted-foreground">
                      Traducimos ciber-riesgo a impacto financiero para
                      priorizar inversiones.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Cumplimiento normativo sin fricciones
                    </h3>
                    <p className="text-muted-foreground">
                      Metodología Compliance 360 ° para NIS 2, ISO 27001, ENS y
                      RGPD.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Zap className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Respuesta 24/7
                    </h3>
                    <p className="text-muted-foreground">
                      Integración directa con nuestro SOC: detección y
                      contención en &lt; 15 min.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Coste optimizado
                    </h3>
                    <p className="text-muted-foreground">
                      Modelo as-a-Service: sin cargas sociales ni largos
                      procesos de contratación.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Escalabilidad flexible
                    </h3>
                    <p className="text-muted-foreground">
                      Añade módulos MDR, formación o Red Team a medida que
                      creces.
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
                Metodología PDCA + Zero Trust en 4 pasos
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Diagnóstico</h3>
                    <p className="text-muted-foreground">
                      Pentest & Gap-Analysis integral
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Roadmap</h3>
                    <p className="text-muted-foreground">
                      Hoja de ruta 12-36 meses con ROI y prioridades
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gobernanza</h3>
                    <p className="text-muted-foreground">
                      Políticas, KPIs y cuadros de mando
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Seguimiento</h3>
                    <p className="text-muted-foreground">
                      Revisiones trimestrales y mejora continua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE 5 · TESTIMONIOS & CASOS */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">
                Clientes que confían en TutumSec
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      "Pasamos de no cumplir ENS a certificar la ISO 27001 en
                      tres meses. El tablero de KPIs nos sirve cada semana en
                      comité."
                    </p>
                    <div className="text-sm">
                      <strong>— Luis F., COO</strong>
                      <br />
                      <span className="text-muted-foreground">
                        operador logístico (120 empleados)
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      "El primer trimestre ya vimos un 35 % menos de alertas
                      críticas gracias a la segmentación Zero Trust que
                      definieron."
                    </p>
                    <div className="text-sm">
                      <strong>— Clara R., CTO</strong>
                      <br />
                      <span className="text-muted-foreground">
                        cadena hotelera (11 hoteles)
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-12 bg-primary text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Listo para impulsar tu ciberseguridad?
              </h2>
              <Button size="lg" variant="secondary" className="px-8">
                Reserva tu sesión estratégica gratuita
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ConsultoriaCiso;
