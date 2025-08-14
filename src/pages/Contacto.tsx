import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contacto = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Contacto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ponte en contacto con nosotros para discutir tus necesidades de ciberseguridad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="apellidos">Apellidos</Label>
                      <Input id="apellidos" placeholder="Tus apellidos" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" placeholder="Tu empresa" />
                  </div>
                  <div>
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea 
                      id="mensaje" 
                      placeholder="Cuéntanos sobre tu proyecto..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de contacto */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Madrid</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>📍 Calle Ejemplo, 123</p>
                    <p>28001 Madrid, España</p>
                    <p>📞 +34 900 123 456</p>
                    <p>✉️ madrid@tutorsec.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Barcelona</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>📍 Carrer Exemple, 456</p>
                    <p>08001 Barcelona, España</p>
                    <p>📞 +34 900 123 457</p>
                    <p>✉️ barcelona@tutorsec.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;