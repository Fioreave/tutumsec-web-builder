import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const SobreNosotros = () => {
  const secciones = [
    {
      title: "Historia",
      description: "Nuestra trayectoria y evolución",
      path: "/es/sobre-nosotros/historia",
      icon: "📖",
    },
    {
      title: "Equipo y Valores",
      description: "Conoce a nuestro equipo y valores corporativos",
      path: "/es/sobre-nosotros/equipo-valores",
      icon: "👥",
    },
    {
      title: "Certificaciones y Partners",
      description: "Nuestras certificaciones y alianzas estratégicas",
      path: "/es/sobre-nosotros/certificaciones-partners",
      icon: "🏅",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conoce más sobre TutorSec y nuestro compromiso con la
              ciberseguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secciones.map((seccion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{seccion.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    <Link
                      to={seccion.path}
                      className="hover:text-primary transition-colors"
                    >
                      {seccion.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{seccion.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SobreNosotros;
