import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlackMDRHeroSection from '@/components/BlackMDRHeroSection';
import BlackMDRFAQSection from '@/components/BlackMDRFAQSection';
import BlackMDRIntegrationsSection from '@/components/BlackMDRIntegrationsSection';
import NewCTASection from '@/components/NewCTASection';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Shield, Clock, Eye, Target, CheckCircle, Activity, 
  Search, Users, BarChart3, Zap, Network, Lock,
  Calendar, Download, MessageCircle, Lightbulb
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

const Deteccion24x7 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const breadcrumbItems = [
    { label: 'Productos', href: '/es/productos' },
    { label: 'BlackMDR 24x7' }
  ];

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/ayub-tutumsec/15min', '_blank');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Product", "ProfessionalService"],
    "name": "Black MDR 24×7",
    "description": "SOC/MDR 24×7 con analistas humanos, threat hunting y contención remota. Onboarding ágil, reporte ejecutivo mensual y alineación NIS2.",
    "provider": {
      "@type": "Organization",
      "name": "TutumSec",
      "url": "https://tutumsec.com"
    },
    "serviceType": "Managed Detection and Response",
    "areaServed": ["Barcelona", "Girona", "Andorra", "España"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios BlackMDR",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Detección 24x7",
            "description": "Monitorización continua y hunting proactivo"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Black MDR 24×7 | Detección y Respuesta Gestionada orientada a negocio</title>
        <meta name="description" content="SOC/MDR 24×7 con analistas humanos, threat hunting y contención remota. Onboarding ágil, reporte ejecutivo mensual y alineación NIS2. Integración con Defender, SentinelOne, CrowdStrike, Fortinet, Sophos, WatchGuard, Bitdefender, SonicWall, Meraki, etc." />
        <meta name="keywords" content="blackmdr, mdr 24/7, soc gestionado, detección y respuesta, xdr, siem, threat hunting, ransomware, bec, mitre, microsoft defender, sentinelone, crowdstrike, fortinet, sophos, bitdefender, watchguard, sonicwall, meraki, barcelona, andorra" />
        <link rel="canonical" href="https://tutumsec.com/es/productos/black-mdr-deteccion-24x7/" />
        <meta property="og:title" content="Black MDR 24×7 | Detección y Respuesta Gestionada" />
        <meta property="og:description" content="SOC/MDR 24×7 con analistas humanos, threat hunting y contención remota." />
        <meta property="og:url" content="https://tutumsec.com/es/productos/black-mdr-deteccion-24x7/" />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-20 pb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <BlackMDRHeroSection />

        {/* Problem Section */}
        <section className="py-16 px-6" style={{ background: 'var(--gradient-hero)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-tutumsec-gray-900 mb-6">
              La avalancha de alertas no es seguridad; la respuesta a tiempo, sí
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Las PYMEs maduras tienen EDR, correo en M365, firewalls NGFW, redes Meraki… y cientos de alertas. 
              Sin analistas 24/7, los falsos positivos te comen el tiempo y los verdaderos pasan desapercibidos. 
              BlackMDR filtra, confirma y actúa en minutos, con trazabilidad total y foco en impacto de negocio.
            </p>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-tutumsec-gray-900 text-center mb-12">
              Diferenciales que marcan la diferencia
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-tutumsec-blue/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow" style={{ background: 'linear-gradient(135deg, hsl(214 100% 97%), hsl(0 0% 100%))' }}>
                <Users className="w-12 h-12 text-tutumsec-blue mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-tutumsec-gray-900">No "sustituimos" a tu equipo; lo potenciamos</h3>
                <p className="text-muted-foreground">
                  Trabajo hombro a hombro con tu equipo (IT/CISO). Definimos responsabilidades (RACI), 
                  compartimos visibilidad y transferimos conocimiento para que tu equipo sea más fuerte cada mes.
                </p>
              </div>

              <div className="p-6 border border-tutumsec-blue/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow" style={{ background: 'linear-gradient(135deg, hsl(214 100% 97%), hsl(0 0% 100%))' }}>
                <Zap className="w-12 h-12 text-tutumsec-blue mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-tutumsec-gray-900">Nada de "caja negra"; acordamos qué acciones remotas ejecutamos</h3>
                <p className="text-muted-foreground">
                  Runbooks co-firmados que autorizan de antemano las acciones remotas (aislar un endpoint, bloquear IOCs, 
                  purgar phishing, revocar sesiones…). Evita cuellos de botella y reduce MTTR con trazabilidad total.
                </p>
              </div>

              <div className="p-6 border border-tutumsec-blue/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow" style={{ background: 'linear-gradient(135deg, hsl(214 100% 97%), hsl(0 0% 100%))' }}>
                <BarChart3 className="w-12 h-12 text-tutumsec-blue mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-tutumsec-gray-900">Gobernanza: Seguridad gobernada desde dirección</h3>
                <p className="text-muted-foreground">
                  Comité con CISO/OSI, KPIs claros, priorización por riesgo, evidencias para auditorías y 
                  alineación con NIS2/ISO. Menos improvisación, más control.
                </p>
              </div>

              <div className="p-6 border border-tutumsec-blue/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow" style={{ background: 'linear-gradient(135deg, hsl(214 100% 97%), hsl(0 0% 100%))' }}>
                <Target className="w-12 h-12 text-tutumsec-blue mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-tutumsec-gray-900">Menos tiempo en alertas, más en decisiones</h3>
                <p className="text-muted-foreground">
                  Enfoque en resultados, no solo en alertas: menos falsos positivos, incidentes contenidos a tiempo, 
                  backlog de hardening priorizado y decisiones de inversión con retorno. Informe ejecutivo mensual que entiende negocio.
                </p>
              </div>

              <div className="p-6 border border-tutumsec-blue/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:col-span-2" style={{ background: 'var(--gradient-hero)' }}>
                <Network className="w-12 h-12 text-tutumsec-blue mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-tutumsec-gray-900">Aprovechamos lo que ya tienes</h3>
                <p className="text-muted-foreground">
                  (EDR/XDR, SIEM, M365, NGFW, Meraki, etc.) para acelerar despliegue y ROI, evitando compras innecesarias. 
                  Integramos y optimizamos antes de proponer nuevos tools.
                </p>
                <div className="bg-tutumsec-gray-50 p-4 rounded-lg border border-tutumsec-blue/10 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Nota:</strong> podemos integrar de salida con stacks líderes (p. ej., Microsoft Defender, SentinelOne, 
                    CrowdStrike, Fortinet, Palo Alto, Microsoft Sentinel…). Ajustamos el alcance a tu realidad tecnológica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Cobertura de extremo a extremo, integraciones reales
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-card border rounded-lg">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Endpoint / EDR/XDR</h3>
                <p className="text-sm text-muted-foreground">
                  Microsoft Defender for Endpoint, SentinelOne, CrowdStrike, Sophos, Bitdefender, Malwarebytes, Webroot…
                </p>
              </div>

              <div className="p-6 bg-card border rounded-lg">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Identidad & Email</h3>
                <p className="text-sm text-muted-foreground">
                  Microsoft 365/Entra, reglas de purga y revocación de sesiones.
                </p>
              </div>

              <div className="p-6 bg-card border rounded-lg">
                <Network className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Red & Perímetro</h3>
                <p className="text-sm text-muted-foreground">
                  Fortinet, SonicWall, WatchGuard, Cisco Meraki (eventos de firewall/telemetría).
                </p>
              </div>

              <div className="p-6 bg-card border rounded-lg">
                <Activity className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Cloud & Workloads</h3>
                <p className="text-sm text-muted-foreground">
                  Microsoft Sentinel, Azure/AWS; Elastic SIEM si aplica.
                </p>
              </div>

              <div className="p-6 bg-card border rounded-lg">
                <Lock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">OT/ICS (si procede)</h3>
                <p className="text-sm text-muted-foreground">
                  Enfoque segmentado y reglas de contención seguras.
                </p>
              </div>

              <div className="p-6 bg-card border rounded-lg">
                <Eye className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Nota de transparencia</h3>
                <p className="text-sm text-muted-foreground">
                  Mostramos compatibilidad técnica; "compatible" no implica relación de partnership salvo indicación expresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Detección y respuesta orquestadas, 24/7
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: Activity, title: "Ingesta & Normalización", desc: "de telemetría (endpoint, identidad, cloud, red)" },
                { icon: Search, title: "Detección", desc: "(reglas, ML y correlación) + hunting proactivo" },
                { icon: Users, title: "Validación humana", desc: "por analistas para eliminar falsos positivos" },
                { icon: Zap, title: "Respuesta remota", desc: "aislamiento, bloqueo IOC, kill process, revocación de sesión, etc." },
                { icon: Lightbulb, title: "Lecciones aprendidas", desc: "tuning de reglas, hardening y asesoría al equipo IT/CISO" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding Timeline */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Puesta en marcha rápida, segura y sin "sorpresas"
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1-3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Día 1–3: Arquitectura y preparación</h3>
                  <p className="text-muted-foreground">Arquitectura, inventario de fuentes e IT-readiness.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  S2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Semana 2: Implementación</h3>
                  <p className="text-muted-foreground">Agentes/conectores + runbooks co-aprobados.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  30
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Día 30: Optimización inicial</h3>
                  <p className="text-muted-foreground">Tuning inicial y primer informe (técnico + ejecutivo).</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  90
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Día 90: Maduración</h3>
                  <p className="text-muted-foreground">Simulacro, revisión de KPIs y roadmap de madurez.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Scope */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              De la alerta a la contención
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Aislamiento de endpoint afectado", icon: Shield },
                { title: "Bloqueo y erradicación (IOC, procesos, persistencia conocida)", icon: Lock },
                { title: "Medidas en identidad (deshabilitar sesión, MFA, restablecer contraseñas)", icon: Users },
                { title: "Email (bloqueo, retracto, purga de campañas de phishing)", icon: MessageCircle },
                { title: "Red/Perímetro (reglas temporales, segmentación de emergencia)", icon: Network },
                { title: "Recomendaciones de recuperación y comunicación con tu equipo", icon: Lightbulb }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card border rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-2">DFIR / Retainer</h3>
              <p className="text-muted-foreground">
                Disponible como servicio aparte para análisis forense profundo y acompañamiento en crisis.
              </p>
            </div>
          </div>
        </section>

        {/* Threat Hunting */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Hunting proactivo sobre TTPs críticos
            </h2>
            <div className="p-8 bg-card border rounded-lg">
              <Search className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                Búsqueda recurrente de comportamientos (MITRE ATT&CK) centrada en acceso inicial, 
                movimiento lateral, escalado de privilegios y exfiltración. Los hallazgos generan 
                acciones y reglas nuevas para tu entorno.
              </p>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Reporte semanal y foco ejecutivo
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card border rounded-lg">
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Informe mensual</h3>
                <p className="text-muted-foreground">
                  Incidentes, acciones realizadas, recomendaciones.
                </p>
              </div>

              <div className="p-6 bg-card border rounded-lg">
                <Activity className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Panel ejecutivo</h3>
                <p className="text-muted-foreground">
                  Tendencias, fuentes cubiertas, top TTPs, backlog de hardening.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center">
              <p className="text-foreground">
                <strong>Comité trimestral</strong> con CISO/OSI para alinear seguridad con negocio 
                <span className="text-sm text-muted-foreground ml-2">* si se contrata VCISO</span>
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <BlackMDRIntegrationsSection />

        {/* NIS2 Compliance */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              MDR que ayuda a cumplir NIS2
            </h2>
            <div className="p-8 bg-card border rounded-lg">
              <Lock className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                Mapeamos el servicio a controles de detección y respuesta, notificación de incidentes 
                y mejora continua. Entregamos evidencias y facilitamos la coordinación con CISO/OSI y Auditoría & Compliance.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <BlackMDRFAQSection />

        {/* Final CTA */}
        <section className="py-16 px-6 bg-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Paremos las amenazas antes de que paren tu negocio
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={handleCalendlyClick}
                className="px-8 py-4 text-lg bg-primary hover:bg-primary/90"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Reserva consultoría gratis (15')
              </Button>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Descarga la ficha técnica MDR
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Descarga la ficha técnica</DialogTitle>
                  </DialogHeader>
                  <ContactForm 
                    onSuccess={() => setIsDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>

              <Button variant="ghost" size="lg" className="px-8 py-4 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicita presupuesto
              </Button>
            </div>

            {/* Internal Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <a href="/es/servicios/consultoria-ciso/" className="text-primary hover:underline">
                Consultoría CISO (vCISO)
              </a>
              <a href="/es/servicios/auditoria-compliance-nis2/" className="text-primary hover:underline">
                Auditoría & Compliance NIS2
              </a>
              <a href="/es/servicios/oficina-seguridad-informacion-nis2/" className="text-primary hover:underline">
                Oficina de Seguridad de la Información (OSI)
              </a>
              <a href="/es/productos/incidente-respuesta-retainer/" className="text-primary hover:underline">
                Respuesta a Incidentes (DFIR) y Retainer
              </a>
            </div>
          </div>
        </section>

        {/* Legal Note */}
        <section className="py-8 px-6 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-semibold mb-2">Nota legal / transparencia</h3>
            <p className="text-sm text-muted-foreground">
              Los tiempos operativos y el alcance de respuesta dependen del stack, permisos y conectividad del cliente. 
              Ajustamos SLA y runbooks en contrato. Los resultados varían según madurez y superficie de ataque.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Deteccion24x7;