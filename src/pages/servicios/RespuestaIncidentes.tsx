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
  Search,
  AlertTriangle,
} from "lucide-react";

const RespuestaIncidentes = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Respuesta a Incidentes (DFIR) para PYMEs",
    description:
      "Análisis forense, contención y recuperación. Retainer opcional y notificación NIS2 en 24/72 h.",
    provider: {
      "@type": "Organization",
      name: "TutumSec",
      url: "https://tutumsec.io",
    },
    areaServed: ["ES-CT", "ES-GI", "AD", "ES"],
    serviceType: "Respuesta a Incidentes y Forense Digital",
  };

  return (
    <>
      <Helmet>
        <title>Respuesta a Incidentes (DFIR) para PYMEs | TutumSec</title>
        <meta
          name="description"
          content="Análisis forense, contención y recuperación. Retainer opcional y notificación NIS2 en 24/72 h."
        />
        <link
          rel="canonical"
          href="https://tutumsec.io/es/servicios/respuesta-incidentes/"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/respuesta-incidentes/"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/ca/serveis/resposta-incidents/"
          hrefLang="ca"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/en/services/incident-response/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://tutumsec.io/es/servicios/respuesta-incidentes/"
          hrefLang="x-default"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Servicios", href: "/es/servicios" },
              { label: "Respuesta a Incidentes" },
            ]}
          />

          {/* HERO */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Respuesta a Incidentes (DFIR) para PYMEs
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8">
                Análisis forense, contención y recuperación. Retainer opcional y
                notificación NIS2 en 24/72 h.
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Respuesta en &lt; 15 min
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    Forense certificado
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Notificación NIS2</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Activar respuesta inmediata
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Contratar retainer
                </Button>
              </div>
            </div>
          </section>

          {/* SERVICIOS */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Respuesta integral de incidentes
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <AlertTriangle className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Contención inmediata
                    </h3>
                    <p className="text-muted-foreground">
                      Aislamiento y neutralización de la amenaza activa.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Search className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      Análisis forense
                    </h3>
                    <p className="text-muted-foreground">
                      Investigación profunda del vector de ataque y compromiso.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Erradicación</h3>
                    <p className="text-muted-foreground">
                      Eliminación completa de malware y backdoors.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Recuperación</h3>
                    <p className="text-muted-foreground">
                      Restauración segura de sistemas y operaciones.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* RETAINER */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Retainer: Preparación proactiva
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Asegura tiempo de respuesta prioritario y mejores condiciones
                económicas con nuestro servicio retainer.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Incluye:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Respuesta garantizada en 15 min</li>
                    <li>✓ Ejercicios de simulacro trimestrales</li>
                    <li>✓ Playbooks personalizados</li>
                    <li>✓ Contacto directo 24/7</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Ventajas:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Coste fijo mensual predecible</li>
                    <li>✓ Sin sobrecostes en activación</li>
                    <li>✓ Prioridad absoluta</li>
                    <li>✓ Conocimiento previo del entorno</li>
                  </ul>
                </div>
              </div>

              <Button size="lg" className="mt-8 px-8">
                Información sobre retainer
              </Button>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-12 bg-primary text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Necesitas respuesta inmediata?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8">
                  Llamada de emergencia
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 text-white border-white hover:bg-white hover:text-primary"
                >
                  Más información
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RespuestaIncidentes;
