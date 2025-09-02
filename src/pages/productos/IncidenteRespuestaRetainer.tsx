import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEOMetaTags from '@/components/SEOMetaTags';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, Shield, Users, AlertTriangle, CheckCircle, Phone, Calendar, FileText, MapPin, AlertCircle } from 'lucide-react';

const IncidenteRespuestaRetainer = () => {
  const breadcrumbItems = [
    { label: 'Productos', href: '/es/productos' },
    { label: 'Respuesta a Incidentes' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Respuesta a Incidentes de Ciberseguridad",
    "provider": {
      "@type": "Organization",
      "name": "TutumSec",
      "url": "https://tutumsec.io"
    },
    "areaServed": ["Barcelona", "Girona", "Catalunya", "Andorra"],
    "url": "https://tutumsec.io/respuesta-incidente/"
  };

  return (
    <>
      <SEOMetaTags
        title="Respuesta a Incidentes de Ciberseguridad | TutumSec"
        description="Actuamos con rapidez y claridad para contener, recuperar y aprender del incidente. Canal directo, coordinación ejecutiva y soporte legal. Barcelona, Girona, Catalunya y Andorra."
        canonical="https://tutumsec.io/es/productos/incidente-respuesta-retainer"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Respuesta a incidentes, sin ruido y con método
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
                Canal directo, contención rápida y acompañamiento hasta el cierre
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Necesito ayuda ahora
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Calendar className="w-5 h-5 mr-2" />
                  Hablar con un experto
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground max-w-2xl mx-auto">
                <strong>Nota operativa:</strong> Detección 24x7 vía SOC/MDR; el resto de servicios se atienden con prioridad alta en horario laboral.
              </div>
            </div>
          </section>

          {/* Del caos a la claridad */}
          <section className="mb-16">
            <div style={{ background: 'var(--gradient-hero)' }} className="p-8 rounded-lg border border-tutumsec-blue/20 shadow-lg">
              <h2 className="text-3xl font-bold text-tutumsec-gray-900 mb-6">
                Cuando pasa algo, necesitas decisiones, no alarmas
              </h2>
              <p className="text-lg text-muted-foreground">
                Activamos un canal de comunicación inmediato, evaluamos el alcance real y priorizamos acciones para contener rápido, recuperar con criterio y documentar lo importante. Sin tecnicismos innecesarios: te explicamos qué ocurre, qué hacemos y por qué.
              </p>
            </div>
          </section>

          {/* Qué haremos por ti */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Qué haremos por ti (paso a paso)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-tutumsec-blue/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6" style={{ background: 'linear-gradient(135deg, hsl(214 100% 97%), hsl(0 0% 100%))' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-tutumsec-blue" />
                    <h3 className="text-xl font-semibold text-tutumsec-gray-900">Primeras horas</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-tutumsec-blue mt-0.5 flex-shrink-0" />
                      <span>Canal directo con analistas senior (teléfono y mensajería segura)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-tutumsec-blue mt-0.5 flex-shrink-0" />
                      <span>Contención inicial y visibilidad rápida sobre equipos y cuentas afectadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-tutumsec-blue mt-0.5 flex-shrink-0" />
                      <span>Recomendación de activar EDR compatible (Microsoft Defender, Bitdefender, Sophos, etc)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-tutumsec-blue/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6" style={{ background: 'linear-gradient(135deg, hsl(214 100% 97%), hsl(0 0% 100%))' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-tutumsec-blue" />
                    <h3 className="text-xl font-semibold text-tutumsec-gray-900">Primer día</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-tutumsec-blue mt-0.5 flex-shrink-0" />
                      <span>Aislamiento donde haga falta y restauración segura cuando sea posible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-tutumsec-blue mt-0.5 flex-shrink-0" />
                      <span>Coordinación con tu equipo (IT/dirección)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-tutumsec-blue mt-0.5 flex-shrink-0" />
                      <span>Acompañamiento ejecutivo tipo vCISO si lo solicitas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-tutumsec-blue/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6" style={{ background: 'linear-gradient(135deg, hsl(214 100% 97%), hsl(0 0% 100%))' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-tutumsec-blue" />
                    <h3 className="text-xl font-semibold text-tutumsec-gray-900">Siguientes días</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-tutumsec-blue mt-0.5 flex-shrink-0" />
                      <span>Análisis técnico y cronología del incidente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-tutumsec-blue mt-0.5 flex-shrink-0" />
                      <span>Recomendaciones priorizadas por riesgo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-tutumsec-blue mt-0.5 flex-shrink-0" />
                      <span>Soporte en avisos regulatorios si correspondiera</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="destructive" size="lg">
                  Abrir un caso urgente
                </Button>
                <Button variant="outline" size="lg">
                  Solicitar propuesta personalizada
                </Button>
              </div>
            </div>
          </section>

          {/* Cómo trabajamos */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Co-gestión real y gobierno activo
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Canal directo y reglas claras desde el inicio</h3>
                    <p className="text-muted-foreground text-sm">Comunicación inmediata y transparente con tu equipo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Decisiones co-firmadas contigo</h3>
                    <p className="text-muted-foreground text-sm">Nada de "caja negra", trabajamos en colaboración</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Asesoría legal coordinada</h3>
                    <p className="text-muted-foreground text-sm">Custodia de evidencias y notificaciones cuando aplique</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Cierre con lecciones aprendidas</h3>
                    <p className="text-muted-foreground text-sm">Hoja de ruta de mejoras para fortalecer la seguridad</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lo que recibes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Entregables pensados para dirección y TI
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Resumen ejecutivo</h3>
                  <p className="text-sm text-muted-foreground">1 página con impacto, decisiones y próximos pasos</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Informe técnico</h3>
                  <p className="text-sm text-muted-foreground">Documentación detallada con evidencias</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Reunión de cierre</h3>
                  <p className="text-sm text-muted-foreground">Plan de mejora alineado a negocio</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Cobertura geográfica */}
          <section className="mb-16">
            <div className="bg-muted p-8 rounded-lg text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Dónde intervenimos
              </h2>
              <p className="text-lg text-muted-foreground">
                Barcelona, Girona, resto de Catalunya y Andorra. Soporte remoto a nivel nacional.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Preguntas frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Trabajáis casos de ransomware?</AccordionTrigger>
                <AccordionContent>
                  Sí, pero con una postura clara: no negociamos con atacantes. Priorizamos contención y recuperación y orientamos la notificación a las autoridades competentes cuando corresponda. Coordinamos todo con tu equipo y con asesoría legal.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Ofrecéis servicio de forense digital?</AccordionTrigger>
                <AccordionContent>
                  Sí. Contamos con equipo forense externo especializado (bajo presupuesto y alcance definidos) para recogida de evidencias con cadena de custodia, análisis técnico y documentación válida para auditorías o procedimientos legales.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Cómo se inicia un caso urgente?</AccordionTrigger>
                <AccordionContent>
                  Muy simple: abrimos un canal directo (teléfono y mensajería segura), confirmamos alcance y prioridades y empezamos a contener. Te indicamos los siguientes pasos y la documentación mínima que necesitamos.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Apoyáis la comunicación y las notificaciones regulatorias?</AccordionTrigger>
                <AccordionContent>
                  Sí. Acompañamos en la preparación de avisos a autoridades (p. ej., NIS2/AEPD) y comunicaciones internas/externas, coordinados con asesoría legal y, si procede, con tu equipo de comunicación.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>¿Podéis trabajar con mi ciberseguro?</AccordionTrigger>
                <AccordionContent>
                  Sí. Coordinamos requisitos del seguro (contactos, reporting, evidencias) para agilizar autorizaciones y evitar fricciones durante la gestión del incidente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* CTAs de cierre */}
          <section style={{ background: 'var(--gradient-primary)' }} className="p-8 rounded-lg text-center shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Necesitas respuesta inmediata?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Actúa ahora para proteger tu organización ante incidentes de ciberseguridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 bg-red-600 hover:bg-red-700 text-white">
                <AlertCircle className="w-5 h-5 mr-2" />
                Necesito ayuda ahora
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-tutumsec-blue">
                <Calendar className="w-5 h-5 mr-2" />
                Hablar con un experto
              </Button>
              <Button size="lg" className="px-8 bg-white text-tutumsec-blue hover:bg-tutumsec-gray-50">
                <Shield className="w-5 h-5 mr-2" />
                Quiero estar preparado (retainer)
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IncidenteRespuestaRetainer;