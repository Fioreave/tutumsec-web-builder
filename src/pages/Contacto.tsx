import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

const Contacto = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | TutumSec</title>
        <meta name="description" content="Habla con un consultor y conoce el plan que mejor encaja con tu empresa." />
        <link rel="canonical" href="https://tutumsec.io/es/contacto/" />
        <link rel="alternate" href="https://tutumsec.io/es/contacto/" hrefLang="es" />
        <link rel="alternate" href="https://tutumsec.io/ca/contacte/" hrefLang="ca" />
        <link rel="alternate" href="https://tutumsec.io/en/contact/" hrefLang="en" />
        <link rel="alternate" href="https://tutumsec.io/es/contacto/" hrefLang="x-default" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-tutumsec-gray-50 pt-20">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Contacto
              </h1>
              <p className="text-xl md:text-2xl text-primary-light max-w-3xl mx-auto animate-slide-up">
                Ponte en contacto con nosotros para discutir tus necesidades de ciberseguridad
              </p>
            </div>
          </div>
        </section>

        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <Card className="shadow-lg border-0 bg-card animate-fade-in">
              <CardHeader className="bg-gradient-to-r from-primary-light/10 to-primary/10 border-b border-primary/20">
                <CardTitle className="text-2xl text-primary">Envíanos un mensaje</CardTitle>
                <p className="text-muted-foreground">Te responderemos en menos de 24 horas</p>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-sm font-medium text-foreground">Nombre</Label>
                      <Input 
                        id="nombre" 
                        placeholder="Tu nombre" 
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellidos" className="text-sm font-medium text-foreground">Apellidos</Label>
                      <Input 
                        id="apellidos" 
                        placeholder="Tus apellidos"
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="tu@email.com"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="text-sm font-medium text-foreground">Empresa</Label>
                    <Input 
                      id="empresa" 
                      placeholder="Tu empresa"
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-sm font-medium text-foreground">Mensaje</Label>
                    <Textarea 
                      id="mensaje" 
                      placeholder="Cuéntanos sobre tu proyecto..."
                      rows={5}
                      className="border-primary/20 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de contacto */}
            <div className="space-y-8 animate-slide-up">
              <Card className="shadow-lg border-0 bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-primary-light/10 to-primary/10 border-b border-primary/20">
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    Barcelona
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="flex items-center gap-3 text-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      Carrer de Provença, 385, 08025 Barcelona
                    </p>
                    <p className="flex items-center gap-3 text-foreground">
                      <Phone className="w-5 h-5 text-primary" />
                      +34 933 123 456
                    </p>
                    <p className="flex items-center gap-3 text-foreground">
                      <Mail className="w-5 h-5 text-primary" />
                      barcelona@tutumsec.io
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-primary-light/10 to-primary/10 border-b border-primary/20">
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    Girona
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="flex items-center gap-3 text-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      Carrer de la Força, 15, 17004 Girona
                    </p>
                    <p className="flex items-center gap-3 text-foreground">
                      <Phone className="w-5 h-5 text-primary" />
                      +34 972 234 567
                    </p>
                    <p className="flex items-center gap-3 text-foreground">
                      <Mail className="w-5 h-5 text-primary" />
                      girona@tutumsec.io
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-primary-light/10 to-primary/10 border-b border-primary/20">
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    Andorra
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="flex items-center gap-3 text-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      Av. Carlemany, 77, AD700 Escaldes-Engordany
                    </p>
                    <p className="flex items-center gap-3 text-foreground">
                      <Phone className="w-5 h-5 text-primary" />
                      +376 890 123
                    </p>
                    <p className="flex items-center gap-3 text-foreground">
                      <Mail className="w-5 h-5 text-primary" />
                      andorra@tutumsec.io
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-light/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">
                ¿Necesitas una consulta urgente?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Reserva una consultoría gratuita de 15 minutos con nuestros expertos en ciberseguridad
              </p>
              <Button 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="/es/reserva-consultoria">
                  Reservar consultoría gratuita
                </a>
              </Button>
            </div>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;