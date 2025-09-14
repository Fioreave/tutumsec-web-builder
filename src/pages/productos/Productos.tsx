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
import { Button } from "@/components/ui/button";

const Productos = () => {
  const productos = [
    {
      title: "Detección 24x7",
      description: "Monitorización y detección de amenazas las 24 horas",
      path: "/es/productos/deteccion-24x7",
      icon: "🔍",
    },
    {
      title: "Incidente Respuesta Retainer",
      description: "Respuesta a incidentes en menos de 15 minutos",
      path: "/es/productos/incidente-respuesta-retainer",
      icon: "🚨",
    },
    {
      title: "Prevención y Recuperación Backup",
      description: "Upsell - Prevención y recuperación integral",
      path: "/es/productos/prevencion-recuperacion-backup",
      icon: "🛡️",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-tutumsec-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Nuestros Productos
              </h1>
              <p className="text-xl md:text-2xl text-primary-light max-w-3xl mx-auto animate-slide-up">
                Productos especializados de ciberseguridad para la protección
                continua de tu organización
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 border-0 bg-card group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center p-8">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {producto.icon}
                  </div>
                  <CardTitle className="text-xl mb-4 text-primary group-hover:text-primary-dark transition-colors duration-300">
                    <Link to={producto.path} className="block">
                      {producto.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {producto.description}
                  </CardDescription>
                  <div className="mt-6">
                    <Link
                      to={producto.path}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors duration-300"
                    >
                      Más información
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary-light/10 to-primary/10 rounded-2xl p-12 border border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-4">
                ¿Quieres implementar estos productos?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Nuestros expertos te ayudarán a elegir e implementar los
                productos más adecuados para tu infraestructura
              </p>
              <Button
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="/es/reserva-consultoria">Consultoría personalizada</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Productos;
