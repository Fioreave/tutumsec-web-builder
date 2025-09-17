import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOMetaTags from "@/components/SEOMetaTags";
import { Card, CardContent } from "@/components/ui/card";

const Historia = () => {
  const servicios = [
    {
      nombre: "vCISO / Dirección de seguridad",
      path: "/es/servicios/consultoria-ciso",
    },
    {
      nombre: "Auditoría & Compliance (NIS2, ISO 27001, ENS, RGPD)",
      path: "/es/servicios/auditoria-compliance",
    },
    {
      nombre: "Transformación digital estratégica",
      path: "/es/servicios/transformacion-digital",
    },
    {
      nombre: "Oficina Técnica / OSI",
      path: "/es/servicios/oficina-seguridad",
    },
    { nombre: "MDR / SOC 24/7", path: "/es/productos/deteccion-24x7" },
    {
      nombre: "Formación & Concienciación",
      path: "/es/servicios/formacion-concienciacion",
    },
  ];

  return (
    <>
      <SEOMetaTags
        title="Historia de TutumSec | De la experiencia a la claridad"
        description="TutumSec nace como spin-off premium de BDR Group. Convertimos experiencia de más de 25 años en seguridad clara y útil: vCISO, auditorias, compliance, pentesting, SOC 24/7 y formación, con trato cercano."
        canonical="https://tutumsec.io/sobre-nosotros/historia/"
      />

      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="w-full pt-20">
          <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Historia de TutumSec
              </h1>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* De la experiencia a la especialización */}
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-primary">
                    De la experiencia a la especialización
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    TutumSec nace como spin-off premium de BDR Group, con un
                    objetivo sencillo: transformar casi tres décadas de trabajo
                    en TIC y software en servicios de ciberseguridad
                    especializados que se entienden a la primera y aportan
                    resultados.
                  </p>
                </CardContent>
              </Card>

              {/* Nacimos para hacerlo claro y útil */}
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-primary">
                    Nacimos para hacerlo claro y útil
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Vimos a muchas empresas pedir seguridad y cumplimiento sin
                    complicaciones, en un contexto de más ataques y más
                    exigencia normativa. Por eso decidimos construir una
                    propuesta sin jerga, centrada en acciones concretas y en lo
                    que de verdad importa: continuidad del negocio y
                    tranquilidad de la dirección.
                  </p>
                </CardContent>
              </Card>

              {/* Lo que heredamos vs Lo que aportamos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6 text-primary">
                      Lo que heredamos
                    </h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Experiencia y know-how acumulado.
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Infraestructura y procesos contrastados.
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Equipo senior de referencia cuando hace falta.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6 text-primary">
                      Lo que aportamos como marca propia
                    </h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Enfoque premium y claro, orientado a negocio.
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Equipo especializado en seguridad.
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Proximidad y acompañamiento: responsables asignados.
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Resultados medibles y entregables sencillos para
                        dirección.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Servicios que moldean nuestra historia */}
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-primary">
                    Servicios que moldean nuestra historia
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servicios.map((servicio, index) => (
                      <Link
                        key={index}
                        to={servicio.path}
                        className="block p-4 rounded-lg border border-primary/20 bg-background/50 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 group"
                      >
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          {servicio.nombre}
                        </span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dónde operamos */}
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-primary">
                    Dónde operamos
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Trabajamos desde Barcelona, Girona y Andorra, con alcance en
                    toda Cataluña y soporte remoto. Nos acercamos a tu equipo
                    con un trato cercano y ejecutivo.
                  </p>
                </CardContent>
              </Card>

              {/* Hoy */}
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-primary">
                    Hoy
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Seguimos creciendo con empresas que valoran la claridad, la
                    proximidad y los resultados medibles. Nuestra historia
                    continúa en cada proyecto que ayuda a un negocio a estar
                    mejor protegido sin frenar su actividad.
                  </p>
                </CardContent>
              </Card>

              {/* Cierre */}
              <div className="text-center py-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Seguridad clara, sin rodeos y con resultados medibles.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Historia;
