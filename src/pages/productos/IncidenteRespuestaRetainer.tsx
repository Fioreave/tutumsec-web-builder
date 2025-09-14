import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Shield,
  Clock,
  Monitor,
  AlertTriangle,
} from "lucide-react";

const Deteccion24x7 = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SOC/MDR 24x7: Detección y Respuesta Gestionada",
    description:
      "Monitorización SIEM, EDR/XDR y respuesta con SLA. Visibilidad en tiempo real y contención rápida de incidentes.",
    provider: {
      "@type": "Organization",
      name: "TutumSec",
      url: "https://tutumsec.io",
    },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
    serviceType: "Detección y Respuesta Gestionada 24x7",
  };

  return (
    <>
      <Helmet>
        <title>SOC/MDR 24×7: Detección y Respuesta Gestionada | TutumSec</title>
        <meta
          name="description"
          content="Monitorización SIEM, EDR/XDR y respuesta con SLA. Visibilidad en tiempo real y contención rápida de incidentes."
        />
        <link
          rel="canonical"
          href="https://tutumsec.io/es/servicios/deteccion-24x7-soc-mdr-xdr/"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/deteccion-24x7-soc-mdr-xdr/"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/ca/serveis/deteccio-24x7-soc-mdr-xdr/"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/en/services/soc-mdr-xdr-24x7/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/deteccion-24x7-soc-mdr-xdr/"
          hrefLang="x-default"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Servicios", href: "/es/servicios" },
              { label: "Detección 24x7 SOC/MDR/XDR" },
            ]}
          />

          {/* HERO */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                SOC/MDR 24×7: Detección y Respuesta Gestionada
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8">
                Monitorización SIEM, EDR/XDR y respuesta con SLA. Visibilidad en
                tiempo real y contención rápida de incidentes.
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Detección en &lt; 5 min
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Respuesta en &lt; 15 min
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    SLA 99.9% disponibilidad
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Reserva consultoría gratuita
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Descarga especificaciones técnicas
                </Button>
              </div>
            </div>
          </section>

          {/* BENEFICIOS CLAVE */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Protección continua con tecnología líder
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Monitor className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      SIEM/SOAR unificado
                    </h3>
                    <p className="text-muted-foreground">
                      Correlación avanzada de eventos y automatización de
                      respuesta.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      EDR/XDR multi-plataforma
                    </h3>
                    <p className="text-muted-foreground">
                      Protección endpoint, red y cloud con visibilidad total.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Analistas 24×7
                    </h3>
                    <p className="text-muted-foreground">
                      Equipo experto analizando amenazas sin interrupciones.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <AlertTriangle className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Threat hunting proactivo
                    </h3>
                    <p className="text-muted-foreground">
                      Búsqueda activa de amenazas antes de que impacten.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* PROCESO */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Metodología de detección y respuesta
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Onboarding</h3>
                    <p className="text-muted-foreground">
                      Despliegue de sensores y configuración personalizada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Monitorización
                    </h3>
                    <p className="text-muted-foreground">
                      Vigilancia continua con IA y analistas especializados
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Respuesta</h3>
                    <p className="text-muted-foreground">
                      Contención automática y manual según severidad
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Mejora continua
                    </h3>
                    <p className="text-muted-foreground">
                      Ajuste de reglas y optimización de detecciones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-12 bg-primary text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Listo para protección 24×7?
              </h2>
              <Button size="lg" variant="secondary" className="px-8">
                Solicita demo personalizada
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Deteccion24x7;
