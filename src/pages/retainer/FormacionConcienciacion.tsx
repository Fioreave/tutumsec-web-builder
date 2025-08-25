import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, User, Users, Building, Factory, Settings, MessageSquare, Clock, Shield, BookOpen, Target } from 'lucide-react';

const FormacionConcienciacion = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿La formación es presencial o online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ambas. Combinamos presencial/videollamada con contenido SaaS. En un futuro próximo integraremos LMS."
        }
      },
      {
        "@type": "Question",
        "name": "¿Está adaptado a Barcelona/Girona/Cataluña/Andorra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Adaptamos lenguaje, ejemplos y calendario. Disponemos de contenidos en ES y opción CA."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo requiere el programa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las píldoras son de 10 minutos; talleres y simulaciones se planifican para no interrumpir la operación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cada cuánto se hace el phishing simulado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trimestral o semestral, según madurez y objetivos."
        }
      }
    ]
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Formación y Concienciación en Ciberseguridad",
    "description": "Programa de concienciación NIS2 con microlearning mensual, phishing simulado y coaching directivo. Informes para auditoría y resultados medibles.",
    "provider": {
      "@type": "Organization",
      "name": "TutumSec"
    },
    "areaServed": ["ES-CT", "ES-GI", "AD", "ES"]
  };

  return (
    <>
      <Helmet>
        <title>Formación y Concienciación en Ciberseguridad para PYMEs | Barcelona, Girona y Andorra – TutumSec</title>
        <meta name="description" content="Programa de concienciación NIS2 con microlearning mensual, phishing simulado y coaching directivo. Informes para auditoría y resultados medibles. Diagnóstico gratis." />
        <link rel="canonical" href="https://tutumsec.com/servicios/formacion-concienciacion" />
        <script type="application/ld+json">
          {JSON.stringify([faqStructuredData, serviceStructuredData])}
        </script>
        <link rel="alternate" href="https://tutumsec.com/ca/serveis/formacio-conscienciacio" hrefLang="ca" />
        <link rel="alternate" href="https://tutumsec.com/en/services/training-awareness" hrefLang="en" />
        <link rel="alternate" href="https://tutumsec.com/servicios/formacion-concienciacion" hrefLang="es" />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Servicios', href: '/es/servicios' },
            { label: 'Formación y Concienciación' }
          ]} />

          {/* BLOQUE 1 · HERO */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Formación y concienciación en ciberseguridad que cambian hábitos
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8">
                De los clics por costumbre a una cultura de seguridad real: microlearning mensual, phishing simulado y talleres por rol con reportes para auditorías.
              </h2>
              
              <div className="flex justify-center gap-4 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ISO 27001</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Agència de Ciberseguretat de Catalunya</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">INCIBE</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ASCICAT</span>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Plan a medida por roles (Dirección, Managers, Oficina, OT/Planta, IT/Helpdesk, Comercial)</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Campañas de phishing trimestrales o semestrales con métricas claras</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Informes de formación listos para auditorías (NIS2/ISO/ENS)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Reserva diagnóstico gratuito 15'
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Descarga el Kit Anti-Phishing
                </Button>
              </div>
            </div>
          </section>

          {/* BLOQUE 2 · PAIN → PROBLEM */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                El factor humano sigue siendo el eslabón más débil
              </h2>
              <div className="prose prose-lg max-w-none text-center">
                <p>
                  La mayoría de incidentes empiezan con un clic impulsivo o una mala práctica: contraseñas reutilizadas, adjuntos abiertos sin validar, uso de USB en planta, sesiones sin bloqueo… En PYMEs y organizaciones reguladas, esto se traduce en riesgos operativos y sanciones potenciales. Sin una formación continua y por rol, el cambio de hábitos no sucede.
                </p>
              </div>
            </div>
          </section>

          {/* BLOQUE 3 · LA SOLUCIÓN TUTUMSEC */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Un programa continuo, práctico y medible
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Microlearning mensual (10')</h3>
                    <p className="text-muted-foreground mb-4">Píldoras breves y accionables, con ejemplos reales del día a día (oficina, campo, planta).</p>
                    <p className="text-sm"><strong>Entregables:</strong> vídeos/carruseles, mini-quizzes, guía "1 página" por tema.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Target className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Phishing simulado con corrección guiada</h3>
                    <p className="text-muted-foreground mb-4">Campañas periódicas según riesgo del área; informes con métricas y plan de mejora por equipo.</p>
                    <p className="text-sm"><strong>Entregables:</strong> informe ejecutivo, métricas (tasa de clics, reportes), recomendaciones.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Talleres por rol y casos reales</h3>
                    <p className="text-muted-foreground mb-4">Sesiones presenciales o por videollamada, con ejercicios prácticos, role-play de incidentes y "qué hacer si…".</p>
                    <p className="text-sm"><strong>Entregables:</strong> material de apoyo, pósters/infografías, checklist de buenas prácticas.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <BookOpen className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Coaching de dirección (comité/gerencia)</h3>
                    <p className="text-muted-foreground mb-4">Gobernanza, indicadores y decisiones de negocio: cómo priorizar, cómo responder y qué exigir a TI/partners.</p>
                    <p className="text-sm"><strong>Entregables:</strong> briefing trimestral, guía de decisiones, hoja de ruta de cultura.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-center font-medium">
                  Nota legal/compliance: Incluimos informe de formación apto para evidencias de auditoría (NIS2/ISO 27001).
                </p>
              </div>
            </div>
          </section>

          {/* BLOQUE 4 · ITINERARIOS POR ROL */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                El contenido adecuado para cada persona
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="direccion">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <User className="w-6 h-6 text-primary" />
                      <span>Dirección / Comité</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p><strong>Objetivo:</strong> Tomar decisiones y medir avance.</p>
                      <div>
                        <p className="font-medium mb-2">Contenidos clave:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Riesgo y negocio: impacto, apetito de riesgo, prioridades.</li>
                          <li>Requisitos mínimos NIS2/ISO 27001 y evidencias de cultura.</li>
                          <li>Gestión de crisis y reputación (mensajes, stakeholders).</li>
                        </ul>
                      </div>
                      <p><strong>Entregables:</strong> Guía de decisiones (1 pág.), dashboard de cultura, briefing trimestral.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="managers">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary" />
                      <span>Managers / Mandos intermedios</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p><strong>Objetivo:</strong> Bajar políticas a procesos y equipos.</p>
                      <div>
                        <p className="font-medium mb-2">Contenidos clave:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Políticas prácticas (accesos, datos, terceros) y reporting.</li>
                          <li>Seguridad en procesos y trabajo híbrido.</li>
                          <li>Cómo liderar la cultura (refuerzo positivo, hábitos).</li>
                        </ul>
                      </div>
                      <p><strong>Entregables:</strong> Fichas de proceso, checklist de equipo, plantilla de reporte.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="oficina">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Building className="w-6 h-6 text-primary" />
                      <span>Staff de oficina</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p><strong>Objetivo:</strong> Reducir clics de riesgo y fugas de información.</p>
                      <div>
                        <p className="font-medium mb-2">Contenidos clave:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Phishing real vs. simulado: señales y reacción.</li>
                          <li>Contraseñas y MFA; compartición segura.</li>
                          <li>Datos personales y documentos: lo que sí y lo que no.</li>
                        </ul>
                      </div>
                      <p><strong>Entregables:</strong> Píldoras + cartelera de buenas prácticas, mini-quiz.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ot">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Factory className="w-6 h-6 text-primary" />
                      <span>OT / Planta</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p><strong>Objetivo:</strong> Minimizar fallos humanos en sistemas industriales.</p>
                      <div>
                        <p className="font-medium mb-2">Contenidos clave:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Uso de USB y mantenimiento; principio de mínimo privilegio.</li>
                          <li>Red segregada y protocolos en planta.</li>
                          <li>Qué hacer ante comportamientos anómalos.</li>
                        </ul>
                      </div>
                      <p><strong>Entregables:</strong> Taller in situ, pósters por zona, checklist de turno.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="it">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <Settings className="w-6 h-6 text-primary" />
                      <span>IT / Helpdesk</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p><strong>Objetivo:</strong> Convertir IT en motor de cultura.</p>
                      <div>
                        <p className="font-medium mb-2">Contenidos clave:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Hardening básico de usuario y dispositivos.</li>
                          <li>Onboarding/Offboarding seguro y JML.</li>
                          <li>Playbooks de respuesta de primer nivel.</li>
                        </ul>
                      </div>
                      <p><strong>Entregables:</strong> Guías operativas, playbooks L1, lista de verificación.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="comercial">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-primary" />
                      <span>Comercial / Campo</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p><strong>Objetivo:</strong> Cierre seguro sin fricciones.</p>
                      <div>
                        <p className="font-medium mb-2">Contenidos clave:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Email y movilidad segura; redes públicas.</li>
                          <li>Compartición con terceros y NDAs.</li>
                          <li>Protección de información sensible en visitas.</li>
                        </ul>
                      </div>
                      <p><strong>Entregables:</strong> Kit móvil (checklist + tips), micro-training itinerante.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* BLOQUE 5 · CALENDARIO, FORMATOS Y LENGUAS */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Ritmo y formatos que no interrumpen el negocio
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    <li><strong>Frecuencia:</strong> microlearning mensual (10').</li>
                    <li><strong>Campañas de phishing:</strong> trimestrales y/o semestrales según riesgo.</li>
                    <li><strong>Talleres/coaching:</strong> agenda flexible (mañanas 9–14h, tardes 15–17h).</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li><strong>Modos:</strong> presencial, videollamada y contenidos SaaS.</li>
                    <li><strong>Idiomas:</strong> español y catalán</li>
                    <li><strong>Comunicación y soporte contínuo.</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE 6 · METODOLOGÍA EN 5 PASOS */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                De la intención al hábito: método TutumSec
              </h2>
              
              <div className="space-y-6">
                {[
                  { step: 1, title: "Diagnóstico rápido", desc: "encuesta, revisión de incidentes y priorización por rol", time: "(1-2 semanas)" },
                  { step: 2, title: "Plan por roles", desc: "temario, frecuencia y soportes", time: "" },
                  { step: 3, title: "Despliegue", desc: "microlearning mensual + phishing + talleres/coaching", time: "" },
                  { step: 4, title: "Medición simple", desc: "click-rate, report-rate, completion", time: "" },
                  { step: 5, title: "Informe para auditoría", desc: "resultados, evidencias y plan de mejora", time: "" }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title} {item.time}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BLOQUE 7 · RESULTADOS ESPERADOS */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Lo que verás en 3-6 meses
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Menos clics en campañas de phishing y más reportes tempranos</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Equipos con criterios claros ante emails, adjuntos y accesos</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Dirección con visibilidad y decisiones informadas (NIS2/ISO/ENS)</p>
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-8">
                (Las cifras exactas se miden en tu entorno; trabajamos objetivos realistas por fase.)
              </p>
            </div>
          </section>

          {/* BLOQUE 8 · RECURSOS DESCARGABLES */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Empieza hoy a cambiar hábitos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Kit Anti-Phishing</h3>
                    <p className="text-muted-foreground mb-4">(plantillas + política lista para adaptar)</p>
                    <Button variant="outline">Descargar Kit</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Checklist "Cultura de Seguridad en 30 días"</h3>
                    <p className="text-muted-foreground mb-4">Guía práctica paso a paso</p>
                    <Button variant="outline">Descargar Checklist</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* BLOQUE 9 · CTA + LEAD MAGNET */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                ¿Empezamos con un piloto de 90 días?
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Reserva diagnóstico gratuito 15'
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Descarga el Kit Anti-Phishing
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Nota: Solicita presupuesto
              </p>
            </div>
          </section>

          {/* BLOQUE 10 · FAQ */}
          <section className="py-12 bg-muted">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Preguntas frecuentes
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿La formación es presencial o online?</AccordionTrigger>
                  <AccordionContent>
                    Ambas. Combinamos presencial/videollamada con contenido SaaS. En un futuro próximo integraremos LMS.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Está adaptado a Barcelona/Girona/Cataluña/Andorra?</AccordionTrigger>
                  <AccordionContent>
                    Sí. Adaptamos lenguaje, ejemplos y calendario. Disponemos de contenidos en ES y opción CA.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Cuánto tiempo requiere el programa?</AccordionTrigger>
                  <AccordionContent>
                    Las píldoras son de 10 minutos; talleres y simulaciones se planifican para no interrumpir la operación.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Cada cuánto se hace el phishing simulado?</AccordionTrigger>
                  <AccordionContent>
                    Trimestral o semestral, según madurez y objetivos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>¿En qué idioma está el contenido?</AccordionTrigger>
                  <AccordionContent>
                    Español por defecto; catalán disponible bajo demanda.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>¿Ofrecen bonificación FUNDAE?</AccordionTrigger>
                  <AccordionContent>
                    Lo gestionamos externamente. Entregamos informes válidos para auditoría (NIS2/ISO/ENS).
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* BLOQUE 11 · CROSS-SELL */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                La cultura es tu primera línea de defensa
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">Consultoría CISO (vCISO)</h3>
                    <p className="text-muted-foreground text-sm">Gobierno, KPIs y cultura</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">Auditoría & Compliance NIS2</h3>
                    <p className="text-muted-foreground text-sm">Gap-Analysis + plan de adecuación</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">Auditoría técnica & Pentesting</h3>
                    <p className="text-muted-foreground text-sm">Validación ofensiva</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-3">SOC / MDR 24×7</h3>
                    <p className="text-muted-foreground text-sm">Vigilancia y respuesta gestionada</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8 space-y-4">
                <Button size="lg" className="px-8">
                  Solicitar diagnóstico gratuito
                </Button>
                <br />
                <Button variant="outline" size="lg" className="px-8">
                  Solicitar presupuesto
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

export default FormacionConcienciacion;