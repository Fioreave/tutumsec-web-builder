import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOMetaTags from "@/components/SEOMetaTags";

const Deteccion24x7 = () => {
  const breadcrumbItems = [
    { label: "Productos", href: "/es/productos" },
    { label: "Detección 24x7" },
  ];

  return (
    <>
      <SEOMetaTags
        title="Detección 24x7 - Monitorización Continua de Ciberseguridad"
        description="Servicio de detección y monitorización de amenazas 24 horas al día, 7 días a la semana. Protección continua para tu organización."
      />

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <section className="mb-16">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Detección 24x7
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                Monitorización y detección de amenazas las 24 horas del día
              </h2>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Vigilancia Continua de Ciberseguridad
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro servicio de detección 24x7 proporciona monitorización
              continua de tu infraestructura, detectando amenazas y anomalías en
              tiempo real para garantizar la máxima protección de tu
              organización.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Características principales:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Monitorización 24 horas, 7 días a la semana</li>
                  <li>• Detección de amenazas en tiempo real</li>
                  <li>• Análisis de comportamiento anómalo</li>
                  <li>• Alertas inmediatas ante incidentes</li>
                  <li>• Correlación de eventos de seguridad</li>
                  <li>• Informes detallados de actividad</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Beneficios:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Reducción del tiempo de detección de amenazas</li>
                  <li>• Minimización del impacto de incidentes</li>
                  <li>• Cumplimiento normativo continuo</li>
                  <li>• Visibilidad completa de la infraestructura</li>
                  <li>• Respuesta proactiva ante amenazas</li>
                  <li>• Tranquilidad operacional</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Proceso de Monitorización
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Recopilación de Datos</h3>
                <p className="text-sm text-muted-foreground">
                  Recopilamos logs y eventos de todos los sistemas y
                  dispositivos
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Análisis Inteligente</h3>
                <p className="text-sm text-muted-foreground">
                  Analizamos patrones y comportamientos para identificar
                  amenazas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Respuesta Inmediata</h3>
                <p className="text-sm text-muted-foreground">
                  Alertamos y activamos los protocolos de respuesta necesarios
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Necesitas protección continua?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contacta con nosotros para implementar nuestro servicio de
              detección 24x7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Solicitar Información
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                Ver Demo
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Deteccion24x7;
