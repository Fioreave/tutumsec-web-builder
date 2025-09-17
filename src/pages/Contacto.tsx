import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone } from "lucide-react";

const locations = [
  {
    name: "Andorra",
    address1: "Passeig de l'Arnaldaeta de Caboet, 11, 2n 2a",
    address2: "AD700 Escaldes Engordany",
    phone: "+376 862 762",
    mapSrc:
      "https://www.google.com/maps?q=Passeig%20de%20l'Arnaldaeta%20de%20Caboet%2011%20Escaldes%20Engordany&output=embed",
  },
  {
    name: "Barcelona",
    address1: "Carrer de l'Aprestadora, 12, entlo 1",
    address2: "08902 L'Hospitalet de Llobregat — Barcelona",
    phone: "+34 93 296 48 02",
    mapSrc:
      "https://www.google.com/maps?q=Carrer%20de%20l'Aprestadora%2012%20L'Hospitalet%20de%20Llobregat&output=embed",
  },
  {
    name: "Girona",
    address1: "Carrer Pic de Peguera, 11",
    address2: "17003 — Girona",
    phone: "+34 972 462 999",
    mapSrc:
      "https://www.google.com/maps?q=Carrer%20Pic%20de%20Peguera%2011%20Girona&output=embed",
  },
];

const Contacto = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Contacto</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ponte en contacto con nosotros para discutir tus necesidades de
              ciberseguridad
            </p>
          </div>

          {/* Form centrado (máx 600px) */}
          <div className="mx-auto w-full max-w-[800px]">
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
                      rows={6}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <section>
            <div className="text-left mt-20 ">
              <h3 className="text-4xl font-bold text-primary">
                Nuestras sedes
              </h3>
            </div>
            {/* Ubicaciones en 3 columnas */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20 gap-6">
              {locations.map((loc) => (
                <Card key={loc.name} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-foreground">
                      {loc.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Mapa pequeño y en blanco y negro */}
                    <div className="overflow-hidden border ">
                      <iframe
                        src={loc.mapSrc}
                        title={`Mapa ${loc.name}`}
                        loading="lazy"
                        className="w-full h-[120px] filter grayscale contrast-110 brightness-95"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    {/* Dirección + Teléfono (sin email) */}
                    <div className="space-y-2 text-sm">
                      <p className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 mt-0.5" />
                        <span>
                          {loc.address1}
                          <br />
                          {loc.address2}
                        </span>
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <a
                          href={`tel:${loc.phone.replace(/\s|\+/g, "")}`}
                          className="hover:underline"
                        >
                          {loc.phone}
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contacto;
