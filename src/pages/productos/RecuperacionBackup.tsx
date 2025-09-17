import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Database,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
} from "lucide-react";

const RecuperacionBackup = () => {
  const breadcrumbItems = [
    { label: "Productos", href: "/es/productos" },
    { label: "Prevención y Recuperación Backup" },
  ];

  const features = [
    {
      icon: Database,
      title: "Arquitectura 'immutable-first'",
      description:
        "WORM/inmutable, retenciones blindadas y una copia offline/air-gapped.",
    },
    {
      icon: Shield,
      title: "Diseño por riesgo (vCISO/OSI)",
      description:
        "RTO/RPO objetivo, criticidad por proceso y runbooks de recuperación aprobados en comité. (Alineado NIS2: continuidad y crisis management).",
    },
    {
      icon: CheckCircle,
      title: "Ensayos y evidencia",
      description:
        "Restauraciones de muestra; informe mensual ejecutivo para dirección.",
    },
    {
      icon: FileText,
      title: "Stack-agnóstico",
      description:
        "Microsoft 365/Azure, virtualización (VMware/Hyper-V), servidores, NAS y endpoints — sin 'vendor lock-in'.",
    },
  ];

  const includes = [
    "Evaluación de recuperación: madurez 3-2-1-1-0, brechas y prioridades.",
    "Arquitectura de backup: políticas por dato/entorno (M365, servidores, VMs, endpoints).",
    "Pruebas de restauración: calendario y evidencias para auditoría.",
    "Runbooks & formación: quién hace qué y en qué orden (con ejercicio anual).",
    "Reporte mensual: estado de copias, éxito de pruebas y acciones pendientes.",
  ];

  const steps = [
    {
      number: "1",
      title: "Diagnóstico",
      description: "Inventario, criticidad, brechas",
    },
    {
      number: "2",
      title: "Diseño",
      description: "3-2-1-1-0, inmutabilidad, off-site",
    },
    {
      number: "3",
      title: "Despliegue",
      description: "Políticas y retenciones por dato",
    },
    {
      number: "4",
      title: "Ensayo & mejorar",
      description: "Restores de prueba + comité trimestral",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Prevención & Recuperación (Backup inmutable) | TutumSec</title>
        <meta
          name="description"
          content="Copias inmutables 3-2-1-1-0, pruebas de restauración y runbooks para recuperar rápido sin pagar rescates. Diseño por riesgo alineado con NIS2."
        />
        <link
          rel="canonical"
          href="https://tutumsec.com/es/productos/prevencion-recuperacion-backup"
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Prevención & Recuperación: vuelve a producir, no a empezar de cero
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Backups inmutables + plan de recuperación probado para volver a
              operar con agilidad.
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center text-sm">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Copias inmutables con regla 3-2-1-1-0 por defecto
              </div>
              <div className="flex items-center justify-center text-sm">
                <Clock className="w-5 h-5 text-primary mr-2" />
                Pruebas de restauración programadas y reporte mensual ejecutivo
              </div>
              <div className="flex items-center justify-center text-sm">
                <FileText className="w-5 h-5 text-primary mr-2" />
                Evidencias para auditorías (NIS2/ENS) y continuidad de negocio
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Reserva consultoría gratuita (15')</Button>
              <Button variant="outline" size="lg">
                Solicita evaluación de recuperación
              </Button>
            </div>
          </div>
        </section>

        {/* El Riesgo Real */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-6">
                El dolor → El riesgo real
              </h2>
              <p className="text-lg text-muted-foreground">
                Las copias existen… hasta que el ransomware las cifra o borra.
                La diferencia no es "tener backup", sino poder recuperar: copias
                inmutables, una off-site/air-gapped y verificación para evitar
                sorpresas.
              </p>
            </div>
          </div>
        </section>

        {/* La Solución TutumSec */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                La solución TutumSec
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {features.map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <feature.icon className="w-8 h-8 text-primary mr-3" />
                        <CardTitle>{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center">Postura ética</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Nunca pagar rescates; notificar y activar recuperación.
                    Coordinación legal/forense si procede.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Qué Incluye */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Qué incluye
              </h2>

              <div className="space-y-6">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button>Quiero una evaluación de recuperación</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo Trabajamos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Cómo trabajamos
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">{step.number}</span>
                      </div>
                      <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Preguntas frecuentes
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Esto sirve "solo" para ransomware?
                  </AccordionTrigger>
                  <AccordionContent>
                    No. Cubre borrados accidentales, fallos humanos y desastres
                    físicos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Trabajáis con mi solución actual?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sí. Integramos y optimizamos tu stack (p. ej., M365/Azure,
                    soluciones líderes de backup) y añadimos inmutabilidad y
                    verificación.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Incluye forense y asesoría legal?
                  </AccordionTrigger>
                  <AccordionContent>
                    Contamos con partners forenses y coordinación legal cuando
                    es necesario (servicios bajo presupuesto).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿Garantizáis tiempos concretos?
                  </AccordionTrigger>
                  <AccordionContent>
                    Definimos RTO/RPO objetivo por proceso y los ensayamos;
                    comunicamos resultados en reporte mensual.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                ¿Quieres recuperar con agilidad sin pagar rescates?
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Reserva consultoría gratuita (15')</Button>
                <Button variant="outline" size="lg">
                  Solicita evaluación de recuperación
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RecuperacionBackup;
