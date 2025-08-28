import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEOMetaTags from '@/components/SEOMetaTags';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Users, AlertTriangle, CheckCircle, Phone } from 'lucide-react';

const IncidenteRespuestaRetainer = () => {
  const breadcrumbItems = [
    { label: 'Productos', href: '/es/productos' },
    { label: 'Incidente Respuesta Retainer' }
  ];

  return (
    <>
      <SEOMetaTags
        title="Incidente Respuesta Retainer - Respuesta Rápida en Ciberseguridad"
        description="Servicio de respuesta a incidentes de ciberseguridad en menos de 15 minutos. Protección inmediata ante amenazas."
      />
      
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <section className="mb-16">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Incidente Respuesta Retainer
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                Respuesta a incidentes en menos de 15 minutos
              </h2>
              
              <div className="flex justify-center mb-8">
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                  🚨 Respuesta &lt; 15 minutos
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Respuesta Inmediata ante Incidentes Críticos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro servicio de respuesta a incidentes garantiza una intervención inmediata en menos de 15 minutos ante cualquier incidente de ciberseguridad, minimizando el impacto y acelerando la recuperación.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Respuesta &lt; 15 min</h3>
                  <p className="text-sm text-muted-foreground">Tiempo de respuesta garantizado</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Equipo 24/7</h3>
                  <p className="text-sm text-muted-foreground">Expertos disponibles siempre</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Contención Inmediata</h3>
                  <p className="text-sm text-muted-foreground">Mitigación rápida de amenazas</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Análisis Forense</h3>
                  <p className="text-sm text-muted-foreground">Investigación detallada del incidente</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Proceso de Respuesta Garantizado
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Detección y Notificación (0-5 min)</h3>
                  <p className="text-muted-foreground">Recepción de la alerta y clasificación inicial del incidente</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Activación del Equipo (5-15 min)</h3>
                  <p className="text-muted-foreground">Movilización inmediata del equipo de respuesta especializado</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Evaluación y Contención (15-30 min)</h3>
                  <p className="text-muted-foreground">Análisis rápido y contención inmediata de la amenaza</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Mitigación y Recuperación (30 min+)</h3>
                  <p className="text-muted-foreground">Eliminación de la amenaza y restauración de servicios</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Análisis Post-Incidente</h3>
                  <p className="text-muted-foreground">Informe detallado y recomendaciones para prevenir futuros incidentes</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Qué Incluye el Servicio?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Servicios Incluidos:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Línea directa 24/7 para emergencias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Equipo de respuesta especializado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Análisis forense digital</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Contención y mitigación de amenazas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Recuperación de sistemas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Informes detallados de incidentes</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Beneficios:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Minimización del tiempo de inactividad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Reducción del impacto económico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Protección de la reputación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Cumplimiento normativo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Tranquilidad operacional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Mejora continua de la seguridad</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Necesitas respuesta inmediata ante incidentes?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contrata nuestro servicio de respuesta a incidentes y ten la tranquilidad de una respuesta garantizada en menos de 15 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Phone className="w-5 h-5 mr-2" />
                Contratar Servicio
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Solicitar Información
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